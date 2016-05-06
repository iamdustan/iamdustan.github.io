import Typography from 'typography'

const options = {
  baseFontSize: '20px',
  baseLineHeight: '30px',
  modularScales: ['major third'],
  googleFonts: [
    {
      name: 'Lora',
      styles: [
        '400',
        '400italic',
        '700',
      ],
    },
    {
      name: 'Open Sans',
      styles: [
        '700',
      ],
    },
  ],
  headerFontFamily: 'Open Sans',
  bodyFontFamily: 'Lora',
  headerGray: '25',
  headerGrayHue: 0,
  bodyGray: 20,
  bodyGrayHue: 0,
  headerWeight: '700',
  bodyWeight: 400,
  boldWeight: 700,
}

const typography = new Typography(options)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
