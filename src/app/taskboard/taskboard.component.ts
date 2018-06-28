import {Component, OnInit} from '@angular/core';
import {UtilService} from "../util.service";

@Component({
  selector: 'task-board',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.css']
})
export class TaskboardComponent implements OnInit {

  statusTypes;
  showForm = false;

  constructor(private utilService: UtilService) {}

  ngOnInit() {
    this.statusTypes = this.utilService.getStatusTypes();
  }

}
