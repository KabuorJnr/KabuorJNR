import { ClientWhereInput } from "./ClientWhereInput";
import { ClientOrderByInput } from "./ClientOrderByInput";

export type ClientFindManyArgs = {
  where?: ClientWhereInput;
  orderBy?: Array<ClientOrderByInput>;
  skip?: number;
  take?: number;
};
