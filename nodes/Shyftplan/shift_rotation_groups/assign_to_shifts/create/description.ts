import { INodeProperties } from 'n8n-workflow';
        export const postApiV1ShiftRotationGroupsIdAssignToShiftsCreateFields: INodeProperties[] = [
        {
                    displayName: 'Shift IDs[]', 
                    name: 'shift_idsSTARTEND',
                    type: 'json', 
                    default: '',
                    placeholder: '',
                    description: "Enter Shift IDs to add to Shift Rotation Group",
                    required: true,
                    displayOptions: { 
                        show: { 
                            operation: [
                                'postApiV1ShiftRotationGroupsIdAssignToShifts' 
                            ], 
                            resource: [
                                'shift_rotation_groups'
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
                    description: "Enter ",
                    required: true,
                    displayOptions: { 
                        show: { 
                            operation: [
                                'postApiV1ShiftRotationGroupsIdAssignToShifts' 
                            ], 
                            resource: [
                                'shift_rotation_groups'
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
                    operation: ['postApiV1ShiftRotationGroupsIdAssignToShifts'],
                    resource: ['shift_rotation_groups'],
                },
            },
            options: [	],
    },];