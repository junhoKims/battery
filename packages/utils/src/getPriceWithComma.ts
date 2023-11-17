interface GetPriceWithCommaProps {
  price: number | string;
  currency?: Intl.LocalesArgument;
}

export function getPriceWithComma({
  price,
  currency = 'ko-KR',
}: GetPriceWithCommaProps): string {
  const intNum = typeof price === 'string' ? parseInt(price, 10) : price;

  if (Number.isNaN(intNum)) {
    return '';
  }

  return intNum.toLocaleString(currency);
}
