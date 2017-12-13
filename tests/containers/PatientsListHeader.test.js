import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

import PatientsListHeader from '../../src/components/containers/PatientsList/header/PatientsListHeader';

Enzyme.configure({ adapter: new Adapter() });
const onChange = () => {};

describe('Component <PatientsListHeader />', () => {
  it('should renders correctly', () => {
    const patientsListHeader = shallow(
      <PatientsListHeader />
    );
    expect(patientsListHeader.state().isPatientInfoPanelVisible).toEqual(false);
    expect(patientsListHeader.state().isFilterInputVisible).toEqual(false);
    expect(patientsListHeader).toMatchSnapshot();

    patientsListHeader.find('.open').simulate('click');
    expect(patientsListHeader.state().isPatientInfoPanelVisible).toEqual(true);
    expect(patientsListHeader.state().isFilterInputVisible).toEqual(false);
    expect(patientsListHeader).toMatchSnapshot();

    patientsListHeader.find('.btn-filter').simulate('click');
    expect(patientsListHeader.state().isPatientInfoPanelVisible).toEqual(true);
    expect(patientsListHeader.state().isFilterInputVisible).toEqual(true);
    expect(patientsListHeader).toMatchSnapshot();
  });
});

