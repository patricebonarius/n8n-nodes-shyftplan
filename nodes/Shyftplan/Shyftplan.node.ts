import {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	IDataObject,
	IHttpRequestOptions,
} from 'n8n-workflow';

//import { OptionsWithUri } from 'request';
import { employmentsDeleteFields } from './employments/delete_by_id/description';
import { employmentsCreateFields } from './employments/create/description';
import { employmentsOps } from './employments/employmentsOps';

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
						name: 'Employment',
						value: 'employment',
					},
					{
						name: 'Absence',
						value: 'absence',
					},
				],
				default: 'employment',
				noDataExpression: true,
				required: true,
				description: 'Choose a resource / endpoint',
			},

			/* --- EMPLOYMENTS --- */
			/* Employments Operations */
			...employmentsOps,
		],
	};
	// The execute method will go here
	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		// Handle data coming from previous nodes
		const items = this.getInputData();
		// Get the std credentials
		const credentials = await this.getCredentials('shyftplanApi');

		let responseData;
		let returnData = [];

		// get the chosen resource (aka endpoint) and operation(aka CRUD)
		const resource = this.getNodeParameter('resource', 0) as string;
		const operation = this.getNodeParameter('operation', 0) as string;

		// For each item from incoming data, make an API call to create an employee
		// <= to run at least once
		for (let i = 0; i < items.length; i++) {
			// Employments
			if (resource === 'employment') {
				// create
				if (operation === 'employments_create') {
					// Get inputs
					const company_id = this.getNodeParameter('company_id', i) as number;
					const first_name = this.getNodeParameter('first_name', i) as string;
					const last_name = this.getNodeParameter('last_name', i) as string;
					console.log('params: ', company_id, first_name, last_name);
					// Get additional fields input
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;
					const data: IDataObject = {
						company_id,
						first_name,
						last_name,
					};
					// put it together
					Object.assign(data, additionalFields);
					// add credentials
					Object.assign(data, credentials);
					/*
					// Make HTTP request according to https://shyftplan.com/swagger/index.html#/employments/
					const options: OptionsWithUri = {
						headers: {
							Accept: 'application/json',
						},
						method: 'POST',
						body: {
							employments: [data],
						},
						uri: '$credentials./api/v2/employments',
						json: true,
					};
 */
					//console.log(this);
					/*
					// use Credentials here
					responseData = await this.helpers.requestWithAuthentication.call(
						this,
						'shyftplanApi',
						options,
						//additionalCredentialOptions
					);
 */
					// https://docs.n8n.io/integrations/creating-nodes/build/reference/http-helpers/#usage
					const myOptions: IHttpRequestOptions = {
						url: credentials.domain + '/api/v2/employments',
						method: 'PUT',
						body: data,
					};

					responseData = await this.helpers.httpRequest(myOptions);
					//console.log('response data: ', JSON.stringify(responseData));
					returnData.push(responseData);
				}

				// delete
				if (operation === 'employments_delete_by_id') {
					// Get inputs
					const company_id = this.getNodeParameter('company_id', i) as number;
					const employment_id = this.getNodeParameter('employment_id', i) as string;

					const data: IDataObject = {
						company_id,
						employment_id,
					};

					const options: IHttpRequestOptions = {
						url: credentials.domain + '/api/v2/employments/' + employment_id,
						method: 'DELETE',
						body: Object.assign(data, credentials),
					};

					responseData = await this.helpers.httpRequest(options);
					returnData.push(responseData);
				}
			}
		}
		// Map data to n8n data structure
		return [this.helpers.returnJsonArray(returnData)];
	}
}
