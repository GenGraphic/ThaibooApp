import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import App from './App';

import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import './font-family/Esteban/Esteban-Regular.ttf';
import './font-family/Clicker_Script/ClickerScript-Regular.ttf';

import { SpeisekarteProvider } from './SpeisekarteContext';

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
root.render(
    <HashRouter basename='/'>
      <SpeisekarteProvider>
        <App />
      </SpeisekarteProvider>
    </HashRouter>
);
