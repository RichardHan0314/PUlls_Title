import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux';

import fetchInitialiseReducer from './ducks/fetch-initialise.duck'
import setCredentialsREducer from './ducks/set-credentials.duck'
import fetchPatientsReducer from './ducks/feth-patients.duck'
import fetchPatientCountsReducer from './ducks/fetch-patient-counts.duck'
import fetchUserAccountReducer from './ducks/fetch-user-account.duck'
import fetchBasicPatientSearchReducer from './ducks/fetch-basic-patient-search.duck'

const rootReducer = combineReducers({
  router: routerReducer,
  initialiseData: fetchInitialiseReducer,
  credentials: setCredentialsREducer,
  patients: fetchPatientsReducer,
  patientsCounts: fetchPatientCountsReducer,
  userAccount: fetchUserAccountReducer,
  basicSearchPatient: fetchBasicPatientSearchReducer,
});

export default rootReducer;
