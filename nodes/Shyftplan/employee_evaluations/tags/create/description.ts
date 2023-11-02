import { INodeProperties } from 'n8n-workflow';
        export const postApiV1EmployeeEvaluationsEvaluationIdTagsCreateFields: INodeProperties[] = [
        {
                    displayName: 'Company ID', 
                    name: 'company_id',
                    type: 'number', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'postApiV1EmployeeEvaluationsEvaluationIdTags' 
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
                    displayName: 'Tag ID', 
                    name: 'tag_id',
                    type: 'number', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'postApiV1EmployeeEvaluationsEvaluationIdTags' 
                        ], 
                        resource: [
                            'employee_evaluations'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: "Tag ID", 
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
                            'postApiV1EmployeeEvaluationsEvaluationIdTags' 
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
                    operation: ['postApiV1EmployeeEvaluationsEvaluationIdTags'],
                    resource: ['employee_evaluations'],
                },
            },
            options: [	],
    },];