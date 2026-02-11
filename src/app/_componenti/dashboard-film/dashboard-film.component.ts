import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard-film',
  templateUrl: './dashboard-film.component.html',
  styleUrls: ['./dashboard-film.component.scss']
})
export class DashboardFilmComponent {
  modalRef!: NgbModalRef;

  @ViewChild('filmModalContent') filmModalContent!: TemplateRef<any>;

  constructor(private modalService: NgbModal) { }

  open(content: TemplateRef<any>) {
    this.modalRef = this.modalService.open(content, { size: 'xl', centered: true });
  }

  close() {
    this.modalRef.close();
  }
}
