import React from "react";
import { Link, graphql } from "gatsby";
import Masonry from "react-masonry-component";
import Img from "gatsby-image";
import Layout from "../components/layout";

const IndexPage = ({ data }) => (
  <Layout>
    <Masonry className="showcase">
      {data.events.listEvents.items.map((event, i) => (
        <div key={i} className="showcase__item">
          <figure className="card">
            <Link to={`/works/${event.name}`} className="card__image">
              <Img fluid={event.name} />
            </Link>
            <figcaption className="card__caption">
              <h6 className="card__title">
                <Link to={`/works/${event.name}`}>{event.name}</Link>
              </h6>
              <div className="card__description">
              <p>{event.when} {event.where}</p>
              </div>
            </figcaption>
          </figure>
        </div>
      ))}
    </Masonry>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query ListEvents {
    events {
      listEvents {
        items {
          id
          name
          when
          where
        }
      }
    }
  }
`;