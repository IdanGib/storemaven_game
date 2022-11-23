export class Utils {
  static random(min: number, max: number) {
    const diff = Math.floor(Math.random() * (max - min));
    return min + diff;
  }
}