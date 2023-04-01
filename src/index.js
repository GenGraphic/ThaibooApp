import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import './styles.css';
import './font-family/Esteban/Esteban-Regular.ttf';
import './font-family/Clicker_Script/ClickerScript-Regular.ttf';

import { SpeisekarteProvider } from './SpeisekarteContext';

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SpeisekarteProvider>
        <App />
      </SpeisekarteProvider>
    </BrowserRouter>
  </React.StrictMode>
);
