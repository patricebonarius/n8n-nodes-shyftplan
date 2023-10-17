import { INodeProperties } from 'n8n-workflow';
import { locationsCreateFields } from './create/description';
import { locationsbyidDeleteFields } from './delete/description';
import { locationsbyidGetFields } from './get/description';
import { locationsGetAllFields } from './getAll/description';
import { locationsbyidUpdateFields } from './update/description';

export const locationsOps: INodeProperties[] = [
	// Choose Operations like CRUD on resource (endpoint)
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
				name: 'Create Location',
				value: 'locations_create',
				description: 'Create a location',
				action: 'Create a location',
			},
			{
				name: 'Delete Location',
				value: 'locationsById_delete',
				description: 'Delete single location',
				action: 'Delete single location',
			},
			{
				name: 'Get Location',
				value: 'locationsById_get',
				description: 'Get single location',
				action: 'Get single location',
			},
			{
				name: 'Get Locations',
				value: 'locations_getAll',
				description: 'Get a list of locations',
				action: 'Get all locations',
			},
			{
				name: 'Update a Location',
				value: 'locationsById_update',
				description: 'Update a special location',
				action: 'Update location',
			},
		],
		default: 'locations_getAll',
		noDataExpression: true,
	},

	/*  Create Fields  */
	...locationsCreateFields,
	/*  Delete Fields  */
	...locationsbyidDeleteFields,
	/*  Get Fields  */
	...locationsbyidGetFields,
	/*  Get All  */
	...locationsGetAllFields,
	/*  Update Fields  */
	...locationsbyidUpdateFields,
];
