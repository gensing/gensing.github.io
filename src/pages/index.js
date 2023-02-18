import * as React from "react"
import { Link, graphql, useStaticQuery} from "gatsby"
import slugify from "slugify"



import Layout from "../components/layout"


const PostItem = ({ node: { parent: { name }, frontmatter: { title, categorie, date } } }) => {

  return (
    <li>
        {date} - {categorie} - <Link to={`/blog/${slugify(name, { lower: true, strict:true })}/`}>{title}</Link>
    </li>
  )
}

const IndexPage = () => {
  
  const { allMarkdownRemark : {nodes} } = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
        nodes {
          parent {
            ... on File {
              name
            }
          }
          frontmatter {
            title
            categorie
            date(formatString: "YY.MM.DD")
          }
        }
      }
    }`
  )

  return (
    <Layout>
      <h1>Home</h1>
      <ul>
        {nodes.map(node => <PostItem node={node}/>)}
      </ul>
    </Layout>
  )
}




export default IndexPage
