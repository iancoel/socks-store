import React from 'react';

import Newsletter from '@/components/Newsletter';

import { Container } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <>
      <Newsletter />
      <footer>
        <Container>
          <p>Copyright 2021 - All rights reserved</p>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
