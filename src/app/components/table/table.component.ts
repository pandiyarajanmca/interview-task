import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }

  resources: any[] = [
    {
      name: "Kumar",
      email: "kumar@email.com",
      status: "Available",
      cost: "$ 100",
    },
    {
      name: "RK",
      email: "rk@email.com",
      status: "Available",
      cost: "$ 80",
    },
    {
      name: "Lydy",
      email: "lydy@email.com",
      status: "Available",
      cost: "$ 90",
    },
    {
      name: "King",
      email: "king@email.com",
      status: "Available",
      cost: "$ 65",
    },
    {
      name: "Shawn",
      email: "shawn@email.com",
      status: "Available",
      cost: "$ 100",
    },
    {
      name: "Miller",
      email: "miller@email.com",
      status: "Available",
      cost: "$ 80",
    },
  ]
}
