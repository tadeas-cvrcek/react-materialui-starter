import React from 'react';
import './App.css';
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';

export interface IAppProps {
}

export interface IAppState {
  dialogIsVisible: boolean
}

export default class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
      dialogIsVisible: false
    }
  }

  public render() {
    const { dialogIsVisible } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <Button onClick={() => this.setState({ dialogIsVisible: true })} color="primary" variant="contained">Hello</Button>

          <Dialog open={dialogIsVisible}>
            <DialogTitle>Hello dialog</DialogTitle>
            <DialogContent>
              <DialogContentText>Hello from React with Material UI!</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => this.setState({ dialogIsVisible: false })} color="primary" variant="outlined" autoFocus>Hide</Button>
            </DialogActions>
          </Dialog>
        </header>
      </div >
    );
  }
}
