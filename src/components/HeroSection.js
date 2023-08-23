import { Grid, Typography ,Box} from '@mui/material'
import React from 'react'

const HeroSection = () => {
  return (
   <Grid container>
    <Grid item xs={12} sm={6}>
        <Typography variant='h3' color='inherit'>
            Akshat is well defined coder
        </Typography>
        <Typography variant='h5' color='inherit'>
           I knew MERN STACK and currently learning DSA.
        </Typography>
    </Grid>
    <Grid item xs={12} sm={6}>
        <Box component="img" src="https://clipart-library.com/images/rcLo9qXGi.jpg" sx={ {width:"500px"}}/>
    </Grid>
   </Grid>
  )
}

export default HeroSection