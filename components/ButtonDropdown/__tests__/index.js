import React from 'react'; // eslint-disable-line
import tjson from 'enzyme-to-json';
import { mount } from 'enzyme';
import ButtonDropdown from '../index';

test('ButtonDropdown renders the text inside it', () => {
  const buttonDropdown = mount(
    <ButtonDropdown>Test</ButtonDropdown>
  );
  expect(buttonDropdown.hasClass('ButtonDropdownWrapper')).toEqual(true);
  expect(buttonDropdown.text()).toBe('▼');
  const tree = tjson(buttonDropdown);
  expect(tree).toMatchSnapshot();
});

test('ButtonDropdown renders children on click', () => {
  const buttonDropdown = mount(
    <ButtonDropdown>Test</ButtonDropdown>
  );
  buttonDropdown.find('.primary').simulate('click');
  expect(buttonDropdown.hasClass('ButtonDropdownWrapper')).toEqual(true);
  expect(buttonDropdown.text()).toBe('▲Test');
  const tree = tjson(buttonDropdown);
  expect(tree).toMatchSnapshot();
});

test('ButtonDropdown renders children on click', () => {
  const buttonDropdown = mount(
    <ButtonDropdown>
      <p>Test</p>
    </ButtonDropdown>
  );
  buttonDropdown.find('.primary').simulate('click');
  expect(buttonDropdown.hasClass('ButtonDropdownWrapper')).toEqual(true);
  expect(buttonDropdown.find('p').html()).toBe('<p>Test</p>');
  const tree = tjson(buttonDropdown);
  expect(tree).toMatchSnapshot();
});
