import { render, screen } from '@testing-library/react';
import { Separated } from './Separated';

describe('kraksin', () => {
  test('test 1', () => {
    render(
      <Separated with={<div>------</div>}>
        <div>chicken</div>
        <div>pizza</div>
        <div>ramen</div>
        <div>brocolli</div>
        <div>coffee</div>
      </Separated>,
    );

    const chickenElement = screen.getByText('chicken');
    expect(chickenElement).toBeInTheDocument();
  });
});
