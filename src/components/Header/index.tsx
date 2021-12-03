import React, { MouseEvent, useState, SyntheticEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Box,
  Tab,
  Tabs,
  SwipeableDrawer,
  Button,
  Badge,
  Container,
} from '@mui/material';
import logoDefault from '@/assets/img/logo.png';
import { ILinkTab } from '@/types';
import { ICartState } from '@/store/modules/cart/types';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useSelector } from 'react-redux';
import Cart from '../Cart';

const LinkTab = (props: ILinkTab) => {
  const navigate = useNavigate();

  return (
    <Tab
      component="a"
      onClick={(event: MouseEvent<HTMLAnchorElement | MouseEvent>) => {
        event.preventDefault();
        navigate(props.href);
      }}
      {...props}
    />
  );
};

const Header: React.FC = () => {
  const [value, setValue] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleCart = (event: SyntheticEvent) => {
    setIsOpen(!isOpen);
  };

  const state = useSelector((state: ICartState) => state.cart);

  return (
    <nav className="nav-container">
      <Container>
        <Box
          component="div"
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <Link to="/">
            <img src={logoDefault} alt="Logo" className="logo" />
          </Link>
          <Tabs value={value} onChange={handleChange} style={{ maxHeight: 42 }}>
            <LinkTab label="Home" href="/" />
            <LinkTab label="Checkout" href="/checkout" />
            <LinkTab label="Jogos" href="/" />
            <LinkTab label="Meias" href="/" />
          </Tabs>
          <Cart />
        </Box>
      </Container>
    </nav>
  );
};

export default Header;
