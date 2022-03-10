import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Observable, of } from 'rxjs';

import { Hero } from '../models/hero';
import { HEROES } from '../models/mock-heroes';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class HeroService {

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    //const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
   //return heroes;
    return this.http.get<Hero[]>('https://6229de55be12fc4538aa6c8e.mockapi.io/Heroes');
  }

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    // const hero = HEROES.find(h => h.id === id)!;
    // this.messageService.add(`HeroService: fetched hero id=${id}`);
    // return of(hero);
    return this.http.get<Hero>('https://6229de55be12fc4538aa6c8e.mockapi.io/Heroes/' + id);
  }
}