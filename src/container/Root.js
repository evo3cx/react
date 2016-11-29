import React, {Component} from 'react'
import { Provider } from 'react-redux'
import configureStore from '../configureStore'
import AsyncApp from './AsyncApp'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const store = configureStore()

export default class Root extends Component{
  render(){
    return(
      <MuiThemeProvider>
        <Provider store={store}>
          <AsyncApp />
        </Provider>
      </MuiThemeProvider>
    )
  }
}
