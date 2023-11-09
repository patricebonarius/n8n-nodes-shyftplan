import { INodeProperties } from 'n8n-workflow';
export const deleteApiV1AvailabilitiesAvailabilityIdDeleteFields: INodeProperties[] = [
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
				operation: ['deleteApiV1AvailabilitiesAvailabilityId'],
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
				operation: ['deleteApiV1AvailabilitiesAvailabilityId'],
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
