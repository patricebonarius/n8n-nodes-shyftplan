import { INodeProperties } from 'n8n-workflow';
import { getApiV1EmployeeEvaluationsStaffShiftIdGetFields } from './get/description';
import { postApiV1EmployeeEvaluationsStaffShiftIdCreateFields } from './create/description';
import { deleteApiV1EmployeeEvaluationsStaffShiftIdDeleteFields } from './delete/description';
import { postApiV1EmployeeEvaluationsStaffShiftIdAcceptCreateFields } from './accept/create/description';
import { deleteApiV1EmployeeEvaluationsEvaluationIdTagsEvaluationTagIdDeleteFields } from './tags/delete/description';
import { postApiV1EmployeeEvaluationsEvaluationIdTagsCreateFields } from './tags/create/description';
import { getApiV1EmployeeEvaluationsEvaluationIdTagsGetAllFields } from './tags/getAll/description';
import { putApiV1EmployeeEvaluationsStaffShiftIdPaymentsPaymentIdUpdateFields } from './payments/update/description';
import { getApiV1EmployeeEvaluationsStaffShiftIdPaymentsPaymentIdGetFields } from './payments/get/description';
import { postApiV1EmployeeEvaluationsStaffShiftIdPaymentsCreateFields } from './payments/create/description';
import { getApiV1EmployeeEvaluationsStaffShiftIdPaymentsGetAllFields } from './payments/getAll/description';
import { deleteApiV1EmployeeEvaluationsStaffShiftIdEvaluationBreakEvaluationBreakIdDeleteFields } from './evaluation_break/delete/description';
import { putApiV1EmployeeEvaluationsStaffShiftIdEvaluationBreakEvaluationBreakIdUpdateFields } from './evaluation_break/update/description';
import { postApiV1EmployeeEvaluationsStaffShiftIdEvaluationBreakCreateFields } from './evaluation_break/create/description';

