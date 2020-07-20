import { Component, OnInit } from '@angular/core';
import {Hero} from '../../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero [] =[
    {id: 1,
    name: "Superman"},
    {id: 2, name: "Batman"},
    {id: 3, name: "Cat Woman"}
  ];
  selectedHero: Hero;

  constructor() { }

  ngOnInit(): void {
  }
  onSelect(hero:Hero): void {
    this.selectedHero = hero
  }

}
