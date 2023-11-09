import { INodeProperties } from 'n8n-workflow';
export const getApiV1EmploymentsPositionsIdGetFields: INodeProperties[] = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'EmploymentsPosition ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['getApiV1EmploymentsPositionsId'],
				resource: ['employments_positions'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['getApiV1EmploymentsPositionsId'],
				resource: ['employments_positions'],
			},
		},
		options: [
			{
				displayName: 'Company ID',
				name: 'company_id',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Enter Company ID',
			},
		],
	},
];
