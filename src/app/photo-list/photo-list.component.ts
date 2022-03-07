import { Component, OnInit } from '@angular/core';
import { PhotoServiceService } from '../services/photo-service.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  //photos = [];
  photos: any[] = []//Daba error por el tipo de dato

  constructor(private photoService: PhotoServiceService, private router: Router) { }

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
      this.router.navigate(["/photos", id])

  }


}
