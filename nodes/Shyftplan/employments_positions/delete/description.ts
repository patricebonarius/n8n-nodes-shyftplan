import { INodeProperties } from 'n8n-workflow';
export const deleteApiV1EmploymentsPositionsIdDeleteFields: INodeProperties[] = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['deleteApiV1EmploymentsPositionsId'],
				resource: ['employments_positions'],
			},
		},
		placeholder: '',
		description: 'EmploymentsPosition ID',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['deleteApiV1EmploymentsPositionsId'],
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
			{
				displayName: 'Keep Future_staff_shifts',
				name: 'keep_future_staff_shifts',
				type: 'boolean',
				default: true,
				placeholder: '',
				description: 'Whether to keep future staff shifts',
			},
		],
	},
];
