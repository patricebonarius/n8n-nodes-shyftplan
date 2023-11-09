import { INodeProperties } from 'n8n-workflow';
        export const getApiV1AssignmentGroupsIdGetFields: INodeProperties[] = [
        {
                    displayName: 'Company ID', 
                    name: 'company_id',
                    type: 'number', 
                    default: '',
                    placeholder: '',
                    description: "Enter Company ID",
                    required: true,
                    displayOptions: { 
                        show: { 
                            operation: [
                                'getApiV1AssignmentGroupsId' 
                            ], 
                            resource: [
                                'assignment_groups'
                            ], 
                        },
                    }, 
                },
{
                    displayName: 'ID', 
                    name: 'id',
                    type: 'number', 
                    default: '',
                    placeholder: '',
                    description: "AssignmentGroup ID",
                    required: true,
                    displayOptions: { 
                        show: { 
                            operation: [
                                'getApiV1AssignmentGroupsId' 
                            ], 
                            resource: [
                                'assignment_groups'
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
                    operation: ['getApiV1AssignmentGroupsId'],
                    resource: ['assignment_groups'],
                },
            },
            options: [	],
    },];