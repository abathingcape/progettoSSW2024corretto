import { CommonModule } from '@angular/common';
import { Component, OnInit,Input } from '@angular/core';
import { Archivio } from '../../archivio';
import { Libro } from '../../libro';

@Component({
  selector: 'app-prestito',
  templateUrl: './prestito.component.html',
  styleUrls: ['./prestito.component.css'],
  imports: [CommonModule],
  standalone: true
})
export class PrestitoComponent implements OnInit {
  @Input() libri: Archivio;
  @Input() risultato: Array<Libro>;
  notifica: string = "";


  prestito(){
    var nominativo: HTMLInputElement = document.getElementById("nominativo") as HTMLInputElement;
    var stringa = nominativo.value;
    if (stringa == ""){
      this.notifica = "Inserire un nominativo";
    }else{
      this.libri.prestaLibro(stringa, this.risultato) 
      this.notifica = "Libro prestato!";
    }
  }
  ritiro(){
    this.libri.rendiLibro(this.risultato) 
    this.notifica = "Libro ritirato!";
  }

  constructor() { }

  ngOnInit() {
  }

}