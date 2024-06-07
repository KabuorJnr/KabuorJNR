import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ClientServiceBase } from "./base/client.service.base";

@Injectable()
export class ClientService extends ClientServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
