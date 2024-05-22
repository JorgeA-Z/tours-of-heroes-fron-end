import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { ModalResponse } from '../../interfaces/modal-response';
import { HeroService } from '../../services/hero.service';
import { ModalHeroComponent } from '../modal-hero/modal-hero.component';
@Component({
  selector: 'app-hero-list',
  standalone: true,
  imports: [CommonModule, ModalHeroComponent],
  templateUrl: './hero-list.component.html',
  styleUrl: './hero-list.component.css'
})
export class HeroListComponent implements AfterViewInit {

  public heroes: Hero[] = [];

  public selectedHeroe!: Hero;

  @ViewChild('modalHero') modalComponent!: ModalHeroComponent;


  constructor(private heroService: HeroService)
  {

    this.getHeroes();

  }

  ngAfterViewInit() {


  }


  public getHeroes(): void
  {

    this.heroService.getHeros().subscribe((data)=>
    {
      this.heroes = data.data;
    })

  }

  public addHero(hero: Hero): void
  {
    this.heroService.postHero(hero).subscribe((data) => 
      {
    
        this.getHeroes();
    
      })
  
  }

  public editHero(hero: Hero): void
  {
    this.heroService.putHero(hero).subscribe((data) => 
    {
  
      this.getHeroes();
  
    })
  }

  public deleteHero(hero: Hero): void
  {
    this.heroService.deleteHero(hero).subscribe((data) => 
      {
    
        this.getHeroes();
    
      })
  }

  public editMode(hero: Hero): void
  {
    
    this.modalComponent.fillForm(hero);
    this.modalComponent.openModal();
    this.modalComponent.setType('edit');


  }

  public addMode(): void
  {
    
    this.modalComponent.clearForm();
    this.modalComponent.openModal();
    this.modalComponent.setType('add');

  }

  public viewMode(hero: Hero): void
  {
    this.modalComponent.fillForm(hero);
    this.modalComponent.openModal();
    this.modalComponent.setType('view');

  }

  public modalControl(response: ModalResponse): void
  {
    console.log(response)

    switch(response.type)
    {
      case('add'):
      break;
    
    case('edit'):
      this.editHero(response.hero)
     break;      

    case('view'):    
      break;
    }

  }

}
