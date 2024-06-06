import { Component, OnInit, Input} from '@angular/core';
import { Libro } from '../libro';
import { Archivio } from '../archivio';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inserimento',
  templateUrl: './inserimento.component.html',
  styleUrls: ['./inserimento.component.css'],
  imports: [CommonModule],
  standalone: true
})
export class InserimentoComponent implements OnInit {
  @Input() libri: Archivio;
  notifica: string;
  
  inserisci(){
    var autore: HTMLInputElement = document.getElementById("autore") as HTMLInputElement;
    var stringaautore = autore.value;
    var titolo: HTMLInputElement = document.getElementById("titolo") as HTMLInputElement;
    var stringatitolo = titolo.value;
    var posizione: HTMLInputElement = document.getElementById("posizione") as HTMLInputElement;
    var stringaposizione = posizione.value;
    if (stringaautore == "" || stringatitolo== "" || stringaposizione == ""){
      this.notifica = "Tutti i campi devono essere riempiti";
    }else if (this.libri.controlloposizione(stringaposizione).length>0){
      this.notifica = "La posizione è già occupata";
    }else {
      autore.value="";
      titolo.value="";
      posizione.value="";
      let nuovo : Libro = new Libro (stringatitolo, stringaautore , stringaposizione , "")
      this.libri.inseriscilibro(nuovo)
      this.notifica = "Libro Aggiunto!"
    }
  }



  constructor() { }

  ngOnInit() {
  }

}