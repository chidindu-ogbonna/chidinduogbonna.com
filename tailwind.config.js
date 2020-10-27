module.exports = {
  theme: {
    opacity: {
      0: '0',
      10: '.1',
      20: '.2',
      30: '.3',
      40: '.4',
      50: '.5',
      60: '.6',
      70: '.7',
      80: '.8',
      90: '.9',
      100: '1',
    },

    extend: {
      colors: {
        default: 'var(--default)',
        green: 'var(--green)',
        blue: 'var(--blue)',
        purple: 'var(--purple)',
        red: 'var(--red)',
        orange: 'var(--orange)',
        violet: 'var(--violet)',
        'default-inverse': 'var(--default-inverse)',
        'card-bg': 'var(--card-bg)',

        primary: 'var(--primary)',
        potion: 'var(--potion)',
        'primary-variant': 'var(--primary-variant)',

        secondary: 'var(--secondary)',
        'secondary-variant': 'var(--secondary-variant)',

        background: 'var(--background)',
        'background-variant': 'var(--background-variant)',
        error: 'var(--error)',

        'on-primary': 'var(--on-primary)',
        'on-secondary': 'var(--on-secondary)',
        'on-background-1': 'var(--on-background-1)',
        'on-background-2': 'var(--on-background-2)',
        'on-background-3': 'var(--on-background-3)',
        'on-error': 'var(--on-error)',

        transparent: 'transparent',
      },

      zIndex: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
      },

      fontSize: {
        '7xl': '6rem',
        '8xl': '8rem',
        '9xl': '12rem',
        '10xl': '16rem',
      },

      screens: {
        // create specific breakpoints to target
        xs: '375px',
      },
    },
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
}
