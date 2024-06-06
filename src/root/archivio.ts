import { Libro } from './libro';
import { DbService } from './db.service';
export class Archivio {
  libri: Array<Libro> =[];
  constructor(libri: Array<Libro>, private db: DbService){
    this.libri=libri;
  }
  cerca (key: string) {
      return this.libri.filter(libro => ((libro.titolo+" "+libro.autore).toLowerCase()).includes(key.toLowerCase()));
    }
  controlloposizione(key: string){
      return this.libri.filter(libro => libro.posizione.toLowerCase().includes(key.toLowerCase()));
  }
  inseriscilibro(libro: Libro) {
    this.libri.push(libro);
    this.setAggiorna();
  }

  rimuoviLibro(puntato: Array<Libro>){
    this.libri = this.libri.filter(libro => !libro.titolo.toLowerCase().includes(puntato[0].titolo.toLowerCase()));
    this.setAggiorna();
  }
  prestaLibro(persona: string, puntato: Array<Libro>){
    this.libri.filter(libro =>{
      if (libro.titolo.toLowerCase() === puntato[0].titolo.toLowerCase()){libro.possessore=persona}});
      this.setAggiorna();
  }
  rendiLibro(puntato: Array<Libro>){
    this.libri.filter(libro =>{
      if (libro.titolo.toLowerCase() === puntato[0].titolo.toLowerCase()){libro.possessore=""}});
      this.setAggiorna();

  }

  setAggiorna(){
    this.db.setArchivio(JSON.stringify(this.libri)).subscribe({
      next: () => console.log('Archivio aggiornato!'),
      error: (err) =>{
        console.error('Observer got an error: ' + JSON.stringify(err))
      },
      complete: () => {
        console.log(this.libri);
      },
  });

  }
}