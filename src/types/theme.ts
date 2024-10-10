import { CustomShadows, FunctionsType } from '@/theme/foundations';

declare module '@mui/material/styles' {
  interface PaletteColor {
    lighter: string;
    darker: string;
  }

  interface SimplePaletteColorOptions {
    lighter?: string;
    darker?: string;
  }

  interface Palette {
    secondary: PaletteColor;
  }

  interface Theme {
    functions: FunctionsType;
    shadowList: string[];
    customShadows: CustomShadows;
  }

  interface ThemeOptions {
    functions: FunctionsType;
    shadowList: string[];
    customShadows: CustomShadows;
  }

  interface CommonColors {
    transparent: string;
  }

  interface TypeBackground {
    neutral?: string;
  }
}

declare module '@mui/material' {
  interface ButtonPropsVariantOverrides {
    soft: true;
  }

  interface ChipPropsVariantOverrides {
    soft: true;
  }
}
