import { Controller, Get, ParseIntPipe, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return `
      <html>
        <head><head>
        <body>
          <h1>Top Players</h1>
          <ol>
            ${this.appService.scores
              .sort((s1, s2) => s1.score - s2.score)
              .map((s) => `<li>${s.name} : ${s.score}</li>`)}
          </ol>
        </body>
      </html>
    `;
  }

  @Get('score')
  score(
    @Query('score', ParseIntPipe) score: number,
    @Query('name') name: string,
  ) {
    this.appService.setPlayerScore(name, score);
    return { name, score };
  }
}
