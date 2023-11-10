import { INodeProperties } from 'n8n-workflow';
export const postApiV1ShiftsConnectCreateFields: INodeProperties[] = [
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
				operation: ['postApiV1ShiftsConnect'],
				resource: ['shifts'],
			},
		},
	},
	{
		displayName: 'Shiftplan ID',
		name: 'shiftplan_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter Shiftplan ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftsConnect'],
				resource: ['shifts'],
			},
		},
	},
	{
		displayName: 'Shift IDs[]',
		name: 'shift_idsSTARTEND',
		type: 'json',
		default: '',
		placeholder: '',
		description: 'Enter Array of Shift IDs',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftsConnect'],
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
				operation: ['postApiV1ShiftsConnect'],
				resource: ['shifts'],
			},
		},
		options: [],
	},
];
