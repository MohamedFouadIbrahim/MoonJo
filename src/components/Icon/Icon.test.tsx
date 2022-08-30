import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import Icon from '.';

describe('Testing Icon ', () => {
    const icoName = 'magnifying-glass'

    it('render Icon', () => {
        render(<Icon name={icoName} />)
    })

})