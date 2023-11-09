import { INodeProperties } from 'n8n-workflow';
        export const getApiV1EmploymentsIdLiveInfoGetAllFields: INodeProperties[] = [
        {
                    displayName: 'ID', 
                    name: 'id',
                    type: 'number', 
                    default: '',
                    placeholder: '',
                    description: "Employment id",
                    required: true,
                    displayOptions: { 
                        show: { 
                            operation: [
                                'getApiV1EmploymentsIdLiveInfo' 
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
                    operation: ['getApiV1EmploymentsIdLiveInfo'],
                    resource: ['employments'],
                },
            },
            options: [{
                            displayName: 'Company ID', 
                            name: 'company_id',
                            type: 'number', 
                            default: '',
                            placeholder: '',
                            description: "Enter Company ID", 
                        },
	],
    },];