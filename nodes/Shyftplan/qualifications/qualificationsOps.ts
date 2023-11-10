import { INodeProperties } from 'n8n-workflow';
import { getApiV1QualificationsGetAllFields } from './getAll/description';

export const qualificationsOps: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['qualifications'],
			},
		},
		options: [
			{
				name: 'Get Qualifications',
				value: 'getApiV1Qualifications',
				description: 'Return list of qualifications',
				action: 'Get qualifications',
			},
		],
		default: 'getApiV1Qualifications',
		noDataExpression: true,
	},

	...getApiV1QualificationsGetAllFields,
];
