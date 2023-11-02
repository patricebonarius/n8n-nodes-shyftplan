import { INodeProperties } from "n8n-workflow";
export const deleteApiV1EmployeeEvaluationsStaffShiftIdEvaluationBreakEvaluationBreakIdDeleteFields: INodeProperties[] =
  [
    {
      displayName: "Company ID",
      name: "company_id",
      type: "number",
      required: true,
      default: "",
      displayOptions: {
        show: {
          operation: [
            "deleteApiV1EmployeeEvaluationsStaffShiftIdEvaluationBreakEvaluationBreakId",
          ],
          resource: ["employee_evaluations"],
        },
      },
      placeholder: "",
      description: "Company ID",
    },
    {
      displayName: "Staff Shift_ID",
      name: "staff_shift_id",
      type: "number",
      required: true,
      default: "",
      displayOptions: {
        show: {
          operation: [
            "deleteApiV1EmployeeEvaluationsStaffShiftIdEvaluationBreakEvaluationBreakId",
          ],
          resource: ["employee_evaluations"],
        },
      },
      placeholder: "",
      description: "",
    },
    {
      displayName: "Evaluation Break_ID",
      name: "evaluation_break_id",
      type: "number",
      required: true,
      default: "",
      displayOptions: {
        show: {
          operation: [
            "deleteApiV1EmployeeEvaluationsStaffShiftIdEvaluationBreakEvaluationBreakId",
          ],
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
          operation: [
            "deleteApiV1EmployeeEvaluationsStaffShiftIdEvaluationBreakEvaluationBreakId",
          ],
          resource: ["employee_evaluations"],
        },
      },
      options: [],
    },
  ];
