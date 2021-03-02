import React from 'react';

import { htmlToReact, withPrefix} from '../utils';

const SectionIconLinks = props => {
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
        {section?.items && (
          <div className="inner">
            <div className="grid">
              {section?.items?.map((item, item_idx) => (
                <div key={`${section?.title} icon link ${item_idx}`} className="cell icon-link">
                  <div className="card">
                    <div className="icon-link-icon">
                      <i class={`fas fa-${item.icon_name || 'check'} fa-lg`} />
                    </div>
                    <div className="icon-link-body">
                      {item.title && (
                        <h3 className="icon-link-title">
                          <a href={withPrefix(item.url)} >
                            {item.title}
                          </a>
                        </h3>
                      )}
                      <p className="icon-link-text">{htmlToReact(item.description)}</p>
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

export default SectionIconLinks;
