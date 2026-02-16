import * as graphql from "@nestjs/graphql";
import { PropertyResolverBase } from "./base/property.resolver.base";
import { Property } from "./base/Property";
import { PropertyService } from "./property.service";

@graphql.Resolver(() => Property)
export class PropertyResolver extends PropertyResolverBase {
  constructor(protected readonly service: PropertyService) {
    super(service);
  }
}
