import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModules } from './modules/users/users.module';
import { DatabaseModule } from './modules/database/database.module';

@Module({
  imports: [DatabaseModule, UsersModules],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
