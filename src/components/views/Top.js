import React, { Component } from 'react';
import logo from '../../images/early-times.png';
import TopShowroom from "../../images/showroom1.jpg";
import '../../styles/Top.css';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#e6e6e6"
       }
  },
});

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  textbox: {
    backgroundColor: '#ECECEC',
    margin: 10,
  },
  normal: {
  },
  largeText: {
    fontSize: '40px'
  }
  
});


class App extends Component {

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

  handleToProductsPage = () => {
    this.props.history.push('/products')
  }
  
  handleChange = (value) => {
    this.setState({ value });
  };
  

  render() {
    return (
      <MuiThemeProvider theme = {theme}>
        <div className="App">
          <header className="App-header">
            <nav>
              <ul>
                <li><img src={logo} className="App-logo" alt="logo" /></li>
                <li>
                <Paper >
                  <Tabs
                    indicatorColor="primary"
                    textColor="primary"
                    
                  >
                    <Tab label="トップ" />
                    <Tab label="シリーズ" />
                    <Tab label="商品検索" />
                    <Tab label="ショールーム" />
                  </Tabs>
                </Paper>

                </li>
                <li>
                  <div className="Header-Search">
                    <div><font color="white">SEARCH</font></div>
                    <input type="text" ></input>
                    <input type="button" value="検索"></input>
                  </div>
                </li>
              </ul>
            </nav>
          </header>
          <div>
            <img src={TopShowroom} className="Top-showroom" alt="logo" />
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
         <p style={this.getThreeTimesStyle()}>{this.state.count}回送信しました</p>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
