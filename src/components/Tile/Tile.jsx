import React from 'react';

function Tile(props) {
  const { type, toggleSideDrawer, handleHover, coordinates, theme } = props;

  return (
    <div
      onClick={() => toggleSideDrawer()}
      style={{
        border: theme === 'dark' ? '1px solid #F9ECB8' : '1px solid #5E47B3',
        width:
          type === 'small'
            ? '18px'
            : type === 'medium'
            ? '38px'
            : type === 'large'
            ? '58px'
            : type === 'mega'
            ? '98px'
            : type === 'ultra'
            ? '158px'
            : '18px',
        height:
          type === 'small'
            ? '18px'
            : type === 'medium'
            ? '38px'
            : type === 'large'
            ? '58px'
            : type === 'mega'
            ? '98px'
            : type === 'ultra'
            ? '158px'
            : '18px',
        position: 'absolute',
        top: coordinates.top,
        left: coordinates.left,
      }}
      onMouseEnter={handleHover}
    />
  );
}

export default Tile;
