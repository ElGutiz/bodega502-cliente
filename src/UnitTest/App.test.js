/*http://81.95.233.163:8888/torrents/Testing%20Javascript%20with%20Kent%20C.%20Dodds/Printables/Transcript%20Prints/test-react-components-with-jest-and-react-testing-library.pdf*/
import React from 'react';
import ReactDOM from 'react-dom';
import {render, fireEvent } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
    it('should be defined', () => {
      expect(App).toBeDefined();
    });
    it('should render correctly', () => {
      const tree = shallow(
        <App name='App test' />
      );
      expect(tree).toMatchSnapshot();
    });
   });

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App></App>, div)
})



describe("Test App", () => {
    it("Suma",()=>{
        const {getByTestId,getByText}=render(<App />);
        fireEvent.click(getByText("8"))
        fireEvent.click(getByText("+"))
        fireEvent.click(getByText("8"))
        fireEvent.click(getByText("="))
        expect(getByTestId("input")).toHaveTextContent("16")
    })
    it("resta",()=>{
        const {getByTestId,getByText}=render(<App />);
        fireEvent.click(getByText("8"))
        fireEvent.click(getByText("-"))
        fireEvent.click(getByText("5"))
        fireEvent.click(getByText("="))
        expect(getByTestId("input")).toHaveTextContent("3")
    })

    it("Division",()=>{
        const {getByTestId,getByText}=render(<App />);
        fireEvent.click(getByText("2"))
        fireEvent.click(getByText("/"))
        fireEvent.click(getByText("2"))
        fireEvent.click(getByText("="))
        expect(getByTestId("input")).toHaveTextContent("1")
    })
    it("Multiplicacion",()=>{
        const {getByTestId,getByText}=render(<App />);
        fireEvent.click(getByText("2"))
        fireEvent.click(getByText("x"))
        fireEvent.click(getByText("2"))
        fireEvent.click(getByText("="))
        expect(getByTestId("input")).toHaveTextContent("4")
    })

    it("Mod",()=>{
        const {getByTestId,getByText}=render(<App />);
        fireEvent.click(getByText("3"))
        fireEvent.click(getByText("%"))
        fireEvent.click(getByText("1"))
        fireEvent.click(getByText("="))
        expect(getByTestId("input")).toHaveTextContent("0.03")
    })
    it("Simbolo",()=>{
        const {getByTestId,getByText}=render(<App />);
        fireEvent.click(getByText("1"))
        fireEvent.click(getByText("+/-"))
        expect(getByTestId("input")).toHaveTextContent("-1")
    })
    it("Puntos",()=>{
        const {getByTestId,getByText}=render(<App />);
        fireEvent.click(getByText("1"))
        fireEvent.click(getByText("."))
        fireEvent.click(getByText("0"))
        expect(getByTestId("input")).toHaveTextContent("1.0")
    })
});
