import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {TaskService} from "../task.service";

@Component({
  selector: 'task-list',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit, OnDestroy {

  @Input() statusType;
  tasks;
  subscription: Subscription;

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.subscription = this.taskService.getTasks(this.statusType)
      .subscribe(tasks => {
        this.tasks = tasks;
      })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  handleStatusChanged(event) {
    this.taskService.updateTask(event.id, event.status);
    console.log(event.id, event.status)
  }
}
