import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from "../components/layout"

export default ({data}) => (
  <Layout>
    <article className="sheet">
      <div className="sheet__inner">
        <h1 className="sheet__title">{data.file.childMarkdownRemark.frontmatter.title}</h1>
        <p className="sheet__lead">{data.file.childMarkdownRemark.frontmatter.excerpt}</p>
        <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: data.file.childMarkdownRemark.html,
          }}
        />
      </div>
    </article>
  </Layout>
)

export const pageQuery = graphql`
  query Post($id: String!) {
    file(id: {eq: $id}) {
      id
      childMarkdownRemark {
        id
        html
        excerpt
        frontmatter {
          date
          categories
          title
        }
      }
    }
  }
`;