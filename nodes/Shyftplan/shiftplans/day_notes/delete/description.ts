import { INodeProperties } from 'n8n-workflow';
export const deleteApiV1ShiftplansShiftplanIdDayNotesIdDeleteFields: INodeProperties[] = [
	{
		displayName: 'Company ID',
		name: 'company_id',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['deleteApiV1ShiftplansShiftplanIdDayNotesId'],
				resource: ['shiftplans'],
			},
		},
		placeholder: '',
		description: 'Enter Company ID',
	},
	{
		displayName: 'Shiftplan ID',
		name: 'shiftplan_id',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['deleteApiV1ShiftplansShiftplanIdDayNotesId'],
				resource: ['shiftplans'],
			},
		},
		placeholder: '',
		description: 'Enter Shiftplan ID',
	},
	{
		displayName: 'ID',
		name: 'id',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['deleteApiV1ShiftplansShiftplanIdDayNotesId'],
				resource: ['shiftplans'],
			},
		},
		placeholder: '',
		description: 'Enter an ID',
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
