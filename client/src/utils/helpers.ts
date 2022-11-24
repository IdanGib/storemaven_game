import { 
  BoardFailMessages, 
  shapesList, 
  SidesKeyboard, 
  sidesKeyboard,
  TimerStates 
} from "./constants";

export function random(min: number, max: number) {
  const diff = Math.floor(Math.random() * (max - min));
  return min + diff;
}

export function getRandomSide() {
  return sidesKeyboard[random(0, sidesKeyboard.length)];
}

export function getRandomShape() {
  return shapesList[random(0, shapesList.length)];
}

export function getKeyboardMessages(key: SidesKeyboard) {
  if (!sidesKeyboard.includes(key)) {
    return BoardFailMessages.WRONG_KEY;
  }
}
export function getTimingMessages(timerState: TimerStates) {
  if (timerState === TimerStates.IDLE) {
    return BoardFailMessages.TO_SOON;
  }
  if (timerState === TimerStates.END) {
    return BoardFailMessages.TOO_LATE;
  }
}