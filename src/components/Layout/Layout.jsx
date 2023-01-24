import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Loader from "../Loader";
import { Container } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import Header from "../Header";
import Footer from "../Footer";
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../../components/redux/productsSelector';

const Layout = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      <Header />
      <Container maxW="1560" centerContent  >
        <Box>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense> 
          {isLoading && <Loader/>} 
        </Box>
      </Container>
      <Footer />
     
    </>
  );
};

export default Layout;
