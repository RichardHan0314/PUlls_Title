import React from 'react';

import { getDDMMMYYYY } from '../utils/time-helpers.utils';
import { formatNHSNumber } from '../utils/table-helpers/table.utils';

const CalendarIcon = () => <i className="fa fa-calendar" />;

export const patientsColumnsConfig = [
  { key: 'name', title: 'Name', width: 150 },
  { key: 'address', title: 'Address', width: 300 },
  { key: 'dateOfBirth', title: 'Born', transformer: getDDMMMYYYY, width: 105 },
  { key: 'gender', title: 'Gender', width: 90 },
  { key: 'id', title: 'NHS No.',transformer: formatNHSNumber, width: 115 },
  { key: 'ordersDate', title: 'Orders', icon: <CalendarIcon />, transformer: getDDMMMYYYY, width: 110 },
  { key: 'ordersCount', title: 'Orders ', icon: <span>#</span>, width: 100 },
  { key: 'resultsDate', title: 'Results', icon: <CalendarIcon />, transformer: getDDMMMYYYY, width: 110 },
  { key: 'resultsCount', title: 'Results ', icon: <span>#</span>, width: 100 },
  { key: 'vitalsDate', title: 'Vitals', icon: <CalendarIcon />, transformer: getDDMMMYYYY, width: 110 },
  { key: 'vitalsCount', title: 'Vitals ', icon: <span>#</span>, width: 100 },
  { key: 'diagnosesDate', title: 'Diagnoses', icon: <CalendarIcon />, transformer: getDDMMMYYYY, width: 130 },
  { key: 'diagnosesCount', title: 'Diagnoses ', icon: <span>#</span>, width: 120 },
  { key: 'viewPatientNavigation', title: '', icon: <span />, width: 100 },
];

export const defaultColumnsSelected = {
  name: true,
  gender: true,
  dateOfBirth: true,
  address: true,
  id: true,
  ordersDate: true,
  resultsDate: true,
  vitalsDate: false,
  diagnosesDate: false,
  ordersCount: true,
  resultsCount: true,
  vitalsCount: false,
  diagnosesCount: false,
  viewPatientNavigation: true,
};
