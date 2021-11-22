import React from 'react';
import ReactDOM from 'react-dom';
import Input from './Input';
import { shallow } from 'enzyme';

describe('Test Button component', () => {
  it('Test click event', () => {
    const mockCallBack = jest.fn();

    const button = shallow((<Input onClick={mockCallBack}>Ok!</Input>));
    button.find('input');
    expect(mockCallBack.mock.calls.length).toEqual(0);
  });
});
it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Input></Input>, div)
})

describe('Input', () => {
  it('should be defined', () => {
    expect(Input).toBeDefined();
  });
 });