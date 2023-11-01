import { INodeProperties } from 'n8n-workflow';
export const postApiV1ShiftplansShiftplanIdDayNotesCreateFields: INodeProperties[] = [
	{
		displayName: 'Company ID',
		name: 'company_id',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftplansShiftplanIdDayNotes'],
				resource: ['shiftplans'],
			},
		},
		placeholder: '',
		description: 'Enter Company ID',
	},
	{
		displayName: 'Title',
		name: 'title',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftplansShiftplanIdDayNotes'],
				resource: ['shiftplans'],
			},
		},
		placeholder: '',
		description: 'Day note title',
	},
	{
		displayName: 'Starts At',
		name: 'starts_at',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftplansShiftplanIdDayNotes'],
				resource: ['shiftplans'],
			},
		},
		placeholder: '',
		description: 'Day note start date',
	},
	{
		displayName: 'Ends At',
		name: 'ends_at',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftplansShiftplanIdDayNotes'],
				resource: ['shiftplans'],
			},
		},
		placeholder: '',
		description: 'Day note end date',
	},
	{
		displayName: 'Shiftplan ID',
		name: 'shiftplan_id',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftplansShiftplanIdDayNotes'],
				resource: ['shiftplans'],
			},
		},
		placeholder: '',
		description: 'Enter a shiftplan ID',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftplansShiftplanIdDayNotes'],
				resource: ['shiftplans'],
			},
		},
		options: [
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Day note description',
			},
		],
	},
];
