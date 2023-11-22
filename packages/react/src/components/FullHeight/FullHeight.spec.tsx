import { render, screen } from '@testing-library/react';
import { FullHeight } from './FullHeight';

const CHILDREN_TEXT = 'FullHeight';

describe('"FullHeight" Component', () => {
  beforeEach(() => {
    setInnerHeight(768);
  });

  test('should have a default height of 768px(jsdom default value)', () => {
    render(<FullHeight style={{ color: 'red' }}>{CHILDREN_TEXT}</FullHeight>);

    const fullHeightBox = screen.getByText(CHILDREN_TEXT);

    expect(window.innerHeight).toBe(768);

    expect(fullHeightBox).toBeInTheDocument();
    expect(fullHeightBox).toHaveStyle('height: 768px');
  });

  test('should have a height of 1024px(setup value)', () => {
    setInnerHeight(1024);
    render(<FullHeight>{CHILDREN_TEXT}</FullHeight>);

    const fullHeightBox = screen.getByText(CHILDREN_TEXT);

    expect(window.innerHeight).toBe(1024);

    expect(fullHeightBox).toBeInTheDocument();
    expect(fullHeightBox).toHaveStyle('height: 1024px');
  });
});

const setInnerHeight = (height: number) => {
  Object.defineProperty(window, 'innerHeight', { value: height });
};
