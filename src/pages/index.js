import * as React from "react"
import { Link, graphql, useStaticQuery} from "gatsby"

import Layout from "../components/layout"


const PostItem = ({ node: { frontmatter: { slug, title } } }) => {

  return (
    <li 
      style={{
        border:`1px solid #e1e4e8`,
        padding: `1em 1rem`,
        margin:`0`
      }} 
      key={slug}
    >
      <Link to={`/blog/${slug}/`} style={{ textDecorationLine:`none`,}}>
        {title}
      </Link>
    </li>
  )
}

const IndexPage = () => {
  
  const { allMarkdownRemark : {nodes} } = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
            title
          }
        }
      }
    }`
  )

  return (
    <Layout>
      <h1>Home</h1>
      <ul style={{listStyle:`none`}}>
        {nodes.map(node => <PostItem node={node}/>)}
      </ul>
    </Layout>
  )
}




export default IndexPage
