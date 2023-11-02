import { INodeProperties } from 'n8n-workflow';
        export const deleteApiV1EmployeeEvaluationsEvaluationIdTagsEvaluationTagIdDeleteFields: INodeProperties[] = [
        {
                    displayName: 'Company ID', 
                    name: 'company_id',
                    type: 'number', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'deleteApiV1EmployeeEvaluationsEvaluationIdTagsEvaluationTagId' 
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
                            'deleteApiV1EmployeeEvaluationsEvaluationIdTagsEvaluationTagId' 
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
                    displayName: 'Evaluation Tag_ID', 
                    name: 'evaluation_tag_id',
                    type: 'number', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'deleteApiV1EmployeeEvaluationsEvaluationIdTagsEvaluationTagId' 
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
                    operation: ['deleteApiV1EmployeeEvaluationsEvaluationIdTagsEvaluationTagId'],
                    resource: ['employee_evaluations'],
                },
            },
            options: [	],
    },];