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
import { locationsOps } from './locations/locationOps';
import { locationsExecute } from './locations/locationsExecute';
import { paygrade_typesOps } from './paygrade_types/paygrade_typesOps';
import { paygrade_typesExe } from './paygrade_types/paygrade_typesExe';
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
						name: 'Location',
						value: 'locations',
					},
					{
						name: 'Paygrade Type',
						value: 'paygrade_types',
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
			/* location Operations */
			...locationsOps,
			/* location Operations */
			...paygrade_typesOps,
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
			if (resource === 'locations') {
				responseData = await locationsExecute(this, operation, i);
				returnData.push(responseData);
			}
			if (resource === 'paygrade_types') {
				responseData = await paygrade_typesExe(this, operation, i);
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
