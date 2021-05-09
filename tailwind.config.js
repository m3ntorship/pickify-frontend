module.exports = {
  purge: ['./pages/**/*.{js,jsx,ts,tsx}', './modules/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  theme: {
    colors: {
      primary: {
        dark: '#5034A6',
        DEFAULT: '#7048E8',
        shd1: '#8360EB',
        shd2: '#9577EE',
        shd3: '#A68EF1',
        shd4: '#B8A4F4',
        shd5: '#CABBF7',
        shd6: '#DCD2F9',
        shd7: '#EDE8FC',
        hover: '#5F3DC4',
      },
      accent: {
        DEFAULT: '#00A8E8',
        shd1: '#0AB9FF',
        shd2: '#2DC3FF',
        shd3: '#50CDFF',
        shd4: '#73D7FF',
        shd5: '#96E1FF',
        shd6: '#B9EBFF',
        shd7: '#DCF5FF',
        hover: '#0092C9',
      },
      warning: {
        DEFAULT: '#FF933B',
        shd1: '#FFA255',
        shd2: '#FFAF6E',
        shd3: '#FFBC86',
        shd4: '#FFCA9E',
        shd5: '#FFD7B6',
        shd6: '#FFE4CF',
        shd7: '#FFF2E7',
      },
      success: {
        DEFAULT: '#07B255',
        shd1: '#09D766',
        shd2: '#14F579',
        shd3: '#3BF790',
        shd4: '#62F8A6',
        shd5: '#89FABC',
        shd6: '#B1FCD2',
        shd7: '#D8FDE9',
      },
      error: {
        DEFAULT: '#FE544A',
        shd1: '#FE675F',
        shd2: '#FE7D76',
        shd3: '#FE938D',
        shd4: '#FFA8A4',
        shd5: '#FFBEBA',
        shd6: '#FFD4D1',
        shd7: '#FFE9E8',
      },
      dark: {
        DEFAULT: '#00171F',
        grey: '#5B6366',
      },
      grey: {
        DEFAULT: '#8D9A9E',
        shd1: '#94ACB5',
        shd2: '#A3BBC2',
        shd3: '#B6CDD6',
        shd4: '#C5DCE3',
        shd5: '#D5E9F2',
        shd6: '#E9F4F7',
        shd7: '#F2F9FF',
        bg: '#FAFAFC',
        bg2: '#F8F7FA',
        bg3: '#E5E5E5',
      },
      white: {
        DEFAULT: '#FFFFFF',
      },
    },
    borderRadius: {
      none: '0',
      sm: '0.25rem',
      md: '0.5rem',
      lg: '1rem',
      xl: '6.25rem',
      full: '999px',
    },
    boxShadow: {
      dark:
        '0px 8px 16px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.08);',
      heavy:
        '0px 16px 24px rgba(0, 0, 0, 0.04), 0px 8px 12px rgba(0, 0, 0, 0.08);',
      none: 'none',
    },
    fontSize: {
      '2xs': ['.625rem', '1.4'], //10px
      xs: ['.75rem', '1.4'], //12px
      sm: ['.875rem', '1.4'], //14px
      base: ['1rem', '1.4'], //16px
      md: ['1.25rem', '1.4'], //20px
      lg: ['1.5rem', '1.4'], //24px
      xl: ['1.75rem', '1.4'], //28px
      '2xl': ['2rem', { lineHeight: '1.3', letterSpacing: '-.05em' }], //32px
      '3xl': ['2.5rem', { lineHeight: '1.3', letterSpacing: '-.05em' }], //40px
      '4xl': ['3rem', { lineHeight: '1.3', letterSpacing: '-.05em' }], //48px
      '8xl': ['6rem', { lineHeight: '1.3', letterSpacing: '-.05em' }], //96px
    },
    fontFamily: {
      sans: ['Roboto'],
    },
    extend: {
      spacing: {
        '3xs': '.125rem',
        xxs: '.25rem',
        xs: '.5rem',
        s: '.75rem',
        m: '1rem',
        l: '1.5rem',
        lv: '1.625rem',
        xl: '2rem',
        xxl: '2.5rem',
        '3xl': '3rem',
        '4xl': '4rem',
        '5xl': '8rem',
        xxsv: '0.375rem',
        xsvv: '0.625rem',
      },

      backgroundOpacity: {
        24: '0.24',
        xs: '.5rem',
        s: '.75rem',
        m: '1rem',
        l: '1.5rem',
        xl: '2rem',
        xxl: '2.5rem',
        '3xl': '3rem',
        '4xl': '4rem',
        '5xl': '8rem',
      },
      width: {
        '39xl': '39.5rem',
        '37xl': '37.5rem',
        '8xl': '8.8125rem',
        '4sxl': '4.1875rem',
        '18xl': '18.5rem',
        '30xl': '30rem',
        '33xl': '33.25rem',
        '32xl': '32.625rem',
        '35xl': '35.25rem',
        '29xl': '29.5rem',
        '28xl': '28.5rem',
        '2xl': '2.625rem',
      },
      height: {
        '61xl': '61.0625rem',
        '21xl': '21.25rem',
      },
    },
  },
  variants: {
    extend: {
      textDecoration: ['group-focus'],
      backgroundColor: ['group-focus'],
      opacity: ['disabled'],
    },
  },
  plugins: [],
};
