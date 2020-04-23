import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../ToDoItem';
import { TODOS } from '../mock-To-Dos';
@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {

  TheToDos = TODOS;

  constructor() { }

  ngOnInit(): void {
  }

}
