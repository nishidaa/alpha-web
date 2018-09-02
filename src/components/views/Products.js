import React, { Component } from 'react';
import logo from '../../images/early-times.png';
import ProductsImage from "../../images/showroom2.jpg";
import '../../styles/Top.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton'

const styles = {
  textbox: {
    backgroundColor: '#ECECEC',
    margin: 10,
  },
  normal: {
  },
  largeText: {
    fontSize: '40px'
  }
};

class Top extends Component {

  constructor(props) {
    super(props);
    this.state = {count: 0};
    this.tick = this.tick.bind(this);
  }

  tick() {
    this.setState({count: this.state.count + 1});
  }

  getThreeTimesStyle(){
    return this.state.count % 3 == 0 && this.state.count != 0? styles.largeText :styles.normal;
  }

  handleToTopPage = () => {
    this.props.history.push('/')
  }


  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <nav>
              <ul>
                <li><img src={logo} className="App-logo" alt="logo" onClick={this.handleToTopPage} /></li>
                <li><a href="#" className="Header-Menu">メニューA</a></li>
                <li><a href="#" className="Header-Menu">商品一覧</a></li>
                <li><a href="#" className="Header-Menu">メニューC</a></li>
                <li><a href="#" className="Header-Menu">メニューD</a></li>
                <li>
                  <div className="Header-Search">
                    <div><font color="black">サイト内検索</font></div>
                    <input type="text" ></input>
                    <input type="button" value="検索"></input>
                  </div>
                </li>
              </ul>
            </nav>
          </header>
          <div>
            <img src={ProductsImage} className="Top-showroom" alt="logo" />
          </div>
          <div classname="TopContents">
            <li><a className="ContentsText">News</a></li>
            <li><a className="SubContentsText">Nanika1</a></li>
            <li><a className="SubContentsText">Nanika2</a></li>

          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <TextField
           hintText="あなたのお名前"
           style={styles.textbox}
         /><br />
         <TextField
           hintText="お問い合わせ内容"
           style={styles.textbox}
           multiLine={true}
           rows={2}
         /><br />
         <RaisedButton primary={true} label="送信" onClick={this.tick} />
         <p style={this.getThreeTimesStyle()}>{this.state.count}回送信しました</p>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Top;
