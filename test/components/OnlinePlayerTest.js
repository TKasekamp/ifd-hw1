import React from 'react';
import {shallow} from 'enzyme';

import NumberResult from '../../src/components/NumberResult';
import OnlinePlayer from '../../src/components/OnlinePlayer';

describe('OnlinePlayer', () => {

    it('renders with you if is player', () => {
        const result = shallow(<OnlinePlayer key="1"
                                             isPlayer={true} name="QWERTY"/>);
        expect(result).to.include.text('QWERTY');
        expect(result).to.include.text('(you)');
    });

    it('renders with you if is player', () => {
        const result = shallow(<OnlinePlayer key="1"
                                             isPlayer={false} name="QWERTY"/>);
        expect(result).to.include.text('QWERTY');
        expect(result).to.not.include.text('(you)');
    });

});
