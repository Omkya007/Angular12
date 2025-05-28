import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ifairs } from 'src/app/shared/models/fair';
import { FairService } from 'src/app/shared/services/fair.service';

@Component({
  selector: 'app-fair-details',
  templateUrl: './fair-details.component.html',
  styleUrls: ['./fair-details.component.css']
})
export class FairDetailsComponent implements OnInit {

  fairId!:string
  fairObj!:Ifairs
  private _route=inject(ActivatedRoute)
  private _router=inject(Router)
  private _fairService =inject(FairService)
  constructor() { }

  ngOnInit(): void {

    this._route.params
            .subscribe((params:Params)=>{
              this.fairId=params['fairId']
              console.log(this.fairId);
              if(this.fairId){
                this._fairService.fetch(this.fairId)
                          .subscribe(data=>{
                            this.fairObj =data
                          })
              }
              
            })
  }

}
