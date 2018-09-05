import React from "react";
import PropTypes from "prop-types";

export const LandingLayout = ({ children }) => (
  <div className="LandingLayout">
    {children}
  </div>
);

LandingLayout.propTypes = {
  children : PropTypes.element.isRequired,
};

export default LandingLayout;
