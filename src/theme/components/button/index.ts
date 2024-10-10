import { Components, Theme } from '@mui/material';

const buttonOverride: Components<Omit<Theme, 'components'>>['MuiButton'] = {
  variants: [
    {
      props: { color: 'primary', variant: 'soft' },
      style: ({ theme }) => ({
        color: theme.palette.primary.main,
        backgroundColor: theme.functions.rgba(theme.palette.primary.main, 0.08),
        '&:hover': {
          backgroundColor: theme.functions.rgba(theme.palette.primary.main, 0.16),
        },
      }),
    },
    {
      props: { color: 'secondary', variant: 'soft' },
      style: ({ theme }) => ({
        color: theme.palette.secondary.main,
        backgroundColor: theme.functions.rgba(theme.palette.secondary.main, 0.08),
        '&:hover': {
          backgroundColor: theme.functions.rgba(theme.palette.secondary.main, 0.16),
        },
      }),
    },
    {
      props: { color: 'success', variant: 'soft' },
      style: ({ theme }) => ({
        color: theme.palette.success.main,
        backgroundColor: theme.functions.rgba(theme.palette.success.main, 0.08),
        '&:hover': {
          backgroundColor: theme.functions.rgba(theme.palette.success.main, 0.16),
        },
      }),
    },
    {
      props: { color: 'warning', variant: 'soft' },
      style: ({ theme }) => ({
        color: theme.palette.warning.main,
        backgroundColor: theme.functions.rgba(theme.palette.warning.main, 0.08),
        '&:hover': {
          backgroundColor: theme.functions.rgba(theme.palette.warning.main, 0.16),
        },
      }),
    },
    {
      props: { color: 'error', variant: 'soft' },
      style: ({ theme }) => ({
        color: theme.palette.error.main,
        backgroundColor: theme.functions.rgba(theme.palette.error.main, 0.08),
        '&:hover': {
          backgroundColor: theme.functions.rgba(theme.palette.error.main, 0.16),
        },
      }),
    },
    {
      props: { color: 'info', variant: 'soft' },
      style: ({ theme }) => ({
        color: theme.palette.info.main,
        backgroundColor: theme.functions.rgba(theme.palette.info.main, 0.08),
        '&:hover': {
          backgroundColor: theme.functions.rgba(theme.palette.info.main, 0.16),
        },
      }),
    },
    {
      props: { color: 'inherit', variant: 'soft' },
      style: ({ theme }) => ({
        color: theme.palette.grey[800],
        backgroundColor: theme.functions.rgba(theme.palette.grey[800], 0.08),
        '&:hover': {
          backgroundColor: theme.functions.rgba(theme.palette.grey[800], 0.16),
        },
      }),
    },
  ],
  defaultProps: {
    color: 'inherit',
    variant: 'contained',
    size: 'medium',
  },
  styleOverrides: {
    root: {
      transition: 'all 250ms ease',
      '&:hover': {
        boxShadow: 'none',
      },
    },
    sizeLarge: ({ theme }) => ({
      height: 48,
      padding: theme.spacing(0, 2),
    }),
    sizeMedium: ({ theme }) => ({
      height: 36,
      padding: theme.spacing(0, 1.5),
    }),
    sizeSmall: ({ theme }) => ({
      height: 30,
      padding: theme.spacing(0, 1),
    }),
    containedInherit: ({ theme }) => ({
      color: theme.palette.common.white,
      backgroundColor: theme.palette.grey[800],
      boxShadow: theme.customShadows.z8,
      '&:hover': {
        backgroundColor: theme.palette.grey[700],
      },
    }),
    containedPrimary: ({ theme }) => ({
      boxShadow: theme.customShadows.primary,
    }),
    containedSecondary: ({ theme }) => ({
      boxShadow: theme.customShadows.secondary,
    }),
    containedSuccess: ({ theme }) => ({
      boxShadow: theme.customShadows.success,
    }),
    containedError: ({ theme }) => ({
      boxShadow: theme.customShadows.error,
    }),
    containedInfo: ({ theme }) => ({
      boxShadow: theme.customShadows.info,
    }),
    containedWarning: ({ theme }) => ({
      boxShadow: theme.customShadows.warning,
    }),
    outlinedInherit: ({ theme }) => ({
      border: `1px solid ${theme.functions.rgba(theme.palette.grey[800], 0.32)}`,
      '&:hover': {
        border: `1px solid ${theme.functions.rgba(theme.palette.grey[800], 1)}`,
      },
    }),
    textInherit: ({ theme }) => ({
      '&:hover': {
        backgroundColor: theme.palette.action.hover,
      },
    }),
  },
};
export default buttonOverride;
