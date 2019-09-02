import React from "react";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";

const SectionWrapper = ({children, className}) => (
  <section className={className}>
    <Container>
      {children}
    </Container>
  </section>
);

SectionWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  className: PropTypes.string
}

export default SectionWrapper;