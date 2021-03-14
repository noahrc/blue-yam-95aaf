import React from 'react';

import { withPrefix, markdownify } from '../utils';

const YoutubeVideo = props => {
  const { src } = props;
  return (
    <iframe 
        width="560" 
        height="315" 
        src={src}
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen 
    />
  );
}

export default YoutubeVideo;
