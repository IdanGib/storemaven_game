import * as React from "react"
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./utils/routes";
const router = createBrowserRouter(routes);

export const App = () => (
  <ChakraProvider theme={theme}>
      <ColorModeSwitcher justifySelf="flex-end" />
      <RouterProvider router={router} />
  </ChakraProvider>
)
