import React from 'react';
import List from './list';


const renderLists = lists => {
	return lists.map(list => <List key={list.id}
																title={list.title}
																cards={list.cards}
																onChange={() => onAddInputChanged()}
																onSubmit={() => onAddSubmit()}/>)
}

function onAddSubmit () {
	console.log('Submitted');
}

function onAddInputChanged() {
	console.log('Input Changed');
}

export default function Board(props) {
	const { title, lists } = props;
	return (
		<div>
			<div className="board-title">{title}</div>
			{renderLists(lists)}
		</div>
	);
}
