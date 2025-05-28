import { Component, OnInit } from '@angular/core';
import { Ifairs } from '../../models/fairs';
import { FairsService } from '../../services/fairs.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fairs',
  templateUrl: './fairs.component.html',
  styleUrls: ['./fairs.component.scss']
})
export class FairsComponent implements OnInit {
  fairsArr!:Array<Ifairs>
  selected!:string
  constructor(
    private _fairService:FairsService,
    private _router:Router,
    private _route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.fairsArr =this._fairService.fetchAllFairs()
    this.selected=this.fairsArr[0].fairId
    this._router.navigate([this.fairsArr[0].fairId],{
      relativeTo:this._route
    })
  }

}
