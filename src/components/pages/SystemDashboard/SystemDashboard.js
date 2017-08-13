import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { lifecycle } from 'recompose';
import { Row, Col } from 'react-bootstrap';

import PTPanel from '../../presentational/PTPanel/PTPanel';
import PatientsChart from '../../containers/PatientsChart/PatientsChart';
import patientsSelector from './selectors';
import { fetchPatientsRequest } from '../../../ducks/feth-patients.duck';
import { patientsDepartments, patientsAges } from '../../../config/patients.constants';

const fetchPatientsOnMount = ({
  componentDidMount() {
    this.props.actions.fetchPatientsRequest()
  },
});

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators({ fetchPatientsRequest }, dispatch) });

@connect(patientsSelector, mapDispatchToProps)
@lifecycle(fetchPatientsOnMount)
export default class SystemDashboard extends PureComponent {
  static propTypes = {
    patientsByAge: PropTypes.arrayOf(PropTypes.array).isRequired,
    patientsByDepartment: PropTypes.arrayOf(PropTypes.array).isRequired,
  };

  render() {
    const { patientsByAge, patientsByDepartment } = this.props;

    return (
      <section className="page-wrapper">
        <Row>
          <Col xs={12}>
            <PTPanel header={<h3 className="panel-title"><i className="fa fa-bar-chart" /> Patients By Settings</h3>}>
              <PatientsChart
                title="Patients By Setting"
                subTitle="This is a brief description of patients by setting."
                patients={patientsByDepartment}
                labels={patientsDepartments}
                borderColor="rgba(36, 161, 116,1)"
                backgroundColor="rgba(36, 161, 116,0.3)"
              />
            </PTPanel>
            <PTPanel header={<h3 className="panel-title"><i className="fa fa-bar-chart" /> Patients By Age</h3>}>
              <PatientsChart
                title="Patients By Age"
                subTitle="This is a brief description of patients by age."
                patients={patientsByAge}
                labels={patientsAges.map(({ name }) => name)}
                borderColor="rgba(126, 41, 205,1)"
                backgroundColor="rgba(126, 41, 205,0.3)"
              />
            </PTPanel>
          </Col>
        </Row>
      </section>)
  }
}
