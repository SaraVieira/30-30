// @flow

import React from 'react';
import FontAwesome from 'react-fontawesome';
import style from './index.css';

type Props = {
  followers: number,
  following: number,
  followersCallback: Function,
  followingCallback: Function,
}

const Followers = (props: Props) => (
  <div>
    {(props.followers !== 0 || props.following !== 0) &&
    <div className={style.followers}>
      <FontAwesome name="users" className={style.users} />
      <small>Following:
        <a target="_blank" className={style.repos} rel="noopener noreferrer" href={props.followingCallback}>
          {props.following}
        </a>
      </small>
      <small>Followers:
        <a target="_blank" className={style.repos} rel="noopener noreferrer" href={props.followersCallback}>
          {props.followers}
        </a>
      </small>
    </div>
    }
  </div>
);

export default Followers;
