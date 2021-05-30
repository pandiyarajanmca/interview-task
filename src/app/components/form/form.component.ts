import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  tasks: any[] = [
    {
      task: "Dashboard ",
      startdate: "29/08/2017",
      enddate: "29/08/2017",
      status: "Assigned"
    },
    {
      task: "Management Task ",
      startdate: "29/08/2017",
      enddate: "30/08/2017",
      status: "In Progress"
    },
    {
      task: "Resources Screen ",
      startdate: "28/08/2017",
      enddate: "29/08/2017",
      status: "In Progress"
    },
  ]
}
