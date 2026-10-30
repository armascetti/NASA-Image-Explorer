import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MarsImage } from '../models/mars-image';

@Injectable({
  providedIn: 'root'
})
export class Mars {
    private http = inject(HttpClient);


getMarsImages(){
    return this.http.get<MarsImage[]>('/api/mars');
}

}
