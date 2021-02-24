import React from 'react'

import { rhythm } from '../utils/typography'


export default ({ settings }) => (
  <div
    style={{
      display: 'flex',
      marginBottom: rhythm(2.5),
      fontWeight: 'bold',
    }}
  >
    <img
      src={settings.author_avatar.imgix_url}
      alt={settings.author_name}
      style={{
        marginRight: rhythm(1 / 2),
        marginBottom: 0,
        width: rhythm(2),
        height: rhythm(2),
        borderRadius: 50,
      }}
    />
    <div style={{
      marginTop: rhythm(0.5),
    }} dangerouslySetInnerHTML={{ __html: settings.author_bio }} />
  </div>
)
