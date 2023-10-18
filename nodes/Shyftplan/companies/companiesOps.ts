import { INodeProperties } from 'n8n-workflow';
import { companiesCreateFields } from './create/description';
import { companiesByIdGetFields } from './get/description';
import { companiesGetAllFields } from './getAll/description';
export const companiesOps: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['companies'],
			},
		},
		options: [
			{
				name: 'Create Companies',
				value: 'companies_create',
				description: 'Create a companies',
				action: 'Create a companies',
			},
			{
				name: 'Get Company',
				value: 'companiesById_get',
				description: 'Get single company',
				action: 'Get single company',
			},
			{
				name: 'Get Companies',
				value: 'companies_getAll',
				description: 'Get all companies',
				action: 'Get a list of companies',
			},
		],
		default: 'companies_getAll',
		noDataExpression: true,
	},
	/*  Create Fields  */
	...companiesCreateFields,

	/*  Get Fields  */
	...companiesByIdGetFields,

	/*  Get All Fields  */
	...companiesGetAllFields,
];
