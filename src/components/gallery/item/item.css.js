import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Title = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: 500;
  margin: 0.75rem 0.75rem 0.75rem;
`;

export const Copy = styled.p`
  color: #757575;
  margin: 0 0.75rem 0.75rem;

  ${MEDIA.TABLET`
    margin-bottom: 4rem;
  `};
`;

export const Link = styled.a`
  color: #fB43A;
  margin: 0 0.75rem 0.75rem;
  :hover {
    color: #992409;
  }
  ${MEDIA.TABLET`
    margin-bottom: 4rem;
  `};
`;
