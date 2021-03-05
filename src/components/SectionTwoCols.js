import React from 'react';

import { markdownify, htmlToReact, withPrefix} from '../utils';

const SectionTwoCols = props => {
  const { section } = props;
  return (
    <section id={section?.section_id} className="block icon-links-block outer">
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
                      </h4>
                    )}
                    {markdownify(col.markdown)}
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
