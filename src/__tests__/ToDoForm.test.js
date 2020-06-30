import React from 'react';
import { shallow } from 'enzyme';
import ToDoForm from '../components/ToDoForm';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('ToDoForm Test', () => {
  it('can test the elements', () => {
    let component = shallow(<ToDoForm />);

    expect(component.find('#main-form')).toBeDefined();
    expect(component.find('#submit-button')).toBeDefined();
  })
});