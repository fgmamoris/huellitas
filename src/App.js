import './App.css';

import 'react-multi-carousel/lib/styles.css';

import './index.css';

import { Fragment } from 'react';
import Header from './components/Header';
import Central from './components/Central';

function App() {
  return (
    <Fragment>
      <Header></Header>
      <Central></Central>
    </Fragment>
  );
}

export default App;
