import { Client as TClient } from "../api/client/Client";

export const CLIENT_TITLE_FIELD = "name";

export const ClientTitle = (record: TClient): string => {
  return record.name?.toString() || String(record.id);
};
