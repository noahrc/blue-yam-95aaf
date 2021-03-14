import React from 'react';

import { withPrefix, markdownify } from '../utils';

const YoutubeVideo = props => {
  const { url } = props;
  return (
    <iframe 
        width="560" 
        height="315" 
        src={url}
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen 
    />
  );
}

export default YoutubeVideo;
