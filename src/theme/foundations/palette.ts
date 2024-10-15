import { PaletteOptions } from '@mui/material';
import { COLORS } from './colors';
import { rgba } from './functions';

export const palette: PaletteOptions = {
  common: {
    black: COLORS.COMMON.BLACK,
    white: COLORS.COMMON.WHITE,
    transparent: COLORS.COMMON.TRANSPARENT,
  },
  text: {
    primary: COLORS.GREY[800],
    secondary: COLORS.GREY[600],
    disabled: COLORS.GREY[500],
  },
  background: {
    default: COLORS.COMMON.WHITE,
    paper: COLORS.COMMON.WHITE,
    neutral: COLORS.GREY[200],
  },
  primary: {
    lighter: COLORS.PRIMARY[100],
    light: COLORS.PRIMARY[300],
    main: COLORS.PRIMARY[500],
    dark: COLORS.PRIMARY[700],
    darker: COLORS.PRIMARY[900],
    contrastText: COLORS.COMMON.WHITE,
  },
  secondary: {
    lighter: COLORS.SECONDARY[100],
    light: COLORS.SECONDARY[300],
    main: COLORS.SECONDARY[500],
    dark: COLORS.SECONDARY[700],
    darker: COLORS.SECONDARY[900],
    contrastText: COLORS.COMMON.WHITE,
  },
  info: {
    lighter: COLORS.INFO[100],
    light: COLORS.INFO[300],
    main: COLORS.INFO[500],
    dark: COLORS.INFO[700],
    darker: COLORS.INFO[900],
    contrastText: COLORS.COMMON.WHITE,
  },
  success: {
    lighter: COLORS.SUCCESS[100],
    light: COLORS.SUCCESS[300],
    main: COLORS.SUCCESS[500],
    dark: COLORS.SUCCESS[700],
    darker: COLORS.SUCCESS[900],
    contrastText: COLORS.COMMON.WHITE,
  },
  warning: {
    lighter: COLORS.WARNING[100],
    light: COLORS.WARNING[300],
    main: COLORS.WARNING[500],
    dark: COLORS.WARNING[700],
    darker: COLORS.WARNING[900],
    contrastText: COLORS.COMMON.WHITE,
  },
  error: {
    lighter: COLORS.ERROR[100],
    light: COLORS.ERROR[300],
    main: COLORS.ERROR[500],
    dark: COLORS.ERROR[700],
    darker: COLORS.ERROR[900],
    contrastText: COLORS.COMMON.WHITE,
  },
  grey: COLORS.GREY,
  divider: rgba(COLORS.GREY[500], 0.2),
  action: {
    active: COLORS.GREY[600],
    hover: rgba(COLORS.GREY[500], 0.08),
    selected: rgba(COLORS.GREY[500], 0.16),
    disabled: rgba(COLORS.GREY[500], 0.8),
    disabledBackground: rgba(COLORS.GREY[500], 0.24),
    focus: rgba(COLORS.GREY[500], 0.24),
    hoverOpacity: 0.08,
    selectedOpacity: 0.08,
    disabledOpacity: 0.48,
    focusOpacity: 0.12,
    activatedOpacity: 0.12,
  },
};
