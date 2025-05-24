import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications'; // ✅ FIXED: use default import

describe('<Notifications />', () => {
    it('renders an <Notifications /> component', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper).toHaveLength(1);
    });
});
