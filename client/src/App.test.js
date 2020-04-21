import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import App from './App';
import Player from './components/SoccerPlayers'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div); 

});

test('renders from test', () => {
  const { getByText } = render(<App />);
  const element = getByText(/all the players/i);
  expect(element).toBeInTheDocument();
})
