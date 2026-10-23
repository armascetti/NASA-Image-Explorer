import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Mars {
    private http = inject(HttpClient);


getMarsImages(){
    return this.http.get('/api/mars');
}

}
