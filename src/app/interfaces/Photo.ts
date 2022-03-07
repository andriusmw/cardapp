export interface Photo {
  _id?: string | any; //Se añadió any para solucionar problemas de inivializar variables
  title: string;
  description: string;
  imagePath: string;
}
