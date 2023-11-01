import { INodeProperties } from 'n8n-workflow';
        export const putApiV1EmploymentsIdYearlyBringShiftsForYearUpdateFields: INodeProperties[] = [
        {
                    displayName: 'ID', 
                    name: 'id',
                    type: 'number', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'putApiV1EmploymentsIdYearlyBringShiftsForYear' 
                        ], 
                        resource: [
                            'employments'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: 'Employment ID', 
                },
{
                    displayName: 'Company ID', 
                    name: 'company_id',
                    type: 'number', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'putApiV1EmploymentsIdYearlyBringShiftsForYear' 
                        ], 
                        resource: [
                            'employments'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: 'Company ID', 
                },
{
                    displayName: 'year', 
                    name: 'year',
                    type: 'number', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'putApiV1EmploymentsIdYearlyBringShiftsForYear' 
                        ], 
                        resource: [
                            'employments'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: 'Year to update', 
                },
{
                    displayName: 'hours', 
                    name: 'hours',
                    type: 'number', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'putApiV1EmploymentsIdYearlyBringShiftsForYear' 
                        ], 
                        resource: [
                            'employments'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: 'Hours of the Yearly Bring Shift', 
                },
{
            displayName: 'Additional Fields',
            name: 'additionalFields',
            type: 'collection',
            placeholder: 'Add Field',
            default: {},
            displayOptions: {
                show: {
                    operation: ['putApiV1EmploymentsIdYearlyBringShiftsForYear'],
                    resource: ['employments'],
                },
            },
            options: [	],
    },];