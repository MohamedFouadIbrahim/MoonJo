/**
 * @format
 */

import 'react-native';
import React from 'react';
import Header from '../Header';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';


describe('Header', () => {

    it('render test', () => {
        const header = renderer.create(<Header />);
        const headerText = header.root.findByProps({ testID: 'header' });
        expect(headerText.props.children).toBe('Header');
    })

})