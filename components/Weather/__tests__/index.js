import React from 'react'; // eslint-disable-line
import tjson from 'enzyme-to-json';
import { mount } from 'enzyme';
import Button from '../index';

test('Button renders the text inside it', () => {
  const button = mount(
    <Button>Test</Button>
  );
  expect(button.hasClass('primary')).toEqual(true);
  expect(button.text()).toBe('Test');
  const tree = tjson(button);
  expect(tree).toMatchSnapshot();
});

test('Button renders value', () => {
  const button = mount(
    <Button value="30">Test</Button>
  );
  expect(button.hasClass('primary')).toEqual(true);
  expect(button.text()).toBe('Test');
  expect(button.find('button').props().value).toBe('30');
  const tree = tjson(button);
  expect(tree).toMatchSnapshot();
});

test('adds types', () => {
  const button = mount(
    <Button type="secondary">
      <p>Work</p>
    </Button>
  );
  expect(button.hasClass('secondary')).toEqual(true);
  expect(button.find('p').html()).toBe('<p>Work</p>');
  const tree = tjson(button);
  expect(tree).toMatchSnapshot();
});

test('adds types', () => {
  const button = mount(
    <Button type="ghost">
      <p>Ghost</p>
    </Button>
  );
  expect(button.hasClass('ghost')).toEqual(true);
  expect(button.find('p').html()).toBe('<p>Ghost</p>');
  const tree = tjson(button);
  expect(tree).toMatchSnapshot();
});

test('adds types', () => {
  const button = mount(
    <Button className="test">
      <p>Ghost</p>
    </Button>
  );
  expect(button.hasClass('test')).toEqual(true);
  expect(button.find('p').html()).toBe('<p>Ghost</p>');
  const tree = tjson(button);
  expect(tree).toMatchSnapshot();
});

test('calls on click function', () => {
  const test = jest.fn();
  const button = mount(
    <Button onClick={test} type="secondary">
      <p>Work</p>
    </Button>
  );
  button.simulate('click');
  expect(test).toHaveBeenCalled();
  const tree = tjson(button);
  expect(tree).toMatchSnapshot();
});
