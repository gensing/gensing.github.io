import * as React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import Layout from "../../components/layout"

export default function BlogPostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
        <div style={{borderBottom:`1px solid #e1e4e8`, paddingBottom:`10px`}}>
          <h1 style={{margin:`0px 0px 10px 0px`}}>{frontmatter.title}</h1>
          <span>{frontmatter.date}</span>
        </div>
        <MDXProvider>
          <div style={{margin:`20px`}} dangerouslySetInnerHTML={{ __html: html }} />
        </MDXProvider>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`