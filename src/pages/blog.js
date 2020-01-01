import React from "react";
import { Link, graphql } from "gatsby";
import Masonry from "react-masonry-component";
import Img from "gatsby-image";
import Layout from "../components/layout";

const BlogPage = ({ data }) => (
  <Layout>
    <Masonry className="showcase">
      {data.allFile.edges.map((blog, i) => (
        <div key={i} className="showcase__item">
          <figure className="card">
            <Link to={`/post/${blog.node.id}`} className="card__image">
              <Img fluid={blog.node.childMarkdownRemark.frontmatter.title} />
            </Link>
            <figcaption className="card__caption">
              <h6 className="card__title">
                <Link to={`/post/${blog.node.id}`}>{blog.node.childMarkdownRemark.frontmatter.title}</Link>
              </h6>
              <div className="card__description">
              <p>{blog.node.childMarkdownRemark.excerpt}</p>
              </div>
            </figcaption>
          </figure>
        </div>
      ))}
    </Masonry>
  </Layout>
);

export default BlogPage;

export const query = graphql`
query AllBlogs {
  allFile(filter: {sourceInstanceName: {eq: "blogs"}}) {
    edges {
      node {
        id
        childMarkdownRemark {
          id
          html
          excerpt
          frontmatter {
            title
            date(formatString: "DD/MM/YYYY")
            categories
            layout
          }
        }
      }
    }
  }
}
`;