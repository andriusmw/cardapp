import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router"
import { PhotoServiceService } from '../services/photo-service.service';
import {Photo} from "../interfaces/Photo"

@Component({
  selector: 'app-photo-preview',
  templateUrl: './photo-preview.component.html',
  styleUrls: ['./photo-preview.component.css']
})
export class PhotoPreviewComponent implements OnInit {
  id: string;
  photo: Photo;


  constructor(
     private router: Router,
     private activatedroute: ActivatedRoute,
     private photoservice: PhotoServiceService
     ) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(params => {
     this.id = params["id"];
     //Crea una variable llamada id y le pasa el valor de la "id"
     //que hay en la url
     this.photoservice.getPhoto(this.id)
      .subscribe(
        res => {
          this.photo = res;
        },
        err => console.log(err)
      )
    })

  }

//El método del preview llama al método del servicio pasando los datos
//del id, mostrando por consola y redireconando.
//En el otro lado, en el servicio, se usa la propiedad delete del http
//para atacar al servidor y borrar la imagen y sus datos.
  deletePhoto(id: string){
    this.photoservice.deletePhoto(id)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(["/photos"])
        },
          err => console.log(err)
      )

  }

}
