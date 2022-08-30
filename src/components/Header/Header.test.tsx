import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import Header from '.';

describe('Testing Header ', () => {

    const header = render(<Header />)

    it('Should Header Text', async () => {
        const headerText = await header.findByTestId('header')
        expect(headerText.props.children).toBe('Header')
    })
    
})