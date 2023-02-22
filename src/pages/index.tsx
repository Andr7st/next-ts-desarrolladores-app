import React from 'react'
import { NextPage } from 'next'
import { Box, SxProps, Theme } from '@mui/material'

import PageLayout from '@/containers/PageLayout'
import HeroContent from '@/containers/HomePage/HeroContent'

// SEO Override:
const seoProps = {
  title: 'Desarrolladores',
  description: 'Desarrolladores app practice'
}

// Material UI Override:
const mainBox: SxProps<Theme> = {
  minHeight: '73vh',
  marginTop: 1,
  marginBottom: 8,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
 // background:'dimgray'
}

const HomePage: NextPage = () => {
  return (
    <PageLayout seoProps={seoProps}>
      <Box sx={mainBox}>
        <HeroContent />
      </Box>
    </PageLayout>
  )
}

export default HomePage

