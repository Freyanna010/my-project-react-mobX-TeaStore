
export type Supplement = {
  id: string;
  name: string;
  img: string;
  isAdd: boolean;
  price: number;
};

export type CollectionSupplements = {
  id: string;
  name: string;
  isEnough: boolean;
};

export type Tea = {
  id: string;
  name: string;
  img: string;
  isEnough: boolean;
  description: string;
  price: number;
};

// export type UserBasket = Tea [] |
// Supplement[];
export type ProductForUserBasket = Pick<Supplement, "id" | "name" | "price">