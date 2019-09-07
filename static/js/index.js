import React from 'react'
import ReactDOM from 'react-dom'
import Welcome from './Welcome';

const element = <Welcome name="world" />;
ReactDOM.render(
  element,
  document.getElementById('react')
);