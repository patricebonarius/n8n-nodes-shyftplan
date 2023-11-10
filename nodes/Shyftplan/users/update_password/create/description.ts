import { INodeProperties } from 'n8n-workflow';
export const postApiV1UsersUpdatePasswordCreateFields: INodeProperties[] = [
	{
		displayName: 'Current Password',
		name: 'current_password',
		type: 'string',
		default: '',
		placeholder: '',
		description: 'Enter Current password',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1UsersUpdatePassword'],
				resource: ['users'],
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
		description: 'Enter New password',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1UsersUpdatePassword'],
				resource: ['users'],
			},
		},
	},
	{
		displayName: 'Password Confirmation',
		name: 'password_confirmation',
		type: 'string',
		default: '',
		placeholder: '',
		description: 'Enter New password confirmation',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1UsersUpdatePassword'],
				resource: ['users'],
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
				operation: ['postApiV1UsersUpdatePassword'],
				resource: ['users'],
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
