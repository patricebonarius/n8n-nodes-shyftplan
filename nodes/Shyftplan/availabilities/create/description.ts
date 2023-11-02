import { INodeProperties } from 'n8n-workflow';
export const postApiV1AvailabilitiesCreateFields: INodeProperties[] = [
	{
		displayName: 'Starts At',
		name: 'starts_at',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['postApiV1Availabilities'],
				resource: ['availabilities'],
			},
		},
		placeholder: '',
		description: 'Start of the Availability (rounded to steps of 15 minutes)',
	},
	{
		displayName: 'Ends At',
		name: 'ends_at',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['postApiV1Availabilities'],
				resource: ['availabilities'],
			},
		},
		placeholder: '',
		description: 'End of the Availability (rounded to steps of 15 minutes)',
	},
	{
		displayName: 'overrIDe',
		name: 'override',
		type: 'boolean',
		required: true,
		default: false,
		displayOptions: {
			show: {
				operation: ['postApiV1Availabilities'],
				resource: ['availabilities'],
			},
		},
		placeholder: '',
		description: 'Whether Destroy conflicting availabilities',
	},
	{
		displayName: 'Available',
		name: 'available',
		type: 'boolean',
		required: true,
		default: false,
		displayOptions: {
			show: {
				operation: ['postApiV1Availabilities'],
				resource: ['availabilities'],
			},
		},
		placeholder: '',
		description: 'Whether Is the Employee available or inavailable',
	},
	{
		displayName: 'Employment ID',
		name: 'employment_id',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['postApiV1Availabilities'],
				resource: ['availabilities'],
			},
		},
		placeholder: '',
		description: 'Enter Employment ID',
	},
	{
		displayName: 'Repeat',
		name: 'repeat',
		type: 'boolean',
		required: true,
		default: false,
		displayOptions: {
			show: {
				operation: ['postApiV1Availabilities'],
				resource: ['availabilities'],
			},
		},
		placeholder: '',
		description: 'Whether Is the Availability weekly repeated',
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
