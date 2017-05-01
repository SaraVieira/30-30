// @flow
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import GitHub from 'github-api';
import Info from './Info';
import Followers from './Followers';
import Loading from '../Loading';
import style from './style.css';

type Props = {
  /**
   * If no string is passed the logged in user will be shown
   * @type {Object}
   */
  user?: ?string,
  token?: ?string
}

type State = {
  loading: boolean,
  profile: Object
}

class GitHubCard extends Component {
  static defaultProps = {
    user: null,
    token: null
  }
  props: Props;
  constructor(props: Props) {
    super(props);
    this.state = {
      user: null,
      loading: true,
      profile: {}
    };
    this.createUrl = this.createUrl.bind(this);
  }

  state: State;

  componentWillMount() {
    const gh = new GitHub({
      token: this.props.token
    });
    const user = gh.getUser(this.props.user);
    user.getProfile((err, profile) =>
    this.setState({
      loading: false,
      profile: {
        login: profile.login,
        avatar_url: profile.avatar_url,
        company: profile.company,
        email: profile.email,
        repos: profile.public_repos,
        url: profile.html_url,
        followers: profile.followers,
        following: profile.following
      }
    }));
  }

  createUrl: (a: string) => void;

  createUrl(tab: string) {
    return `${this.state.profile.url}?tab=${tab}`;
  }


  render() {
    return (
      <div>
        { !this.props.user && !this.props.token ?
          <div className={style.card}>You need a token</div> :
          <div>
            {this.state.loading ? <Loading /> :
            <div className={style.card}>
              <h1>@{this.state.profile.login}</h1>
              <img src={this.state.profile.avatar_url} alt={this.state.profile.login} />
              <Info email={this.state.profile.email} company={this.state.profile.company} />
              <div className={style.repos}>
                <FontAwesome name="book" />
                <a target="_blank" className={style.repos} rel="noopener noreferrer" href={this.createUrl('repositories')}>{this.state.profile.repos}</a>
              </div>
              <Followers
                followers={this.state.profile.followers}
                followersCallback={() => this.createUrl('followers')}
                following={this.state.profile.following}
                followingCallback={() => this.createUrl('following')}
              />
            </div>
        }
          </div>
      }
      </div>
    );
  }
}

export default GitHubCard;
