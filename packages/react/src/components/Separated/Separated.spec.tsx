import { render, screen } from '@testing-library/react';
import { Separated } from './Separated';

describe('"Separated" Component', () => {
  test('Render 5 Children, Then Render 4 Separater', () => {
    render(
      <Separated with={<div>------</div>}>
        <div>chicken</div>
        <div>pizza</div>
        <div>ramen</div>
        <div>brocolli</div>
        <div>coffee</div>
      </Separated>,
    );

    const separators = screen.queryAllByText('------');
    expect(separators.length).toBe(4);
  });

  test('Render 1 Children, Then Render 0 Separater', () => {
    render(
      <Separated with={<div>------</div>}>
        <div>chicken</div>
      </Separated>,
    );

    const separators = screen.queryAllByText('------');
    expect(separators.length).toBe(0);
  });
});
