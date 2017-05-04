import React from 'react';
import {shallow} from 'enzyme';
import NavBar from '../../src/components/NavBar';
import {Link} from 'react-router-dom';

describe('NavBarTest', () => {
    it('renders', () => {
        const wrapper = shallow(<NavBar />);
        expect(wrapper).to.exist;
    });

    it('has 5 links', () => {
        const wrapper = shallow(<NavBar />);
        expect(wrapper).to.have.exactly(5).descendants(Link);
    });
});
