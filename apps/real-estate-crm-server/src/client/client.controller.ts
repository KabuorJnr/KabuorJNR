import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClientService } from "./client.service";
import { ClientControllerBase } from "./base/client.controller.base";

@swagger.ApiTags("clients")
@common.Controller("clients")
export class ClientController extends ClientControllerBase {
  constructor(protected readonly service: ClientService) {
    super(service);
  }
}
