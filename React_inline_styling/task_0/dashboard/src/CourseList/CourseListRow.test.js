import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('<CourseListRow />', () => {
  it('renders an <CourseListRow /> component', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="Cell 1" />);
    expect(wrapper).toHaveLength(1);
  });

  it('renders one cell with colspan = 2 when isHeader is true and textSecondCell is null', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header 1" />);
    const th = wrapper.find('th');
    expect(th).toHaveLength(1);
    expect(th.prop('colSpan')).toBe(2);
    expect(th.text()).toBe('Header 1');
  });

  it('renders two th elements when isHeader is true and textSecondCell is provided', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="Header 1" textSecondCell="Header 2" />
    );
    const th = wrapper.find('th');
    expect(th).toHaveLength(2);
    expect(th.at(0).text()).toBe('Header 1');
    expect(th.at(1).text()).toBe('Header 2');
  });

  it('renders two td elements when isHeader is false', () => {
    const wrapper = shallow(
      <CourseListRow textFirstCell="Data 1" textSecondCell="Data 2" />
    );
    const td = wrapper.find('td');
    expect(td).toHaveLength(2);
    expect(td.at(0).text()).toBe('Data 1');
    expect(td.at(1).text()).toBe('Data 2');
  });
});
