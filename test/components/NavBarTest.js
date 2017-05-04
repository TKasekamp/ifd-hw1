import React from 'react';
import {shallow} from 'enzyme';
import NavBar from '../../src/components/NavBar';

describe('NavBarTest', () => {
    it('renders', () => {
        const wrapper = shallow(<NavBar />);
        expect(wrapper).to.exist;
    });
});
