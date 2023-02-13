import React from 'react'

import { NextPage } from 'next'

import Button from '@mui/material/Button';

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const HomePage: NextPage = () => {
  return (
    <React.Fragment>
      <Navbar/>
      <Button variant="contained">Hello World</Button>
      <Footer/>
    </React.Fragment>
  )
}

export default HomePage