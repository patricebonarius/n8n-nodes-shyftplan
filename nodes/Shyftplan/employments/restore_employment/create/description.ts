import { INodeProperties } from 'n8n-workflow';
        export const postApiV1EmploymentsIdRestoreEmploymentCreateFields: INodeProperties[] = [
        {
                    displayName: 'Company ID', 
                    name: 'company_id',
                    type: 'number', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'postApiV1EmploymentsIdRestoreEmployment' 
                        ], 
                        resource: [
                            'employments'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: '', 
                },
{
                    displayName: 'ID', 
                    name: 'id',
                    type: 'number', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'postApiV1EmploymentsIdRestoreEmployment' 
                        ], 
                        resource: [
                            'employments'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: 'Employment id', 
                },
{
            displayName: 'Additional Fields',
            name: 'additionalFields',
            type: 'collection',
            placeholder: 'Add Field',
            default: {},
            displayOptions: {
                show: {
                    operation: ['postApiV1EmploymentsIdRestoreEmployment'],
                    resource: ['employments'],
                },
            },
            options: [	],
    },];