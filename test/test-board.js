import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Board from '../js/components/board';

const lists = [
  {
    id: 1,
    title: 'List One',
    
  },
  {
    id: 2,
    title: 'List Two',

  }
];
const boardTitle = 'This is the Board Title';

describe('Board component', function() {
    it('Renders the board and checks for bullshit',  function() {
        const renderer = TestUtils.createRenderer();
        renderer.render(<Board title={boardTitle} lists={lists} />);
        const result = renderer.getRenderOutput();
        console.log(result.props.children);
        //checks the top level div to make sure its content matches the title passed in
        result.props.children[0].props.children.should.equal(boardTitle);
        result.props.children[1].length.should.equal(lists.length);
        //result.props.title.should.equal(boardTitle);

        // const img = result.props.children[0];
        // img.type.should.equal('img');
        // img.props.src.should.equal(url);
        // img.props.alt.should.equal(description);

        // const p = result.props.children[1];
        // p.type.should.equal('p');
        // p.props.children.should.equal(description);
    });
});
