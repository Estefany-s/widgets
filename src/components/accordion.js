import React, { useState, useRef, useEffect } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(false);
  const ref = useRef();

  const onTitleClick = (index) => {
    setActiveIndex(index)
  }

  useEffect(() => {
    const onBodyClick = (e) => {
      if (ref.current.contains(e.target)) {
        return;
      }
      setActiveIndex(false)
    }

    document.body.addEventListener('click', onBodyClick, { capture: true});

    return () => {
      document.body.removeEventListener('click', onBodyClick, {
        capture: true,
      })
    }
  }, []);
  
  return (
    <div ref={ref} className='ui styled accordion'>
      {
        items.map((item, index) => {
          const active = index === activeIndex ? 'active' : '';

          return (
            <React.Fragment key={item.title}>
              <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
                <i className='dropdown icon' />
                {item.title}
              </div>
              <div className={`content ${active}`}>
                <p>{item.content}</p>
              </div>
            </React.Fragment>
          )
        })
      }
    </div>
  )
};

export default Accordion;