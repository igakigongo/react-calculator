import React from 'react';
import ReactDOM from 'react-dom';
import { create } from 'react-test-renderer';
import App from '../components/app';
import Display from '../components/display';
import ButtonPanel from '../components/button-panel';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('renders react calculator text', () => {
  const { getByText } = render(<App />);
  const ele = getByText(/calculator/i);
  expect(ele).toBeInTheDocument();
});

test('renders the display and button panel', () => {
  const renderer = create(<App />);
  const { root } = renderer;
  expect(root.findByType(Display)).toBeDefined();
  expect(root.findByType(ButtonPanel)).toBeDefined();
});
