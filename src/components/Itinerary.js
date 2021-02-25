import React from 'react'
import { Link } from 'gatsby'
import get from 'lodash/get'

import { rhythm } from '../utils/typography'
import Sidebar from './Sidebar'


// export default ({ posts }) => (
//   <Sidebar activeItemId="" onSelect={({itemId}) => {}} items={generateItems(posts)} />
//   function App() {
//     return (
//       <>
//         <Navigation
//             // you can use your own router's api to get pathname
//             activeItemId="/management/members"
//             onSelect={({itemId}) => {
//               // maybe push to the route
//             }}
//             items={SIDEBAR_ITEMS}
//           />
//       </>
//     );
// }
    // <div
    //   style={{
    //     marginLeft: '-250px',
    //     maxWidth: rhythm(12),
    //   }}
    // >
      
    //   <h3>Itinerary</h3>
    //   {posts.map(({ node }) => {
    //       const title = get(node, 'title') || node.slug
    //       return (
    //         <div style={{marginBottom: rhythm(1 / 4),}} key={node.slug}>
    //             <ul>
    //                 <li style={{ marginBottom: rhythm(-1.2) }}>
    //                     <Link style={{ boxShadow: 'none' }} to={`posts/${node.slug}`}>{title}</Link>
    //                 </li>
    //             </ul>
    //         </div>
    //       )
    //     })}
    // </div>
  // )