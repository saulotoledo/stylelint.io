import PropTypes from "prop-types";
import React from "react";

import styles from "./index.css";

const Content = props => <div className={styles.content}>{props.children}</div>;

Content.propTypes = {
  children: PropTypes.node
};

export default Content;
