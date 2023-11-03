import { INodeProperties } from 'n8n-workflow';
        export const putApiV1EmployeeEvaluationsStaffShiftIdPaymentsPaymentIdUpdateFields: INodeProperties[] = [
        {
                    displayName: 'Company ID', 
                    name: 'company_id',
                    type: 'number', 
                    default: '',
                    placeholder: '',
                    description: "ID of the Company",
                    required: true,
                    displayOptions: { 
                        show: { 
                            operation: [
                                'putApiV1EmployeeEvaluationsStaffShiftIdPaymentsPaymentId' 
                            ], 
                            resource: [
                                'employee_evaluations'
                            ], 
                        },
                    }, 
                },
{
                    displayName: 'Value', 
                    name: 'value',
                    type: 'number', 
                    default: '',
                    placeholder: '',
                    description: "Payment value",
                    required: true,
                    displayOptions: { 
                        show: { 
                            operation: [
                                'putApiV1EmployeeEvaluationsStaffShiftIdPaymentsPaymentId' 
                            ], 
                            resource: [
                                'employee_evaluations'
                            ], 
                        },
                    }, 
                },
{
                    displayName: 'Staff Shift_ID', 
                    name: 'staff_shift_id',
                    type: 'number', 
                    default: '',
                    placeholder: '',
                    description: "Enter Staff Shift_ID",
                    required: true,
                    displayOptions: { 
                        show: { 
                            operation: [
                                'putApiV1EmployeeEvaluationsStaffShiftIdPaymentsPaymentId' 
                            ], 
                            resource: [
                                'employee_evaluations'
                            ], 
                        },
                    }, 
                },
{
                    displayName: 'Payment ID', 
                    name: 'payment_id',
                    type: 'number', 
                    default: '',
                    placeholder: '',
                    description: "Enter Payment ID",
                    required: true,
                    displayOptions: { 
                        show: { 
                            operation: [
                                'putApiV1EmployeeEvaluationsStaffShiftIdPaymentsPaymentId' 
                            ], 
                            resource: [
                                'employee_evaluations'
                            ], 
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
                    operation: ['putApiV1EmployeeEvaluationsStaffShiftIdPaymentsPaymentId'],
                    resource: ['employee_evaluations'],
                },
            },
            options: [{
                    displayName: 'Parent Payment_ID', 
                    name: 'parent_payment_id',
                    type: 'number', 
                    default: '',
                    placeholder: '',
                    description: "ID of Parent Payment", 
                },
{
                    displayName: 'Paygrade Type_ID', 
                    name: 'paygrade_type_id',
                    type: 'number', 
                    default: '',
                    placeholder: '',
                    description: "ID of the Paygrade Type", 
                },
	],
    },];