import React from 'react';
import List from './list';


export default class ListContainer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        cardText: '',
        cards: []
      };

    }

    onAddSubmit() {
      console.log('Submitted');
    }

    onAddInputChanged() {
      console.log('Input Changed');
    }


    render() {
      return (
        <List title={this.props.title}
              cards={this.state.cards}
              onChange={() => this.onAddInputChanged()}
              onSubmit={() => this.onAddSubmit()}/>
      )
    }
}
