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
    <div style={{ minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Container maxW="1560" centerContent  >
        <Box>
          <Suspense fallback={<Loader />}>
            <Outlet style={{ flex: '1 1 auto' }} />
          </Suspense> 
          {isLoading && <Loader/>} 
        </Box>
      </Container>
      <Footer />
     
    </div>
  );
};

export default Layout;
