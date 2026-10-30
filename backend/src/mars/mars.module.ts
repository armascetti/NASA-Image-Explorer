import { Module } from '@nestjs/common';
import { MarsController } from './mars.controller';
import { MarsService } from './mars.service';

@Module({
  controllers: [MarsController],
  providers: [MarsService]
})
export class MarsModule {}
