import { INodeProperties } from 'n8n-workflow';
export const getApiV1AvailabilitiesAvailabilityIdExceptionsGetAllFields: INodeProperties[] = [
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
				operation: ['getApiV1AvailabilitiesAvailabilityIdExceptions'],
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
				operation: ['getApiV1AvailabilitiesAvailabilityIdExceptions'],
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
			{
				displayName: 'Page',
				name: 'page',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Pages starts with 1',
			},
			{
				displayName: 'Per Page',
				name: 'per_page',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Between 1 and 1000',
			},
		],
	},
];
