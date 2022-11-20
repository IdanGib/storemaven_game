import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private _scores = {};
  setPlayerScore(name: string, score: number) {
    this._scores[name] = score;
  }
  get scores() {
    return Object.keys(this._scores).map((s) => ({
      name: s,
      score: this._scores[s],
    }));
  }
}
