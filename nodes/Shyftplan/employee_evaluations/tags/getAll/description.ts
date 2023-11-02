import { INodeProperties } from 'n8n-workflow';
        export const getApiV1EmployeeEvaluationsEvaluationIdTagsGetAllFields: INodeProperties[] = [
        {
                    displayName: 'Company ID', 
                    name: 'company_id',
                    type: 'number', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'getApiV1EmployeeEvaluationsEvaluationIdTags' 
                        ], 
                        resource: [
                            'employee_evaluations'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: "Company ID", 
                },
{
                    displayName: 'Evaluation ID', 
                    name: 'evaluation_id',
                    type: 'number', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'getApiV1EmployeeEvaluationsEvaluationIdTags' 
                        ], 
                        resource: [
                            'employee_evaluations'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: "", 
                },
{
            displayName: 'Additional Fields',
            name: 'additionalFields',
            type: 'collection',
            placeholder: 'Add Field',
            default: {},
            displayOptions: {
                show: {
                    operation: ['getApiV1EmployeeEvaluationsEvaluationIdTags'],
                    resource: ['employee_evaluations'],
                },
            },
            options: [	],
    },];