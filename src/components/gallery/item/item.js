import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Title, Copy, Link } from './item.css';
import Box from 'components/box';

const Item = ({ title, copy, image, link }) => (
  <figure>
    <Img fluid={ image ? image.childImageSharp.fluid : {} } alt={ title } />
    <Box style="margin: 0 1rem">
      <figcaption>
        <Title>{ title }</Title>
        <Copy>{ copy }</Copy>
        { link ? 
          <Link><a href={ link }>Read more...</a></Link> : ""
        }
      </figcaption>
    </Box>
  </figure>
);

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
  link: PropTypes.string
};

export default Item;
