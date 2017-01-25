import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'
import sortBy from 'lodash/sortBy'
import DocumentTitle from 'react-document-title'
import {prefixLink} from 'gatsby-helpers'
import {rhythm} from 'utils/typography'
import {pathToDate} from 'utils'
import access from 'safe-access'
import {config} from 'config'

class BlogIndex extends Component {
  render() {
    // Sorted pages.
    const pages = this.props.route.pages.filter((page) => page.data.layout === 'post')
    const pageLinks = sortBy(pages, (page) =>
      access(page, 'data.date')
    ).reverse().map((page) => {
      if (access(page, 'file.ext') === 'md') {
        const title = access(page, 'data.title') || page.path
        return (
          <li
            key={page.path}
            style={{
              marginBottom: rhythm(1/4),
            }}
          >
            <Link to={prefixLink(page.path)}>{title}</Link>
            <div style={{fontSize: 12, color: '#999', lineHeight: 1}}>
              {pathToDate(page.file.path)}
            </div>
          </li>
        )
      }
    })
    return (
      <DocumentTitle title={config.blogTitle}>
        <div>
          <div>
            <img
              src={prefixLink('/iamdustan.jpg')}
              style={{
                border: '1px solid #fff',
                boxShadow: '0 0 2px rgba(0, 0, 0, 0.125)',
                float: 'left',
                transform: 'rotate(90deg)',
                marginTop: rhythm(2/3),
                width: rhythm(2.5),
              }}
            />
            <p style={{marginLeft: rhythm(11/4)}}>
              The following words are the semi-original thought of <strong>
              {config.authorName}</strong>—a friendly, bearded, husband, father,
              and user interface engineer living in Charlotte, NC. Dustan
              considers himself quite partial to React.js these days.<br />
              <small>
                <a href="https://twitter.com/iamdustan">Find @iamdustan on Twitter</a> or
                talk to him on <a href="https://calendly.com/iamdustan">calendly.com/iamdustan</a>.
              </small>
            </p>
          </div>
          <ul>
            {pageLinks}
          </ul>
        </div>
      </DocumentTitle>
    )
  }
}

BlogIndex.propTypes = {
  route: PropTypes.object,
}

export default BlogIndex
