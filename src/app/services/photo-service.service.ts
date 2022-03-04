import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PhotoServiceService {

  URI= "http://localhost:4000/api/photos"

  constructor(private http: HttpClient) { }

  createPhoto(title: string, description: string, photo: File){
     const fd = new FormData();
     fd.append("title", title);
     //A la constante fd, de tipo FormData le añade el campo
     //title con el valor title.
     fd.append("description", description);
     fd.append("image", photo);
     return this.http.post(this.URI, fd);
  }

  //Esto es para enviar los datos de la foto cargada al servidor
  //que luego se mostrará en la pestaña photos.
  //Hay que añadir el servidor y levantarlo
}
