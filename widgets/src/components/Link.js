import React from 'react';

const Link = ({ className, href, children }) => {
  const onClick = (e) => {
    if (e.metaKey || e.ctrlKey) {
      // handles command-click to open new tab
      return;
    }

    e.preventDefault();
    window.history.pushState({}, '', href);

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
