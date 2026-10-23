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
    console.log("Mars component initialized")
  }
}