import Typography from 'typography'

const options = {
  baseFontSize: '20px',
  baseLineHeight: '30px',
  modularScales: ['major third'],
  googleFonts: [{
    name: 'Lato',
    styles: [
      '100',
      '400',
      '700',
      '900',
    ],
  }],
  headerFontFamily: 'Open Sans',
  bodyFontFamily: 'Lora',
  headerGray: '25',
  headerGrayHue: 0,
  bodyGray: 20,
  bodyGrayHue: 0,
  headerWeight: '900',
  bodyWeight: 400,
  boldWeight: 700,
  fontFaces: [],
  googleBodyFont: 'Lora',
  showVerticalRhythmGrid: false,
  bodyFont: 'Lora',
  googleHeaderFont: 'Open Sans',
  headerFont: 'Open Sans',
}

const typography = new Typography(options)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
