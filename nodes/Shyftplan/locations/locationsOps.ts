import { INodeProperties } from 'n8n-workflow';
import { putApiV1LocationsIdShiftplanPublishSettingsUpdateFields } from './shiftplan_publish_settings/update/description';
import { getApiV1LocationsIdShiftplanPublishSettingsGetAllFields } from './shiftplan_publish_settings/getAll/description';
import { postApiV1LocationsIdDestroyLocationCreateFields } from './destroy_location/create/description';
import { deleteApiV1LocationsIdDeleteFields } from './delete/description';
import { putApiV1LocationsIdUpdateFields } from './update/description';
import { getApiV1LocationsIdGetFields } from './get/description';
import { getApiV1LocationsGetAllFields } from './getAll/description';
import { postApiV1LocationsCreateFields } from './create/description';

export const locationsOps: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['locations'],
			},
		},
		options: [
			{
				name: 'Put Locations By ID Shiftplan Publish Settings',
				value: 'putApiV1LocationsIdShiftplanPublishSettings',
				description: 'Update publish settings from Location',
				action: 'Put locations by ID shiftplan publish settings',
			},
			{
				name: 'Get Locations By ID Shiftplan Publish Settings',
				value: 'getApiV1LocationsIdShiftplanPublishSettings',
				description: 'Get publish settings from Location',
				action: 'Get locations by ID shiftplan publish settings',
			},
			{
				name: 'Post Locations By ID Destroy Location',
				value: 'postApiV1LocationsIdDestroyLocation',
				description: 'Permanently destroy a location',
				action: 'Post locations by ID destroy location',
			},
			{
				name: 'Delete Locations By ID',
				value: 'deleteApiV1LocationsId',
				description: 'Soft delete a location (keep billing data)',
				action: 'Delete locations by ID',
			},
			{
				name: 'Put Locations By ID',
				value: 'putApiV1LocationsId',
				description: 'Update a Location',
				action: 'Put locations by ID',
			},
			{
				name: 'Get Locations By ID',
				value: 'getApiV1LocationsId',
				description: 'Return a Location.',
				action: 'Get locations by ID',
			},
			{
				name: 'Get Locations',
				value: 'getApiV1Locations',
				description: 'List all Locations.',
				action: 'Get locations',
			},
			{
				name: 'Post Locations',
				value: 'postApiV1Locations',
				description: 'Create a new Location',
				action: 'Post locations',
			},
		],
		default: 'postApiV1Locations',
		noDataExpression: true,
	},

	...putApiV1LocationsIdShiftplanPublishSettingsUpdateFields,

	...getApiV1LocationsIdShiftplanPublishSettingsGetAllFields,

	...postApiV1LocationsIdDestroyLocationCreateFields,

	...deleteApiV1LocationsIdDeleteFields,

	...putApiV1LocationsIdUpdateFields,

	...getApiV1LocationsIdGetFields,

	...getApiV1LocationsGetAllFields,

	...postApiV1LocationsCreateFields,
];
