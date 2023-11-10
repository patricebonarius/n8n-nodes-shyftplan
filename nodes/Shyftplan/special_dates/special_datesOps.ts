import { INodeProperties } from 'n8n-workflow';
import { postApiV1SpecialDatesCreateFields } from './create/description';
import { getApiV1SpecialDatesGetAllFields } from './getAll/description';
import { deleteApiV1SpecialDatesIdDeleteFields } from './delete/description';
import { putApiV1SpecialDatesIdUpdateFields } from './update/description';
import { getApiV1SpecialDatesIdGetFields } from './get/description';

export const special_datesOps: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['special_dates'],
			},
		},
		options: [
			{
				name: 'Post Special Dates',
				value: 'postApiV1SpecialDates',
				description: 'Create a new Special Date',
				action: 'Post special dates',
			},
			{
				name: 'Get Special Dates',
				value: 'getApiV1SpecialDates',
				description: 'List all special Dates',
				action: 'Get special dates',
			},
			{
				name: 'Delete Special Dates By ID',
				value: 'deleteApiV1SpecialDatesId',
				description: 'Delete an Special Date',
				action: 'Delete special dates by ID',
			},
			{
				name: 'Put Special Dates By ID',
				value: 'putApiV1SpecialDatesId',
				description: 'Update an Special Date',
				action: 'Put special dates by ID',
			},
			{
				name: 'Get Special Dates By ID',
				value: 'getApiV1SpecialDatesId',
				description: 'Return a Special Date',
				action: 'Get special dates by ID',
			},
		],
		default: 'getApiV1SpecialDatesId',
		noDataExpression: true,
	},

	...postApiV1SpecialDatesCreateFields,

	...getApiV1SpecialDatesGetAllFields,

	...deleteApiV1SpecialDatesIdDeleteFields,

	...putApiV1SpecialDatesIdUpdateFields,

	...getApiV1SpecialDatesIdGetFields,
];
