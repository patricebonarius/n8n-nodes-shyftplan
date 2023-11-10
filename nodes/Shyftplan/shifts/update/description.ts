import { INodeProperties } from 'n8n-workflow';
        export const putApiV1ShiftsIdUpdateFields: INodeProperties[] = [
        {
                    displayName: 'Starts At', 
                    name: 'starts_at',
                    type: 'string', 
                    default: '',
                    placeholder: '',
                    description: "Enter Start of the shift",
                    required: true,
                    displayOptions: { 
                        show: { 
                            operation: [
                                'putApiV1ShiftsId' 
                            ], 
                            resource: [
                                'shifts'
                            ], 
                        },
                    }, 
                },
{
                    displayName: 'Ends At', 
                    name: 'ends_at',
                    type: 'string', 
                    default: '',
                    placeholder: '',
                    description: "Enter End of the shift",
                    required: true,
                    displayOptions: { 
                        show: { 
                            operation: [
                                'putApiV1ShiftsId' 
                            ], 
                            resource: [
                                'shifts'
                            ], 
                        },
                    }, 
                },
{
                    displayName: 'Workers', 
                    name: 'workers',
                    type: 'number', 
                    default: '',
                    placeholder: '',
                    description: "Enter Number of workers",
                    required: true,
                    displayOptions: { 
                        show: { 
                            operation: [
                                'putApiV1ShiftsId' 
                            ], 
                            resource: [
                                'shifts'
                            ], 
                        },
                    }, 
                },
{
                    displayName: 'Locations Position_ID', 
                    name: 'locations_position_id',
                    type: 'number', 
                    default: '',
                    placeholder: '',
                    description: "Enter Updating locations_position_ID of a shift will unassign all employees from the shift and their evaluations will be deleted",
                    required: true,
                    displayOptions: { 
                        show: { 
                            operation: [
                                'putApiV1ShiftsId' 
                            ], 
                            resource: [
                                'shifts'
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
                                'putApiV1ShiftsId' 
                            ], 
                            resource: [
                                'shifts'
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
                    operation: ['putApiV1ShiftsId'],
                    resource: ['shifts'],
                },
            },
            options: [{
                            displayName: 'Note', 
                            name: 'note',
                            type: 'string', 
                            default: '',
                            placeholder: '',
                            description: "Enter Note for the shift", 
                        },
{
                            displayName: 'Can Evaluate', 
                            name: 'can_evaluate',
                            type: 'boolean', 
                            default: false,
                            placeholder: '',
                            description: "Whether Employees can create evaluations", 
                        },
{
                            displayName: 'Untimed', 
                            name: 'untimed',
                            type: 'boolean', 
                            default: false,
                            placeholder: '',
                            description: "Whether Standby shift", 
                        },
{
                            displayName: 'Auto Accept', 
                            name: 'auto_accept',
                            type: 'string', 
                            default: '',
                            placeholder: '',
                            description: "Enter Auto accept shift requests as long as there are open slots on the shift", 
                        },
{
                            displayName: 'Shift Preset_ID', 
                            name: 'shift_preset_id',
                            type: 'number', 
                            default: '',
                            placeholder: '',
                            description: "Enter ID of an exisiting shift preset", 
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
                            description: "Enter Shift metadata as JSON", 
                        },
{
                            displayName: 'Break Time', 
                            name: 'break_time',
                            type: 'number', 
                            default: '',
                            placeholder: '',
                            description: "Enter Break duration in minutes (Required unless untimed_break_time is present)", 
                        },
{
                            displayName: 'Untimed Break_time', 
                            name: 'untimed_break_time',
                            type: 'number', 
                            default: '',
                            placeholder: '',
                            description: "Enter Untimed breaks in minutes (Required unless break_time is present)", 
                        },
{
                            displayName: 'Tag IDs[]', 
                            name: 'tag_idsSTARTEND',
                            type: 'json', 
                            typeOptions: {
                                multipleValues: true,
                                multipleValueButtonText: 'Add Tag',
                            },
                            default: '',
                            placeholder: '',
                            description: "Enter Array of Shift Tag IDs (including from shift presets)", 
                        },
{
                            displayName: 'Evaluation Tag_IDs[]', 
                            name: 'evaluation_tag_idsSTARTEND',
                            type: 'json', 
                            typeOptions: {
                                multipleValues: true,
                                multipleValueButtonText: 'Add Tag',
                            },
                            default: '',
                            placeholder: '',
                            description: "Enter Array of EvaluationTag IDs (including from shift presets)", 
                        },
{
                            displayName: 'Shift Breaks[][starts_at]', 
                            name: 'shift_breaksSTARTENDSTARTstarts_atEND',
                            type: 'json', 
                            typeOptions: {
                                multipleValues: true,
                                multipleValueButtonText: 'Add Tag',
                            },
                            default: '',
                            placeholder: '',
                            description: "Enter Start time of the breaks", 
                        },
{
                            displayName: 'Shift Breaks[][ends_at]', 
                            name: 'shift_breaksSTARTENDSTARTends_atEND',
                            type: 'json', 
                            typeOptions: {
                                multipleValues: true,
                                multipleValueButtonText: 'Add Tag',
                            },
                            default: '',
                            placeholder: '',
                            description: "Enter End time of the breaks", 
                        },
{
                            displayName: 'Assignment Group_IDs[]', 
                            name: 'assignment_group_idsSTARTEND',
                            type: 'json', 
                            typeOptions: {
                                multipleValues: true,
                                multipleValueButtonText: 'Add Tag',
                            },
                            default: '',
                            placeholder: '',
                            description: "Enter Array of AssignmentGroup ID", 
                        },
{
                            displayName: 'Shift Rotation_group_IDs[]', 
                            name: 'shift_rotation_group_idsSTARTEND',
                            type: 'json', 
                            typeOptions: {
                                multipleValues: true,
                                multipleValueButtonText: 'Add Tag',
                            },
                            default: '',
                            placeholder: '',
                            description: "Enter Array of ShiftRotationGroup ID", 
                        },
{
                            displayName: 'Manager Note', 
                            name: 'manager_note',
                            type: 'string', 
                            default: '',
                            placeholder: '',
                            description: "Enter Manager note for the Shift", 
                        },
{
                            displayName: 'Ignore Conflicts', 
                            name: 'ignore_conflicts',
                            type: 'json', 
                            typeOptions: {
                                multipleValues: true,
                                multipleValueButtonText: 'Add Tag',
                            },
                            default: '',
                            placeholder: '',
                            description: "Enter Either true to ignore all conflicts listed below or an Array of specific conflicts to ignore Only warnings can be ignored, enforced conflicts will persist Possible values are:<ul> <li>shifts_collision</li><li>absences_collision</li><li>locations_position_changed</li><li>minimum_break</li><li>maximum_working_hours</li><li>minimum_rest</li><li>maximum_earning</li><li>outsIDe_employment_period</li><li>maximum_consecutive_working_days</li><li>restricted_shift_presets</li><li>unavailable</li><li>not_available</li></ul>", 
                        },
{
                            displayName: 'Update Connected', 
                            name: 'update_connected',
                            type: 'boolean', 
                            default: false,
                            placeholder: '',
                            description: "Whether Update connected shifts if value is true", 
                        },
{
                            displayName: 'Qualifications[][ID]', 
                            name: 'qualificationsSTARTENDSTARTidEND',
                            type: 'json', 
                            typeOptions: {
                                multipleValues: true,
                                multipleValueButtonText: 'Add Tag',
                            },
                            default: '',
                            placeholder: '',
                            description: "Enter Qualification ID", 
                        },
{
                            displayName: 'Qualifications[][count]', 
                            name: 'qualificationsSTARTENDSTARTcountEND',
                            type: 'json', 
                            typeOptions: {
                                multipleValues: true,
                                multipleValueButtonText: 'Add Tag',
                            },
                            default: '',
                            placeholder: '',
                            description: "Enter Required workers per qualification", 
                        },
	],
    },];