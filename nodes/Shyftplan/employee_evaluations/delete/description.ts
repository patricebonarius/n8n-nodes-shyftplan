import { INodeProperties } from 'n8n-workflow';
export const deleteApiV1EmployeeEvaluationsStaffShiftIdDeleteFields: INodeProperties[] = [
	{
		displayName: 'Company ID',
		name: 'company_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter Company ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['deleteApiV1EmployeeEvaluationsStaffShiftId'],
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
				operation: ['deleteApiV1EmployeeEvaluationsStaffShiftId'],
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
				operation: ['deleteApiV1EmployeeEvaluationsStaffShiftId'],
				resource: ['employee_evaluations'],
			},
		},
		options: [],
	},
];
