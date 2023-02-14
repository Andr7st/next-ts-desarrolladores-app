import React from 'react'

import { NextPage } from 'next'

import Button from '@mui/material/Button';

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

import { Container, SxProps, Theme } from '@mui/material';

import { NextSeo } from 'next-seo';

const mainCss: SxProps<Theme> = {
  minHeight: '73vh',
}

const buttonCss: SxProps<Theme> = {
  display: 'block',
  color: 'inherit',
  textTransform: 'none',
  background: 'rgba(61, 61, 61, 0.8)',
  boxShadow: 'none',
  margin: '0 1px',
  my: 1, 
  '&:hover': {
    bgcolor: "#340877",
  },
};

const HomePage: NextPage = () => {
  return (
    <React.Fragment>
      <NextSeo
        title="Desarrolladores"
        description="Desarrolladores App."
      />
      <Navbar/>
      <Container component="main" sx={ mainCss }>
        <Button variant="contained" sx={ buttonCss }> { 'Hello World!' } </Button>
      </Container>
      <Footer/>
    </React.Fragment>
  )
}

export default HomePage
