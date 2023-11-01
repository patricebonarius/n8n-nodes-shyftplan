import { INodeProperties } from 'n8n-workflow';
export const postApiV1ShiftplansShiftplanIdMessagesCreateFields: INodeProperties[] = [
	{
		displayName: 'Company ID',
		name: 'company_id',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftplansShiftplanIdMessages'],
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
				operation: ['postApiV1ShiftplansShiftplanIdMessages'],
				resource: ['shiftplans'],
			},
		},
		placeholder: '',
		description: 'Enter Shiftplan ID',
	},
	{
		displayName: 'Message',
		name: 'message',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftplansShiftplanIdMessages'],
				resource: ['shiftplans'],
			},
		},
		placeholder: '',
		description: 'Message Content',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftplansShiftplanIdMessages'],
				resource: ['shiftplans'],
			},
		},
		options: [
			{
				displayName: 'Position IDs[]',
				name: 'position_ids[]',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Only send to employees that have this position',
			},
			{
				displayName: 'Only Assigned',
				name: 'only_assigned',
				type: 'boolean',
				default: false,
				placeholder: '',
				description:
					'WhetherOnly send to employees assigned to a shift that is part of the Shiftplan',
			},
		],
	},
];
