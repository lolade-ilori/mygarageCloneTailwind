module.exports = {
  content: ["./layouts/*.html"],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'offwhite': '#ffffff99',
      'garage-blue': '#262851',
      'hoverRed': '#d71758',
      'bgSocialIcons': '#4b4c68',
      'twitterBlue': '#4a88a1',
      'yearColor': '#22234a',
      'yellow': '#fea508',

    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['36px', '32px'],
      xxl: ['48px', '48px'],
      xxxl: ['70px', '68px'],
      xxxxl: ['33em', '32px'],
    },
    keyframes: {
      wiggle: {
        'from': { left: '0px' },
        'to': { left: '10px' },
      },
      wiggleArrow: {
        'from': {left: '0px'},
        'to': { left: '18px',
                trasform: 'scale(2, 2)',
                color: '#d71758',
              }
      }
    },
    animation: {
      wiggle: 'wiggle 250ms linear forwards',
      wiggleArrow: 'wiggleArrow 250ms linear forwards',
    },
  },
  plugins: [],
}
