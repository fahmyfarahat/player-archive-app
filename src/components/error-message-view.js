import React from "react";
import PropTypes from "prop-types";
import SectionWrapper from "./section-wrapper";

const ErrorMessageView = ({message, className}) => (
<SectionWrapper>
  <h1 className={className}>{message}</h1>
</SectionWrapper>
);

ErrorMessageView.prototype = {
  message: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default ErrorMessageView;