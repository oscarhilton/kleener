import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

export class Page extends React.Component {
  componentWillMount() {
    document.title = `${this.props.title} - M5 Monitor`;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.title !== this.props.title) {
      document.title = `${this.props.title} - M5 Monitor`;
    }
  }

  render() {
    return (
      <div
        className={
          classNames(
            "Page",
            `Page--${this.props.pageClass}`,
            { [`${this.props.className}`]: this.props.className },
          )
        }
      >
        {this.props.children}
      </div>
    );
  }

  format(str) {
    return str.replace(/\s+/g, "-");
  }
}

Page.propTypes = {
  children : PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]),
  title: PropTypes.string.isRequired,
  pageClass: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Page;
