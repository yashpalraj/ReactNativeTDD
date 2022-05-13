import React from 'react';
import {Text} from 'react-native';
import {shallow} from 'enzyme';

describe('Text Smoke Test', () => {
  it('render Text', () => {
    const wrapper = shallow(<Text>Hello</Text>);
    expect(wrapper.text()).toEqual('Hello');
  });
});
