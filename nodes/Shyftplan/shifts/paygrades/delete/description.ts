import { INodeProperties } from 'n8n-workflow';
export const deleteApiV1ShiftsShiftIdPaygradesIdDeleteFields: INodeProperties[] = [
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
				operation: ['deleteApiV1ShiftsShiftIdPaygradesId'],
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
		description: 'Enter SHift ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['deleteApiV1ShiftsShiftIdPaygradesId'],
				resource: ['shifts'],
			},
		},
	},
	{
		displayName: 'ID',
		name: 'id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['deleteApiV1ShiftsShiftIdPaygradesId'],
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
				operation: ['deleteApiV1ShiftsShiftIdPaygradesId'],
				resource: ['shifts'],
			},
		},
		options: [],
	},
];
