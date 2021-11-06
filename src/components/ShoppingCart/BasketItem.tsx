import { MinusIcon, PlusIcon } from "@/icons";
import { colors } from "@/theme";
import styled from "styled-components";

type Props = {
  name: string;
  price: number;
  amount: number;
  increment: () => void;
  decrement: () => void;
};

const BasketItem = ({ name, price, amount, increment, decrement }: Props) => {
  const formattedPrice = new Intl.NumberFormat("tr", {
    maximumFractionDigits: 2,
  }).format(price);

  return (
    <Wrapper>
      <Name>{name}</Name>
      <Price>₺{formattedPrice}</Price>

      <AmountWrapper>
        <Button onClick={decrement}>
          <MinusIcon className="icon" />
        </Button>

        <Amount>{amount}</Amount>

        <Button onClick={increment}>
          <PlusIcon className="icon" />
        </Button>
      </AmountWrapper>
    </Wrapper>
  );
};

export default BasketItem;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  row-gap: 4px;
  user-select: none;
`;

const Name = styled.div`
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.16px;
  color: ${colors.gray700};
`;

const Price = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.16px;
  color: ${colors.primary};

  grid-row: 2;
`;

const AmountWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  grid-column: 2;
  grid-row: span 2;
  align-self: center;
`;

const Button = styled.button`
  appearance: none;
  border: none;
  background: none;
  transition: opacity 200ms;
  display: grid;
  place-items: center;

  padding: 4px;
  cursor: pointer;

  .icon {
    font-size: 12px;
    color: ${colors.primary};
  }

  &:hover {
    opacity: 0.8;
  }
`;

const Amount = styled.div`
  display: grid;
  place-items: center;
  background-color: ${colors.primary};
  color: white;
  width: 32px;
  height: 32px;

  font-size: 15px;
  font-weight: 700;
  line-height: 20px;
  text-align: center;
`;
