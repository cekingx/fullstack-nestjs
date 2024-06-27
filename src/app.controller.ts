import { Controller, Get, Post, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  @Get()
  @Render('index')
  root() {
    return { message: 'Hello worlddd!' };
  }

  @Post('clicked')
  clicked() {
    return `
      <ul>
        <li>Dirga</li>
        <li>Yasa</li>
      </ul>
    `;
  }
}
