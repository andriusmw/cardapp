import { Component, OnInit } from '@angular/core';
import {PhotoServiceService } from "../services/photo-service.service"


interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget
}
//Esto es para que no de error onPhoyoSelected y salga autocompletar
//import { File } from '../interfaces/File';


@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})


export class PhotoFormComponent implements OnInit {

  file: File;
  //Hubo que poner "strictPropertyInitialization": false

//Fuente: https://www.iteramos.com/pregunta/87544/la-propiedad--no-tiene-inicializador-y-no-se-asigna-definitivamente-en-el-constructor
//en el tsconfig.json para que no pidiera inicializar todas las variables y file:File no diera error.


photoSelected: string | ArrayBuffer | null;
  //Hubo que añadir la opción de tipo null al iicializar photoSelected para que fuera compatible con
  //con el tipo de datos nulo.

  constructor(private photoService: PhotoServiceService) {


    this.photoSelected = "";
   }


  ngOnInit(): void {
  }

  onPhotoSelected(event: any): void {
    if(event.target.files && event.target.files[0]) {
      //Hasta aquí es para reaccionar al evento del click
      //busca que el target tenga al menos un fichero
        this.file = event.target.files[0];
        //Image preview
       const reader = new FileReader() ;
       reader.onload = e => this.photoSelected = reader.result;
       reader.readAsDataURL(this.file);
    }
  }

  uploadPhoto(title: HTMLInputElement, description: HTMLTextAreaElement): boolean {
      //console.log(title.value)
     // console.log(description.value)

      //el boolean y el return false hacen que la página no se recargue, para poder leer el console log
    this.photoService.createPhoto(title.value, description.value, this.file)
      .subscribe(res => console.log(res), err => console.log(err))

    return false;
    }

}
