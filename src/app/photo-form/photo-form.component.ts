import { Component, OnInit } from '@angular/core';
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

  constructor() {


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

}
