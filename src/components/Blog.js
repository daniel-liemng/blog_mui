import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Box,
  Avatar,
} from '@material-ui/core';
import AddToHomeScreenIcon from '@material-ui/icons/AddToHomeScreen';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  blogsContainer: {
    paddingTop: theme.spacing(3),
  },
  blogsTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
  card: {
    maxWidth: '100%',
  },
  media: {
    height: '200px',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0 10px',
  },
  author: {
    display: 'flex',
  },
  paginationContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

const Blog = () => {
  const classes = useStyles();
  return (
    <Container maxWidth='lg' className={classes.blogsContainer}>
      <Typography variant='h6' className={classes.blogsTitle}>
        Articles
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image='https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9'
                title='Contemplative Reptile'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  React Hook
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
              <Box className={classes.author}>
                <Avatar src='https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9' />
                <Box ml={2}>
                  <Typography variant='subtitle1' component='p'>
                    John Doe
                  </Typography>
                  <Typography
                    variant='subtitle2'
                    component='p'
                    color='textSecondary'
                  >
                    Jun 10, 2020
                  </Typography>
                </Box>
              </Box>
              <Box>
                <AddToHomeScreenIcon />
              </Box>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image='https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9'
                title='Contemplative Reptile'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  React Hook
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
              <Box className={classes.author}>
                <Avatar src='https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9' />
                <Box ml={2}>
                  <Typography variant='subtitle1' component='p'>
                    John Doe
                  </Typography>
                  <Typography
                    variant='subtitle2'
                    component='p'
                    color='textSecondary'
                  >
                    Jun 10, 2020
                  </Typography>
                </Box>
              </Box>
              <Box>
                <AddToHomeScreenIcon />
              </Box>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image='https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9'
                title='Contemplative Reptile'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  React Hook
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
              <Box className={classes.author}>
                <Avatar src='https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9' />
                <Box ml={2}>
                  <Typography variant='subtitle1' component='p'>
                    John Doe
                  </Typography>
                  <Typography
                    variant='subtitle2'
                    component='p'
                    color='textSecondary'
                  >
                    Jun 10, 2020
                  </Typography>
                </Box>
              </Box>
              <Box>
                <AddToHomeScreenIcon />
              </Box>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image='https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9'
                title='Contemplative Reptile'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  React Hook
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
              <Box className={classes.author}>
                <Avatar src='https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9' />
                <Box ml={2}>
                  <Typography variant='subtitle1' component='p'>
                    John Doe
                  </Typography>
                  <Typography
                    variant='subtitle2'
                    component='p'
                    color='textSecondary'
                  >
                    Jun 10, 2020
                  </Typography>
                </Box>
              </Box>
              <Box>
                <AddToHomeScreenIcon />
              </Box>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Box my={3} className={classes.paginationContainer}>
        <Pagination count={5} />
      </Box>
    </Container>
  );
};

export default Blog;
