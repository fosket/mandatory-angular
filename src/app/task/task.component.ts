import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UtilService} from "../util.service";

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  @Input() task;
  @Output() statusChanged = new EventEmitter();



  constructor(private utilService: UtilService) {}

  changeStatus(updatedStatus) {
    //this.task.status = updatedStatus;

    this.statusChanged.emit({id: this.task.id, status: updatedStatus});
    //console.log(this.task)
  }
}
