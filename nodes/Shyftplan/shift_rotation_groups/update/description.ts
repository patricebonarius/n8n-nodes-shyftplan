import { INodeProperties } from 'n8n-workflow';
        export const putApiV1ShiftRotationGroupsIdUpdateFields: INodeProperties[] = [
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
                                'putApiV1ShiftRotationGroupsId' 
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
                    operation: ['putApiV1ShiftRotationGroupsId'],
                    resource: ['shift_rotation_groups'],
                },
            },
            options: [{
                            displayName: 'Name', 
                            name: 'name',
                            type: 'string', 
                            default: '',
                            placeholder: '',
                            description: "Enter Rotation group name", 
                        },
{
                            displayName: 'Shift Preset_IDs[]', 
                            name: 'shift_preset_idsSTARTEND',
                            type: 'json', 
                            typeOptions: {
                                multipleValues: true,
                                multipleValueButtonText: 'Add Tag',
                            },
                            default: '',
                            placeholder: '',
                            description: "Enter Shift preset IDs", 
                        },
{
                            displayName: 'Sort Position', 
                            name: 'sort_position',
                            type: 'number', 
                            default: '',
                            placeholder: '',
                            description: "Enter Position of group in the list", 
                        },
	],
    },];