import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TabRow, Tab, TabContent } from './globalStyles';

export default function Tabs({ headers, contents }) {
  const [active, setActive] = useState(0);
  const handleClick = (e) => {
    const index = parseInt(e.target.id, 10);
    if (index !== active) {
      setActive(index);
    }
  };
  return (
    <>
      <TabRow>
        {
          headers.map((header, idx) => (
            <Tab onClick={handleClick} active={active === idx} id={idx}>
              {header}
            </Tab>
          ))
        }
      </TabRow>
      <>
        {
          contents.map((content, idx) => (
            <TabContent active={active === idx} id={idx}>
              {content}
            </TabContent>
          ))
        }
      </>
    </>
  );
}
Tabs.propTypes = {
  headers: PropTypes.instanceOf(Array).isRequired,
  contents: PropTypes.instanceOf(Array).isRequired,
};
