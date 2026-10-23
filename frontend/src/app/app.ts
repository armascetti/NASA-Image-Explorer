import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private http = inject(HttpClient);

  tasks: { id: number; title: string }[] = [];

  ngOnInit() {
    this.http.get<{ id: number; title: string }[]>(
      'http://localhost:3000/api/tasks'
    ).subscribe(data => {
      this.tasks = data;
    });
  }
}