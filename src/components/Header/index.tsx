import React from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import logoDefault from '@/assets/img/logo.png';

const Header: React.FC = () => {
  return (
    <nav>
      <img src={logoDefault} alt="logo" />
    </nav>
  );
};

export default Header;
