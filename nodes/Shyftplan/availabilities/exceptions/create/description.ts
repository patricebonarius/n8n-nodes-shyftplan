import { INodeProperties } from 'n8n-workflow';
export const postApiV1AvailabilitiesAvailabilityIdExceptionsCreateFields: INodeProperties[] = [
	{
		displayName: 'Availability ID',
		name: 'availability_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter Availability ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1AvailabilitiesAvailabilityIdExceptions'],
				resource: ['availabilities'],
			},
		},
	},
	{
		displayName: 'Starts At',
		name: 'starts_at',
		type: 'string',
		default: '',
		placeholder: '',
		description:
			'Start of the selected Availability out of a repeated Availability which should be counted as an exception (must fit the exact availability start)',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1AvailabilitiesAvailabilityIdExceptions'],
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
		description:
			'End of the selected Availability out of a repeated Availability which should be counted as an exception (must fit the exact availability start)',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1AvailabilitiesAvailabilityIdExceptions'],
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
				operation: ['postApiV1AvailabilitiesAvailabilityIdExceptions'],
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
