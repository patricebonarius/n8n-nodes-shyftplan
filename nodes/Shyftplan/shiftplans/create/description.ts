import { INodeProperties } from 'n8n-workflow';
export const postApiV1ShiftplansCreateFields: INodeProperties[] = [
	{
		displayName: 'Location ID',
		name: 'location_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter ID of an Location',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1Shiftplans'],
				resource: ['shiftplans'],
			},
		},
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		placeholder: '',
		description: 'Enter Name of the Shiftplan',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1Shiftplans'],
				resource: ['shiftplans'],
			},
		},
	},
	{
		displayName: 'Starts At',
		name: 'starts_at',
		type: 'string',
		default: '',
		placeholder: '',
		description: 'Enter Start of the Shiftplan',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1Shiftplans'],
				resource: ['shiftplans'],
			},
		},
	},
	{
		displayName: 'Ends At',
		name: 'ends_at',
		type: 'string',
		default: '',
		placeholder: '',
		description: 'Enter End of the Shiftplan',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1Shiftplans'],
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
				operation: ['postApiV1Shiftplans'],
				resource: ['shiftplans'],
			},
		},
		options: [
			{
				displayName: 'Company ID',
				name: 'company_id',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Enter Company ID',
			},
			{
				displayName: 'Metadata',
				name: 'metadata',
				type: 'json',
				typeOptions: {
					multipleValues: true,
					multipleValueButtonText: 'Add Tag',
				},
				default: '',
				placeholder: '',
				description: 'Enter Shiftplan metadata as JSON',
			},
		],
	},
];
