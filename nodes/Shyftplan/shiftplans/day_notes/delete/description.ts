import { INodeProperties } from 'n8n-workflow';
export const deleteApiV1ShiftplansShiftplanIdDayNotesIdDeleteFields: INodeProperties[] = [
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
				operation: ['deleteApiV1ShiftplansShiftplanIdDayNotesId'],
				resource: ['shiftplans'],
			},
		},
	},
	{
		displayName: 'Shiftplan ID',
		name: 'shiftplan_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter shiftplan ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['deleteApiV1ShiftplansShiftplanIdDayNotesId'],
				resource: ['shiftplans'],
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
				operation: ['deleteApiV1ShiftplansShiftplanIdDayNotesId'],
				resource: ['shiftplans'],
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
				operation: ['deleteApiV1ShiftplansShiftplanIdDayNotesId'],
				resource: ['shiftplans'],
			},
		},
		options: [],
	},
];
