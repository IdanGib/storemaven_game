export enum SidesKeyboard {
  LEFT = 'a',
  RIGHT = 'l'
}
export enum BoardFailMessages {
  TOO_LATE = 'Too Late',
  WRONG_KEY = 'Wrong key',
  TO_SOON = 'Too soon'
}

export enum SuccessMessages {
  CORRECT_SIDE = 'Good Job!'
}

export enum Shapes {
  TRIANGLE = 'triangle',
  SQUARE = 'square',
  CIRCEL = 'circle'
}

export const shapesList = Object.values(Shapes);