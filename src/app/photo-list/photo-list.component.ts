import { Component, OnInit } from '@angular/core';
import { PhotoServiceService } from '../services/photo-service.service';
@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  //photos = [];
  photos: any[] = []//Daba error por el tipo de dato

  constructor(private photoService: PhotoServiceService) { }

  ngOnInit(): void {
    this.photoService.getPhotos()
      .subscribe(
        res => {
        this.photos = res;
      },

        err => console.log(err)
      )
  }

  //Creando evento para cuando escuche el click llevar a vista detalle
  selectedCard(id: string) {
    console.log(id)
    //Cuando le hacen click llama a selectedcard pasaándole el id de la
    //tarjeta, sospecho que le pasa la propiedad _id del backend.
    //NO, le pasa _id que está en la interfaz, lo mismo que imagePath
    //anteriormente, está cogiendo esas propiedades de la interfaz.
  }


}
