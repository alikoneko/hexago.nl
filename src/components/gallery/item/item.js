import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Title, Copy } from './item.css';
import Box from 'components/box';

const Item = ({ title, copy, image }) => (
  <figure>
    <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
    <Box>
      <figcaption>
        <Title>{title}</Title>
        <Copy>{copy}</Copy>
      </figcaption>
    </Box>
  </figure>
);

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
};

export default Item;
