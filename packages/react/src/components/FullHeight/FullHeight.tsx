import { useState } from 'react';
import { useIsomorphicLayoutEffect } from '../../hooks/useIsomorphicLayoutEffect';

interface FullHeightProps extends React.ComponentPropsWithoutRef<'div'> {}

export function FullHeight({ children, style, ...rest }: FullHeightProps) {
  const [height, setHeight] = useState(0);

  useIsomorphicLayoutEffect(() => {
    setHeight(window.innerHeight);
  }, []);

  return (
    <div
      style={{ height: `${height}px`, overflow: 'hidden', ...style }}
      {...rest}
    >
      {children}
    </div>
  );
}
