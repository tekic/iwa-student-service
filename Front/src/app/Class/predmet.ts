import { Pivot } from "./pivot";

export class Predmet {
  id: number;
  oznaka: string;
  naziv: string;
  broj_mesta: number;
  espb: number;
  usmerenje_id: number;
  usmerenje_naziv = '';
  ocene: number;
  pivot: Pivot;
}
