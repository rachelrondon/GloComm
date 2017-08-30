import React from 'react';
import expect from 'expect';
import { shallow, mount, render } from 'enzyme';
const wrapper = shallow(<Foo />);
import sinon from 'sinon';

// import the component that you ar testing
import SelectFieldComponent from './SelectFieldComponent';


describe('SelectFieldComponent', () => {
 it('simulates click events', () => {
   const onClick = sinon.spy();

   <SelectFieldComponent onClick={onClick} />
 });
  wrapper.find('button').simulate('click');
  expect(onClick).to.have.property('callCount', 1);
});