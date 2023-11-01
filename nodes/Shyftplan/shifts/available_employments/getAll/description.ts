import { INodeProperties } from "n8n-workflow";
export const getApiV1ShiftsIdAvailableEmploymentsGetAllFields: INodeProperties[] =
  [
    {
      displayName: "ID",
      name: "id",
      type: "number",
      required: true,
      default: "",
      displayOptions: {
        show: {
          operation: ["getApiV1ShiftsIdAvailableEmployments"],
          resource: ["shifts"],
        },
      },
      placeholder: "",
      description: "Shift ID",
    },
    {
      displayName: "Company ID",
      name: "company_id",
      type: "number",
      required: true,
      default: "",
      displayOptions: {
        show: {
          operation: ["getApiV1ShiftsIdAvailableEmployments"],
          resource: ["shifts"],
        },
      },
      placeholder: "",
      description: "Company ID",
    },
    {
      displayName: "Additional Fields",
      name: "additionalFields",
      type: "collection",
      placeholder: "Add Field",
      default: {},
      displayOptions: {
        show: {
          operation: ["getApiV1ShiftsIdAvailableEmployments"],
          resource: ["shifts"],
        },
      },
      options: [
        {
          displayName: "page",
          name: "page",
          type: "number",
          default: "",
          placeholder: "",
          description: "Page (Page size is always 10)",
        },
        {
          displayName: "Per Page",
          name: "per_page",
          type: "number",
          default: "",
          placeholder: "",
          description: "Amount of data to return on each request",
        },
        {
          displayName: "Search String",
          name: "search_string",
          type: "string",
          default: "",
          placeholder: "",
          description: "Search employees by name",
        },
        {
          displayName: "Filters[without Shift_conflicts]",
          name: "filters[without_shift_conflicts]",
          type: "boolean",
          default: false,
          placeholder: "",
          description:
            "WhetherShow only employees without other shifts at this time",
        },
        {
          displayName: "Filters[without Absence_conflicts]",
          name: "filters[without_absence_conflicts]",
          type: "boolean",
          default: false,
          placeholder: "",
          description:
            "WhetherShow only employees without absences at this time",
        },
        {
          displayName: "Filters[with Join_requests]",
          name: "filters[with_join_requests]",
          type: "boolean",
          default: false,
          placeholder: "",
          description:
            "WhetherShow only employees with join requests for this shift",
        },
        {
          displayName: "Filters[with Master_position]",
          name: "filters[with_master_position]",
          type: "boolean",
          default: false,
          placeholder: "",
          description:
            "WhetherShow only employees with master position same as shift position",
        },
        {
          displayName: "Filters[with These_qualification_IDs][]",
          name: "filters[with_these_qualification_ids][]",
          type: "string",
          default: "",
          placeholder: "",
          description: "Show only employees with passed qualification ids",
        },
        {
          displayName: "Filters[availability Filters][available]",
          name: "filters[availability_filters][available]",
          type: "boolean",
          default: false,
          placeholder: "",
          description: "WhetherShow only employees who is fully available",
        },
        {
          displayName: "Filters[availability Filters][partial_available]",
          name: "filters[availability_filters][partial_available]",
          type: "boolean",
          default: false,
          placeholder: "",
          description: "WhetherShow only employees who is partially available",
        },
        {
          displayName: "Filters[availability Filters][partial_both]",
          name: "filters[availability_filters][partial_both]",
          type: "boolean",
          default: false,
          placeholder: "",
          description:
            "WhetherShow only employees who is partially available and partially unavailable",
        },
        {
          displayName: "Filters[availability Filters][partial_unavailable]",
          name: "filters[availability_filters][partial_unavailable]",
          type: "boolean",
          default: false,
          placeholder: "",
          description:
            "WhetherShow only employees who is partially unavailable",
        },
        {
          displayName: "Filters[availability Filters][unavailable]",
          name: "filters[availability_filters][unavailable]",
          type: "boolean",
          default: false,
          placeholder: "",
          description: "WhetherShow only employees who is fully unavailable",
        },
        {
          displayName: "Filters[availability Filters][neutral]",
          name: "filters[availability_filters][neutral]",
          type: "boolean",
          default: false,
          placeholder: "",
          description:
            "WhetherShow only employees who has no information about availabilities",
        },
        {
          displayName: "Filters[tag IDs][]",
          name: "filters[tag_ids][]",
          type: "string",
          default: "",
          placeholder: "",
          description: "Filter by an array of Employee Attribute IDs",
        },
        {
          displayName: "Sort Name",
          name: "sort_name",
          type: "string",
          default: "",
          placeholder: "",
          description: "Sorting param",
        },
        {
          displayName: "Sort Direction",
          name: "sort_direction",
          type: "string",
          default: "",
          placeholder: "",
          description: "Sorting direction",
        },
      ],
    },
  ];
