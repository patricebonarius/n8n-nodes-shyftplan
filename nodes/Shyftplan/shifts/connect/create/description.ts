import { INodeProperties } from 'n8n-workflow';
export const postApiV1ShiftsConnectCreateFields: INodeProperties[] = [
	{
		displayName: 'Company ID',
		name: 'company_id',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftsConnect'],
				resource: ['shifts'],
			},
		},
		placeholder: '',
		description: 'Enter company ID',
	},
	{
		displayName: 'Shiftplan ID',
		name: 'shiftplan_id',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftsConnect'],
				resource: ['shifts'],
			},
		},
		placeholder: '',
		description: 'Enter Shiftplan ID',
	},
	{
		displayName: 'Shift IDs[]',
		name: 'shift_ids[]',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftsConnect'],
				resource: ['shifts'],
			},
		},
		placeholder: '',
		description: 'Array of Shift IDs',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftsConnect'],
				resource: ['shifts'],
			},
		},
		options: [],
	},
];
