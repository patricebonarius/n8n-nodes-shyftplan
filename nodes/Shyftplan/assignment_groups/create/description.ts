import { INodeProperties } from 'n8n-workflow';
        export const postApiV1AssignmentGroupsCreateFields: INodeProperties[] = [
        {
                    displayName: 'Shiftplan ID', 
                    name: 'shiftplan_id',
                    type: 'string', 
                    default: '',
                    placeholder: '',
                    description: "Shiftplan ID",
                    required: true,
                    displayOptions: { 
                        show: { 
                            operation: [
                                'postApiV1AssignmentGroups' 
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
                                'postApiV1AssignmentGroups' 
                            ], 
                            resource: [
                                'assignment_groups'
                            ], 
                        },
                    }, 
                },
{
                    displayName: 'Name', 
                    name: 'name',
                    type: 'string', 
                    default: '',
                    placeholder: '',
                    description: "Name",
                    required: true,
                    displayOptions: { 
                        show: { 
                            operation: [
                                'postApiV1AssignmentGroups' 
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
                    operation: ['postApiV1AssignmentGroups'],
                    resource: ['assignment_groups'],
                },
            },
            options: [{
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