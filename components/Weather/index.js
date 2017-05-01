// @flow
import React, { Component } from 'react';
// import classnames from 'classnames';
import style from './style.css';
import getData from './api';

type Unit = 'F' | 'C' | 'f' | 'c';

type Props = {
  /**
   * 'F' | 'C' | 'f' | 'c'
   */
  unit?: Unit
}

type State = {
  location: string,
  temp_c: number,
  temp_f: number,
  icon_url: string,
  weather: string,
  loading: boolean,
  error: boolean
}

class Weather extends Component {

  static defaultProps = {
    unit: 'C'
  }

  props: Props;

  constructor(props: Props) {
    super(props);
    this.state = {
      location: '',
      temp_c: 0,
      temp_f: 0,
      icon_url: '',
      weather: '',
      loading: true,
      error: false
    };
  }

  state: State;

  componentWillMount() {
    getData()
    .then(weather =>
      this.setState({
        loading: false,
        location: weather.display_location.full,
        temp_c: weather.temp_c,
        temp_f: weather.temp_f,
        icon_url: weather.icon_url,
        weather: weather.weather,
      })
    )
    .catch(() =>
    this.setState({
      loading: false,
      error: true
    })
  );
  }

  render() {
    return (
      <div>
        {this.state.loading ?
          <div className={style.loading}>
            <div className={style.loadingBar} />
            <div className={style.loadingBar} />
            <div className={style.loadingBar} />
            <div className={style.loadingBar} />
          </div>
      :
          <div>
            {!this.state.error ?
              <div className={style.weather}>
                <h1>{this.state.weather}</h1>
                <img src={this.state.icon_url} alt={this.state.weather} />
                <p>
              It&apos;s {
                (this.props.unit || 'c').toLowerCase() === 'f' ?
                `${this.state.temp_f}º F` :
                `${this.state.temp_c}º C`
              }
                </p>
                <small>You are currently on {this.state.location}</small>
              </div>
            :
              <div className={style.error}>
                <h1>😞</h1>
               There has been a problem getting the weather
             </div>
          }
          </div>
      }
      </div>
    );
  }
}

export default Weather;
