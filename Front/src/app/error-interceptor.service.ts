import { Injectable,ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements ErrorHandler{

  constructor() { }

  handleError(error: any) {
    if (error instanceof HttpErrorResponse) {
      if (error.status === 401) {
            Swal.fire({
              position: 'top-end',
              width: 600,
              type: 'error',
              title: 'Username ili password nisu ispravni!',
              showConfirmButton: false,
              timer: 3500
            });
      }else if (error.status === 402) {
        Swal.fire({
          position: 'top-end',
          width: 600,
          type: 'error',
          title: 'Stara lozinka nije odgovarajuca!',
          showConfirmButton: false,
          timer: 3500
        });
      }else if (error.status === 406) {
        Swal.fire({
          position: 'top-end',
          width: 600,
          type: 'error',
          title: 'Korisnik sa datim JMBG-om vec postoji!',
          showConfirmButton: false,
          timer: 3500
        });
    }
  }
}
}
