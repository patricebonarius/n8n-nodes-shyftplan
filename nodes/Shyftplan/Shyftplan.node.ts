import {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';

import { absence_entitlementsOps } from './absence_entitlements/absence_entitlementsOps';
import { absence_entitlementsExecute } from './absence_entitlements/absence_entitlementsExe';
import { absence_reasonsOps } from './absence_reasons/absence_reasonsOps';
import { absence_reasonsExecute } from './absence_reasons/absence_reasonsExe';
import { absencesOps } from './absences/absencesOps';
import { absencesExecute } from './absences/absencesExe';
import { assignment_groupsOps } from './assignment_groups/assignment_groupsOps';
import { assignment_groupsExecute } from './assignment_groups/assignment_groupsExe';
import { availabilitiesOps } from './availabilities/availabilitiesOps';
import { availabilitiesExecute } from './availabilities/availabilitiesExe';
import { availability_aggregationsOps } from './availability_aggregations/availability_aggregationsOps';
import { availability_aggregationsExecute } from './availability_aggregations/availability_aggregationsExe';
import { background_jobsOps } from './background_jobs/background_jobsOps';
import { background_jobsExecute } from './background_jobs/background_jobsExe';
import { calendarOps } from './calendar/calendarOps';
import { calendarExecute } from './calendar/calendarExe';
import { chat_messagesOps } from './chat_messages/chat_messagesOps';
import { chat_messagesExecute } from './chat_messages/chat_messagesExe';
import { companiesOps } from './companies/companiesOps';
import { companiesExecute } from './companies/companiesExe';
import { custom_fieldsOps } from './custom_fields/custom_fieldsOps';
import { custom_fieldsExecute } from './custom_fields/custom_fieldsExe';
import { employee_evaluationsOps } from './employee_evaluations/employee_evaluationsOps';
import { employee_evaluationsExecute } from './employee_evaluations/employee_evaluationsExe';
import { employmentsOps } from './employments/employmentsOps';
import { employmentsExecute } from './employments/employmentsExe';
import { employments_paygradesOps } from './employments_paygrades/employments_paygradesOps';
import { employments_paygradesExecute } from './employments_paygrades/employments_paygradesExe';
import { employments_positionsOps } from './employments_positions/employments_positionsOps';
import { employments_positionsExecute } from './employments_positions/employments_positionsExe';
import { employments_rotation_groupsOps } from './employments_rotation_groups/employments_rotation_groupsOps';
import { employments_rotation_groupsExecute } from './employments_rotation_groups/employments_rotation_groupsExe';
import { evaluation_breaksOps } from './evaluation_breaks/evaluation_breaksOps';
import { evaluation_breaksExecute } from './evaluation_breaks/evaluation_breaksExe';
import { evaluationsOps } from './evaluations/evaluationsOps';
import { evaluationsExecute } from './evaluations/evaluationsExe';
import { individual_rotationsOps } from './individual_rotations/individual_rotationsOps';
import { individual_rotationsExecute } from './individual_rotations/individual_rotationsExe';
import { languagesOps } from './languages/languagesOps';
import { languagesExecute } from './languages/languagesExe';
import { live_staff_shiftsOps } from './live_staff_shifts/live_staff_shiftsOps';
import { live_staff_shiftsExecute } from './live_staff_shifts/live_staff_shiftsExe';
import { locationsOps } from './locations/locationsOps';
import { locationsExecute } from './locations/locationsExe';
import { loginOps } from './login/loginOps';
import { loginExecute } from './login/loginExe';
import { newsfeedsOps } from './newsfeeds/newsfeedsOps';
import { newsfeedsExecute } from './newsfeeds/newsfeedsExe';
import { notification_configurationsOps } from './notification_configurations/notification_configurationsOps';
import { notification_configurationsExecute } from './notification_configurations/notification_configurationsExe';
import { paygrade_typesOps } from './paygrade_types/paygrade_typesOps';
import { paygrade_typesExecute } from './paygrade_types/paygrade_typesExe';
import { paymentsOps } from './payments/paymentsOps';
import { paymentsExecute } from './payments/paymentsExe';
import { payslipsOps } from './payslips/payslipsOps';
import { payslipsExecute } from './payslips/payslipsExe';
import { positionsOps } from './positions/positionsOps';
import { positionsExecute } from './positions/positionsExe';
import { punch_timingsOps } from './punch_timings/punch_timingsOps';
import { punch_timingsExecute } from './punch_timings/punch_timingsExe';
import { qualificationsOps } from './qualifications/qualificationsOps';
import { qualificationsExecute } from './qualifications/qualificationsExe';

import { shiftsOps } from './shifts/shiftsOps';
import { shiftsExecute } from './shifts/shiftsExe';
import { staff_shiftsOps } from './staff_shifts/staff_shiftsOps';
import { staff_shiftsExecute } from './staff_shifts/staff_shiftsExe';
import { shiftplansOps } from './shiftplans/shiftplansOps';
import { shiftplansExecute } from './shiftplans/shiftplansExe';

export class Shyftplan implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Shyftplan',
		name: 'Shyftplan',
		// eslint-disable-next-line n8n-nodes-base/node-class-description-icon-not-svg
		icon: 'file:shyftplan-icon.png',
		group: ['transform'],
		version: 1,
		description: 'Consume Shyfplan Beta API',
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		defaults: {
			name: 'Shyftplan',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'shyftplanApi',
				required: true,
			},
		],

		// Basic node details will go here
		properties: [
			// Resources and operations will go here
			// First Resource Objects - The things to operate on
			{
				displayName: 'Resource',
				name: 'resource',
				// type tells which type of data to expect from user
				// options result in a drop down
				type: 'options',
				options: [
					{
						name: 'Absence',
						value: 'absences',
					},
					{
						name: 'Absence Entitlement',
						value: 'absence_entitlements',
					},
					{
						name: 'Absence Reason',
						value: 'absence_reasons',
					},
					{
						name: 'Assignment Group',
						value: 'assignment_groups',
					},
					{
						name: 'Availability',
						value: 'availabilities',
					},
					{
						name: 'Availability Aggregations',
						value: 'availability_aggregations',
					},
					{
						name: 'Background Jobs',
						value: 'background_jobs',
					},
					{
						name: 'Calendar',
						value: 'calendar',
					},
					{
						name: 'Chat Messages',
						value: 'chat_messages',
					},
					{
						name: 'Company',
						value: 'companies',
					},
					{
						name: 'Custom Field',
						value: 'custom_fields',
					},
					{
						name: 'Employee Evaluation',
						value: 'employee_evaluations',
					},
					{
						name: 'Employment',
						value: 'employments',
					},
					{
						name: 'Employment Paygrades',
						value: 'employments_paygrades',
					},
					{
						name: 'Employment Position',
						value: 'employments_positions',
					},
					{
						name: 'Employment Rotation Groups',
						value: 'employments_rotation_groups',
					},
					{
						name: 'Evaluation Break',
						value: 'evaluation_breaks',
					},
					{
						name: 'Evaluation',
						value: 'evaluations',
					},
					{
						name: 'Individual Rotation',
						value: 'individual_rotations',
					},
					{
						name: 'Language',
						value: 'language',
					},
					{
						name: 'Live Staff Shift',
						value: 'live_staff_shifts',
					},
					{
						name: 'Location',
						value: 'locations',
					},
					{
						name: 'Log In',
						value: 'login',
					},
					{
						name: 'Notification Configuration',
						value: 'notification_configurations',
					},
					{
						name: 'Paygrade Type',
						value: 'paygrade_types',
					},
					{
						name: 'Payment',
						value: 'payments',
					},
					{
						name: 'Payslips',
						value: 'payslips',
					},
					{
						name: 'Position',
						value: 'positions',
					},
					{
						name: 'Punch Timing',
						value: 'punch_timings',
					},
					{
						name: 'Qualifications',
						value: 'qualifications',
					},

					{
						name: 'Shift',
						value: 'shifts',
					},
					{
						name: 'Staff Shift',
						value: 'staff_shifts',
					},
					{
						name: 'Shiftplan',
						value: 'shiftplans',
					},
				],
				default: 'employments',
				noDataExpression: true,
				required: true,
				description: 'Choose a resource / endpoint',
			},

			/* absences entitlements Operations */
			...absence_entitlementsOps,
			/* absence_reasons Operations */
			...absence_reasonsOps,
			/* absences Operations */
			...absencesOps,
			...assignment_groupsOps,
			/* availlabilities Operations */
			...availabilitiesOps,
			/* availability_aggregations Operations */
			...availability_aggregationsOps,
			/* background Jobs Operations */
			...background_jobsOps,
			/* calendar Operations */
			...calendarOps,
			/* chat message Operations */
			...chat_messagesOps,
			/* company OPS */
			...companiesOps,
			/* custom fields ops */
			...custom_fieldsOps,
			/* employee Evaluations Operations */
			...employee_evaluationsOps,
			/* Employments Operations */
			...employmentsOps,
			/* Employments Paygrades Operations */
			...employments_paygradesOps,
			/* Employments Operations */
			...employments_positionsOps,
			/* rotation group Operations */
			...employments_rotation_groupsOps,
			/* evaluation breaks Operations */
			...evaluation_breaksOps,
			/* evaluations Operations */
			...evaluationsOps,
			/* individual rotations Operations */
			...individual_rotationsOps,
			/* language Operations */
			...languagesOps,
			/* live staff shifts Operations */
			...live_staff_shiftsOps,
			/* location Operations */
			...locationsOps,
			/* login Operations */
			...loginOps,
			/* newsfeeds Operations */
			...newsfeedsOps,
			/* notification configs Operations */
			...notification_configurationsOps,
			/* location Operations */
			...paygrade_typesOps,
			/* payments Operations */
			...paymentsOps,
			/* payslips Operations */
			...payslipsOps,
			/* positions Operations */
			...positionsOps,
			/* punch timings Operations */
			...punch_timingsOps,
			/* qualifcations Operations */
			...qualificationsOps,

			/* shifts Operations */
			...shiftsOps,
			/* staff shifts Operations */
			...staff_shiftsOps,
			/* shiftplan Operations */
			...shiftplansOps,
		],
	};

	// The execute method will go here
	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		// Handle data coming from previous nodes
		const items = this.getInputData();
		// Get the std credentials
		//const credentials = await this.getCredentials('shyftplanApi');
		let responseData;
		let returnData = [];

		// get the chosen resource (aka endpoint) and operation(aka CRUD)
		const resource = this.getNodeParameter('resource', 0) as string;
		const operation = this.getNodeParameter('operation', 0) as string;

		// For each item from incoming data, make an API call to create an employee
		// <= to run at least once
		for (let i = 0; i < items.length; i++) {
			if (resource === 'absence_entitlements') {
				responseData = await absence_entitlementsExecute(this, operation, i);
				returnData.push(responseData);
			}
			if (resource === 'absence_reasons') {
				responseData = await absence_reasonsExecute(this, operation, i);
				returnData.push(responseData);
			}
			if (resource === 'absences') {
				responseData = await absencesExecute(this, operation, i);
				returnData.push(responseData);
			}
			if (resource === 'assignment_groups') {
				responseData = await assignment_groupsExecute(this, operation, i);
				returnData.push(responseData);
			}
			if (resource === 'availabilities') {
				responseData = await availabilitiesExecute(this, operation, i);
				returnData.push(responseData);
			}
			if (resource === 'availability_aggregations') {
				responseData = await availability_aggregationsExecute(this, operation, i);
				returnData.push(responseData);
			}
			if (resource === 'background_jobs') {
				responseData = await background_jobsExecute(this, operation, i);
				returnData.push(responseData);
			}
			if (resource === 'calendar') {
				responseData = await calendarExecute(this, operation, i);
				returnData.push(responseData);
			}
			if (resource === 'chat_messages') {
				responseData = await chat_messagesExecute(this, operation, i);
				returnData.push(responseData);
			}
			if (resource === 'companies') {
				responseData = await companiesExecute(this, operation, i);
				returnData.push(responseData);
			}
			if (resource === 'custom_fields') {
				responseData = await custom_fieldsExecute(this, operation, i);
				returnData.push(responseData);
			}
			if (resource === 'employee_evaluations') {
				responseData = await employee_evaluationsExecute(this, operation, i);
				returnData.push(responseData);
			}
			if (resource === 'employments') {
				responseData = await employmentsExecute(this, operation, i);
				returnData.push(responseData);
			}
			if (resource === 'employments_paygrades') {
				responseData = await employments_paygradesExecute(this, operation, i);
				returnData.push(responseData);
			}
			if (resource === 'employments_positions') {
				responseData = await employments_positionsExecute(this, operation, i);
				returnData.push(responseData);
			}
			if (resource === 'employments_rotation_groups') {
				responseData = await employments_rotation_groupsExecute(this, operation, i);
				returnData.push(responseData);
			}
			if (resource === 'evaluation_breaks') {
				responseData = await evaluation_breaksExecute(this, operation, i);
				returnData.push(responseData);
			}
			if (resource === 'evaluations') {
				responseData = await evaluationsExecute(this, operation, i);
				returnData.push(responseData);
			}
			if (resource === 'individual_rotations') {
				responseData = await individual_rotationsExecute(this, operation, i);
				returnData.push(responseData);
			}
			if (resource === 'language') {
				responseData = await languagesExecute(this, operation, i);
				returnData.push(responseData);
			}
			if (resource === 'live_staff_shifts') {
				responseData = await live_staff_shiftsExecute(this, operation, i);
				returnData.push(responseData);
			}
			if (resource === 'locations') {
				responseData = await locationsExecute(this, operation, i);
				returnData.push(responseData);
			}
			if (resource === 'login') {
				responseData = await loginExecute(this, operation, i);
				returnData.push(responseData);
			}
			if (resource === 'newsfeeds') {
				responseData = await newsfeedsExecute(this, operation, i);
				returnData.push(responseData);
			}
			if (resource === 'notification_configurations') {
				responseData = await notification_configurationsExecute(this, operation, i);
				returnData.push(responseData);
			}
			if (resource === 'paygrade_types') {
				responseData = await paygrade_typesExecute(this, operation, i);
				returnData.push(responseData);
			}
			if (resource === 'payments') {
				responseData = await paymentsExecute(this, operation, i);
				returnData.push(responseData);
			}
			if (resource === 'payslips') {
				responseData = await payslipsExecute(this, operation, i);
				returnData.push(responseData);
			}
			if (resource === 'positions') {
				responseData = await positionsExecute(this, operation, i);
				returnData.push(responseData);
			}
			if (resource === 'punch_timings') {
				responseData = await punch_timingsExecute(this, operation, i);
				returnData.push(responseData);
			}
			if (resource === 'qualifications') {
				responseData = await qualificationsExecute(this, operation, i);
				returnData.push(responseData);
			}

			if (resource === 'shifts') {
				responseData = await shiftsExecute(this, operation, i);
				returnData.push(responseData);
			}
			if (resource === 'staff_shifts') {
				responseData = await staff_shiftsExecute(this, operation, i);
				returnData.push(responseData);
			}
			if (resource === 'shiftplans') {
				responseData = await shiftplansExecute(this, operation, i);
				returnData.push(responseData);
			}
		}
		// Map data to n8n data structure
		return [this.helpers.returnJsonArray(returnData)];
	}
}
