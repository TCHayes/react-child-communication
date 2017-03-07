import React from 'react';
import Card from './card';

function renderCards(cards){
	return cards.map(card => <Card key={card.id} text={card.text} />);
}

export default function List(props) {
	const { title, cards } = props;
	return (
		<div className='card-list'>
			<h3>{title}</h3>
			<form>
				<input type="text" onChange={e => props.onChange(e)}></input>
				<button type="submit" onClick={e => {
					e.preventDefault();
					props.onSubmit(e);
				}}>Submit</button>
			</form>
			{renderCards(cards)}
		</div>
	);
}
