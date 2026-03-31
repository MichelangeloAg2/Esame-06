import { Component, OnInit } from '@angular/core';
import { Dashboard } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  searchFilm: string = '';
  searchSerie: string = '';

  // modifica inline
  filmInModifica: any = null;
  serieInModifica: any = null;


  // ================= SEZIONE =================
  sezioneAttiva: 'film' | 'serie' | 'utenti' | 'pagamenti' | 'home' | null = null;

  // ================= FILM =================
  filmList: any[] = [];
  azioneFilm: 'lista' | 'aggiungi' | 'modifica' | 'elimina' = 'lista';

  nuovoFilm: any = {
    titolo: '',
    categoria_id: '',
    genere: '',
    regista: '',
    descrizione: '',
    anno_uscita: '',
    durata: 0
  };

  filmSelezionato: any = null;

  // ================= PAGINAZIONE ====================
  paginaFilm: number = 1;
  perPaginaFilm: number = 10;

  paginaSerie: number = 1;
  perPaginaSerie: number = 10;

  // ================= SERIE =================
  serieList: any[] = [];
  searchEpisodio: string = '';
  azioneSerie: 'lista' | 'aggiungi' | 'modifica' | 'elimina' = 'lista';

  nuovaSerie: any = {
    titolo: '',
    categoria_id: '',
    genere: '',
    regista: '',
    descrizione: '',
    anno_inizio: '',
    anno_fine: '',
    stagioni: 1
  };

  episodiNuovi: any[] = [];


  serieSelezionata: any = null;

  // ================= EPISODI =================
  episodi: any[] = [];
  stagioneSelezionata: number = 1;

  nuovoEpisodio: any = {
    titolo: '',
    numero_episodio: 1,
    stagione: 1,
    descrizione: '',
    serie_id: null
  };



  //================== FILTRO =================

  categoriaFiltro: any = '';

  categoriaFiltroSerie: any = '';

  // ================= UTENTI =================
  utentiList: any[] = [];
  utenteSelezionato: any = null;
  searchUtente: string = '';
  ruoloFiltro: string = '';

  // ================= PAGAMENTI =================
  pagamentiList: any[] = [];

  // ================= ALTRO =================
  categorie: any[] = [];
  searchTerm: string = '';

  // =================FILE ====================
  imageFile: File | null = null;
  videoFile: File | null = null;
  trailerFile: File | null = null;

  imagePreview: string | null = null;
  videoPreview: string | null = null;

  // =============== HOMEPAGE =================
  tuttiContenuti: any[] = [];
  tipoFiltroHome: 'tutti' | 'film' | 'serie' = 'tutti';
  carouselHome: any[] = [];
  consigliatiHome: any[] = [];
  nuoveHome: any[] = [];
  categoriaFiltroHome: any = '';

  constructor(private adminService: Dashboard) { }

  ngOnInit(): void { }

  // ================= SEZIONE =================

  cambiaSezione(sezione: any) {
    this.sezioneAttiva = sezione;

    if (sezione === 'film') {
      this.caricaFilm();
      this.caricaCategorie();
    }

    if (sezione === 'serie') {
      this.caricaSerie();
      this.caricaCategorie();
    }

    if (sezione === 'utenti') {
      this.caricaUtenti();
    }

    if (sezione === 'pagamenti') {
      this.caricaPagamenti();
    }

    if (sezione === 'home') {
      this.caricaContenutiHome();
      this.loadHomepageConfig();
      this.caricaCategorie();
    }


  }

  // ================= CATEGORIE =================

  caricaCategorie() {
    this.adminService.getCategorie().subscribe(res => {
      console.log('CATEGORIE:', res);
      this.categorie = res.data;
    });

  }



  // ================= FILM =================

  caricaFilm() {
    this.adminService.getContenuti().subscribe(res => {
      this.filmList = res.film ?? [];
    });
  }

  setAzioneFilm(azione: any) {
    this.azioneFilm = null as any;
    setTimeout(() => this.azioneFilm = azione);
    this.filmSelezionato = null;
  }

  salvaFilm() {
    const formData = new FormData();

    Object.keys(this.nuovoFilm).forEach(key => {
      formData.append(key, this.nuovoFilm[key]);
    });

    // immagine
    if (this.imageFile) {
      formData.append('locandina', this.imageFile);
    }

    // video
    if (this.videoFile) {
      formData.append('video', this.videoFile);
    }

    this.adminService.creaFilm(formData).subscribe(() => {
      alert("Film creato");
      this.caricaFilm();
      this.setAzioneFilm('lista');
    });
  }

  selezionaFilm(film: any) {
    this.filmSelezionato = { ...film };
  }

  aggiornaFilm() {
    const formData = new FormData();

    Object.keys(this.filmSelezionato).forEach(key => {

      if (key === 'categoria') return;

      const value = this.filmSelezionato[key];

      if (value !== null && typeof value !== 'object') {
        formData.append(key, value);
      }
    });

    formData.append('_method', 'PUT');

    if (this.imageFile) {
      formData.append('locandina', this.imageFile);
    }

    if (this.videoFile) {
      formData.append('video', this.videoFile);
    }

    this.adminService.updateFilm(this.filmSelezionato.id, formData)
      .subscribe(() => {
        alert("Aggiornato");
        this.caricaFilm();
        this.azioneFilm = 'lista';
      });
  }

  apriModificaFilm(film: any) {
    this.filmSelezionato = { ...film };
    this.azioneFilm = 'modifica';
  }

  chiudiModificaFilm() {
    this.filmInModifica = null;
  }

  aggiornaFilmInline() {
    this.adminService.updateFilm(this.filmInModifica.id, this.filmInModifica)
      .subscribe(() => {

        const index = this.filmList.findIndex(f => f.id === this.filmInModifica.id);

        if (index !== -1) {
          this.filmList[index] = this.filmInModifica;
        }

        this.filmInModifica = null;
      });
  }

  eliminaFilm(id: number) {
    this.adminService.eliminaContenuto('film', id)
      .subscribe(() => {
        this.filmList = this.filmList.filter(f => f.id !== id);
      });
  }

  get filmFiltratiEliminazione() {
    return this.filmList.filter(f =>
      f.titolo.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  // ================= SERIE =================

  caricaSerie() {
    this.adminService.getContenuti().subscribe(res => {
      this.serieList = res.serie ?? [];
    });
  }

  setAzioneSerie(azione: any) {
    this.azioneSerie = null as any;
    setTimeout(() => this.azioneSerie = azione);
    this.serieSelezionata = null;
  }

  salvaSerie() {
    const formData = new FormData();

    Object.keys(this.nuovaSerie).forEach(key => {
      formData.append(key, this.nuovaSerie[key]);
    });

    this.adminService.creaSerie(formData).subscribe((res: any) => {

      const serieId = res.serie.id;

      // Salva episodi DOPO creazione serie
      this.episodiNuovi.forEach(ep => {
        ep.serie_id = serieId;
        this.adminService.creaEpisodio(ep).subscribe();
      });

      alert("Serie creata con episodi");

      this.episodiNuovi = [];
      this.caricaSerie();
      this.setAzioneSerie('lista');
    });
    console.log('SERIE:', this.nuovaSerie);
  }

  selezionaSerie(serie: any) {
    this.serieSelezionata = { ...serie };
    this.episodi = serie.episodi || [];
    this.stagioneSelezionata = 1;
  }


  aggiornaSerie() {
    const formData = new FormData();

    Object.keys(this.serieSelezionata).forEach(key => {

      if (key === 'categoria') return;

      const value = this.serieSelezionata[key];

      if (value !== null && typeof value !== 'object') {
        formData.append(key, value);
      }
    });

    formData.append('_method', 'PUT');

    if (this.imageFile) {
      formData.append('locandina', this.imageFile);
    }

    if (this.videoFile) {
      formData.append('video', this.videoFile);
    }

    this.adminService.updateSerie(this.serieSelezionata.id, formData)
      .subscribe(() => {
        alert("Serie aggiornata");
        this.caricaSerie();
        this.azioneSerie = 'lista';
      });
  }
  apriModificaSerie(serie: any) {
    this.serieSelezionata = { ...serie };
    this.episodi = serie.episodi || [];
    this.azioneSerie = 'modifica';
  }

  aggiornaSerieInline() {
    this.adminService.updateFilm(this.serieInModifica.id, this.serieInModifica)
      .subscribe(() => {

        const index = this.serieList.findIndex(s => s.id === this.serieInModifica.id);

        if (index !== -1) {
          this.serieList[index] = this.serieInModifica;
        }

        this.serieInModifica = null;
      });
  }

  eliminaSerie(id: number) {
    this.adminService.eliminaContenuto('serie', id)
      .subscribe(() => {
        this.serieList = this.serieList.filter(s => s.id !== id);
      });
  }

  // ================= EPISODI =================

  get episodiFiltrati() {
    return this.episodi.filter(ep =>
      Number(ep.stagione) === Number(this.stagioneSelezionata)
    );
  }

  aggiornaEpisodio(ep: any) {
    const formData = new FormData();

    Object.keys(ep).forEach(key => {
      if (typeof ep[key] !== 'object') {
        formData.append(key, ep[key]);
      }
    });

    formData.append('_method', 'PUT');

    if (this.videoFile) {
      formData.append('video', this.videoFile);
    }

    this.adminService.updateEpisodio(ep.id, formData)
      .subscribe(() => {
        alert("Episodio aggiornato");
      });
  }

  salvaEpisodio() {
    this.nuovoEpisodio.serie_id = this.serieSelezionata.id;

    this.adminService.creaEpisodio(this.nuovoEpisodio)
      .subscribe(() => {
        alert("Episodio creato");
        this.caricaSerie();
      });
  }

  eliminaEpisodio(id: number) {
    this.adminService.eliminaContenuto('episodio', id)
      .subscribe(() => {
        this.episodi = this.episodi.filter(e => e.id !== id);
      });
  }

  aggiungiEpisodioTemp() {
    this.episodiNuovi.push({
      titolo: '',
      numero_episodio: 1,
      stagione: 1,
      descrizione: ''
    });
  }

  rimuoviEpisodioTemp(index: number) {
    this.episodiNuovi.splice(index, 1);
  }





  // ================= UTENTI =================

  get utentiFiltrati() {
    return this.utentiList.filter(u => {

      const matchNome = this.searchUtente
        ? (u.nome + ' ' + u.email).toLowerCase().includes(this.searchUtente.toLowerCase())
        : true;

      const matchRuolo = this.ruoloFiltro
        ? u.ruolo === this.ruoloFiltro
        : true;

      return matchNome && matchRuolo;
    });
  }

  caricaUtenti() {
    this.adminService.getUtenti().subscribe(res => {
      this.utentiList = (res as any);
    });
  }

  selezionaUtente(u: any) {
    this.utenteSelezionato = { ...u };
  }

  annullaModificaUtente() {
    this.utenteSelezionato = null;
  }

  aggiornaUtente() {
    this.adminService.updateUtente(this.utenteSelezionato.idUtente, this.utenteSelezionato)
      .subscribe(() => {

        const index = this.utentiList.findIndex(u => u.idUtente === this.utenteSelezionato.idUtente);

        if (index !== -1) {
          this.utentiList[index] = this.utenteSelezionato;
        }

        this.utenteSelezionato = null;
      });
  }

  eliminaUtente(id: number) {
    this.adminService.deleteUtente(id)
      .subscribe(() => {
        this.utentiList = this.utentiList.filter(u => u.idUtente !== id);
      });
  }

  // ================= PAGAMENTI =================

  caricaPagamenti() {
    this.adminService.getPagamenti().subscribe(res => {
      this.pagamentiList = (res as any);
    });
  }

  eliminaPagamento(id: number) {
    this.adminService.deletePagamento(id)
      .subscribe(() => {
        this.pagamentiList = this.pagamentiList.filter(p => p.id !== id);
      });
  }


  // ================= FILE =================

  onImageChange(e: any) {
    this.imageFile = e.target.files[0];

    if (this.imageFile) {
      const reader = new FileReader();
      reader.onload = () => this.imagePreview = reader.result as string;
      reader.readAsDataURL(this.imageFile);
    }
    console.log('FILE:', this.imageFile);
  }

  onVideoChange(e: any) {
    this.videoFile = e.target.files[0];

    if (this.videoFile) {
      this.videoPreview = URL.createObjectURL(this.videoFile);
    }
  }

  onTrailerChange(e: any) {
    this.trailerFile = e.target.files[0];
  }

  //--------------- FILTRO ---------------------

  get filmPaginati() {

    const filtrati = this.filmList
      .filter(f => {

        const matchCategoria = this.categoriaFiltro
          ? f.categoria_id == this.categoriaFiltro
          : true;

        const matchNome = this.searchFilm
          ? f.titolo.toLowerCase().includes(this.searchFilm.toLowerCase())
          : true;

        return matchCategoria && matchNome;
      })
      .sort((a, b) => a.titolo.localeCompare(b.titolo));

    const start = (this.paginaFilm - 1) * this.perPaginaFilm;

    return filtrati.slice(start, start + this.perPaginaFilm);
  }

  get totalePagineFilm() {

    const filtrati = this.filmList.filter(f =>
      (!this.categoriaFiltro || f.categoria_id == this.categoriaFiltro) &&
      (!this.searchFilm || f.titolo.toLowerCase().includes(this.searchFilm.toLowerCase()))
    );

    return Math.ceil(filtrati.length / this.perPaginaFilm);
  }

  get pagineFilm(): number[] {
    return Array.from({ length: this.totalePagineFilm }, (_, i) => i + 1);
  }

  get seriePaginate() {

    const filtrate = this.serieList
      .filter(s => {

        const matchCategoria = this.categoriaFiltroSerie
          ? s.categoria_id == this.categoriaFiltroSerie
          : true;

        const matchNome = this.searchSerie
          ? s.titolo.toLowerCase().includes(this.searchSerie.toLowerCase())
          : true;

        return matchCategoria && matchNome;
      });

    const start = (this.paginaSerie - 1) * this.perPaginaSerie;

    return filtrate.slice(start, start + this.perPaginaSerie);
  }

  get totalePagineSerie() {
    const filtrate = this.serieList.filter(s =>
      (!this.categoriaFiltroSerie || s.categoria_id == this.categoriaFiltroSerie) &&
      (!this.searchSerie || s.titolo.toLowerCase().includes(this.searchSerie.toLowerCase()))
    );

    return Math.ceil(filtrate.length / this.perPaginaSerie);
  }

  get pagineSerie(): number[] {
    return Array.from({ length: this.totalePagineSerie }, (_, i) => i + 1);
  }


  // =============== HOMEPAGE =====================

  caricaContenutiHome() {
    this.adminService.getContenuti().subscribe((res: any) => {

      const film = (res.film ?? []).map((f: any) => ({
        ...f,
        tipo: 'film'
      }));

      const serie = (res.serie ?? []).map((s: any) => ({
        ...s,
        tipo: 'serie'
      }));

      this.tuttiContenuti = [...film, ...serie];

      console.log('CONTENUTI HOME:', this.tuttiContenuti);

    });
  }

  toggleHome(item: any, tipo: string) {

    let lista;

    if (tipo === 'carousel') lista = this.carouselHome;
    else if (tipo === 'consigliati') lista = this.consigliatiHome;
    else lista = this.nuoveHome;

    const index = lista.findIndex(i => i.id === item.id);

    if (index > -1) {
      lista.splice(index, 1);
    } else {
      lista.push(item);
    }
  }

  isSelected(item: any, tipo: string): boolean {

    let lista;

    if (tipo === 'carousel') lista = this.carouselHome;
    else if (tipo === 'consigliati') lista = this.consigliatiHome;
    else lista = this.nuoveHome;

    return lista.some(i => i.id === item.id);
  }

  salvaHomepage() {

    localStorage.setItem('carousel', JSON.stringify(this.carouselHome));
    localStorage.setItem('consigliati', JSON.stringify(this.consigliatiHome));
    localStorage.setItem('nuove', JSON.stringify(this.nuoveHome));

    alert('Homepage salvata!');
  }

  loadHomepageConfig() {

    const c = localStorage.getItem('carousel');
    const cons = localStorage.getItem('consigliati');
    const nuove = localStorage.getItem('nuove');

    this.carouselHome = c ? JSON.parse(c) : [];
    this.consigliatiHome = cons ? JSON.parse(cons) : [];
    this.nuoveHome = nuove ? JSON.parse(nuove) : [];
  }

  get contenutiFiltratiHome() {

    return this.tuttiContenuti.filter(c => {

      // FILTRO TIPO
      const matchTipo =
        this.tipoFiltroHome === 'tutti' ||
        c.tipo === this.tipoFiltroHome;

      // FILTRO CATEGORIA
      const matchCategoria =
        this.categoriaFiltroHome
          ? c.categoria_id == this.categoriaFiltroHome
          : true;

      return matchTipo && matchCategoria;

    });
  }
}
