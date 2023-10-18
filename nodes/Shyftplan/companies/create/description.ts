import { INodeProperties } from 'n8n-workflow';
export const companiesCreateFields: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['companies_create'],
				resource: ['companies'],
			},
		},
		placeholder: '',
		description: 'New Company name',
	},
	{
		displayName: 'Probable Employees',
		name: 'probable_employees',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['companies_create'],
				resource: ['companies'],
			},
		},
		placeholder: '',
		description: 'Probable number of employees',
	},
	{
		displayName: 'First Name',
		name: 'first_name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['companies_create'],
				resource: ['companies'],
			},
		},
		placeholder: '',
		description: 'Contact persons first_name',
	},
	{
		displayName: 'Last Name',
		name: 'last_name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['companies_create'],
				resource: ['companies'],
			},
		},
		placeholder: '',
		description: 'Contact persons last_name',
	},
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['companies_create'],
				resource: ['companies'],
			},
		},
		placeholder: '',
		description: 'Contact persons email',
	},
	{
		displayName: 'Password',
		name: 'password',
		// eslint-disable-next-line n8n-nodes-base/node-param-type-options-missing-from-password
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['companies_create'],
				resource: ['companies'],
			},
		},
		placeholder: '',
		description: 'Contact persons password',
	},
	{
		displayName: 'Phone Number',
		name: 'phone_number',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['companies_create'],
				resource: ['companies'],
			},
		},
		placeholder: '',
		description: 'Contact persons phone_number',
	},
	{
		displayName: 'Tnc Check',
		name: 'tnc_check',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['companies_create'],
				resource: ['companies'],
			},
		},
		placeholder: '',
		description: 'Terms & Conditions checkbox ("1" is the only accepted value)',
	},
	{
		displayName: 'Contract Check',
		name: 'contract_check',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['companies_create'],
				resource: ['companies'],
			},
		},
		placeholder: '',
		description: 'Order processing contract checkbox ("1" is the only accepted value)',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['companies_create'],
				resource: ['companies'],
			},
		},
		options: [
			{
				displayName: 'Time Zone',
				name: 'time_zone',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Company time_zone',
			},
		],
	},
];
