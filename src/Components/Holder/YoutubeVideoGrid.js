import React from 'react';
import { Grid, Card, CardMedia } from '@mui/material';
import { Typography } from '@material-ui/core';

const YouTubeVideoGrid = ({ videoIds }) => {
  return (
    <Grid className='p-12' container spacing={4}>
      {videoIds.map((videoId, index) => (
        <Grid key={index} item xs={12} sm={6} md={4} lg={4}>
          <Card className=''>
            <CardMedia
            className=' '
              component="iframe"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube Video"
              allowFullScreen
            />

            <Typography variant="subtitle2" align="center">
              Video Label {index + 1}
            </Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default YouTubeVideoGrid;
