import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard-utenti',
  templateUrl: './dashboard-utenti.component.html',
  styleUrls: ['./dashboard-utenti.component.scss']
})
export class DashboardUtentiComponent {
  modalRef!: NgbModalRef;

  @ViewChild('utentiModalContent') utentiModalContent!: TemplateRef<any>;

  constructor(private modalService: NgbModal) { }

  open(content: TemplateRef<any>) {
    this.modalRef = this.modalService.open(content, { size: 'xl', centered: true });
  }

  close() {
    this.modalRef.close();
  }
}
