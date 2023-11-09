import { INodeProperties } from 'n8n-workflow';
        export const getApiV1EmploymentsIdNotificationsGetAllFields: INodeProperties[] = [
        {
                    displayName: 'ID', 
                    name: 'id',
                    type: 'number', 
                    default: '',
                    placeholder: '',
                    description: "Employment ID",
                    required: true,
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
                },
{
                    displayName: 'Company ID', 
                    name: 'company_id',
                    type: 'number', 
                    default: '',
                    placeholder: '',
                    description: "Company ID",
                    required: true,
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