export const employee_evaluationsOps: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['employee_evaluations'],
			},
		},
		options: [
			{
				name: 'Get Employee Evaluations Staff Shift By ID',
				value: 'getApiV1EmployeeEvaluationsStaffShiftId',
				description: 'Show employee evaluation.',
				action: 'Get employee evaluations staff shift by ID',
			},
			{
				name: 'Post Employee Evaluations Staff Shift By ID',
				value: 'postApiV1EmployeeEvaluationsStaffShiftId',
				description: 'Sets an employee evaluation for a StaffShift',
				action: 'Post employee evaluations staff shift by ID',
			},
			{
				name: 'Delete Employee Evaluations Staff Shift By ID',
				value: 'deleteApiV1EmployeeEvaluationsStaffShiftId',
				description: 'Decline Employee Evaluation',
				action: 'Delete employee evaluations staff shift by ID',
			},
			{
				name: 'Post Employee Evaluations Staff Shift By ID Accept',
				value: 'postApiV1EmployeeEvaluationsStaffShiftIdAccept',
				description: 'Accepts an employee evaluation for a StaffShift',
				action: 'Post employee evaluations staff shift by ID accept',
			},
			{
				name: 'Delete Employee Evaluations Evaluation By ID Tags Evaluation Tag Id',
				value: 'deleteApiV1EmployeeEvaluationsEvaluationIdTagsEvaluationTagId',
				description: 'Deletes EvaluationTag for Evaluation',
				action: 'Delete employee evaluations evaluation by ID tags evaluation tag id',
			},
			{
				name: 'Post Employee Evaluations Evaluation By ID Tags',
				value: 'postApiV1EmployeeEvaluationsEvaluationIdTags',
				description: 'Creates EvaluationTag for Evaluation',
				action: 'Post employee evaluations evaluation by ID tags',
			},
			{
				name: 'Get Employee Evaluations Evaluation By ID Tags',
				value: 'getApiV1EmployeeEvaluationsEvaluationIdTags',
				description: 'Gets EvaluationTags for Evaluation',
				action: 'Get employee evaluations evaluation by ID tags',
			},
			{
				name: 'Put Employee Evaluations Staff Shift By ID Payments Payment Id',
				value: 'putApiV1EmployeeEvaluationsStaffShiftIdPaymentsPaymentId',
				description: 'Updates Payment for Evaluation',
				action: 'Put employee evaluations staff shift by ID payments payment id',
			},
			{
				name: 'Get Employee Evaluations Staff Shift By ID Payments Payment Id',
				value: 'getApiV1EmployeeEvaluationsStaffShiftIdPaymentsPaymentId',
				description: 'Gets Payment for Evaluation by id',
				action: 'Get employee evaluations staff shift by ID payments payment id',
			},
			{
				name: 'Post Employee Evaluations Staff Shift By ID Payments',
				value: 'postApiV1EmployeeEvaluationsStaffShiftIdPayments',
				description: 'Creates Payments for Evaluation',
				action: 'Post employee evaluations staff shift by ID payments',
			},
			{
				name: 'Get Employee Evaluations Staff Shift By ID Payments',
				value: 'getApiV1EmployeeEvaluationsStaffShiftIdPayments',
				description: 'Gets Payments for Evaluation',
				action: 'Get employee evaluations staff shift by ID payments',
			},
			{
				name: 'Delete Employee Evaluations Staff Shift By ID Evaluation Break Evaluation Break Id',
				value: 'deleteApiV1EmployeeEvaluationsStaffShiftIdEvaluationBreakEvaluationBreakId',
				description: 'Delete evaluation break',
				action:
					'Delete employee evaluations staff shift by ID evaluation break evaluation break id',
			},
			{
				name: 'Put Employee Evaluations Staff Shift By ID Evaluation Break Evaluation Break Id',
				value: 'putApiV1EmployeeEvaluationsStaffShiftIdEvaluationBreakEvaluationBreakId',
				description: 'Update Evaluation break',
				action: 'Put employee evaluations staff shift by ID evaluation break evaluation break id',
			},
			{
				name: 'Post Employee Evaluations Staff Shift By ID Evaluation Break',
				value: 'postApiV1EmployeeEvaluationsStaffShiftIdEvaluationBreak',
				description: 'Create Evaluation break',
				action: 'Post employee evaluations staff shift by ID evaluation break',
			},
		],
		default: 'postApiV1EmployeeEvaluationsStaffShiftIdEvaluationBreak',
		noDataExpression: true,
	},

	...getApiV1EmployeeEvaluationsStaffShiftIdGetFields,

	...postApiV1EmployeeEvaluationsStaffShiftIdCreateFields,

	...deleteApiV1EmployeeEvaluationsStaffShiftIdDeleteFields,

	...postApiV1EmployeeEvaluationsStaffShiftIdAcceptCreateFields,

	...deleteApiV1EmployeeEvaluationsEvaluationIdTagsEvaluationTagIdDeleteFields,

	...postApiV1EmployeeEvaluationsEvaluationIdTagsCreateFields,

	...getApiV1EmployeeEvaluationsEvaluationIdTagsGetAllFields,

	...putApiV1EmployeeEvaluationsStaffShiftIdPaymentsPaymentIdUpdateFields,

	...getApiV1EmployeeEvaluationsStaffShiftIdPaymentsPaymentIdGetFields,

	...postApiV1EmployeeEvaluationsStaffShiftIdPaymentsCreateFields,

	...getApiV1EmployeeEvaluationsStaffShiftIdPaymentsGetAllFields,

	...deleteApiV1EmployeeEvaluationsStaffShiftIdEvaluationBreakEvaluationBreakIdDeleteFields,

	...putApiV1EmployeeEvaluationsStaffShiftIdEvaluationBreakEvaluationBreakIdUpdateFields,

	...postApiV1EmployeeEvaluationsStaffShiftIdEvaluationBreakCreateFields,
];
