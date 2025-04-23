export interface CardType {
  title: string;
  subtitle: string;
  price: string;
  discountPrice?: string;
  discountPercent?: string;
  isDiscount?: boolean;
  onClick: () => void;
  feature: string[];
}
