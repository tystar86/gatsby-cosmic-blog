import React from 'react'
import { Link } from 'gatsby'
import get from 'lodash/get'

import { rhythm } from '../utils/typography'


export default ({ posts }) => (
    <div
      style={{
        marginLeft: '-250px',
        maxWidth: rhythm(12),
      }}
    >
      {posts.map(({ node }) => {
          const title = get(node, 'title') || node.slug
          return (
            <div style={{marginBottom: rhythm(1 / 4),}} key={node.slug}>
                <ul>
                    <li style={{ marginBottom: rhythm(-1.2) }}>
                        <Link style={{ boxShadow: 'none' }} to={`posts/${node.slug}`}>{title}</Link>
                    </li>
                </ul>
            </div>
          )
        })}
    </div>
  )