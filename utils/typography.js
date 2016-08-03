import Typography from 'typography'
import CodePlugin from 'typography-plugin-code'

const options = {
  baseFontSize: '20px',
  baseLineHeight: '30px',
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
  headerFontFamily: ['Open Sans', 'sans-serif'],
  bodyFontFamily: ['Lora', 'serif'],
  headerGray: '25',
  bodyGray: 20,
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 700,
  plugins: [
    new CodePlugin(),
  ],
}

const typography = new Typography(options)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
