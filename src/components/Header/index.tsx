import React, { MouseEvent, useState, SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Tab, Tabs, SwipeableDrawer, Button } from '@mui/material';
import logoDefault from '@/assets/img/logo.png';
import { ILinkTab } from '@/types';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const LinkTab = (props: ILinkTab) => {
  const navigate = useNavigate();

  return (
    <Tab
      component="a"
      onClick={(event: MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        navigate(props.href);
      }}
      {...props}
    />
  );
};

const Header: React.FC = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <img src={logoDefault} alt="Logo" className="logo" />
      <Tabs value={value} onChange={handleChange}>
        <LinkTab label="Home" href="/" />
        <LinkTab label="Checkout" href="/" />
        <LinkTab label="Jogos" href="/" />
        <LinkTab label="Meias" href="/" />
      </Tabs>
      <Button>
        <ShoppingBagIcon />
      </Button>
    </Box>
  );
};

export default Header;
