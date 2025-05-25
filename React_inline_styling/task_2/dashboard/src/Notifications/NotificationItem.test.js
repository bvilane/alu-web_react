/**
 * @jest-environment jsdom
 */

import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';
import Notifications from './Notifications';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

describe('<NotificationItem />', () => {
  it('renders a <NotificationItem /> component', () => {
    const wrapper = shallow(<NotificationItem type="default" />);
    expect(wrapper).toHaveLength(1);
  });

  it('renders correctly with type and value props', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.props()['data-notification-type']).toEqual('default');
    expect(wrapper.text()).toEqual('test');
    expect(wrapper.html()).toContain('<li data-notification-type="default"');
    expect(wrapper.html()).toContain('test</li>');
  });

  it('renders correctly when html is passed instead of value', () => {
    const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
    expect(wrapper.html()).toContain('<u>test</u>');
  });

  it('calls markAsRead with the right id', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', value: 'Holberton Danger' },
    ];

    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance, 'markAsRead');

    const items = wrapper.find(NotificationItem);

    items.forEach((itemWrapper, index) => {
      const item = itemWrapper.dive();
      item.simulate('click');
      expect(spy).toBeCalledWith(index + 1); // IDs are 1-based
    });
  });
});
