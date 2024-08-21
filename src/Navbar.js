// src/Navbar.js
import React, { useState } from 'react';
import { FaGlobe } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { i18n } = useTranslation();

  const toggleSidebar = () => setShowSidebar(!showSidebar);
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setShowSidebar(false);
  };

  return (
    <div>
      <nav style={styles.navbar}>
        <button onClick={toggleSidebar} style={styles.button}>
          <FaGlobe />
        </button>
      </nav>
      {showSidebar && (
        <div style={styles.sidebar}>
          <button style={styles.lang_btn} onClick={() => changeLanguage('en')}>English</button>
          <button style={styles.lang_btn} onClick={() => changeLanguage('ur')}>Urdu</button>
          <button style={styles.lang_btn} onClick={() => changeLanguage('es')}>Spanish</button>
          <button style={styles.lang_btn} onClick={() => changeLanguage('fr')}>French</button>
        </div>
      )}
    </div>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '10px',
    backgroundColor: 'black',
    color: '#fff',
  },
  button: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#fff',
    fontSize: '24px',
    cursor: 'pointer',
  },
  sidebar: {
    position: 'absolute',
    top: '50px',
    right: '10px',
    backgroundColor: 'black',
    padding: '10px',
    borderRadius: '5px',
    boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
  },
  lang_btn:{
    backgroundColor:"#0275d8",
    color : "white",
    height: "5vh",
    borderRadius: "8px",
    fontSize: "17px",
    width: "75px",
    margin: "2px"

  }


};

export default Navbar;
