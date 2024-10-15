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
  inset = '',
) {
  const [x, y] = offset;
  const [blur, spread] = radius;

  return `${inset} ${pxToRem(x)} ${pxToRem(y)} ${pxToRem(blur)} ${pxToRem(
    spread,
  )} ${rgba(color, opacity)}`;
}

export function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substring(-2);
  }
  return color;
}

export function stringAvatar(name: string, size: number) {
  return {
    sx: {
      bgcolor: stringToColor(name),
      width: size,
      height: size,
    },
    children: `${name.split(' ')[0][0]}`,
  };
}

export const functions = {
  linearGradient,
  pxToRem,
  hexToRgb,
  rgba,
  boxShadow,
};

export type FunctionsType = typeof functions;
