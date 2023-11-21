import { ChakraProvider, Flex, Stack } from "@chakra-ui/react";
import { Generator } from "./pages/generator";
import stabilityLogo from "./assets/stability-black.svg";
import classes from "./app.module.scss";

export function App() {
  return (
    <Flex justifyContent={"center"}>
      <Stack maxW={"900px"}>
        <ChakraProvider>
          <Flex justifyContent={"center"} m="5">
            <img
              className={classes.logo}
              src={stabilityLogo}
              alt="Stability Logo"
            />
          </Flex>
          <Generator />
        </ChakraProvider>
      </Stack>
    </Flex>
  );
}
