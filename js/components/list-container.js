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

    onAddSubmit(e) {
      console.log('Submitted');
      const currentCard = {
        text: this.state.cardText,
        id: this.state.cards.length
      }
      const currentState = this.state;
      currentState.cards.push(currentCard);
      this.setState({cards: this.state.cards.concat(currentCard)});
    }

    onAddInputChanged(e) {
      console.log('Input Changed');
      this.setState({cardText: e.target.value});
    }


    render() {
      return (
        <List title={this.props.title}
              cards={this.state.cards}
              onChange={(e) => this.onAddInputChanged(e)}
              onSubmit={(e) => this.onAddSubmit(e)}/>
      )
    }
}
