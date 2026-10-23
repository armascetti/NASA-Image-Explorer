import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mars } from './services/mars'

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
      this.marsImages = data as any[];
      console.log(this.marsImages)
    })
  }

  marsImages: any[] = [];
}