import React, { addons } from 'react/addons';
import Container from '../../src/Container';
import MenuBar from '../../src/MenuBar';
import { assert } from 'chai';

describe('Container', function () {
  let shallowRenderer = React.addons.TestUtils.createRenderer();

  it('Show the menu-bar', function () {
    shallowRenderer.render(<Container/>);
    let result = shallowRenderer.getRenderOutput();

    assert.deepEqual(result.props.children, <MenuBar />);
  });

});