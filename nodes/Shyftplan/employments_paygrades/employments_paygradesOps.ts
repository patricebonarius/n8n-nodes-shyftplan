import { INodeProperties } from 'n8n-workflow';
import { getApiV1EmploymentsPaygradesGetAllFields } from './getAll/description';

export const employments_paygradesOps: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['employments_paygrades'],
			},
		},
		options: [
			{
				name: 'Get Employments Paygrades',
				value: 'getApiV1EmploymentsPaygrades',
				description: 'List all employments_paygrades related to one given company',
				action: 'Get employments paygrades',
			},
		],
		default: 'getApiV1EmploymentsPaygrades',
		noDataExpression: true,
	},

	...getApiV1EmploymentsPaygradesGetAllFields,
];
