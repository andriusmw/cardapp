import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Photo} from "../interfaces/Photo"

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

getPhotos(){
  return this.http.get<Photo[]>(this.URI);
}

//El método de abajo es para cuando le dan click coger datos de ESA FOTO SOLA
//como su id para añadirlo a una ruta de navegación y mostrar detalles
getPhoto(id: string){
  return this.http.get<Photo>(this.URI + "/" + id);
  //Cuando llaman al método coge el id, se lo pasa al backend
  //añadido o concatenado al URI ( el URI es la URL de arriba)
}

}
