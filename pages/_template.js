import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'
import {Container} from 'react-responsive-grid'
import {prefixLink} from 'gatsby-helpers'
import {rhythm, fontSizeToMS} from 'utils/typography'
import {config} from 'config'

import '../css/styles.css'

class Template extends Component {
  render() {
    const {location, children} = this.props
    let header
    if (location.pathname === prefixLink('/')) {
      header = (
        <h1
          style={{
            fontSize: fontSizeToMS(2.5).fontSize,
            lineHeight: fontSizeToMS(2.5).lineHeight,
            marginBottom: rhythm(1.5),
          }}
        >
          <Link
            style={{
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={prefixLink('/')}
          >
            {config.blogTitle}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3>
          <Link
            style={{
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={prefixLink('/')}
          >
            {config.blogTitle}
          </Link>
        </h3>
      )
    }
    return (
      <Container
        style={{
          maxWidth: rhythm(24),
          padding: `${rhythm(2)} ${rhythm(1/2)}`,
        }}
      >
        <Link to={prefixLink('/projects/')}>Projects</Link>
        {header}
        {children}
        <footer
          style={{
            color: '#999',
            fontSize: fontSizeToMS(-1).fontSize,
            textAlign: 'right',
          }}
        >
          <span>
            Content licensed under <a
              href="http://creativecommons.org/licenses/by-nc/4.0/"
            >CC BY-NC 4.0</a>
          </span>
        </footer>
      </Container>
    )
  }
}

Template.propTypes = {
  children: PropTypes.any,
  location: PropTypes.object,
  route: PropTypes.object,
}

export default Template
