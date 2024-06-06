import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Libro } from './libro';
import { DbService } from './db.service';
import { AjaxResponse } from 'rxjs/ajax';
import { Archivio } from './archivio';
import { RicercaComponent } from './ricerca/ricerca.component';
import { PrestitoComponent} from './ricerca/prestito/prestito.component'
import { InserimentoComponent} from './inserimento/inserimento.component'

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
  standalone: true,
  imports: [CommonModule, RicercaComponent, PrestitoComponent, InserimentoComponent],
  providers: [DbService]
})
export class RootComponent implements OnInit {
  visibile: string = 'home';
  cambiavista(vista: string){
    this.visibile = vista;
  }
  libri: Archivio;

  constructor(private db: DbService) {}

  ngOnInit() {
    this.db.getArchivio().subscribe({
      next: (x: AjaxResponse<any>) => {this.libri = new Archivio(JSON.parse(x.response),this.db)},
      error: (err) =>{
        console.error('Observer got an error: ' + JSON.stringify(err))
      },
      complete: () => {
        console.log(this.libri);
      },
  });
  }
}