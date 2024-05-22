import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Hero } from '../../interfaces/hero';
import { ModalResponse } from '../../interfaces/modal-response';

@Component({
  selector: 'app-modal-hero',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './modal-hero.component.html',
  styleUrl: './modal-hero.component.css'
})
export class ModalHeroComponent {

  @Output() public operacion = new EventEmitter<ModalResponse>();

  public isModalOpen: boolean = false;

  public submitted: boolean = false;

  public type: 'add' | 'edit' | 'view' = 'edit';

  constructor(private formBuilder: FormBuilder)
  {

  }

  public moduleForm: FormGroup = this.formBuilder.group
  ({

    ID: [{ value: '', disabled: true }],
    name: ['', [Validators.required, Validators.minLength(3)]],
    att: ['', [Validators.required, Validators.pattern("^[0-9]*$"),]],
    def: ['', [Validators.required, Validators.pattern("^[0-9]*$"),]],
    speed: ['', [Validators.required, Validators.pattern("^[0-9]*$"),]],
    hp: ['', [Validators.required, Validators.pattern("^[0-9]*$"),]],
    status: [{value: false}, []],

  })

  
  public extractForm(): Hero {
    const hero: Hero = {
      id: this.moduleForm.get('ID')?.value,
      name: this.moduleForm.get('name')?.value,
      att: this.moduleForm.get('att')?.value,
      def: this.moduleForm.get('def')?.value,
      speed: this.moduleForm.get('speed')?.value,
      status: this.moduleForm.get('status')?.value,
      hp: this.moduleForm.get('hp')?.value,

    };

    return hero;
  }


  public sendOption(opcion: boolean): void
  {

    if(opcion)  
    {
      
      this.submitted = true;
      
      if (this.moduleForm.invalid) {
        return;
      }
      
      const newOption: ModalResponse = 
      {
  
        hero: this.extractForm(),
        type: this.type
      
      }
  
  
      this.operacion.emit(newOption);

      this.closeModal();
      this.submitted = false;


  
    }else
    {
      
      this.closeModal();
      this.submitted = false;

    }


  }

  public clearForm(): void
  {

    this.moduleForm.patchValue({
      ID: '',
      name: '',
      att: '',
      def: '',
      speed: '',
      hp: '',
      status: false
    });

  }

  public fillForm(hero: Hero): void
  {

    this.moduleForm.patchValue({
      ID: hero.id,
      name: hero.name,
      att: hero.att,
      def: hero.def,
      speed: hero.speed,
      hp: hero.hp,
      status: hero.status
    });

  }

  public openModal(): void
  {

    this.isModalOpen = true;

  }

  public closeModal(): void
  {

    this.isModalOpen = false;
    
  }

  public setType(action: string): void
  {

    switch(action)
    {
      case('add'):
        this.type = 'add';
      break;
      
      case('edit'):
        this.type = 'edit';
      break;      

      case('view'):    
        this.type = 'view';
      break;
    }

  }

}
