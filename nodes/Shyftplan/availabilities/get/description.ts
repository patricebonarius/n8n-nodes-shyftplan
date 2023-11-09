import { INodeProperties } from 'n8n-workflow';

export const getApiV1AvailabilitiesAvailabilityIdGetFields: INodeProperties[] = [
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
				operation: ['getApiV1AvailabilitiesAvailabilityId'],
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
				operation: ['getApiV1AvailabilitiesAvailabilityId'],
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
