import { TypographyOptions } from '@mui/material/styles/createTypography';

import { pxToRem } from './functions';

export function responsiveFontSizes({ sm, md, lg }: { sm: number; md: number; lg: number }) {
  return {
    '@media (min-width:600px)': {
      fontSize: pxToRem(sm),
    },
    '@media (min-width:900px)': {
      fontSize: pxToRem(md),
    },
    '@media (min-width:1200px)': {
      fontSize: pxToRem(lg),
    },
  };
}

// ----------------------------------------------------------------------

// const FONT_PRIMARY = 'Public Sans, sans-serif'; // Google Font
// const FONT_SECONDARY = 'CircularStd, sans-serif'; // Local Font
const primaryFont = 'Public Sans, sans-serif';
// const secondaryFont = 'Barlow, sans-serif';

export const typography: TypographyOptions = {
  fontFamily: primaryFont,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 800,
    lineHeight: 80 / 64,
    fontSize: pxToRem(64),
    letterSpacing: 0,
    ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
  },
  h2: {
    fontWeight: 800,
    lineHeight: 64 / 48,
    fontSize: pxToRem(48),
    letterSpacing: 0,
    ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }),
  },
  h3: {
    fontWeight: 700,
    lineHeight: 48 / 32,
    fontSize: pxToRem(32),
    letterSpacing: 0,
    ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 }),
  },
  h4: {
    fontWeight: 700,
    lineHeight: 36 / 24,
    fontSize: pxToRem(24),
    letterSpacing: 0,
    ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }),
  },
  h5: {
    fontWeight: 700,
    lineHeight: 30 / 20,
    fontSize: pxToRem(20),
    letterSpacing: 0,
    ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 }),
  },
  h6: {
    fontWeight: 700,
    lineHeight: 28 / 18,
    fontSize: pxToRem(18),
    letterSpacing: 0,
    ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 }),
  },
  subtitle1: {
    fontWeight: 600,
    lineHeight: 24 / 16,
    fontSize: pxToRem(16),
    letterSpacing: 0,
  },
  subtitle2: {
    fontWeight: 600,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
    letterSpacing: 0,
  },
  body1: {
    fontWeight: 400,
    lineHeight: 24 / 16,
    fontSize: pxToRem(16),
    letterSpacing: 0,
  },
  body2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
    letterSpacing: 0,
  },
  caption: {
    fontWeight: 400,
    lineHeight: 18 / 12,
    fontSize: pxToRem(12),
    letterSpacing: 0,
  },
  overline: {
    fontWeight: 700,
    lineHeight: 18 / 12,
    fontSize: pxToRem(12),
    textTransform: 'uppercase',
  },
  button: {
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: 'capitalize',
  },
};
