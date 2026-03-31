import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from 'src/app/services/film.service';
import { SerietvService } from 'src/app/services/serietv.service';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.scss']
})
export class DettaglioComponent {
  faPlay = faPlay;

  constructor(
    private route: ActivatedRoute,
    private filmService: FilmService,
    private serieService: SerietvService
  ) { }

  contenuto: any = null;
  filmConsigliati: any[] = [];
  storageUrl = environment.storageUrl;

  // EPISODI
  episodi: any[] = [];
  stagioneSelezionata: number = 1;

  // PLAYER
  @ViewChild('videoPlayer') videoRef!: ElementRef<HTMLVideoElement>;

  isPlaying: boolean = false;
  currentTime: number = 0;
  duration: number = 0;
  showControls: boolean = true;
  hideTimeout: any;
  hoverTime: number = 0;
  showPreview: boolean = false;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const tipo = this.route.snapshot.queryParamMap.get('tipo');

    if (tipo === 'serie') {
      this.caricaSerie(id);
    } else {
      this.caricaFilm(id);
    }
  }

  // ================= FILM =================
  caricaFilm(id: any) {
    this.filmService.getFilm().subscribe(film => {

      const trovato = film.find(f => f.id == id);
      this.contenuto = trovato;

      this.caricaConsigliati(film);
    });
  }

  // ================= SERIE =================
  caricaSerie(id: any) {
    this.serieService.getSerie().subscribe(serie => {

      const trovato = serie.find(s => s.id == id);

      this.contenuto = trovato;


      this.episodi = trovato?.episodi || [];

      this.caricaConsigliati(serie);
    });
  }

  // ================= EPISODI =================
  get episodiFiltrati() {
    return this.episodi.filter(ep =>
      Number(ep.stagione) === Number(this.stagioneSelezionata)
    );
  }

  riproduciEpisodio(ep: any) {
    this.contenuto.video = ep.video;
    this.play();
  }

  // ================= CONSIGLIATI =================
  caricaConsigliati(lista: any[]) {

    if (!this.contenuto) return;

    const stessaCategoria = lista.filter(item =>
      item.categoria_id == this.contenuto.categoria_id &&
      item.id != this.contenuto.id
    );

    this.filmConsigliati = stessaCategoria
      .sort(() => 0.5 - Math.random())
      .slice(0, 7);
  }

  // ================= PLAYER =================
  play() {
    this.isPlaying = true;

    setTimeout(() => {
      this.videoRef?.nativeElement.play();
    });
  }

  closePlayer() {
    this.videoRef?.nativeElement.pause();
    this.isPlaying = false;
  }

  togglePlay() {
    const video = this.videoRef.nativeElement;
    video.paused ? video.play() : video.pause();
  }

  forward() {
    this.videoRef.nativeElement.currentTime += 10;
  }

  rewind() {
    this.videoRef.nativeElement.currentTime -= 10;
  }

  toggleFullscreen() {
    const player: any = document.querySelector('.player-container');

    if (!document.fullscreenElement) {
      player.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }

  setVolume(event: any) {
    this.videoRef.nativeElement.volume = event.target.value;
  }

  updateTime(event: any) {
    this.currentTime = event.target.currentTime;
  }

  setDuration(event: any) {
    this.duration = event.target.duration;
  }

  seek(event: any) {
    const rect = event.target.getBoundingClientRect();
    const percent = (event.clientX - rect.left) / rect.width;

    this.videoRef.nativeElement.currentTime = percent * this.duration;
  }

  onMouseMove() {
    this.showControls = true;
    clearTimeout(this.hideTimeout);

    this.hideTimeout = setTimeout(() => {
      this.showControls = false;
    }, 3000);
  }

  onHover(event: any) {
    const rect = event.target.getBoundingClientRect();
    const percent = (event.clientX - rect.left) / rect.width;

    this.hoverTime = percent * this.duration;
    this.showPreview = true;
  }

  leaveHover() {
    this.showPreview = false;
  }

  formatTime(seconds: number): string {
    if (!seconds) return '0:00';

    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);

    return `${min}:${sec < 10 ? '0' + sec : sec}`;
  }
}