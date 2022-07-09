import React from "react";

import logo from '../../../../logo.svg';
import styles from './post.module.css';

const Post = (props) => (
  <div className={styles.item}>
    <img src={logo} alt="avatar" />
    {props.message}
    <button>Like {props.likeCounts}</button>
  </div>
);

export default Post;
