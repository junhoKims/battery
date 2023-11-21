import { isServer } from '@junhokims/utils';
import { useEffect, useLayoutEffect } from 'react';

export function useIsomorphicLayoutEffect() {
  return isServer() ? useEffect : useLayoutEffect;
}
