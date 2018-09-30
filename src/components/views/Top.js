import React, { Component } from 'react';
import logo from '../../images/early-times.png';
import TopShowroom from "../../images/showroom1.jpg";
import '../../styles/Top.css';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#e6e6e6"
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
  },
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  }
});


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.tick = this.tick.bind(this);
  }

  tick() {
    this.setState({ count: this.state.count + 1 });
  }

  getThreeTimesStyle() {
    return this.state.count % 3 == 0 && this.state.count != 0 ? styles.largeText : styles.normal;
  }

  handleToProductsPage = () => {
    this.props.history.push('/products')
  }

  handleChange = (value) => {
    this.setState({ value });
  };


  render() {
    return (
      <MuiThemeProvider theme={theme}>
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
                      <Tab label="商品検索" href="products" />
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
            <a>
              <CardContent>
                <Typography color="textSecondary">
                  最新情報（更新日）
                  </Typography>
                <Typography variant="headline" component="h2">
                  10月〇日　TOCとくのいち
                  </Typography>
                <Typography component="p">
                  詳細は<Button color="secondary">こちら</Button>
                </Typography>
              </CardContent>

              <CardContent>
                <Typography color="textSecondary">
                  9月30日
                  </Typography>
                <Typography variant="headline" component="h2">
                  サイト更新
                  </Typography>

              </CardContent>
            </a>


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
      </MuiThemeProvider >
    );
  }
}

export default App;
