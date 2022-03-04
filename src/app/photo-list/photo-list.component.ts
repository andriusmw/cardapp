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

}
