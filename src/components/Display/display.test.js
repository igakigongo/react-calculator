import React from 'react';
import { create } from 'react-test-renderer'; 
import Display from './index';

describe('<Display>', () => {
  it('renders a result', () => {
    const result = '3600';
    const renderer = create(<Display result={result} />);
    const { children } = renderer.toJSON();
    expect(children).toContain(result);
  });

  it('renders zero by default', () => {
    const renderer = create(<Display />);
    const { children } = renderer.toJSON();
    expect(children).toContain('0');
  });
});
