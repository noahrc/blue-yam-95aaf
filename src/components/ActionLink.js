import React from 'react';
import {Link, withPrefix} from '../utils';

const ActionLink = props => {
  const action = props?.action;
    return (
      <Link href={withPrefix(action?.url)}
        {...(action?.new_window ? { target: '_blank' } : null)}
        {...((action?.new_window || action?.no_follow) 
          ? { rel: ( action?.new_window ? 'noopener ' : '') + (action?.no_follow ? 'nofollow' : '') } : null)
        }
      >{ action?.label }</Link>
    );
}

export default ActionLink;