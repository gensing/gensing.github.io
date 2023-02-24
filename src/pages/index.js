import * as React from "react"
import { Link, graphql, useStaticQuery} from "gatsby"
import slugify from "slugify"
import Layout from "../components/layout"

const IndexPage = () => {
  
  const { allMarkdownRemark : {group} } = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
        totalCount
        group(field: {frontmatter: {categorie: SELECT}}) {
          fieldValue
          totalCount
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
      }
    }`
  )

  return (
    <Layout>
      <h1>Home</h1>
      { 
        group.map(({fieldValue, nodes}) => 
        <div>
          <h3>{fieldValue}</h3>
          { nodes.map(({ parent: { name }, frontmatter: { title, categorie, date } }) => 
            <ul>
              <li>
                {date} - {categorie} - <Link to={`/blog/${slugify(name, { lower: true, strict:true })}/`}>{title}</Link>
              </li>
            </ul>
          )}
        </div>
      )}
    </Layout>
  )
}

export default IndexPage