import React from 'react';
import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = () => {

  return <div>
    <div
      className={classes.content_logo}>
    </div>
    <MyPostsContainer />
  </div>
}

export default Profile;