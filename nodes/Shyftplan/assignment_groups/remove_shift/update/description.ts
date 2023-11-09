import { INodeProperties } from 'n8n-workflow';
        export const putApiV1AssignmentGroupsIdRemoveShiftUpdateFields: INodeProperties[] = [
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
                                'putApiV1AssignmentGroupsIdRemoveShift' 
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
                                'putApiV1AssignmentGroupsIdRemoveShift' 
                            ], 
                            resource: [
                                'assignment_groups'
                            ], 
                        },
                    }, 
                },
{
                    displayName: 'Shift ID', 
                    name: 'shift_id',
                    type: 'number', 
                    default: '',
                    placeholder: '',
                    description: "Shift id",
                    required: true,
                    displayOptions: { 
                        show: { 
                            operation: [
                                'putApiV1AssignmentGroupsIdRemoveShift' 
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
                    operation: ['putApiV1AssignmentGroupsIdRemoveShift'],
                    resource: ['assignment_groups'],
                },
            },
            options: [	],
    },];