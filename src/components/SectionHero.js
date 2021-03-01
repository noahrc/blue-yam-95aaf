import React from 'react';

import { withPrefix, markdownify } from '../utils';
import CtaButtons from './CtaButtons';

const SectionHero = props => {
  const { section } = props;
  return (
    <section id={section?.section_id} className="block hero-block bg-accent outer">
      <div className="inner">
        <div className="grid">
          {section?.image && (
            <div className="cell block-preview">
              <img src={withPrefix(section?.image)} alt={section?.image_alt} />
            </div>
          )}
          {section?.video && (
            <div className="cell block-preview">
              <video playsinline="" autoplay="" muted="" loop="" poster={withPrefix(section?.video_poster)} id="bgvideo" src={section.video} width="100%" height="y">
                <source src={section.video} type="video/mp4" />
              </video>
            </div>
          )}
          <div className="cell block-content">
            {section?.title && (
              <h2 className="block-title underline">{section.title}</h2>
            )}
            <div className="block-copy">
              {markdownify(section?.content)}
            </div>
            {section?.actions && (
              <div className="block-buttons">
                <CtaButtons {...props} actions={section?.actions} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionHero;
