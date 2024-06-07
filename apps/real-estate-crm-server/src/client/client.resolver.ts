import * as graphql from "@nestjs/graphql";
import { ClientResolverBase } from "./base/client.resolver.base";
import { Client } from "./base/Client";
import { ClientService } from "./client.service";

@graphql.Resolver(() => Client)
export class ClientResolver extends ClientResolverBase {
  constructor(protected readonly service: ClientService) {
    super(service);
  }
}
