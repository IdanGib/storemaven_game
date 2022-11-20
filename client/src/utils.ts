export class Utils {
  static async wait(time: number) {
    return new Promise((r) => setTimeout(r, time));
  }
}