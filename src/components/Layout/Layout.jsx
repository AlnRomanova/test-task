import { GridItem } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import AppBarFooter from '../AppBarFooter';

const Layout = () => {
  return (
    <>
    <GridItem pl="2" bg="#022B32" area={'header'}>
      <AppBar/>
    </GridItem> 
    <AppBarFooter/>
      <Outlet /> 
     
    </>
  );
};

export default Layout;