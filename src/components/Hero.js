import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1564069114553-7215e1ff1890?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9)`,
    height: '500px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: '4rem',
    [theme.breakpoints.down('sm')]: {
      height: '200px',
      fontSize: '3em',
    },
  },
}));

const Hero = () => {
  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.hero}>React Blog</Box>
    </Box>
  );
};

export default Hero;
