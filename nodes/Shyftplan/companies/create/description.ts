import { INodeProperties } from 'n8n-workflow';
export const postApiV1CompaniesCreateFields: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		placeholder: '',
		description: 'New Company name',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1Companies'],
				resource: ['companies'],
			},
		},
	},
	{
		displayName: 'Probable Employees',
		name: 'probable_employees',
		type: 'string',
		default: '',
		placeholder: '',
		description: 'Probable number of employees',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1Companies'],
				resource: ['companies'],
			},
		},
	},
	{
		displayName: 'First Name',
		name: 'first_name',
		type: 'string',
		default: '',
		placeholder: '',
		description: 'Contact persons first_name',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1Companies'],
				resource: ['companies'],
			},
		},
	},
	{
		displayName: 'Last Name',
		name: 'last_name',
		type: 'string',
		default: '',
		placeholder: '',
		description: 'Contact persons last_name',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1Companies'],
				resource: ['companies'],
			},
		},
	},
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		default: '',
		placeholder: '',
		description: 'Contact persons email',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1Companies'],
				resource: ['companies'],
			},
		},
	},
	{
		displayName: 'Password',
		name: 'password',
		type: 'string',
		typeOptions: { password: true },
		default: '',
		placeholder: '',
		description: 'Contact persons password',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1Companies'],
				resource: ['companies'],
			},
		},
	},
	{
		displayName: 'Phone Number',
		name: 'phone_number',
		type: 'string',
		default: '',
		placeholder: '',
		description: 'Contact persons phone_number',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1Companies'],
				resource: ['companies'],
			},
		},
	},
	{
		displayName: 'Tnc Check',
		name: 'tnc_check',
		type: 'string',
		default: '',
		placeholder: '',
		description: 'Terms & Conditions checkbox (1 is the only accepted value)',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1Companies'],
				resource: ['companies'],
			},
		},
	},
	{
		displayName: 'Contract Check',
		name: 'contract_check',
		type: 'string',
		default: '',
		placeholder: '',
		description: 'Order processing contract checkbox (1 is the only accepted value)',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1Companies'],
				resource: ['companies'],
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
				operation: ['postApiV1Companies'],
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
