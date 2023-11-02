import {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';

import { absence_entitlementsOps } from './absence_entitlements/absence_entitlementsOps';
import { absence_entitlementsExecute } from './absence_entitlements/absence_entitlementsExe';
import { availabilitiesOps } from './availabilities/availabilitiesOps';
import { availabilitiesExecute } from './availabilities/availabilitiesExe';
import { employmentsOps } from './employments/employmentsOps';
import { employmentsExecute } from './employments/employmentsExe';
import { employments_positionsOps } from './employments_positions/employments_positionsOps';
import { employments_positionsExecute } from './employments_positions/employments_positionsExe';
import { absencesOps } from './absences/absencesOps';
import { absencesExecute } from './absences/absencesExecute';
import { absence_reasonsOps } from './absence_reasons/absence_reasonsOps';
import { absence_reasonsExecute } from './absence_reasons/absence_reasonsExecute';
import { locationsOps } from './locations/locationOps';
import { locationsExecute } from './locations/locationsExecute';
import { companiesOps } from './companies/companiesOps';
import { companiesExecute } from './companies/companiesExe';
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
						name: 'Availability',
						value: 'availabilities',
					},
					{
						name: 'Company',
						value: 'companies',
					},
					{
						name: 'Employment',
						value: 'employments',
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

			/* absences Operations */
			...absencesOps,
			/* absences entitlements Operations */
			...absence_entitlementsOps,
			/* absence_reasons Operations */
			...absence_reasonsOps,
			/* availlabilities Operations */
			...availabilitiesOps,
			/* location Operations */
			...companiesOps,
			/* Employments Operations */
			...employmentsOps,
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
			// Employments
			if (resource === 'absences') {
				responseData = await absencesExecute(this, operation, i);
				returnData.push(responseData);
			}
			if (resource === 'absence_entitlements') {
				responseData = await absence_entitlementsExecute(this, operation, i);
				returnData.push(responseData);
			}
			if (resource === 'absence_reasons') {
				responseData = await absence_reasonsExecute(this, operation, i);
				returnData.push(responseData);
			}
			if (resource === 'availabilities') {
				responseData = await availabilitiesExecute(this, operation, i);
				returnData.push(responseData);
			}
			if (resource === 'companies') {
				responseData = await companiesExecute(this, operation, i);
				returnData.push(responseData);
			}
			if (resource === 'employments') {
				responseData = await employmentsExecute(this, operation, i);
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
