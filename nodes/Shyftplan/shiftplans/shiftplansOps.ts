import { INodeProperties } from 'n8n-workflow';
import { getApiV1ShiftplansGetAllFields } from './getAll/description';
import { postApiV1ShiftplansCreateFields } from './create/description';
import { postApiV1ShiftplansAssignEmploymentsToOpenShiftsCreateFields } from './assign_employments_to_open_shifts/create/description';
import { getApiV1ShiftplansIdGetFields } from './get/description';
import { deleteApiV1ShiftplansIdDeleteFields } from './delete/description';
import { patchApiV1ShiftplansIdPatchFields } from './patch/description';
import { postApiV1ShiftplansIdAssignRotationCreateFields } from './assign_rotation/create/description';
import { postApiV1ShiftplansIdPublishCreateFields } from './publish/create/description';
import { getApiV1ShiftplansShiftplanIdNotificationsGetAllFields } from './notifications/getAll/description';
import { postApiV1ShiftplansShiftplanIdNotificationsMessagesCreateFields } from './notifications_messages/create/description';
import { postApiV1ShiftplansShiftplanIdMessagesCreateFields } from './messages/create/description';
import { postApiV1ShiftplansShiftplanIdCopyToExistingCreateFields } from './copy_to_existing/create/description';
import { postApiV1ShiftplansShiftplanIdCopyCreateFields } from './copy/create/description';
import { postApiV1ShiftplansShiftplanIdDayNotesCreateFields } from './day_notes/create/description';
import { getApiV1ShiftplansShiftplanIdDayNotesGetAllFields } from './day_notes/getAll/description';
import { deleteApiV1ShiftplansShiftplanIdDayNotesIdDeleteFields } from './day_notes/delete/description';
import { putApiV1ShiftplansShiftplanIdDayNotesIdUpdateFields } from './day_notes/update/description';

export const shiftplansOps: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['shiftplans'],
			},
		},
		options: [
			{
				name: 'Get Shiftplans',
				value: 'getApiV1Shiftplans',
				description: 'List all Shiftplans',
				action: 'Get shiftplans',
			},
			{
				name: 'Post Shiftplans',
				value: 'postApiV1Shiftplans',
				description: 'Create a new Shiftplan',
				action: 'Post shiftplans',
			},
			{
				name: 'Post Shiftplans Assign Employments To Open Shifts',
				value: 'postApiV1ShiftplansAssignEmploymentsToOpenShifts',
				description:
					'Copy a shiftplan and automatically assign employments to open shifts in the copied shiftplan',
				action: 'Post shiftplans assign employments to open shifts',
			},
			{
				name: 'Get Shiftplans By ID',
				value: 'getApiV1ShiftplansId',
				description: 'Return a Shiftplan',
				action: 'Get shiftplans by ID',
			},
			{
				name: 'Delete Shiftplans By ID',
				value: 'deleteApiV1ShiftplansId',
				description: 'Delete a Shiftplan',
				action: 'Delete shiftplans by ID',
			},
			{
				name: 'Patch Shiftplans By ID',
				value: 'patchApiV1ShiftplansId',
				description:
					'Updates a Shiftplan Shifts outsIDe of the time frame will be deleted (without warning)',
				action: 'Patch shiftplans by ID',
			},
			{
				name: 'Post Shiftplans By ID Assign Rotation',
				value: 'postApiV1ShiftplansIdAssignRotation',
				description: 'Assign shift rotation to existing shiftplan Operation happens in background',
				action: 'Post shiftplans by ID assign rotation',
			},
			{
				name: 'Post Shiftplans By ID Publish',
				value: 'postApiV1ShiftplansIdPublish',
				description: 'Publish Shiftplan',
				action: 'Post shiftplans by ID publish',
			},
			{
				name: 'Get Shiftplans Shiftplan By ID Notifications',
				value: 'getApiV1ShiftplansShiftplanIdNotifications',
				description: 'Fetch Notifications count',
				action: 'Get shiftplans shiftplan by ID notifications',
			},
			{
				name: 'Post Shiftplans Shiftplan By ID Notifications Messages',
				value: 'postApiV1ShiftplansShiftplanIdNotificationsMessages',
				description: 'Create a Shift Schedule Notification',
				action: 'Post shiftplans shiftplan by ID notifications messages',
			},
			{
				name: 'Post Shiftplans Shiftplan By ID Messages',
				value: 'postApiV1ShiftplansShiftplanIdMessages',
				description: 'Message employees from shift schedule',
				action: 'Post shiftplans shiftplan by ID messages',
			},
			{
				name: 'Post Shiftplans Shiftplan By ID Copy To Existing',
				value: 'postApiV1ShiftplansShiftplanIdCopyToExisting',
				description: 'Copy to existing Shiftplan',
				action: 'Post shiftplans shiftplan by ID copy to existing',
			},
			{
				name: 'Post Shiftplans Shiftplan By ID Copy',
				value: 'postApiV1ShiftplansShiftplanIdCopy',
				description: 'Copy a Shiftplan',
				action: 'Post shiftplans shiftplan by ID copy',
			},
			{
				name: 'Post Shiftplans Shiftplan By ID Day Notes',
				value: 'postApiV1ShiftplansShiftplanIdDayNotes',
				description: 'Add a new day note',
				action: 'Post shiftplans shiftplan by ID day notes',
			},
			{
				name: 'Get Shiftplans Shiftplan By ID Day Notes',
				value: 'getApiV1ShiftplansShiftplanIdDayNotes',
				description: 'List all day notes for existing shiftplan',
				action: 'Get shiftplans shiftplan by ID day notes',
			},
			{
				name: 'Delete Shiftplans Shiftplan By ID Day Notes Id',
				value: 'deleteApiV1ShiftplansShiftplanIdDayNotesId',
				description: 'Delete a day note',
				action: 'Delete shiftplans shiftplan by ID day notes id',
			},
			{
				name: 'Put Shiftplans Shiftplan By ID Day Notes Id',
				value: 'putApiV1ShiftplansShiftplanIdDayNotesId',
				description: 'Update a day note',
				action: 'Put shiftplans shiftplan by ID day notes id',
			},
		],
		default: 'putApiV1ShiftplansShiftplanIdDayNotesId',
		noDataExpression: true,
	},

	...getApiV1ShiftplansGetAllFields,

	...postApiV1ShiftplansCreateFields,

	...postApiV1ShiftplansAssignEmploymentsToOpenShiftsCreateFields,

	...getApiV1ShiftplansIdGetFields,

	...deleteApiV1ShiftplansIdDeleteFields,

	...patchApiV1ShiftplansIdPatchFields,

	...postApiV1ShiftplansIdAssignRotationCreateFields,

	...postApiV1ShiftplansIdPublishCreateFields,

	...getApiV1ShiftplansShiftplanIdNotificationsGetAllFields,

	...postApiV1ShiftplansShiftplanIdNotificationsMessagesCreateFields,

	...postApiV1ShiftplansShiftplanIdMessagesCreateFields,

	...postApiV1ShiftplansShiftplanIdCopyToExistingCreateFields,

	...postApiV1ShiftplansShiftplanIdCopyCreateFields,

	...postApiV1ShiftplansShiftplanIdDayNotesCreateFields,

	...getApiV1ShiftplansShiftplanIdDayNotesGetAllFields,

	...deleteApiV1ShiftplansShiftplanIdDayNotesIdDeleteFields,

	...putApiV1ShiftplansShiftplanIdDayNotesIdUpdateFields,
];
