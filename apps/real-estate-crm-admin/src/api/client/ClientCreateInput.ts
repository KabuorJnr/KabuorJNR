import { AgentAssignmentCreateNestedManyWithoutClientsInput } from "./AgentAssignmentCreateNestedManyWithoutClientsInput";
import { AppointmentCreateNestedManyWithoutClientsInput } from "./AppointmentCreateNestedManyWithoutClientsInput";

export type ClientCreateInput = {
  agentAssignments?: AgentAssignmentCreateNestedManyWithoutClientsInput;
  appointments?: AppointmentCreateNestedManyWithoutClientsInput;
  email?: string | null;
  name?: string | null;
  phone?: string | null;
};
