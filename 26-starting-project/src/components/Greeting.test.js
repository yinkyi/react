import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting Component',()=>{
    test('render Hello World as a text',()=>{
        // Arrange
        render(<Greeting/>);
        //Act
        //...nothing

        //Assert
        const helloWorldElement=screen.getByText("Hello World",{exact:false});
        expect(helloWorldElement).toBeInTheDocument();
    })

    test('render Nice To Meet You as a text',()=>{
        // Arrange
        render(<Greeting/>);
        //Act
        //...nothing       
        //Assert
        const outputElement=screen.getByText("Nice To Meet You");
        expect(outputElement).toBeInTheDocument();
    })

    test('render Changed as a text when button click',()=>{
        // Arrange
        render(<Greeting/>);
        //Act
        //...nothing
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
        //Assert
        const outputElement=screen.getByText("Changed!");
        expect(outputElement).toBeInTheDocument();
    })
    test('not to render "Nice To Meet You" if button click',()=>{
        // Arrange
        render(<Greeting/>);
        //Act
        //...nothing
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
        //Assert
        const outputElement=screen.queryByText("Nice To Meet You");
        expect(outputElement).toBeNull();
    })
})
