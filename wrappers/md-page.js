import React from 'react'
import {pathToDate} from '../utils'
import DocumentTitle from 'react-document-title'
import {prefixLink} from 'gatsby-helpers'
import ReadNext from '../components/ReadNext'
import {rhythm} from 'utils/typography'
import {config} from 'config'

export default ({
  post,
  path,
  route,
}) => (
  <DocumentTitle title={`${post.title} | ${config.blogTitle}`}>
    <div className="markdown">
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{__html: post.body}} />
      <hr
        style={{
          marginBottom: rhythm(2),
        }}
      />
      <div>
        <img
          src={prefixLink('/iamdustan.jpg')}
          style={{
            border: '1px solid #fff',
            boxShadow: '0 0 2px rgba(0, 0, 0, 0.125)',
            float: 'left',
            transform: 'rotate(90deg)',
            marginTop: rhythm(1/3),
            width: rhythm(2.5),
          }}
        />
        <p style={{marginLeft: rhythm(9/4)}}>
          These words brought to you by <strong>{config.authorName}</strong>.
          A friendly, bearded, husband, father, and user interface engineer
          living in Charlotte, NC. Considers himself quite partial to React.js
          these days. <a href="https://twitter.com/iamdustan">Find @iamdustan on Twitter</a>
        </p>
      </div>
    </div>
  </DocumentTitle>
)


