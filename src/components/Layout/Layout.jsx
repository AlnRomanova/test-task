import { GridItem } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';



const Layout = () => {
  return (
    <>
    <GridItem pl="2" bg="pink.200" area={'header'}>
      <AppBar/>
    </GridItem>
      <Outlet />
    </>
  );
};

export default Layout;