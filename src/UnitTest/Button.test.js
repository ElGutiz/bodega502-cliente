import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';

import { shallow } from 'enzyme';

describe('Test Button component', () => {
  it('Test click event', () => {
    const mockCallBack = jest.fn();

    const button = shallow((<Button onClick={mockCallBack}>Ok!</Button>));
    button.find('button');
    expect(mockCallBack.mock.calls.length).toEqual(0);
  });
});

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button></Button>, div)
});

describe('Button', () => {
    it('should be defined', () => {
      expect(Button).toBeDefined();
    });
   });