import { INodeProperties } from 'n8n-workflow';
import { postApiV1UsersUpdatePasswordCreateFields } from './update_password/create/description';
import { postApiV1UsersChangeLocaleCreateFields } from './change_locale/create/description';
import { postApiV1UsersCreateFields } from './create/description';
import { getApiV1UsersGetAllFields } from './getAll/description';
import { putApiV1UsersIdUpdateFields } from './update/description';
import { getApiV1UsersIdGetFields } from './get/description';

export const usersOps: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['users'],
			},
		},
		options: [
			{
				name: 'Get Users',
				value: 'getApiV1Users',
				description: 'List all Users',
				action: 'Get users',
			},
			{
				name: 'Get Users By ID',
				value: 'getApiV1UsersId',
				description: 'Return a User',
				action: 'Get users by ID',
			},
			{
				name: 'Post Users',
				value: 'postApiV1Users',
				description:
					'DEPRECATED: Please use post api/v2/employments instead Create a User employment',
				action: 'Post users',
			},
			{
				name: 'Post Users Change Locale',
				value: 'postApiV1UsersChangeLocale',
				description: 'Change locale',
				action: 'Post users change locale',
			},
			{
				name: 'Post Users Update Password',
				value: 'postApiV1UsersUpdatePassword',
				description: 'Update User password',
				action: 'Post users update password',
			},
			{
				name: 'Put Users By ID',
				value: 'putApiV1UsersId',
				description: 'Edit a User employment',
				action: 'Put users by ID',
			},
		],
		default: 'getApiV1UsersId',
		noDataExpression: true,
	},

	...postApiV1UsersUpdatePasswordCreateFields,

	...postApiV1UsersChangeLocaleCreateFields,

	...postApiV1UsersCreateFields,

	...getApiV1UsersGetAllFields,

	...putApiV1UsersIdUpdateFields,

	...getApiV1UsersIdGetFields,
];
