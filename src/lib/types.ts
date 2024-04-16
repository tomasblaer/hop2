export type saleDetail = {
  id: number;
  location: string | null;
  comment: string | null;
  createdAt: Date;
  updatedAt: Date;
  companyId: number;
  saleId: string | null;
  itemTypeId: string;
};

export type itemType = {
  id: string;
  name: string;
  price: number;
  imageId: string;
  companyId: number;
}

export interface itemTypeImage extends itemType {
  imageUrl: string;
}