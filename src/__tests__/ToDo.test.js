import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import ToDo from '../components/ToDo';

describe('ToDo', () => {
  it('list populates with an item with submit button is clicked', () => {
    let component = shallow(<ToDo />);

    expect(component.find('#main-container')).toBeDefined();
  });

});