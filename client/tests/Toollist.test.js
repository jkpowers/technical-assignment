import { shallow } from 'enzyme';
import React from 'react';
import Toollist from '../src/Toollist';

describe('Toollist', () => {
  let wrapper;

  describe('when tools is empty', () => {
    beforeEach(() => {
      wrapper = shallow(
        <Toollist
          tools={[]}
        />,
      );
    });

    it('should not display any tools', () => {
      let elTool = wrapper.find('Tool');
      expect(
        wrapper.find('Tool').length,
      ).toEqual(0);
    });
  });

  describe('when tools are present', () => {
    const tools = [
      {
        name: 'Angular'
      },
      {
        name: 'Bootstrap'
      },
    ];

    beforeEach(() => {
      wrapper = shallow(
        <Toollist
          tools={tools}
        />,
      );
    });

    it('should d in the table', () => {
      let elTool = wrapper.find('Tool');
      expect(
        wrapper.find('Tool').length,
      ).toEqual(2);
    });
  });
});
