/**
 * @jest-environment jsdom
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';

describe('<App />', () => {
    it('renders an <App /> component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).toHaveLength(1);
    });

    it('renders <Notifications />', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Notifications)).toHaveLength(1);
    });

    it('renders <Header />', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Header)).toHaveLength(1);
    });

    it('renders <Login /> when isLoggedIn is false', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Login)).toHaveLength(1);
    });

    it('does not render <CourseList /> when isLoggedIn is false', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(CourseList)).toHaveLength(0);
    });

    it('renders <Footer />', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Footer)).toHaveLength(1);
    });

    it('does not render <Login /> when isLoggedIn is true', () => {
        const wrapper = shallow(<App isLoggedIn={true} />);
        expect(wrapper.find(Login)).toHaveLength(0);
    });

    it('renders <CourseList /> when isLoggedIn is true', () => {
        const wrapper = shallow(<App isLoggedIn={true} />);
        expect(wrapper.find(CourseList)).toHaveLength(1);
    });

    it('verifies that the user can log out using ctrl + h', () => {
        const events = {};
        window.addEventListener = jest.fn().mockImplementation((e, cb) => {
            events[e] = cb;
        });

        const props = {
            isLoggedIn: true,
            logOut: jest.fn(),
        };

        window.alert = jest.fn();

        // Use `mount` instead of `shallow` for lifecycle methods
        const wrapper = mount(<App {...props} />);

        // Simulate the keydown event
        events.keydown({ ctrlKey: true, key: 'h' });

        // Assertions
        expect(window.alert).toHaveBeenCalledWith("Logging you out");
        expect(props.logOut).toHaveBeenCalled();

        // Restore mocks
        window.alert.mockRestore();
    });
});
