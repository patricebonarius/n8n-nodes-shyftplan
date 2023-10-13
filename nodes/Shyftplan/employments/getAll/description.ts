import { INodeProperties } from 'n8n-workflow';

export const employmentsGetAllFields: INodeProperties[] = [
	/* --- Required Fields --- */

	/* --- Shown Fields --- */
	/*
	{
		displayName: 'Content Type',
		name: 'Content-Type',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['employments_getAll'],
				resource: ['employments'],
			},
		},
		default: 'application/x-www-form-urlencoded',
		placeholder: 'application/x-www-form-urlencoded',
		description: 'NoChoice',
	}, */

	{
		displayName: 'Company Number',
		name: 'company_id',
		type: 'number',
		displayOptions: {
			show: {
				operation: ['employments_getAll'],
				resource: ['employments'],
			},
		},
		default: '',
		placeholder: 'company_id',
		description: 'Please enter the company number',
	},
	{
		displayName: 'Page',
		name: 'page',
		type: 'number',
		displayOptions: {
			show: {
				operation: ['employments_getAll'],
				resource: ['employments'],
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
				operation: ['employments_getAll'],
				resource: ['employments'],
			},
		},
		default: 1000,
		placeholder: 'per page',
		description: 'How many items are shown per Page',
	},
	{
		displayName: 'Created After',
		name: 'created_after',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['employments_getAll'],
				resource: ['employments'],
			},
		},
		default: '',
		placeholder: 'YYYY-MM--DD',
		description: 'All employments that where created after that date',
	},
	{
		displayName: 'Search',
		name: 'search',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['employments_getAll'],
				resource: ['employments'],
			},
		},
		default: '',
		placeholder: 'name or staff number',
		description: 'Search for employments by name or staff number',
	},

	/* --- Optional or Additional Fields --- */
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['employments_getAll'],
				resource: ['employments'],
			},
		},
		options: [
			{
				displayName: 'Is Employee',
				name: 'is_employee',
				type: 'boolean',
				default: true,
			},
			{
				displayName: 'Is Owner',
				name: 'is_owner',
				type: 'boolean',
				default: true,
			},
			{
				displayName: 'Is Stakeholder',
				name: 'is_stakeholder',
				type: 'boolean',
				default: true,
			},
		],
	},
];
