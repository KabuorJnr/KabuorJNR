import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AgentAssignmentServiceBase } from "./base/agentAssignment.service.base";

@Injectable()
export class AgentAssignmentService extends AgentAssignmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
