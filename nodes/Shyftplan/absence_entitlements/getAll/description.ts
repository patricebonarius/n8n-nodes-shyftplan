import { INodeProperties } from 'n8n-workflow';
export const getApiV2AbsenceEntitlementsGetAllFields: INodeProperties[] = [
	{
		displayName: 'Year',
		name: 'year',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['getApiV2AbsenceEntitlements'],
				resource: ['absence_entitlements'],
			},
		},
		placeholder: '',
		description: 'Filter for a specific year between 2000 and 2100',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['getApiV2AbsenceEntitlements'],
				resource: ['absence_entitlements'],
			},
		},
		options: [
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
			{
				displayName: 'With Deleted',
				name: 'with_deleted',
				type: 'boolean',
				default: false,
				placeholder: '',
				description: 'Whether Include soft-deleted employments',
			},
			{
				displayName: 'Company IDs[]',
				name: 'company_ids[]',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Filter an array of Company ID',
			},
			{
				displayName: 'Employment IDs[]',
				name: 'employment_ids[]',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Filter an array of Employment ID',
			},
			{
				displayName: 'Absence Reason_IDs[]',
				name: 'absence_reason_ids[]',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Filter an array of Absence Reason ID',
			},
		],
	},
];
