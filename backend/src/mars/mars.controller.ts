import { Controller, Get } from '@nestjs/common';
import { MarsService, MarsImage } from './mars.service';

@Controller('api/mars')
export class MarsController {

    constructor(
        private readonly marsService: MarsService
    ) {}

@Get()
getMarsImages(): Promise<MarsImage[]>{
 return this.marsService.getMarsImages();
}
}
