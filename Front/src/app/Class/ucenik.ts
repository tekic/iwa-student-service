import { Predmet } from "./predmet";

export class Ucenik {
  id: number;
  ime: string;
  prezime: string;
  broj_indeksa: string;
  prosecna_ocena: number;
  korisnicka_lozinka: string;
  uloga: string;
  usmerenje_id: number;
  predmet: Predmet[];
}
