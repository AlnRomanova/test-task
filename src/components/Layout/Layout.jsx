import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import AppBar from "../AppBar/AppBar";
import AppBarFooter from "../AppBarFooter";
import Loader from "../Loader";
import { Container } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

const Layout = () => {
  return (
    <>
      <AppBar />
      <Container maxW="1560px" centerContent>
        <Box maxW="1560px">
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Box>
      </Container>
      <AppBarFooter />
    </>
  );
};

export default Layout;
