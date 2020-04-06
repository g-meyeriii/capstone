import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/system/system.service';
import { RequestService } from '../../request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from '../../request.class';

@Component({
  selector: 'app-disapproved',
  templateUrl: './disapproved.component.html',
  styleUrls: ['./disapproved.component.css']
})
export class DisapprovedComponent implements OnInit {

  request: Request

  

  constructor(
    private systemsvc: SystemService,
    private requestsvc: RequestService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

}
