import React from 'react';
import { create } from 'react-test-renderer';
import Button from '../components/button';

describe('<Button>', () => {
  it('renders a name from props', () => {
    const name = 'x';
    const renderer = create(<Button name={name} />);
    const { children } = renderer.toJSON();
    expect(children).toContain(name);
  });
});
