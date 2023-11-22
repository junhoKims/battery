import { Children, Fragment, isValidElement } from 'react';

interface SeparatedProps extends React.PropsWithChildren {
  with: React.ReactNode;
}

export function Separated({ children, with: separator }: SeparatedProps) {
  const childrenArray = Children.toArray(children).filter(isValidElement);
  const childrenLength = childrenArray.length;

  return (
    <>
      {childrenArray.map((child, i) => (
        <Fragment key={i}>
          {child}
          {i + 1 !== childrenLength ? separator : null}
        </Fragment>
      ))}
    </>
  );
}
