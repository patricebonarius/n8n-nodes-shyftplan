import { INodeProperties } from 'n8n-workflow';
import { postApiV1ShiftsShiftIdPaygradesCreateFields } from './paygrades/create/description';
import { getApiV1ShiftsShiftIdPaygradesGetAllFields } from './paygrades/getAll/description';
import { deleteApiV1ShiftsShiftIdPaygradesIdDeleteFields } from './paygrades/delete/description';
import { patchApiV1ShiftsIdPatchFields } from './patch/description';
import { putApiV1ShiftsIdUpdateFields } from './update/description';
import { getApiV1ShiftsIdGetFields } from './get/description';
import { deleteApiV1ShiftsIdDeleteFields } from './delete/description';
import { postApiV1ShiftsIdCloneCreateFields } from './clone/create/description';
import { getApiV1ShiftsIdAvailableEmploymentsGetAllFields } from './available_employments/getAll/description';
import { postApiV1ShiftsIdDisconnectCreateFields } from './disconnect/create/description';
import { getApiV1ShiftsIdEvaluationsGetAllFields } from './evaluations/getAll/description';
import { getApiV1ShiftsGetAllFields } from './getAll/description';
import { postApiV1ShiftsCreateFields } from './create/description';
import { postApiV1ShiftsConnectCreateFields } from './connect/create/description';
import { postApiV1ShiftsShiftIdShiftBreaksCreateFields } from './shift_breaks/create/description';
import { deleteApiV1ShiftsShiftIdShiftBreaksIdDeleteFields } from './shift_breaks/delete/description';
import { patchApiV1ShiftsShiftIdShiftBreaksIdPatchFields } from './shift_breaks/patch/description';
import { deleteApiV1ShiftsShiftIdEvaluationTagsDeleteFields } from './evaluation_tags/delete/description';
import { postApiV1ShiftsShiftIdEvaluationTagsCreateFields } from './evaluation_tags/create/description';
import { getApiV1ShiftsShiftIdEvaluationTagsGetAllFields } from './evaluation_tags/getAll/description';
import { putApiV2ShiftsIdPaygradesUpdateFields } from './paygrades/update/description';

