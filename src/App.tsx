import React from 'react';
import './App.css';
import { Provider } from 'react-redux'

import store from './store/store'

import { ImagesComponent } from './features/images/imagesComponent';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <ImagesComponent
            compWidth="500px"
            compHeight="600px"
            compBgColor="lightBlue"
          />
        </header>
      </div>
    </Provider>
  );
}

export default App;
