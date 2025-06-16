import { hundreds, teens, tens, units } from './units.js';

function convertThreeDigit(num: number): string {
  if (num === 0) return '';
  const h = Math.floor(num / 100);
  const t = Math.floor((num % 100) / 10);
  const u = num % 10;

  const parts: string[] = [];

  if (h > 0) parts.push(hundreds[h]);
  if (t === 1) {
    parts.push(teens[u]);
  } else {
    if (t > 1) parts.push(tens[t]);
    if (u > 0) parts.push(units[u]);
  }

  return parts.join(' و ');
}

export function convertToPersianWords(input: number): string {
  if (input === 0) return units[0];
  if (input < 0) return `منفی ${convertToPersianWords(-input)}`;

  const parts: string[] = [];

  const billion = Math.floor(input / 1_000_000_000);
  const million = Math.floor((input % 1_000_000_000) / 1_000_000);
  const thousand = Math.floor((input % 1_000_000) / 1000);
  const rest = input % 1000;

  if (billion) parts.push(`${convertThreeDigit(billion)} میلیارد`);
  if (million) parts.push(`${convertThreeDigit(million)} میلیون`);
  if (thousand) parts.push(`${convertThreeDigit(thousand)} هزار`);
  if (rest) parts.push(convertThreeDigit(rest));

  return parts.join(' و ');
}
