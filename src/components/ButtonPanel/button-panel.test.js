import React from 'react';
import { create } from 'react-test-renderer'; 
import ButtonPanel, { keys } from './index';
import Button from '../Button';

describe('<ButtonPanel>', () => {
  it('renders', () => {
    const renderer = create(<ButtonPanel />);

    const root = renderer.root;
    expect(root).toBeDefined();
    expect(root.findAllByType(Button).length).toEqual(19);
  });
});