import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private _scores = {};
  setPlayerScore(name: string, score: number) {
    if (!this._scores[name]) {
      this._scores[name] = 0;
    }
    this._scores[name] += score;
    return { name, score: this._scores[name] };
  }
  get scores() {
    return Object.keys(this._scores).map((s) => ({
      name: s,
      score: this._scores[s],
    }));
  }
}
