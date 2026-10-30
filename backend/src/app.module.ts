import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MarsModule } from './mars/mars.module';

@Module({
  imports: [MarsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
