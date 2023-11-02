import { INodeProperties } from "n8n-workflow";
export const getApiV1EmployeeEvaluationsStaffShiftIdGetFields: INodeProperties[] =
  [
    {
      displayName: "Company ID",
      name: "company_id",
      type: "number",
      required: true,
      default: "",
      displayOptions: {
        show: {
          operation: ["getApiV1EmployeeEvaluationsStaffShiftId"],
          resource: ["employee_evaluations"],
        },
      },
      placeholder: "",
      description: "",
    },
    {
      displayName: "Staff Shift_ID",
      name: "staff_shift_id",
      type: "number",
      required: true,
      default: "",
      displayOptions: {
        show: {
          operation: ["getApiV1EmployeeEvaluationsStaffShiftId"],
          resource: ["employee_evaluations"],
        },
      },
      placeholder: "",
      description: "",
    },
    {
      displayName: "Additional Fields",
      name: "additionalFields",
      type: "collection",
      placeholder: "Add Field",
      default: {},
      displayOptions: {
        show: {
          operation: ["getApiV1EmployeeEvaluationsStaffShiftId"],
          resource: ["employee_evaluations"],
        },
      },
      options: [],
    },
  ];
