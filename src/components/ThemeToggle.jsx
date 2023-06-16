import React from 'react';
import { useGlobalContext } from '../context/context';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
const ThemeToggle = () => {
  const { isDarkTheme, toggleTheme } = useGlobalContext();
  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleTheme}>
        {isDarkTheme ? (
          <BsFillSunFill style={{ color: 'white' }} />
        ) : (
          <BsFillMoonFill />
        )}
      </button>
    </section>
  );
};

export default ThemeToggle;