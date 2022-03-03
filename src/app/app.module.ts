import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotoPreviewComponent } from './photo-preview/photo-preview.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    PhotoFormComponent,
    PhotoPreviewComponent,
    PhotoListComponent,
    NavigationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
