// src/App.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './Navbar';
import './i18n';

const App = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar />
      <div style={styles.content}>
        <h1>{t('welcome')}</h1>
        <p>This is a React project showcasing a multi-language navbar.</p>
      </div>
    </div>
  );
};

const styles = {
  content: {
    textAlign: 'center',
    padding: '50px',
  }
};

export default App;
