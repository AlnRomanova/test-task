import { GridItem } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import AppBarFooter from '../AppBarFooter';
import { Container, Box } from '@chakra-ui/react'

const Layout = () => {
  return (
    
    <Container maxW='1560px' centerContent>
  <Box maxW='1560px'>
    <GridItem pl="2" bg="#022B32" area={'header'}>
      <AppBar/> 
    </GridItem> 
      <Outlet /> <GridItem pl="2" bg="#022B32" area={'footer'}>
   <AppBarFooter/>
    </GridItem>
      </Box>
</Container>
    
  );
};

export default Layout;