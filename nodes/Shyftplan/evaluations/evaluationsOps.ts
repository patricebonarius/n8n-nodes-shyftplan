import { INodeProperties } from 'n8n-workflow';
import { getApiV1EvaluationsGetAllFields } from './getAll/description';
import { postApiV1EvaluationsStaffShiftIdEvaluationBreaksCreateFields } from './evaluation_breaks/create/description';
import { deleteApiV1EvaluationsStaffShiftIdEvaluationBreaksEvaluationBreakIdDeleteFields } from './evaluation_breaks/delete/description';
import { putApiV1EvaluationsStaffShiftIdEvaluationBreaksEvaluationBreakIdUpdateFields } from './evaluation_breaks/update/description';
import { postApiV1EvaluationsStaffShiftIdCreateFields } from './create/description';
import { getApiV1EvaluationsStaffShiftIdGetFields } from './get/description';
import { getApiV1EvaluationsStaffShiftIdPaymentsCalculationGetAllFields } from './payments_calculation/getAll/description';
import { postApiV1EvaluationsStaffShiftIdDidShowCreateFields } from './did_show/create/description';
import { postApiV1EvaluationsStaffShiftIdDidNotShowCreateFields } from './did_not_show/create/description';
import { postApiV1EvaluationsStaffShiftIdPaymentsCreateFields } from './payments/create/description';
import { getApiV1EvaluationsStaffShiftIdPaymentsGetAllFields } from './payments/getAll/description';
import { deleteApiV1EvaluationsStaffShiftIdPaymentsPaymentIdDeleteFields } from './payments/delete/description';
import { putApiV1EvaluationsStaffShiftIdPaymentsPaymentIdUpdateFields } from './payments/update/description';
import { getApiV1EvaluationsStaffShiftIdPaymentsPaymentIdGetFields } from './payments/get/description';

export const evaluationsOps: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['evaluations'],
			},
		},
		options: [
			{
				name: 'Get Evaluations',
				value: 'getApiV1Evaluations',
				description: 'List all Evaluations',
				action: 'Get evaluations',
			},
			{
				name: 'Post Evaluations Staff Shift By ID Evaluation Breaks',
				value: 'postApiV1EvaluationsStaffShiftIdEvaluationBreaks',
				description: 'Create an evaluation break',
				action: 'Post evaluations staff shift by ID evaluation breaks',
			},
			{
				name: 'Delete Evaluations Staff Shift By ID Evaluation Breaks Evaluation Break Id',
				value: 'deleteApiV1EvaluationsStaffShiftIdEvaluationBreaksEvaluationBreakId',
				description: 'Delete evaluation break',
				action: 'Delete evaluations staff shift by ID evaluation breaks evaluation break id',
			},
			{
				name: 'Put Evaluations Staff Shift By ID Evaluation Breaks Evaluation Break Id',
				value: 'putApiV1EvaluationsStaffShiftIdEvaluationBreaksEvaluationBreakId',
				description: 'Update Evaluation break',
				action: 'Put evaluations staff shift by ID evaluation breaks evaluation break id',
			},
			{
				name: 'Post Evaluations Staff Shift By ID',
				value: 'postApiV1EvaluationsStaffShiftId',
				description: 'Sets an evaluation for a StaffShift',
				action: 'Post evaluations staff shift by ID',
			},
			{
				name: 'Get Evaluations Staff Shift By ID',
				value: 'getApiV1EvaluationsStaffShiftId',
				description: 'Returns evaluations for a StaffShift',
				action: 'Get evaluations staff shift by ID',
			},
			{
				name: 'Get Evaluations Staff Shift By ID Payments Calculation',
				value: 'getApiV1EvaluationsStaffShiftIdPaymentsCalculation',
				description: 'Evaluation payment data calculator',
				action: 'Get evaluations staff shift by ID payments calculation',
			},
			{
				name: 'Post Evaluations Staff Shift By ID Did Show',
				value: 'postApiV1EvaluationsStaffShiftIdDidShow',
				description: 'undefined',
				action: 'Post evaluations staff shift by ID did show',
			},
			{
				name: 'Post Evaluations Staff Shift By ID Did Not Show',
				value: 'postApiV1EvaluationsStaffShiftIdDidNotShow',
				description: 'Returns evaluations for a StaffShift',
				action: 'Post evaluations staff shift by ID did not show',
			},
			{
				name: 'Post Evaluations Staff Shift By ID Payments',
				value: 'postApiV1EvaluationsStaffShiftIdPayments',
				description: 'Creates Payments for Evaluation',
				action: 'Post evaluations staff shift by ID payments',
			},
			{
				name: 'Get Evaluations Staff Shift By ID Payments',
				value: 'getApiV1EvaluationsStaffShiftIdPayments',
				description: 'Gets Payments for Evaluation',
				action: 'Get evaluations staff shift by ID payments',
			},
			{
				name: 'Delete Evaluations Staff Shift By ID Payments Payment Id',
				value: 'deleteApiV1EvaluationsStaffShiftIdPaymentsPaymentId',
				description: 'Delete Payment',
				action: 'Delete evaluations staff shift by ID payments payment id',
			},
			{
				name: 'Put Evaluations Staff Shift By ID Payments Payment Id',
				value: 'putApiV1EvaluationsStaffShiftIdPaymentsPaymentId',
				description: 'Updates Payment for Evaluation',
				action: 'Put evaluations staff shift by ID payments payment id',
			},
			{
				name: 'Get Evaluations Staff Shift By ID Payments Payment Id',
				value: 'getApiV1EvaluationsStaffShiftIdPaymentsPaymentId',
				description: 'Gets Payment for Evaluation by id',
				action: 'Get evaluations staff shift by ID payments payment id',
			},
		],
		default: 'getApiV1EvaluationsStaffShiftIdPaymentsPaymentId',
		noDataExpression: true,
	},

	...getApiV1EvaluationsGetAllFields,

	...postApiV1EvaluationsStaffShiftIdEvaluationBreaksCreateFields,

	...deleteApiV1EvaluationsStaffShiftIdEvaluationBreaksEvaluationBreakIdDeleteFields,

	...putApiV1EvaluationsStaffShiftIdEvaluationBreaksEvaluationBreakIdUpdateFields,

	...postApiV1EvaluationsStaffShiftIdCreateFields,

	...getApiV1EvaluationsStaffShiftIdGetFields,

	...getApiV1EvaluationsStaffShiftIdPaymentsCalculationGetAllFields,

	...postApiV1EvaluationsStaffShiftIdDidShowCreateFields,

	...postApiV1EvaluationsStaffShiftIdDidNotShowCreateFields,

	...postApiV1EvaluationsStaffShiftIdPaymentsCreateFields,

	...getApiV1EvaluationsStaffShiftIdPaymentsGetAllFields,

	...deleteApiV1EvaluationsStaffShiftIdPaymentsPaymentIdDeleteFields,

	...putApiV1EvaluationsStaffShiftIdPaymentsPaymentIdUpdateFields,

	...getApiV1EvaluationsStaffShiftIdPaymentsPaymentIdGetFields,
];
