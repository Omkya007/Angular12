import { Component, inject, OnInit } from '@angular/core';
import { Ifairs } from '../../models/fair';
import { FairService } from '../../services/fair.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-fairs',
  templateUrl: './fairs.component.html',
  styleUrls: ['./fairs.component.css']
})
export class FairsComponent implements OnInit {

  fairArr!:Array<Ifairs>;
  fairId!:string
  private _fairService=inject(FairService)
  private _router=inject(ActivatedRoute)
  private _route =inject(Router)
  constructor() { }

  ngOnInit(): void {

    this.fairArr =this._fairService.fetchAll()
  }

}
