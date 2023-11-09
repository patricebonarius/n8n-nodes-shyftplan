import { INodeProperties } from 'n8n-workflow';
import { getApiV1AbsencesEmploymentsGetAllFields } from './employments/getAll/description';
import { getApiV1AbsencesEmploymentsIdAbsenceInfoGetAllFields } from './employments/absence_info/getAll/description';
import { getApiV1AbsencesEmploymentsIdCarryOverInfoGetAllFields } from './employments/carry_over_info/getAll/description';
import { getApiV1AbsencesEmploymentsIdGetFields } from './employments/get/description';
import { postApiV1AbsencesIdWithdrawCreateFields } from './withdraw/create/description';
import { putApiV1AbsencesIdUpdateFields } from './update/description';
import { deleteApiV1AbsencesIdDeleteFields } from './delete/description';
import { getApiV1AbsencesIdGetFields } from './get/description';
import { postApiV1AbsencesIdDeclineCreateFields } from './decline/create/description';
import { postApiV1AbsencesIdApproveCreateFields } from './approve/create/description';
import { postApiV1AbsencesIdAttachmentCreateFields } from './attachment/create/description';
import { getApiV1AbsencesGetAllFields } from './getAll/description';
import { postApiV1AbsencesCreateFields } from './create/description';

export const absencesOps: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['absences'],
			},
		},
		options: [
			{
				name: 'Get Absences Employments',
				value: 'getApiV1AbsencesEmployments',
				description: 'List all Employments which can be seen on Absences.',
				action: 'Get absences employments',
			},
			{
				name: 'Get Absences Employments By ID Absence Info',
				value: 'getApiV1AbsencesEmploymentsIdAbsenceInfo',
				description: 'Return absence info of Employment for given dates',
				action: 'Get absences employments by ID absence info',
			},
			{
				name: 'Get Absences Employments By ID Carry Over Info',
				value: 'getApiV1AbsencesEmploymentsIdCarryOverInfo',
				description:
					'Return carryover info of Employment for given period.Absence Reason should have carryover days enabled.Period should be within one year and include carry over days.',
				action: 'Get absences employments by ID carry over info',
			},
			{
				name: 'Get Absences Employments By ID',
				value: 'getApiV1AbsencesEmploymentsId',
				description: 'Return a Employment which can be seen on Absences.',
				action: 'Get absences employments by ID',
			},
			{
				name: 'Post Absences By ID Withdraw',
				value: 'postApiV1AbsencesIdWithdraw',
				description: 'Withdraw a Absence.',
				action: 'Post absences by ID withdraw',
			},
			{
				name: 'Put Absences By ID',
				value: 'putApiV1AbsencesId',
				description: 'Update a Absence',
				action: 'Put absences by ID',
			},
			{
				name: 'Delete Absences By ID',
				value: 'deleteApiV1AbsencesId',
				description: 'Delete a Absence.',
				action: 'Delete absences by ID',
			},
			{
				name: 'Get Absences By ID',
				value: 'getApiV1AbsencesId',
				description: 'Return a Absence.',
				action: 'Get absences by ID',
			},
			{
				name: 'Post Absences By ID Decline',
				value: 'postApiV1AbsencesIdDecline',
				description: 'Decline a Absence.',
				action: 'Post absences by ID decline',
			},
			{
				name: 'Post Absences By ID Approve',
				value: 'postApiV1AbsencesIdApprove',
				description: 'Approve a Absence.',
				action: 'Post absences by ID approve',
			},
			{
				name: 'Post Absences By ID Attachment',
				value: 'postApiV1AbsencesIdAttachment',
				description: 'Add attachment to an absence',
				action: 'Post absences by ID attachment',
			},
			{
				name: 'Get Absences',
				value: 'getApiV1Absences',
				description: 'List all Absences',
				action: 'Get absences',
			},
			{
				name: 'Post Absences',
				value: 'postApiV1Absences',
				description: 'Create an Absence',
				action: 'Post absences',
			},
		],
		default: 'postApiV1Absences',
		noDataExpression: true,
	},

	...getApiV1AbsencesEmploymentsGetAllFields,

	...getApiV1AbsencesEmploymentsIdAbsenceInfoGetAllFields,

	...getApiV1AbsencesEmploymentsIdCarryOverInfoGetAllFields,

	...getApiV1AbsencesEmploymentsIdGetFields,

	...postApiV1AbsencesIdWithdrawCreateFields,

	...putApiV1AbsencesIdUpdateFields,

	...deleteApiV1AbsencesIdDeleteFields,

	...getApiV1AbsencesIdGetFields,

	...postApiV1AbsencesIdDeclineCreateFields,

	...postApiV1AbsencesIdApproveCreateFields,

	...postApiV1AbsencesIdAttachmentCreateFields,

	...getApiV1AbsencesGetAllFields,

	...postApiV1AbsencesCreateFields,
];
