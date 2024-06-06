import { Component, OnInit,Input, Output,} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Archivio } from '../archivio';
import { Libro } from '../libro';
import {PrestitoComponent} from "./prestito/prestito.component"
import {RimozioneComponent} from "./rimozione/rimozione.component"

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.css'],
  imports: [CommonModule, PrestitoComponent, RimozioneComponent],
  standalone: true
})
export class RicercaComponent implements OnInit {
  @Input() libri: Archivio;
  numero: number = 0;
  risultato: Array<Libro>
  ricerca(){
    var input: HTMLInputElement = document.getElementById("valore") as HTMLInputElement;
    var stringa = input.value;
    stringa!="" ? this.numero = this.libri.cerca(stringa).length : this.numero=0;
    if (this.numero == 1) this.risultato = this.libri.cerca(stringa); 
  }
  constructor() { }
  ngOnInit() {
  } 
}