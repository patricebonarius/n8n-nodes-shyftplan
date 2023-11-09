import { INodeProperties } from 'n8n-workflow';
        export const deleteApiV1AssignmentGroupsIdDeleteFields: INodeProperties[] = [
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
                                'deleteApiV1AssignmentGroupsId' 
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
                    description: "AssignmentGroup id",
                    required: true,
                    displayOptions: { 
                        show: { 
                            operation: [
                                'deleteApiV1AssignmentGroupsId' 
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
                    operation: ['deleteApiV1AssignmentGroupsId'],
                    resource: ['assignment_groups'],
                },
            },
            options: [	],
    },];