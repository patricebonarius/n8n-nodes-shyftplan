import { INodeProperties } from 'n8n-workflow';
        export const putApiV1AssignmentGroupsIdUpdateFields: INodeProperties[] = [
        {
                    displayName: 'ID', 
                    name: 'id',
                    type: 'string', 
                    default: '',
                    placeholder: '',
                    description: "AssignmentGroup ID",
                    required: true,
                    displayOptions: { 
                        show: { 
                            operation: [
                                'putApiV1AssignmentGroupsId' 
                            ], 
                            resource: [
                                'assignment_groups'
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
                                'putApiV1AssignmentGroupsId' 
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
                    operation: ['putApiV1AssignmentGroupsId'],
                    resource: ['assignment_groups'],
                },
            },
            options: [{
                            displayName: 'Name', 
                            name: 'name',
                            type: 'string', 
                            default: '',
                            placeholder: '',
                            description: "Name", 
                        },
{
                            displayName: 'Metadata', 
                            name: 'metadata',
                            type: 'json', 
                            typeOptions: {
                                multipleValues: true,
                                multipleValueButtonText: 'Add Tag',
                            },
                            default: '',
                            placeholder: '',
                            description: "AssignmentGroup metadata as json", 
                        },
	],
    },];