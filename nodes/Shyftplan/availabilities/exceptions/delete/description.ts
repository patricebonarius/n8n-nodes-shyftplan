import { INodeProperties } from 'n8n-workflow';
export const deleteApiV1AvailabilitiesExceptionsExceptionIdDeleteFields: INodeProperties[] = [
	{
		displayName: 'Exception ID',
		name: 'exception_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Availability Exception ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['deleteApiV1AvailabilitiesExceptionsExceptionId'],
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
				operation: ['deleteApiV1AvailabilitiesExceptionsExceptionId'],
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
