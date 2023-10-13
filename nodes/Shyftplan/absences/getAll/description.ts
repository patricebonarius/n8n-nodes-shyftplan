import { INodeProperties } from 'n8n-workflow';

export const absencesGetAllFields: INodeProperties[] = [
	/* --- Required Fields --- */

	/* --- Shown Fields --- */
	{
		displayName: 'Company Number',
		name: 'company_id',
		type: 'number',
		displayOptions: {
			show: {
				operation: ['absences_getAll'],
				resource: ['absences'],
			},
		},
		default: 0,
		placeholder: 'company_id',
		description: 'Please enter the company number',
	},
	{
		displayName: 'Page',
		name: 'page',
		type: 'number',
		displayOptions: {
			show: {
				operation: ['absences_getAll'],
				resource: ['absences'],
			},
		},
		default: 1,
		placeholder: '1',
		description: 'Please enter the page number',
	},
	{
		displayName: 'Item per Page',
		name: 'per_page',
		type: 'number',
		displayOptions: {
			show: {
				operation: ['absences_getAll'],
				resource: ['absences'],
			},
		},
		default: 200,
		placeholder: 'per page',
		description: 'How many items are shown per Page',
	},
	/*
	{
		displayName: 'Created After',
		name: 'created_after',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['absences_getAll'],
				resource: ['absences'],
			},
		},
		default: '',
		placeholder: 'YYYY-MM--DD',
		description: 'All employments that where created after that date',
	},

	{
		displayName: 'Employment ID',
		name: 'employment_id',
		type: 'number',
		displayOptions: {
			show: {
				operation: ['absences_getAll'],
				resource: ['absences'],
			},
		},
		default: '',
		placeholder: '0',
		description: 'Search for employments by name or staff number',
	}, */

	/* --- Optional or Additional Fields --- */
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['absences_getAll'],
				resource: ['absences'],
			},
		},
		options: [
			{
				displayName: 'Show Paid',
				name: 'paid',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Reason ID',
				name: 'absence_reason_id',
				type: 'number',
				default: 0,
			},
		],
	},
];
