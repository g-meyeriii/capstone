import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/system/system.service';

@Component({
  selector: 'app-reques-list-reviewed-only',
  templateUrl: './reques-list-reviewed-only.component.html',
  styleUrls: ['./reques-list-reviewed-only.component.css']
})
export class RequesListReviewedOnlyComponent implements OnInit {

  constructor(
    private systemsvc: SystemService
  ) { }

  ngOnInit(): void {
  }

}
