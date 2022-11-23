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
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <RouterProvider router={router} />
      </Grid>
    </Box>
  </ChakraProvider>
)
