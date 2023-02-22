import React, { FC, ReactNode } from 'react'
import { NextSeo } from 'next-seo';
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Container, SxProps, Theme } from '@mui/material';

// Typescript props:
type Props = {
  seoProps?: Readonly<{title:string, description:string}>
  children?: ReactNode;
}

// Material UI Override:
const mainCss: SxProps<Theme> = {
  minHeight: '73vh',
}

// Layout:
const PageLayout : FC<Props> = ( { seoProps, children} ) => (
  <React.Fragment>
    <NextSeo
      title={seoProps?.title || 'title' } 
      description={seoProps?.description || 'description' }
      />
    <Navbar/>
    <Container component="main" maxWidth="xl"  sx={ mainCss }>      
      {children}
    </Container>
    <Footer/>
  </React.Fragment>
)

export default PageLayout
