import { INodeProperties } from 'n8n-workflow';
export const postApiV1ShiftplansShiftplanIdMessagesCreateFields: INodeProperties[] = [
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
				operation: ['postApiV1ShiftplansShiftplanIdMessages'],
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
		description: 'Enter Shiftplan ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftplansShiftplanIdMessages'],
				resource: ['shiftplans'],
			},
		},
	},
	{
		displayName: 'Message',
		name: 'message',
		type: 'string',
		default: '',
		placeholder: '',
		description: 'Enter Message Content',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftplansShiftplanIdMessages'],
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
				operation: ['postApiV1ShiftplansShiftplanIdMessages'],
				resource: ['shiftplans'],
			},
		},
		options: [
			{
				displayName: 'Position IDs[]',
				name: 'position_idsSTARTEND',
				type: 'json',
				typeOptions: {
					multipleValues: true,
					multipleValueButtonText: 'Add Tag',
				},
				default: '',
				placeholder: '',
				description: 'Enter Only send to employees that have this position',
			},
			{
				displayName: 'Only Assigned',
				name: 'only_assigned',
				type: 'boolean',
				default: false,
				placeholder: '',
				description:
					'Whether Only send to employees assigned to a shift that is part of the Shiftplan',
			},
		],
	},
];
