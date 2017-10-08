import { shallow, mount } from 'enzyme';
import React from 'react';
import Tool from '../src/Tool';
import sinon from 'sinon';

describe('Tool', () => {
  let wrapper;
  let handleToolChangeStub;

  describe('when tools are present', () => {
    const tool = [
      {
        name: 'Angular',
        rating: undefined,
      }
    ];

    const onToolChange = (tool, changes) => {
      console.log('*** on Tool Change')
    };

    beforeEach(() => {
      wrapper = shallow(
        <Tool
          tool={tool}
          onToolChange={onToolChange}/>
      );
    });

    it('Should have two choices to select', () => {
      expect(
        wrapper.find('.selectable').length
      ).toEqual(2);
    });

  });
});
