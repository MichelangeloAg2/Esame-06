import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard-serietv',
  templateUrl: './dashboard-serietv.component.html',
  styleUrls: ['./dashboard-serietv.component.scss']
})
export class DashboardSerietvComponent {
  modalRef!: NgbModalRef;

  @ViewChild('serieModalContent') serieModalContent!: TemplateRef<any>;

  constructor(private modalService: NgbModal) { }

  open(content: TemplateRef<any>) {
    this.modalRef = this.modalService.open(content, { size: 'xl', centered: true });
  }

  close() {
    this.modalRef.close();
  }
}
