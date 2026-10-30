import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mars } from './services/mars'
import { MarsImage } from './models/mars-image';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
    private marsService = inject(Mars);

  ngOnInit() {
    this.marsService.getMarsImages().subscribe(data => {
      this.marsImages = data;
     console.log(
  this.marsImages.map(image => ({
    title: image.data[0]?.title,
    imageUrl: image.links?.[0]?.href
  }))
);
    })
  }

  marsImages: MarsImage[] = [];
}