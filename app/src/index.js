import React, { Component } from 'react';

import AppSVGHeader from './components/AppSVGHeader';
import GameSVGApp from './components/GameSVGApp';
import FooterSVGHeader from './components/FooterSVGHeader';

export default class App extends Component {

  render() {
    return (
      <div className="container">
        <AppSVGHeader />
        <GameSVGApp />
        <FooterSVGHeader />
      </div>
    );
  }


}
