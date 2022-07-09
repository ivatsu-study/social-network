import React from "react";

import MyPosts from "./MyPosts";
import styles from './profile.module.css';

const Profile = () => (
  <div className={styles.content}>
    <div>
      <img className="content-hero-image" src="https://images.unsplash.com/photo-1588653818221-2651ec1a6423?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="content hero" />
    </div>
    <div>
      avatar + description
    </div>
    <MyPosts />
  </div>
);

export default Profile;
