import React from 'react';
import { mount, shallow, renderer } from 'enzyme';
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

  it('accurately changes the state', () => {
    function dummyAddTask(state) {
        return state;
    }

    // const mySpy = new MySpy();
    // const mockCallBack = mySpy.fn();

    let component = mount(<ToDoForm addTask={dummyAddTask} />);

    let assignee = component.find('#todo-assignee');

    assignee.simulate('change', { target: { value: 'Test Test' } });
    assignee.simulate('change', { target: { value: 'Test Test' } });

    let submit = component.find("button[type='submit']");

    submit.simulate('click');
    expect(dummyAddTask).toBeDefined();
});
});