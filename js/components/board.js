import React from 'react';
import ListContainer from './list-container';


const renderLists = lists => {
	return lists.map(list => <ListContainer key={list.id}
																					title={list.title}/>)

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
