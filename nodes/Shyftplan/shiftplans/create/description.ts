import { INodeProperties } from 'n8n-workflow';
export const postApiV1ShiftplansCreateFields: INodeProperties[] = [
	{
		displayName: 'Location ID',
		name: 'location_id',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['postApiV1Shiftplans'],
				resource: ['shiftplans'],
			},
		},
		placeholder: '',
		description: 'ID of an Location',
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['postApiV1Shiftplans'],
				resource: ['shiftplans'],
			},
		},
		placeholder: '',
		description: 'Name of the Shiftplan',
	},
	{
		displayName: 'Starts At',
		name: 'starts_at',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['postApiV1Shiftplans'],
				resource: ['shiftplans'],
			},
		},
		placeholder: '',
		description: 'Start of the Shiftplan',
	},
	{
		displayName: 'Ends At',
		name: 'ends_at',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['postApiV1Shiftplans'],
				resource: ['shiftplans'],
			},
		},
		placeholder: '',
		description: 'End of the Shiftplan',
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
				description: 'Enter a company ID',
			},
			{
				displayName: 'Metadata',
				name: 'metadata',
				type: 'json',
				default: '',
				placeholder: '',
				description: 'Shiftplan metadata as JSON',
			},
		],
	},
];
