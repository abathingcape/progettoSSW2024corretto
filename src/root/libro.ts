export class Libro {
  titolo: string;
  autore: string;
  posizione: string;
  possessore: string;
  constructor(titolo: string, autore: string, posizione: string, possessore: string) {
    this.titolo = titolo;
    this.autore = autore;
    this.posizione = posizione;
    this.possessore = possessore;
  }
}