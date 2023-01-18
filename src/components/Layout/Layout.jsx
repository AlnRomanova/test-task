import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Loader from "../Loader";
import { Container } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import Header from "../Header";
import Footer from "../Footer";

const Layout = () => {
  return (
    <>
      <Header/>
      <Container maxW="1560" centerContent>
        <Box>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
