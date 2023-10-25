import { uuid } from "../../types/generic/uuid.type";

export interface SkinModel {
  id: uuid;
  name: string;
  typeId: uuid;
  price: number;
  color: string;
}
