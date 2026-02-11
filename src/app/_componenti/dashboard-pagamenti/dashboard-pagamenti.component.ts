import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard-pagamenti',
  templateUrl: './dashboard-pagamenti.component.html',
  styleUrls: ['./dashboard-pagamenti.component.scss']
})
export class DashboardPagamentiComponent {
  modalRef!: NgbModalRef;

  @ViewChild('pagamentiModalContent') pagamentiModalContent!: TemplateRef<any>;

  constructor(private modalService: NgbModal) { }

  open(content: TemplateRef<any>) {
    this.modalRef = this.modalService.open(content, { size: 'xl', centered: true });
  }

  close() {
    this.modalRef.close();
  }
}
