import React from 'react';
import ReactDOM from 'react-dom';
import Admin from './Admin';
import { AppContextProvider } from 'contexts/AppContext';

it(`Admin renders without crashing`, () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <AppContextProvider>
      <Admin />
    </AppContextProvider>,
    div
  )
});
