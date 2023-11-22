import { isServer } from '@junhokims/utils';
import { useEffect, useLayoutEffect } from 'react';

export const useIsomorphicLayoutEffect = isServer()
  ? useEffect
  : useLayoutEffect;
