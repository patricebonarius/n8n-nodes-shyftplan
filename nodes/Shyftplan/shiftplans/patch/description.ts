import { INodeProperties } from 'n8n-workflow';
export const patchApiV1ShiftplansIdPatchFields: INodeProperties[] = [
	{
		displayName: 'Company ID',
		name: 'company_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter Company ID related to the Shiftplan',
		required: true,
		displayOptions: {
			show: {
				operation: ['patchApiV1ShiftplansId'],
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
		description: 'Enter Shiftplan ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['patchApiV1ShiftplansId'],
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
				operation: ['patchApiV1ShiftplansId'],
				resource: ['shiftplans'],
			},
		},
		options: [
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Enter Name of the Shiftplan',
			},
			{
				displayName: 'Starts At',
				name: 'starts_at',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Enter Start of the Shiftplan',
			},
			{
				displayName: 'Ends At',
				name: 'ends_at',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Enter End of the Shiftplan',
			},
			{
				displayName: 'Locked',
				name: 'locked',
				type: 'boolean',
				default: false,
				placeholder: '',
				description: 'Whether Should this Shiftplan be locked?',
			},
		],
	},
];
