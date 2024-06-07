import { Property as TProperty } from "../api/property/Property";

export const PROPERTY_TITLE_FIELD = "address";

export const PropertyTitle = (record: TProperty): string => {
  return record.address?.toString() || String(record.id);
};
