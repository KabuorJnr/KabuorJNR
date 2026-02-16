import * as graphql from "@nestjs/graphql";
import { AgentAssignmentResolverBase } from "./base/agentAssignment.resolver.base";
import { AgentAssignment } from "./base/AgentAssignment";
import { AgentAssignmentService } from "./agentAssignment.service";

@graphql.Resolver(() => AgentAssignment)
export class AgentAssignmentResolver extends AgentAssignmentResolverBase {
  constructor(protected readonly service: AgentAssignmentService) {
    super(service);
  }
}
