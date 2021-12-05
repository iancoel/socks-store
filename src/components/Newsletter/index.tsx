import React, { FormEvent, useState } from 'react';

import { Box, TextField, Container, Button } from '@mui/material';

import { toast } from 'react-toastify';
import Lottie from 'react-lottie';
import * as animationData from '@/assets/animation/game.json';

import api from '@/services/api';

import { IUserData } from '@/types';

const Newsletter: React.FC = () => {
  const [userData, setUserData] = useState<IUserData>();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    api
      .post('newsletter', userData)
      .then((r) => {
        if (r.status === 201) {
          toast.success('E-mail cadastrado com sucesso! :D');
        }
      })
      .catch(() => toast.error('Ooops, algo deu errado :('))
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 2500);
      });
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="newsletter-content">
      <h2>Newsletter</h2>
      <Container>
        {isLoading ? (
          <>
            <Lottie options={defaultOptions} width={200} height={200} />
          </>
        ) : (
          <>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <TextField
                label="Informe seu nome"
                variant="outlined"
                color="info"
                style={{ margin: 8 }}
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
              />
              <TextField
                label="Informe seu email"
                variant="outlined"
                color="info"
                style={{ margin: 8 }}
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
              />
              <Button
                variant="contained"
                color="info"
                type="submit"
                style={{ margin: 8, height: 54 }}
              >
                Cadastrar
              </Button>
            </Box>
          </>
        )}
      </Container>
    </div>
  );
};

export default Newsletter;
