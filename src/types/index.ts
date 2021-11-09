export type Product = {
  image: string;
  name: string;
  price: number;
  tags: string[];
  slug: string;
  itemType: string;
  manufacturer: string;
};

export type LoadingStatus = "idle" | "loading" | "error" | "success";
