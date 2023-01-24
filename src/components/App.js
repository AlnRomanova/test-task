import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import AppRoutes from "./Routes/AppRouter";
import { Provider } from "react-redux";
import store from "../components/redux/store";

export const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter basename="/test-task">
        <Provider store={store}>
          <AppRoutes />
        </Provider>
      </BrowserRouter>
    </ChakraProvider>
  );
};
