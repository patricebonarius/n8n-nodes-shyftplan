import { INodeProperties } from 'n8n-workflow';
import { postApiV1PayslipsCreateFields } from './create/description';
import { getApiV1PayslipsGetAllFields } from './getAll/description';

export const payslipsOps: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['payslips'],
			},
		},
		options: [
			{
				name: 'Post Payslips',
				value: 'postApiV1Payslips',
				description: 'Create a payslip',
				action: 'Post payslips',
			},
			{
				name: 'Get Payslips',
				value: 'getApiV1Payslips',
				description: 'Enter List all Payslips',
				action: 'Get payslips',
			},
		],
		default: 'getApiV1Payslips',
		noDataExpression: true,
	},

	...postApiV1PayslipsCreateFields,

	...getApiV1PayslipsGetAllFields,
];
