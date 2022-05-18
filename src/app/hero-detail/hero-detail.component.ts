import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input()hero?: Hero;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private menssageService : MessageService
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const name = String(this.route.snapshot.paramMap.get('name'));
    this.menssageService.add(`el heroe seleccionado ${name}`)
    this.heroService.getHero(name)
      .subscribe(hero => this.hero = hero);
  }

  goBack(){
    this.location.back()
  }
}
