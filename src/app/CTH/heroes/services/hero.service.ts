import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../interfaces/hero';
import { HeroResponse } from '../interfaces/hero-response';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

constructor(private httpClient: HttpClient) { }


public getHeros(): Observable<HeroResponse>
{
  const url = '/v1/heroes';
  
  return this.httpClient.get<HeroResponse>(url);

}

public postHero(hero: Hero): Observable<HeroResponse>
{

  const url = '/v1/heroes';

  return this.httpClient.post<HeroResponse>(url, hero);
  
}

public deleteHero(hero: Hero): Observable<HeroResponse>
{
  const url = `/v1/heroes/${hero.id}`;

  return this.httpClient.delete<HeroResponse>(url);
  
}

public putHero(hero: Hero): Observable<HeroResponse>
{

  const url = `/v1/heroes/${hero.id}`;

  return this.httpClient.put<HeroResponse>(url, hero);
  
}

public get(hero: Hero): Observable<HeroResponse>
{

  const url = `/v1/heroes/${hero.id}`;

  return this.httpClient.get<HeroResponse>(url);
  
}

}
