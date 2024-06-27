import { Controller, Get, Post, Render, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  @Get()
  @Render('index')
  root() {
    return { message: 'Hello worlddd!' };
  }

  @Post('clicked')
  clicked(@Res() res: Response) {
    return res.render('api/clicked', {
      first_name: 'John',
      last_name: 'Doe'
    })
  }
}
