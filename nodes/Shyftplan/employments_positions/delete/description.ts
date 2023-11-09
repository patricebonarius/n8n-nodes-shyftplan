import { INodeProperties } from 'n8n-workflow';
export const deleteApiV1EmploymentsPositionsIdDeleteFields: INodeProperties[] = [
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
				operation: ['deleteApiV1EmploymentsPositionsId'],
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
				default: false,
				placeholder: '',
				description: 'Whether Keep future staff shifts',
			},
		],
	},
];
