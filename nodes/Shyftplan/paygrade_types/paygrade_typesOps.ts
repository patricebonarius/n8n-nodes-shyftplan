import { INodeProperties } from 'n8n-workflow';
import { getApiV1PaygradeTypesGetAllFields } from './getAll/description';
import { getApiV1PaygradeTypesIdGetFields } from './get/description';

export const paygrade_typesOps: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['paygrade_types'],
			},
		},
		options: [
			{
				name: 'Get Paygrade Types',
				value: 'getApiV1PaygradeTypes',
				description: 'List all PaygradeTypes',
				action: 'Get paygrade types',
			},
			{
				name: 'Get Paygrade Types By ID',
				value: 'getApiV1PaygradeTypesId',
				description: 'Return a PaygradeType',
				action: 'Get paygrade types by ID',
			},
		],
		default: 'getApiV1PaygradeTypesId',
		noDataExpression: true,
	},

	...getApiV1PaygradeTypesGetAllFields,

	...getApiV1PaygradeTypesIdGetFields,
];
