import { INodeProperties } from 'n8n-workflow';
export const postApiV1AvailabilitiesCreateFields: INodeProperties[] = [
	{
		displayName: 'Starts At',
		name: 'starts_at',
		type: 'string',
		default: '',
		placeholder: '',
		description: 'Start of the Availability (rounded to steps of 15 minutes)',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1Availabilities'],
				resource: ['availabilities'],
			},
		},
	},
	{
		displayName: 'Ends At',
		name: 'ends_at',
		type: 'string',
		default: '',
		placeholder: '',
		description: 'End of the Availability (rounded to steps of 15 minutes)',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1Availabilities'],
				resource: ['availabilities'],
			},
		},
	},
	{
		displayName: 'OverrIDe',
		name: 'override',
		type: 'boolean',
		default: false,
		placeholder: '',
		description: 'Whether Destroy conflicting availabilities',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1Availabilities'],
				resource: ['availabilities'],
			},
		},
	},
	{
		displayName: 'Available',
		name: 'available',
		type: 'boolean',
		default: false,
		placeholder: '',
		description: 'Whether Is the Employee available or inavailable',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1Availabilities'],
				resource: ['availabilities'],
			},
		},
	},
	{
		displayName: 'Employment ID',
		name: 'employment_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter Employment ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1Availabilities'],
				resource: ['availabilities'],
			},
		},
	},
	{
		displayName: 'Repeat',
		name: 'repeat',
		type: 'boolean',
		default: false,
		placeholder: '',
		description: 'Whether Is the Availability weekly repeated',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1Availabilities'],
				resource: ['availabilities'],
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
				operation: ['postApiV1Availabilities'],
				resource: ['availabilities'],
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
		],
	},
];
