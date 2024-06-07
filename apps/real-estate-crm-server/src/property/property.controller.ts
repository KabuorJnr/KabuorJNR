import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PropertyService } from "./property.service";
import { PropertyControllerBase } from "./base/property.controller.base";

@swagger.ApiTags("properties")
@common.Controller("properties")
export class PropertyController extends PropertyControllerBase {
  constructor(protected readonly service: PropertyService) {
    super(service);
  }
}
