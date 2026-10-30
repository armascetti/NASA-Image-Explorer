import { Injectable } from '@nestjs/common';

export interface MarsImageData {
    title: string;
    description?: string; 
}

export interface MarsImage {
    data: MarsImageData[];
}

interface NasaResponse {
    collection: {
        items: MarsImage[];
    };
}


@Injectable()
export class MarsService {
    async getMarsImages(){
       const response = await fetch(
        "https://images-api.nasa.gov/search?q=mars&media_type=image&page_size=5"
       );
       const data: NasaResponse = await response.json();
       console.log(data.collection.items[0])
       return data.collection.items;
    }
}
