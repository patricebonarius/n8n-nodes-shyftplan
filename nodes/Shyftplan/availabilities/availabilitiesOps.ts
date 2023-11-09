import { INodeProperties } from 'n8n-workflow';
import { getApiV1AvailabilitiesGetAllFields } from './getAll/description';
import { postApiV1AvailabilitiesCreateFields } from './create/description';
import { deleteApiV1AvailabilitiesExceptionsExceptionIdDeleteFields } from './exceptions/delete/description';
import { getApiV1AvailabilitiesExceptionsExceptionIdGetFields } from './exceptions/get/description';
import { deleteApiV1AvailabilitiesAvailabilityIdDeleteFields } from './delete/description';
import { putApiV1AvailabilitiesAvailabilityIdUpdateFields } from './update/description';
import { getApiV1AvailabilitiesAvailabilityIdGetFields } from './get/description';
import { getApiV1AvailabilitiesAvailabilityIdExceptionsGetAllFields } from './exceptions/getAll/description';
import { postApiV1AvailabilitiesAvailabilityIdExceptionsCreateFields } from './exceptions/create/description';

export const availabilitiesOps: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['availabilities'],
			},
		},
		options: [
			{
				name: 'Get Availabilities',
				value: 'getApiV1Availabilities',
				description: 'List all Availabilities',
				action: 'Get availabilities',
			},
			{
				name: 'Post Availabilities',
				value: 'postApiV1Availabilities',
				description: 'Create a new Availability',
				action: 'Post availabilities',
			},

			/* 	{
				name: 'Get Availabilities Exceptions',
				value: 'getApiV1AvailabilitiesExceptions',
				description: 'List all Availability Exceptions',
				action: 'Get availabilities exceptions',
			},
			 */
			{
				name: 'Delete Availabilities Exceptions Exception By ID',
				value: 'deleteApiV1AvailabilitiesExceptionsExceptionId',
				description: 'Delete an existing Availability Exception',
				action: 'Delete availabilities exceptions exception by ID',
			},
			{
				name: 'Get Availabilities Exceptions Exception By ID',
				value: 'getApiV1AvailabilitiesExceptionsExceptionId',
				description: 'Return a Availability Exception',
				action: 'Get availabilities exceptions exception by ID',
			},
			{
				name: 'Delete Availabilities Availability By ID',
				value: 'deleteApiV1AvailabilitiesAvailabilityId',
				description: 'Delete an existing Availability',
				action: 'Delete availabilities availability by ID',
			},
			{
				name: 'Put Availabilities Availability By ID',
				value: 'putApiV1AvailabilitiesAvailabilityId',
				description: 'Update an existing Availability',
				action: 'Put availabilities availability by ID',
			},
			{
				name: 'Get Availabilities Availability By ID',
				value: 'getApiV1AvailabilitiesAvailabilityId',
				description: 'Return a Availability',
				action: 'Get availabilities availability by ID',
			},
			{
				name: 'Get Availabilities Availability By ID Exceptions',
				value: 'getApiV1AvailabilitiesAvailabilityIdExceptions',
				description: 'List all Availability Exceptions for parent Availability',
				action: 'Get availabilities availability by ID exceptions',
			},
			{
				name: 'Post Availabilities Availability By ID Exceptions',
				value: 'postApiV1AvailabilitiesAvailabilityIdExceptions',
				description: 'Create a new Availability Exception',
				action: 'Post availabilities availability by ID exceptions',
			},
		],
		default: 'postApiV1AvailabilitiesAvailabilityIdExceptions',
		noDataExpression: true,
	},

	...getApiV1AvailabilitiesGetAllFields,

	...postApiV1AvailabilitiesCreateFields,

	//...getApiV1AvailabilitiesExceptionsGetAllFields,

	...deleteApiV1AvailabilitiesExceptionsExceptionIdDeleteFields,

	...getApiV1AvailabilitiesExceptionsExceptionIdGetFields,

	...deleteApiV1AvailabilitiesAvailabilityIdDeleteFields,

	...putApiV1AvailabilitiesAvailabilityIdUpdateFields,

	...getApiV1AvailabilitiesAvailabilityIdGetFields,

	...getApiV1AvailabilitiesAvailabilityIdExceptionsGetAllFields,

	...postApiV1AvailabilitiesAvailabilityIdExceptionsCreateFields,
];
