interface GetPriceWithCommaProps {
  price: number | string;
  currency?: Intl.LocalesArgument;
}

export function getPriceWithComma({
  price,
  currency = 'ko-KR',
}: GetPriceWithCommaProps): string {
  const intNum = typeof price === 'string' ? parseInt(price, 10) : price;
  console.log('Main Branch Test');
  console.log('Main Branch Test 2');
  console.log('Main Branch Test 3');

  if (Number.isNaN(intNum)) {
    return '';
  }

  return intNum.toLocaleString(currency);
}
