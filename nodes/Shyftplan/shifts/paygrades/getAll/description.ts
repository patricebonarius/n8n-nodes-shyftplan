import { INodeProperties } from 'n8n-workflow';
export const getApiV1ShiftsShiftIdPaygradesGetAllFields: INodeProperties[] = [
	{
		displayName: 'Company ID',
		name: 'company_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter Company ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['getApiV1ShiftsShiftIdPaygrades'],
				resource: ['shifts'],
			},
		},
	},
	{
		displayName: 'Shift ID',
		name: 'shift_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter Shift ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['getApiV1ShiftsShiftIdPaygrades'],
				resource: ['shifts'],
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
				operation: ['getApiV1ShiftsShiftIdPaygrades'],
				resource: ['shifts'],
			},
		},
		options: [
			{
				displayName: 'Page',
				name: 'page',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Enter Pages starts with 1',
			},
			{
				displayName: 'Per Page',
				name: 'per_page',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Enter Between 1 and 1000',
			},
		],
	},
];
