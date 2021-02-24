import React from 'react'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import cosmicjsLogo from '../../static/cosmicjs.svg'
import gatsbyLogo from '../../static/gatsby.png'
import { rhythm, scale } from '../utils/typography'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

// Import fonts
import "@fontsource/open-sans"
import "@fontsource/open-sans/800.css"

export default ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        cosmicjsSettings(slug: { eq: "general" }) {
          metadata {
            site_heading
            homepage_hero {
              local {
                childImageSharp {
                  fluid(quality: 90, maxWidth: 1920) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const siteTitle = data.cosmicjsSettings.metadata.site_heading
      const homgePageHero =
        data.cosmicjsSettings.metadata.homepage_hero.local.childImageSharp.fluid
      let header

      let rootPath = `/`
      let postsPath = `/posts`
      if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
        rootPath = __PATH_PREFIX__ + `/`
        postsPath = __PATH_PREFIX__ + `/posts`
      }

      if (location.pathname === rootPath || location.pathname === postsPath) {
        header = (
          <BackgroundImage
            Tag="div"
            className="post-hero"
            fluid={homgePageHero}
            backgroundColor={`#007ACC`}
            style={{
              height: rhythm(14),
              position: 'relative',
              marginBottom: `${rhythm(1.5)}`,
            }}
          >
            <h1
              style={{
                ...scale(1.3),
                fontFamily: "Open Sans",
                position: 'absolute',
                textAlign: 'right',
                left: 0,
                right: 0,
                top: rhythm(6),
                marginTop: '0',
                height: rhythm(2.5),
              }}
            >
              <Link
                style={{
                  boxShadow: 'none',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
                to={'/'}
              >
                {siteTitle}
              </Link>
            </h1>
          </BackgroundImage>
        )
      } else {
        header = (
          <h3
            style={{
              fontFamily: "Open Sans",
              marginTop: 0,
              marginBottom: rhythm(-1),
              marginLeft: 'auto',
              marginRight: 'auto',
              maxWidth: rhythm(24),
              paddingTop: `${rhythm(1.5)}`,
            }}
          >
            <Link
              style={{
                boxShadow: 'none',
                textDecoration: 'none',
                color: 'inherit',
              }}
              to={'/'}
            >
              {siteTitle}
            </Link>
          </h3>
        )
      }
      return (
        <div style={{
          fontFamily: "Open Sans",
        }}>
          {header}
          <div
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              maxWidth: rhythm(24),
              padding: `0 ${rhythm(3 / 4)} ${rhythm(1.5)} ${rhythm(3 / 4)}`,
              minHeight: 'calc(100vh - 42px)',
            }}
          >
            {children}
          </div>
          <footer
            style={{
              textAlign: 'center',
              padding: `0 20px 80px 0`,
            }}
          >2021@
            <a
              target="_blank"
              href="https://tystar.cz/"
              style={{
                color: '#3d81a3',
                boxShadow: 'none',
              }}
            >tystar</a>
          </footer>
        </div>
      )
    }}
  />
)
