import React, {Component, PropTypes} from 'react'
import DocumentTitle from 'react-document-title'
import {prefixLink} from 'gatsby-helpers'
import {GoogleFont, TypographyStyle} from 'utils/typography'

export default class Html extends Component {
  render() {
    const {favicon, body} = this.props
    let title = DocumentTitle.rewind()
    if (this.props.title) {
      title = this.props.title
    }

    let cssLink
    if (process.env.NODE_ENV === 'production') {
      cssLink = <link rel="stylesheet" href={prefixLink('/styles.css')} />
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>{this.props.title}</title>
          <link rel="shortcut icon" href={favicon} />
          <GoogleFont/>
          <TypographyStyle/>
          {cssLink}
        </head>
        <body className="landing-page">
          <div id="react-mount" dangerouslySetInnerHTML={{__html: body}} />
          <script src={prefixLink('/bundle.js')}/>
          {/* eslint-disable */}
          <script dangerouslySetInnerHTML={{ __html:
            "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=" +
            "i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElement" +
            "sByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document," +
            "'script','//www.google-analytics.com/analytics.js','ga');ga('create', 'UA-37699943-1" +
            "', 'auto');ga('send', 'pageview');</script>",
          }}></script>
          {/* eslint-enable */}
        </body>
      </html>
    )
  }
}

Html.propTypes = {
  body: PropTypes.string,
  favicon: PropTypes.string,
  title: PropTypes.string,
}

Html.defaultProps = {body: ''}
