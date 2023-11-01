import { INodeProperties } from 'n8n-workflow';
        export const getApiV1EmploymentsIdNotificationsGetAllFields: INodeProperties[] = [
        {
                    displayName: 'ID', 
                    name: 'id',
                    type: 'number', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'getApiV1EmploymentsIdNotifications' 
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
                            'getApiV1EmploymentsIdNotifications' 
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
            displayName: 'Additional Fields',
            name: 'additionalFields',
            type: 'collection',
            placeholder: 'Add Field',
            default: {},
            displayOptions: {
                show: {
                    operation: ['getApiV1EmploymentsIdNotifications'],
                    resource: ['employments'],
                },
            },
            options: [	],
    },];