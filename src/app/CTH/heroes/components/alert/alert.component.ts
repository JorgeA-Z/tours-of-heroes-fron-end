import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {

  public isModalOpen: boolean = false;

  @Output() public operacion = new EventEmitter();



  public openAlert(): void
  {
    this.isModalOpen = true;
  }
  public closeAlert(): void
  {
    this.isModalOpen = false;

    this.operacion.emit()
  }


}
