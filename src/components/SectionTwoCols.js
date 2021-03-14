import React from 'react';

import CtaButtons from './CtaButtons';
import { markdownify, htmlToReact, withPrefix} from '../utils';
import YoutubeVideo from "./YoutubeVideo";

const SectionTwoCols = props => {
  const { section } = props;
  const sectionStyles = {
    ...(section?.bg_image && {
      backgroundImage: `url("${section?.bg_image}")`,
    })
  }
  return (
    <section id={section?.section_id} className={`block two-cols-block outer ${section?.style}`} style={sectionStyles}>
      <div className="block-header inner-small">
        {section?.title && (
          <h2 className="block-title">{section?.title}</h2>
        )}
        {section?.subtitle && (
          <p className="block-subtitle">
            {htmlToReact(section?.subtitle)}
          </p>
        )}
      </div>
      {section?.columns && (
        <div className="inner">
          <div className="grid">
            {section?.columns?.map((col, idx) => (
              <div key={`${section?.title} col ${idx}`} className="cell col">
                <div>
                  <div className="col-body">
                    {col.title && (
                      <h4 className="col-title">
                        {col.title_url && 
                          <a href={withPrefix(col.title_url)} >
                            {col.title}
                          </a>
                        }
                        {!col.title_url && col.title}
                      </h4>
                    )}
                    {col.image && 
                      <div className="cell block-preview">
                        <img src={withPrefix(col.image)} alt={col.image_alt} />
                      </div>
                    }
                    {col.youtube_video && 
                      <YoutubeVideo src={col.youtube_video.url} />
                    }
                    {markdownify(col.markdown)}
                    {col.actions && (
                      <div className="block-buttons">
                        <CtaButtons {...props} actions={col.actions} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default SectionTwoCols;
