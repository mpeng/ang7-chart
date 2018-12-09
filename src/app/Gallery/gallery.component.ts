import { Component } from '@angular/core';

@Component({
  templateUrl: './gallery.component.html'
})

export class GalleryComponent {
  title = "Google Charts Showcase";
  message = "Trying to showcase all available Google charts"

  checkContent(): void {
    console.log( "title=" + this.title + "; message=" + this.message );
  }
}
