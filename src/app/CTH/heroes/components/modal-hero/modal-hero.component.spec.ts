import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHeroComponent } from './modal-hero.component';

describe('ModalHeroComponent', () => {
  let component: ModalHeroComponent;
  let fixture: ComponentFixture<ModalHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalHeroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
