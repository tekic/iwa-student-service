import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PredmetService {

  constructor(private http: HttpClient) { }

  AllPredmets()
  {
    return this.http.get('api/allPredmets').subscribe(data =>
      {console.log(data); localStorage.setItem('predmets', JSON.stringify(data));});
  }
  AllUsmerenje()
  {
    return this.http.get('api/allUsmerenje').subscribe(data =>
      {console.log(data); localStorage.setItem('usmerenje', JSON.stringify(data));});
  }
  izborUsmerenja(idUcenika: number, id: number)
  {
    return this.http.put('api/izborUsmerenja', {'id': idUcenika, 'usmerenje': id}).subscribe( data =>
      {
        Swal.fire({
        position: 'top-end',
        width: 600,
        type: 'success',
        title: 'Uspesno ste odabranli usmerenje',
        showConfirmButton: false,
        timer: 2500
      });
      localStorage.setItem('user', JSON.stringify(data));
      timer(2500).subscribe(t => location.href = '/');
    })
  }
  izabraniPredmetiOcene(id: number)
  {
    return this.http.post('api/OcenePredmet',{'id':id}).subscribe(data => {console.log(data); localStorage.setItem('izabraniPredmeti', JSON.stringify(data));});
  }
}
