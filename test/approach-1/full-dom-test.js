var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var Container = require('../../src/Container');
var assert = require('chai').assert;
var jsdom = require('jsdom');

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.parentWindow;

describe('Container', function () {
  it('Show the menu-bar', function () {
    var container = TestUtils.renderIntoDocument(<Container />);
    var result = TestUtils.scryRenderedDOMComponentsWithClass(container, 'menu-container');

    assert.lengthOf(result, 1);
  });
});