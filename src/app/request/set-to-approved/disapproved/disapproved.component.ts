import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/system/system.service';

@Component({
  selector: 'app-disapproved',
  templateUrl: './disapproved.component.html',
  styleUrls: ['./disapproved.component.css']
})
export class DisapprovedComponent implements OnInit {

  constructor(
    private systemsvc: SystemService
  ) { }

  ngOnInit(): void {
  }

}
