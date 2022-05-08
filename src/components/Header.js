import React from 'react';

function Header({ isDarkMode, onDarkModeClick }) {
  // console.log(handleDarkModeClick)
  return (
    <header>
      <h2>Shopster</h2>
      <button onClick={onDarkModeClick}>
        {isDarkMode ? 'Dark' : 'Light'} Mode
      </button>
    </header>
  );
}

export default Header;
