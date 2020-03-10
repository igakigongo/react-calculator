import React from 'react';
import { create } from 'react-test-renderer'; 
import ButtonPanel, { keys } from '../components/button-panel';
import Button from '../components/button';

describe('<ButtonPanel>', () => {
  it('renders', () => {
    const renderer = create(<ButtonPanel clickHandler={() => {}} />);

    const root = renderer.root;
    expect(root).toBeDefined();
    expect(root.findAllByType(Button).length).toEqual(19);
  });
});