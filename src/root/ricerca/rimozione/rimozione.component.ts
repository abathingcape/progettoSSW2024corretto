
import { Component, OnInit,Input } from '@angular/core';
import { Archivio } from '../../archivio';
import { Libro } from '../../libro';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-rimozione',
  templateUrl: './rimozione.component.html',
  styleUrls: ['./rimozione.component.css'],
  imports: [CommonModule],
  standalone: true
})
export class RimozioneComponent implements OnInit {
  @Input() libri: Archivio;
  @Input() risultato: Array<Libro>;
  notifica: string;
  
  rimuovi(){
    this.libri.rimuoviLibro(this.risultato);
    this.notifica = "rimozione";
  }



  constructor() { }

  ngOnInit() {
  }

}