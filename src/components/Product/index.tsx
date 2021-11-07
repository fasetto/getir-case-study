import { colors } from "@/theme";
import { IContentLoaderProps } from "react-content-loader";
import styled from "styled-components";

import Skeleton from "./Skeleton";

type Props = {
  slug: string;
  image: string;
  name: string;
  price: number;
  isInBasket: boolean;
  onAddedToBasket: (id: string) => void;
  onRemovedFromBasket: (id: string) => void;
};

interface ProductType extends React.FC<Props> {
  Skeleton: React.FC<IContentLoaderProps>;
}

const Product: ProductType = ({
  slug,
  image,
  name,
  price,
  isInBasket,
  onAddedToBasket,
  onRemovedFromBasket,
}) => {
  const formattedPrice = new Intl.NumberFormat("tr", {
    maximumFractionDigits: 2,
  }).format(price);

  const buttonText = isInBasket ? "Remove" : "Add";

  const handleAddOrRemove = () => {
    if (isInBasket) onRemovedFromBasket(slug);
    else onAddedToBasket(slug);
  };

  return (
    <ProductWrapper>
      <ImageWrapper>
        <img src={image} alt={name} />
      </ImageWrapper>

      <PriceText>
        <span>₺</span> {formattedPrice}
      </PriceText>
      <ProductName>{name}</ProductName>
      <AddOrRemove onClick={handleAddOrRemove}>{buttonText}</AddOrRemove>
    </ProductWrapper>
  );
};

Product.Skeleton = Skeleton;

export default Product;

const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, auto) 1fr;
  gap: 8px;
  width: 124px;
`;

const ImageWrapper = styled.figure`
  aspect-ratio: 1;
  width: 100%;
  border-radius: 12px;
  background-color: #fefefe;
  padding: 16px;
  border: 1.18px solid #f3f0fe;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const PriceText = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: ${colors.primary};
  text-align: left;

  span {
    font-weight: 400;
  }
`;

const ProductName = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  text-align: left;
`;

const AddOrRemove = styled.button`
  appearance: none;
  border: none;
  background: none;
  border-radius: 2px;
  padding: 1px 0;
  color: white;
  background-color: ${colors.primary};
  cursor: pointer;

  font-weight: 600;
  font-size: 12px;
  line-height: 20px;

  height: max-content;
  align-self: end;

  &:hover {
    opacity: 0.8;
  }
`;
