import chroma from 'chroma-js';

export function linearGradient(color: string, colorState: string, angle = 310) {
  return `linear-gradient(${angle}deg, ${color}, ${colorState})`;
}

export function hexToRgb(color: string) {
  return chroma(color).rgb().join(', ');
}

export function rgba(color: string, opacity: number) {
  return `rgba(${hexToRgb(color)}, ${opacity})`;
}

export function pxToRem(number: number, baseNumber = 16) {
  return `${number / baseNumber}rem`;
}

export function boxShadow(
  offset: number[] = [],
  radius: number[] = [],
  color: string,
  opacity: number,
  inset = ''
) {
  const [x, y] = offset;
  const [blur, spread] = radius;

  return `${inset} ${pxToRem(x)} ${pxToRem(y)} ${pxToRem(blur)} ${pxToRem(
    spread
  )} ${rgba(color, opacity)}`;
}

export const functions = {
  linearGradient,
  pxToRem,
  hexToRgb,
  rgba,
  boxShadow,
};

export type FunctionsType = typeof functions;
