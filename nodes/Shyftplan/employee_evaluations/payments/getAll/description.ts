import { INodeProperties } from 'n8n-workflow';
export const getApiV1EmployeeEvaluationsStaffShiftIdPaymentsGetAllFields: INodeProperties[] = [
	{
		displayName: 'Company ID',
		name: 'company_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'ID of the Company',
		required: true,
		displayOptions: {
			show: {
				operation: ['getApiV1EmployeeEvaluationsStaffShiftIdPayments'],
				resource: ['employee_evaluations'],
			},
		},
	},
	{
		displayName: 'Staff Shift_ID',
		name: 'staff_shift_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter Staff Shift_ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['getApiV1EmployeeEvaluationsStaffShiftIdPayments'],
				resource: ['employee_evaluations'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['getApiV1EmployeeEvaluationsStaffShiftIdPayments'],
				resource: ['employee_evaluations'],
			},
		},
		options: [],
	},
];
