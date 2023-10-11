import {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	IDataObject,
} from 'n8n-workflow';

import { OptionsWithUri } from 'request';

export class Shyftplan implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Shyftplan',
		name: 'shyftPlan',
		// eslint-disable-next-line n8n-nodes-base/node-class-description-icon-not-svg
		icon: 'file:shyftplan-icon.png',
		group: ['transform'],
		version: 1,
		description: 'Consume Shyfplan Beta API',
		defaults: {
			name: 'Shyftplan',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'ShyftplanApi',
				required: true,
			},
		],

		// Basic node details will go here
		properties: [
			// Resources and operations will go here

			// Resource Object - The thing to operate on
			{
				displayName: 'Resource',
				name: 'resource',
				// type tells which type of data to expect from user
				// options result in a drop down
				type: 'options',
				options: [
					{
						name: 'Employment',
						value: 'employment',
					},
				],
				default: 'employment',
				noDataExpression: true,
				required: true,
				description: 'Create a new employee',
			},
			// the operations CRUD and more

			// CREATE OPERATION
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				displayOptions: {
					show: {
						resource: ['employment'],
					},
				},
				options: [
					{
						name: 'Create',
						value: 'create',
						description: 'Create an employee',
						action: 'Create an employee',
					},
				],
				default: 'create',
				noDataExpression: true,
			},

			/* --- Required Fields --- */
			{
				displayName: 'Company Number',
				name: 'company_id',
				type: 'number',
				required: true,
				displayOptions: {
					show: {
						operation: ['create'],
						resource: ['employment'],
					},
				},
				default: '',
				placeholder: 'company_id',
				description: 'Please enter the company number',
			},
			{
				displayName: 'First Name',
				name: 'first_name',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						operation: ['create'],
						resource: ['employment'],
					},
				},
				default: '',
				placeholder: 'name@email.com',
				description: 'Please enter the employees firstname',
			},
			{
				displayName: 'Last Name',
				name: 'last_name',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						operation: ['create'],
						resource: ['employment'],
					},
				},
				default: '',
				placeholder: 'lastname',
				description: 'Please enter the employees surname',
			},

			/* --- Optional or Additional Fields --- */
			{
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				displayOptions: {
					show: {
						resource: ['employment'],
						operation: ['create'],
					},
				},
				options: [
					{
						displayName: 'Is Payed Monthly',
						name: 'is_paid_monthly',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'Phone Number',
						name: 'phone_number',
						type: 'string',
						default: '',
					},
					{
						displayName: 'Email',
						name: 'email',
						type: 'string',
						default: '',
						placeholder: 'name@email.com',
					},
					{
						displayName: 'Note',
						name: 'note',
						type: 'string',
						default: '',
					},
					{
						displayName: 'Billing Type Number',
						name: 'billing_type_id',
						type: 'number',
						default: '',
					},
				],
			},
		],
	};
	// The execute method will go here
	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		// Handle data coming from previous nodes
		const items = this.getInputData();
		let responseData;
		const returnData = [];
		const resource = this.getNodeParameter('resource', 0) as string;
		const operation = this.getNodeParameter('operation', 0) as string;

		// For each item, make an API call to create an employee
		for (let i = 0; i < items.length; i++) {
			if (resource === 'employments') {
				if (operation === 'create') {
					// Get inputs
					const company = this.getNodeParameter('company_id', i) as number;
					const first_name = this.getNodeParameter('first_name', i) as string;
					const last_name = this.getNodeParameter('last_name', i) as string;
					// Get additional fields input
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;
					const data: IDataObject = {
						company,
						first_name,
						last_name,
					};
					// put it together
					Object.assign(data, additionalFields);

					// Make HTTP request according to https://shyftplan.com/swagger/index.html#/employments/
					const options: OptionsWithUri = {
						headers: {
							Accept: 'application/json',
						},
						method: 'PUT',
						body: {
							employments: [data],
						},
						uri: `https://release.sppt-beta.com/api/v2/employments`,
						json: true,
					};
					// use Credentials here
					responseData = await this.helpers.requestWithAuthentication.call(
						this,
						'shyftplanApi',
						options,
					);
					returnData.push(responseData);
				}
			}
		}
		// Map data to n8n data structure
		return [this.helpers.returnJsonArray(returnData)];
	}
}
