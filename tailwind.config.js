import { fontFamily as _fontFamily } from 'tailwindcss/defaultTheme';

const primaryColor = {
  DEFAULT: '#fb723c',
  '50': '#fff4ed',
  '100': '#ffe6d5',
  '200': '#febe99',
  '300': '#fda374',
  '400': '#fb723c',
  '500': '#f94d16',
  '600': '#ea320c',
  '700': '#c2220c',
  '800': '#9a1d12',
  '900': '#7c1b12',
  '950': '#430a07',
};

const accentColor = {
  DEFAULT: '#ed7f8d',
  '50': '#fef2f3',
  '100': '#fce7e8',
  '200': '#f9d2d6',
  '300': '#f4adb5',
  '400': '#ed7f8d',
  '500': '#e15268',
  '600': '#cd3151',
  '700': '#bb2749',
  '800': '#90213e',
  '900': '#7c1f3b',
  '950': '#450c1b',
};

const punch = {
  DEFAULT: '#ff7268',
  '50': '#fff2f1',
  '100': '#ffe2e0',
  '200': '#ffcac6',
  '300': '#ffa69f',
  '400': '#ff7268',
  '500': '#fb4538',
  '600': '#e32416',
  '700': '#c41d11',
  '800': '#a21c12',
  '900': '#861e16',
  '950': '#490b06',
};

export const content = ["./src/**/*.{html,ts}"];
export const theme = {
  extend: {
    colors: {
      primary: primaryColor,
      accent: accentColor,
      warn: punch
    },
    fontFamily: {
      'sans': ['"Poppins"', ..._fontFamily.sans],
    },
  },
};
export const plugins = [];
