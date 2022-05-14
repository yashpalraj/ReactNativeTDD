import React from 'react';
import {shallow} from 'enzyme';
import Domain from '../../Domain';

describe('Domain Modal Test', () => {
  function testID(id) {
    return component => component.props().testID === id;
  }
  const messageText = 'Effezzient';
  const handleDomainPressed = jest.fn();
  it('can handle Domain Button with Username & Password', () => {
    const wrapper = shallow(<Domain onDomainEntered={handleDomainPressed} />);

    wrapper
      .findWhere(testID('domainTextInput'))
      .simulate('changeText', messageText);

    wrapper.findWhere(testID('buttonDomain')).simulate('press');

    expect(handleDomainPressed).toHaveBeenCalledWith(messageText);
  });
});
