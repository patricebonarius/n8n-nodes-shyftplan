import { INodeProperties } from 'n8n-workflow';
export const getApiV1SsoSettingsSsoTargetUrlGetAllFields: INodeProperties[] = [
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		default: '',
		placeholder: '',
		description: 'Enter Email',
		required: true,
		displayOptions: {
			show: {
				operation: ['getApiV1SsoSettingsSsoTargetUrl'],
				resource: ['sso_settings'],
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
				operation: ['getApiV1SsoSettingsSsoTargetUrl'],
				resource: ['sso_settings'],
			},
		},
		options: [],
	},
];
