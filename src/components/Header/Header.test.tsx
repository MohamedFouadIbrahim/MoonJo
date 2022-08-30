import { render, screen, fireEvent } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import Header from '.';
import "@testing-library/jest-native/extend-expect";


describe('Testing Header ', () => {

    const title = 'test title'

    it('Test Header Text', async () => {
        render(<Header title={title} />)
        const headerText = await screen.findByTestId('headerTitle')
        expect(headerText).toHaveTextContent(title)
    })


    it('Test Header Left Icon', async () => {
        render(<Header title={title} />)
        const leftIcon = await screen.findByTestId('leftIcon')
        fireEvent.press(leftIcon)
    })


})