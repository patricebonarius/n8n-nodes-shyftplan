import { INodeProperties } from 'n8n-workflow';
import { getApiV1SsoSettingsSsoTargetUrlGetAllFields } from './sso_target_url/getAll/description';

export const sso_settingsOps: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['sso_settings'],
			},
		},
		options: [
			{
				name: 'Get Sso Settings Sso Target Url',
				value: 'getApiV1SsoSettingsSsoTargetUrl',
				description: 'Get SSo Settings',
				action: 'Get sso settings sso target url',
			},
		],
		default: 'getApiV1SsoSettingsSsoTargetUrl',
		noDataExpression: true,
	},

	...getApiV1SsoSettingsSsoTargetUrlGetAllFields,
];
