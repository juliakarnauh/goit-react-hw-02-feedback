import PropTypes from 'prop-types';
import {SectionDiv, SectionTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionDiv>
      {title && <SectionTitle>{title}</SectionTitle>}
      {children}
    </SectionDiv>
  );
};

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
}