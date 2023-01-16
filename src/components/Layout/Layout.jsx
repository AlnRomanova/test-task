import { GridItem } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import AppBarFooter from '../AppBarFooter';
import css from '../Layout/Layout.module.css';

const Layout = () => {
  return (
    <>
    <div className={css.container}>
    <GridItem pl="2" bg="#022B32" area={'header'}>
      <AppBar/>
    </GridItem> 
    <AppBarFooter/>
      <Outlet /> 
      </div>
    </>
  );
};

export default Layout;