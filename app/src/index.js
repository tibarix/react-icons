import React, { Component } from 'react';
import SVGFooter from './components/footer'
import SVGHeader from './components/header'
import SVGMain from './components/main'

import './style.scss';

export default class App extends Component {
  render() {
    return (
      <div>
        <SVGHeader />
        <SVGMain />
        <SVGFooter />
      </div>
    );
  }
}
