import { INodeProperties } from 'n8n-workflow';

export const employmentsCreateFields: INodeProperties[] = [
	/* --- Required Fields --- */
	{
		displayName: 'Company Number',
		name: 'company_id',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				operation: ['employments_create'],
				resource: ['employment'],
			},
		},
		default: '',
		placeholder: 'company_id',
		description: 'Please enter the company number',
	},
	{
		displayName: 'First Name',
		name: 'first_name',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['employments_create'],
				resource: ['employment'],
			},
		},
		default: '',
		placeholder: 'firstname',
		description: 'Please enter the employees firstname',
	},
	{
		displayName: 'Last Name',
		name: 'last_name',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['employments_create'],
				resource: ['employment'],
			},
		},
		default: '',
		placeholder: 'lastname',
		description: 'Please enter the employees surname',
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
				operation: ['employments_create'],
				resource: ['employment'],
			},
		},
		options: [
			{
				displayName: 'Is Payed Monthly',
				name: 'is_paid_monthly',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Phone Number',
				name: 'phone_number',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Email',
				name: 'email',
				type: 'string',
				default: '',
				placeholder: 'name@email.com',
			},
			{
				displayName: 'Note',
				name: 'note',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Billing Type Number',
				name: 'billing_type_id',
				type: 'number',
				default: '',
			},
		],
	},
];
