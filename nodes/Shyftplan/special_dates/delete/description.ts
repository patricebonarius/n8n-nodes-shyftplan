import { INodeProperties } from 'n8n-workflow';
export const deleteApiV1SpecialDatesIdDeleteFields: INodeProperties[] = [
	{
		displayName: 'Company ID',
		name: 'company_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter ID of a Company',
		required: true,
		displayOptions: {
			show: {
				operation: ['deleteApiV1SpecialDatesId'],
				resource: ['special_dates'],
			},
		},
	},
	{
		displayName: 'ID',
		name: 'id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter Special Date ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['deleteApiV1SpecialDatesId'],
				resource: ['special_dates'],
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
				operation: ['deleteApiV1SpecialDatesId'],
				resource: ['special_dates'],
			},
		},
		options: [],
	},
];
