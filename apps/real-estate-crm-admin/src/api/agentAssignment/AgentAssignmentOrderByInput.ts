import { SortOrder } from "../../util/SortOrder";

export type AgentAssignmentOrderByInput = {
  agent?: SortOrder;
  clientId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  propertyId?: SortOrder;
  updatedAt?: SortOrder;
};
