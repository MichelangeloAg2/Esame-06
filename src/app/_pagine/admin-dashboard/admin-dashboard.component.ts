import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {

  constructor(private modalService: NgbModal) { }

  openFilm(content: TemplateRef<any>) {
    this.modalService.open(content, { size: 'lg', centered: true });
  }

  openSerie(content: TemplateRef<any>) {
    this.modalService.open(content, { size: 'lg', centered: true });
  }

  openUtenti(content: TemplateRef<any>) {
    this.modalService.open(content, { size: 'lg', centered: true });
  }

  openPagamenti(content: TemplateRef<any>) {
    this.modalService.open(content, { size: 'lg', centered: true });
  }
}

