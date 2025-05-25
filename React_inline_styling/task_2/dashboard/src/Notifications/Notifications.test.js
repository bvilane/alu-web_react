import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
    jest.clearAllMocks();
});

const htmlObj = getLatestNotification();

const listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: htmlObj },
];

describe('<Notifications />', () => {
    it('renders an <Notifications /> component', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper).toHaveLength(1);
    });

    it('does display the menuItem when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);
        expect(wrapper.find('#menuItem')).toHaveLength(1);
    });

    it('does not display the menuItem when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('#menuItem')).toHaveLength(0);
    });

    it('does not display div#Notifications when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);
        expect(wrapper.find('#Notifications')).toHaveLength(0);
    });

    it('does display div#Notifications when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('#Notifications')).toHaveLength(1);
    });

    it('renders 3 NotificationItems when listNotifications has 3 items', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
        expect(wrapper.find(NotificationItem)).toHaveLength(3);
    });

    it('renders correctly with empty listNotifications', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
        expect(wrapper.find('#Notifications')).toHaveLength(1);
    });

    it('renders correctly with no listNotifications prop', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('#Notifications')).toHaveLength(1);
    });

    it('displays correct message when no notifications', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('#Notifications p').text()).toEqual('No new notification for now');
    });

    it('displays correct message when there are notifications', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
        expect(wrapper.find('#Notifications p').text()).toEqual('Here is the list of notifications');
    });

    it('calls markAsRead with correct ID and logs it', () => {
        const spy = jest.spyOn(console, 'log').mockImplementation(() => {});
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
        const instance = wrapper.instance();
        instance.markAsRead(1);
        expect(spy).toHaveBeenCalledWith('Notification 1 has been marked as read');
        spy.mockRestore();
    });
});
