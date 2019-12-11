import React from 'react';
import App from './App';
import FeedComponent from './FeedComponent';
import SettingComponent from './SettingComponent';
import MenuComponent from './MenuComponent';

import { HashRouter as Router, Route, Redirect } from 'react-router-dom';


export default class AppRouter extends React.Component {

    render() {
        return (
// {/*             <MuiThemeProvider theme={theme}> */}

            <div className="App">

                  <header className="App-header">
                    Header
                  </header>

                <MenuComponent />
                <Router>
                    <div>
                        <Route exact path="/" component={App} />
                        <Route exact path="/Feed" component={FeedComponent} />
                        <Route exact path="/Setting" component={SettingComponent} />
                    </div>
                </Router>

{/*                     <div> */}
{/*                              <FooterComponent /> */}
{/*                     </div> */}

            </div>
//             </MuiThemeProvider>
        );
    }
}


