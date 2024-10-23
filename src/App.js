import React from 'react';
import '../src/scss/global.scss';
import Clock from './components/clock/Clock';
import Phone from './components/phone/Phone';
import Template from './layout/template/Template';

function App() {
  return (
    <Template>
      <Clock />
      <Phone />
    </Template>
  );
}

export default App;
