import { Component, OnInit } from '@angular/core';
import { Iplayers } from '../../models/players';
import { cricketers } from '../../conts/players';
import { Ifoot } from '../../models/foot';
import { players } from '../../conts/foot';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  cricketArr:Array<Iplayers>=cricketers;
  football:Array<Ifoot> =players;

  title='  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'
  constructor() { }

  ngOnInit(): void {
  }

  findPlay:string='for';

  searchedVal:string='Ind';
  course = {
    title:'Mean Stack',
    students:112133,
    rating:4.78,
    price:200,
    releaseDate:new Date(2024,10,9)

  }

}