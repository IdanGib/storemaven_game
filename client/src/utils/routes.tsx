import { RouteObject } from "react-router-dom";
import GamePage from "../pages/GamePage";
import WelcomPage from '../pages/WelcomPage'
export const routes: RouteObject[] = [
  {
    path: '/game/:id',
    element: <GamePage/>
  },
  {
    path: '*',
    element: <WelcomPage/>
  }
];