export const shiftsOps: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['shifts'],
			},
		},
		options: [
			{
				name: 'Post Shifts Shift By ID Paygrades',
				value: 'postApiV1ShiftsShiftIdPaygrades',
				description: 'Create shift paygrade',
				action: 'Post shifts shift by ID paygrades',
			},
			{
				name: 'Get Shifts Shift By ID Paygrades',
				value: 'getApiV1ShiftsShiftIdPaygrades',
				description: 'Get paygrades for a shift',
				action: 'Get shifts shift by ID paygrades',
			},
			{
				name: 'Delete Shifts Shift By ID Paygrades Id',
				value: 'deleteApiV1ShiftsShiftIdPaygradesId',
				description: 'Delete a paygrade.',
				action: 'Delete shifts shift by ID paygrades id',
			},
			{
				name: 'Put Shifts Shift By ID Paygrades Id',
				value: 'putApiV1ShiftsShiftIdPaygradesId',
				description: 'Updates a shift paygrade',
				action: 'Put shifts shift by ID paygrades id',
			},
			{
				name: 'Patch Shifts By ID',
				value: 'patchApiV1ShiftsId',
				description: 'Updates existing shift',
				action: 'Patch shifts by ID',
			},
			{
				name: 'Put Shifts By ID',
				value: 'putApiV1ShiftsId',
				description: 'Updates existing shift',
				action: 'Put shifts by ID',
			},
			{
				name: 'Get Shifts By ID',
				value: 'getApiV1ShiftsId',
				description: 'Return a Shift',
				action: 'Get shifts by ID',
			},
			{
				name: 'Delete Shifts By ID',
				value: 'deleteApiV1ShiftsId',
				description: 'Deletes existing shift',
				action: 'Delete shifts by ID',
			},
			{
				name: 'Post Shifts By ID Clone',
				value: 'postApiV1ShiftsIdClone',
				description:
					'Clone a shift with associations: employee assignments, timed breaks, qualifications, tags, evaluation tags, settings',
				action: 'Post shifts by ID clone',
			},
			{
				name: 'Get Shifts By ID Available Employments',
				value: 'getApiV1ShiftsIdAvailableEmployments',
				description: 'List available employments',
				action: 'Get shifts by ID available employments',
			},
			{
				name: 'Post Shifts By ID Disconnect',
				value: 'postApiV1ShiftsIdDisconnect',
				description: 'Disconnect shift',
				action: 'Post shifts by ID disconnect',
			},
			{
				name: 'Get Shifts By ID Evaluations',
				value: 'getApiV1ShiftsIdEvaluations',
				description: 'Return evaluation for shift.',
				action: 'Get shifts by ID evaluations',
			},
			{
				name: 'Get Shifts',
				value: 'getApiV1Shifts',
				description: 'List all Shifts',
				action: 'Get shifts',
			},
			{
				name: 'Post Shifts',
				value: 'postApiV1Shifts',
				description: 'Create a new shift',
				action: 'Post shifts',
			},
			{
				name: 'Post Shifts Connect',
				value: 'postApiV1ShiftsConnect',
				description: 'Connect shifts',
				action: 'Post shifts connect',
			},
			{
				name: 'Post Shifts Shift By ID Shift Breaks',
				value: 'postApiV1ShiftsShiftIdShiftBreaks',
				description: 'Creates shifts break related to this shift',
				action: 'Post shifts shift by ID shift breaks',
			},
			{
				name: 'Delete Shifts Shift By ID Shift Breaks Id',
				value: 'deleteApiV1ShiftsShiftIdShiftBreaksId',
				description: 'Deletes the given shifts break',
				action: 'Delete shifts shift by ID shift breaks id',
			},
			{
				name: 'Patch Shifts Shift By ID Shift Breaks Id',
				value: 'patchApiV1ShiftsShiftIdShiftBreaksId',
				description: 'Updates shifts break as per given params',
				action: 'Patch shifts shift by ID shift breaks id',
			},
			{
				name: 'Delete Shifts Shift By ID Evaluation Tags',
				value: 'deleteApiV1ShiftsShiftIdEvaluationTags',
				description: 'Remove an evaluation tag from the shift',
				action: 'Delete shifts shift by ID evaluation tags',
			},
			{
				name: 'Post Shifts Shift By ID Evaluation Tags',
				value: 'postApiV1ShiftsShiftIdEvaluationTags',
				description: 'Add an evaluation tag to the shift',
				action: 'Post shifts shift by ID evaluation tags',
			},
			{
				name: 'Get Shifts Shift By ID Evaluation Tags',
				value: 'getApiV1ShiftsShiftIdEvaluationTags',
				description: 'List all evaluation tags for the shift',
				action: 'Get shifts shift by ID evaluation tags',
			},
			{
				name: 'Put Shifts By ID Paygrades',
				value: 'putApiV2ShiftsIdPaygrades',
				description: 'Updates a shift paygrade',
				action: 'Put shifts by ID paygrades',
			},
		],
		default: 'shifts_getAll',
		noDataExpression: true,
	},

	...postApiV1ShiftsShiftIdPaygradesCreateFields,

	...getApiV1ShiftsShiftIdPaygradesGetAllFields,

	...deleteApiV1ShiftsShiftIdPaygradesIdDeleteFields,

	...patchApiV1ShiftsIdPatchFields,

	...putApiV1ShiftsIdUpdateFields,

	...getApiV1ShiftsIdGetFields,

	...deleteApiV1ShiftsIdDeleteFields,

	...postApiV1ShiftsIdCloneCreateFields,

	...getApiV1ShiftsIdAvailableEmploymentsGetAllFields,

	...postApiV1ShiftsIdDisconnectCreateFields,

	...getApiV1ShiftsIdEvaluationsGetAllFields,

	...getApiV1ShiftsGetAllFields,

	...postApiV1ShiftsCreateFields,

	...postApiV1ShiftsConnectCreateFields,

	...postApiV1ShiftsShiftIdShiftBreaksCreateFields,

	...deleteApiV1ShiftsShiftIdShiftBreaksIdDeleteFields,

	...patchApiV1ShiftsShiftIdShiftBreaksIdPatchFields,

	...deleteApiV1ShiftsShiftIdEvaluationTagsDeleteFields,

	...postApiV1ShiftsShiftIdEvaluationTagsCreateFields,

	...getApiV1ShiftsShiftIdEvaluationTagsGetAllFields,

	...putApiV2ShiftsIdPaygradesUpdateFields,
];
