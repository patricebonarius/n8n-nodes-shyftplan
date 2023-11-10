import { INodeProperties } from 'n8n-workflow';
import { postApiV1RequestsConfirmSwapShiftCreateFields } from './confirm_swap_shift/create/description';
import { postApiV1RequestsAcceptSwapShiftCreateFields } from './accept_swap_shift/create/description';
import { postApiV1RequestsSwapShiftCreateFields } from './swap_shift/create/description';
import { postApiV1RequestsChangeShiftCreateFields } from './change_shift/create/description';
import { postApiV1RequestsConfirmApplyShiftCreateFields } from './confirm_apply_shift/create/description';
import { postApiV1RequestsApplyShiftCreateFields } from './apply_shift/create/description';
import { getApiV1RequestsGetAllFields } from './getAll/description';
import { postApiV1RequestsJoinCreateFields } from './join/create/description';
import { postApiV1RequestsReplaceConfirmCreateFields } from './replace/confirm/create/description';
import { postApiV1RequestsReplaceAcceptCreateFields } from './replace/accept/create/description';
import { postApiV1RequestsReplaceCreateFields } from './replace/create/description';
import { deleteApiV1RequestsIdDeleteFields } from './delete/description';
import { getApiV1RequestsIdGetFields } from './get/description';

export const requestsOps: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['requests'],
			},
		},
		options: [
			{
				name: 'Post Requests Confirm Swap Shift',
				value: 'postApiV1RequestsConfirmSwapShift',
				description: 'Confirm Shift Swap',
				action: 'Post requests confirm swap shift',
			},
			{
				name: 'Post Requests Accept Swap Shift',
				value: 'postApiV1RequestsAcceptSwapShift',
				description: 'Accept a Shift Swap Request.',
				action: 'Post requests accept swap shift',
			},
			{
				name: 'Post Requests Swap Shift',
				value: 'postApiV1RequestsSwapShift',
				description: 'Create a Shift Swap Request.',
				action: 'Post requests swap shift',
			},
			{
				name: 'Post Requests Change Shift',
				value: 'postApiV1RequestsChangeShift',
				description: 'Create a Change Request.',
				action: 'Post requests change shift',
			},
			{
				name: 'Post Requests Confirm Apply Shift',
				value: 'postApiV1RequestsConfirmApplyShift',
				description: 'Confirm apply to a Shift.',
				action: 'Post requests confirm apply shift',
			},
			{
				name: 'Post Requests Apply Shift',
				value: 'postApiV1RequestsApplyShift',
				description: 'Apply to a Shift.',
				action: 'Post requests apply shift',
			},
			{
				name: 'Get Requests',
				value: 'getApiV1Requests',
				description: 'List all Request',
				action: 'Get requests',
			},
			{
				name: 'Post Requests Join',
				value: 'postApiV1RequestsJoin',
				description: 'Create a Join Request',
				action: 'Post requests join',
			},
			{
				name: 'Post Requests Replace Confirm',
				value: 'postApiV1RequestsReplaceConfirm',
				description:
					'Confirm the Replace Request (Stakeholder accepts and one employee replaces another)',
				action: 'Post requests replace confirm',
			},
			{
				name: 'Post Requests Replace Accept',
				value: 'postApiV1RequestsReplaceAccept',
				description: 'Accept a Replace Request (One employee accepts an offer from another)',
				action: 'Post requests replace accept',
			},
			{
				name: 'Post Requests Replace',
				value: 'postApiV1RequestsReplace',
				description: 'Create a Replace Request (Offer your shift to others)',
				action: 'Post requests replace',
			},
			{
				name: 'Delete Requests By ID',
				value: 'deleteApiV1RequestsId',
				description: 'Destroys a Request.',
				action: 'Delete requests by ID',
			},
			{
				name: 'Get Requests By ID',
				value: 'getApiV1RequestsId',
				description: 'Return a Request',
				action: 'Get requests by ID',
			},
		],
		default: 'getApiV1RequestsId',
		noDataExpression: true,
	},

	...postApiV1RequestsConfirmSwapShiftCreateFields,

	...postApiV1RequestsAcceptSwapShiftCreateFields,

	...postApiV1RequestsSwapShiftCreateFields,

	...postApiV1RequestsChangeShiftCreateFields,

	...postApiV1RequestsConfirmApplyShiftCreateFields,

	...postApiV1RequestsApplyShiftCreateFields,

	...getApiV1RequestsGetAllFields,

	...postApiV1RequestsJoinCreateFields,

	...postApiV1RequestsReplaceConfirmCreateFields,

	...postApiV1RequestsReplaceAcceptCreateFields,

	...postApiV1RequestsReplaceCreateFields,

	...deleteApiV1RequestsIdDeleteFields,

	...getApiV1RequestsIdGetFields,
];
