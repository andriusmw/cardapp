import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoServiceService } from './services/photo-service.service';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotoPreviewComponent } from './photo-preview/photo-preview.component';

const routes: Routes = [
{path: "photos", component: PhotoListComponent},
{path: "photos/new", component: PhotoFormComponent},
{path: "photos/:id", component: PhotoPreviewComponent},
{path: "", redirectTo: "/photos", pathMatch: "full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
