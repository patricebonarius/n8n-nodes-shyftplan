import { INodeProperties } from 'n8n-workflow';
export const getApiV1ShiftplansIdGetFields: INodeProperties[] = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['getApiV1ShiftplansId'],
				resource: ['shiftplans'],
			},
		},
		placeholder: '',
		description: 'Shiftplan ID',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['getApiV1ShiftplansId'],
				resource: ['shiftplans'],
			},
		},
		options: [
			{
				displayName: 'Company ID',
				name: 'company_id',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Enter a company ID',
			},
		],
	},
];
