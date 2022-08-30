import { render, screen } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import Header from '.';

describe('Testing Header ', () => {

    render(<Header />)

    it('Should Header Text', async () => { 
        const headerText = await screen.findByTestId('header')
        expect(headerText.children[0]).toBe('Header')
    })

})