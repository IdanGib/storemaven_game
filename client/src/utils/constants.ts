export enum SidesKeyboard {
  LEFT = 'a',
  RIGHT = 'l'
}
export enum BoardFailMessages {
  TOO_LATE = 'Too Late',
  WRONG_KEY = 'Wrong key',
  TO_SOON = 'Too soon'
}

export enum BoardSuccessMessages {
  CORRECT_SIDE = 'Good Job!'
}

export enum Shapes {
  TRIANGLE = 'triangle',
  SQUARE = 'square',
  CIRCEL = 'circle'
}
export enum TimerStates {
  START = 'start',
  END = 'end',
  IDLE = 'idle'
}
export const shapesList = Object.values(Shapes);
export const sidesKeyboard = Object.values(SidesKeyboard);