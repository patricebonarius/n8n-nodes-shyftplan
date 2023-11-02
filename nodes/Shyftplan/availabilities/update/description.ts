import { INodeProperties } from 'n8n-workflow';
export const putApiV1AvailabilitiesAvailabilityIdUpdateFields: INodeProperties[] = [
	{
		displayName: 'Availability ID',
		name: 'availability_id',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['putApiV1AvailabilitiesAvailabilityId'],
				resource: ['availabilities'],
			},
		},
		placeholder: '',
		description: 'Enter Availability ID',
	},
	{
		displayName: 'Starts At',
		name: 'starts_at',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['putApiV1AvailabilitiesAvailabilityId'],
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
				operation: ['putApiV1AvailabilitiesAvailabilityId'],
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
				operation: ['putApiV1AvailabilitiesAvailabilityId'],
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
				operation: ['putApiV1AvailabilitiesAvailabilityId'],
				resource: ['availabilities'],
			},
		},
		placeholder: '',
		description: 'Whether Is the Employee available or inavailable',
	},
	{
		displayName: 'Update All',
		name: 'update_all',
		type: 'boolean',
		required: true,
		default: false,
		displayOptions: {
			show: {
				operation: ['putApiV1AvailabilitiesAvailabilityId'],
				resource: ['availabilities'],
			},
		},
		placeholder: '',
		description: 'Whether Set to true to update all records of repeating event',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['putApiV1AvailabilitiesAvailabilityId'],
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
