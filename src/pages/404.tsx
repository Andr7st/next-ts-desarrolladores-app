import React from 'react'
import { NextPage } from 'next'
import PageLayout from '@/containers/PageLayout'
import { Box, SxProps, Theme, Typography } from '@mui/material'

// SEO Override:
const seoProps = {
  title: 'Page 404',
  description: 'Page Not Found'
}

// Material UI Override:
const mainBox: SxProps<Theme> = {
  minHeight: '73vh',
  marginTop: 8,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}

// 
const Custom404Page: NextPage = () => {
  return (
    <PageLayout seoProps={seoProps} >
      <Box sx={mainBox}>
        <Typography variant="h1" display="block" gutterBottom>
          404
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          Page not found.
        </Typography>
      </Box>
    </PageLayout>
  )
}

export default Custom404Page