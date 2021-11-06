import styled from "styled-components";
import * as Popover from "@radix-ui/react-popover";

import { breakpoints, colors } from "@/theme";

export const ViewCartButton = styled(Popover.Trigger)`
  appearance: none;
  border: none;
  background-color: ${colors.primaryDark};
  max-width: 129px;
  padding: 26px 24px;
  color: white;

  display: flex;
  align-items: center;
  gap: 8px;

  justify-self: end;

  .icon {
    font-size: 24px;
  }

  cursor: pointer;
  transition: opacity 200ms;

  &:hover {
    opacity: 0.8;
  }

  grid-column: 7 / 13;

  @media ${breakpoints.sm} {
    grid-column: 7 / 12;
  }

  @media ${breakpoints.lg} {
    grid-column: 10 / 12;
  }

  @media ${breakpoints.xl} {
    grid-column: 11 / -1;
  }
`;

export const PriceText = styled.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.16px;
`;

export const EmptyBasket = styled.div`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  color: ${colors.gray700};
  justify-self: center;
`;

export const Content = styled(Popover.Content)`
  background-color: white;
  border: 8px solid ${colors.primary};
  border-radius: 2px;

  width: 296px;
  padding: 26px 22px;
  padding-bottom: 16px;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Seperator = styled.div`
  border: 1px solid ${colors.gray50};
`;

export const CheckoutButton = styled.button`
  appearance: none;
  border: none;
  background: none;
  padding: 16px 24px;
  color: ${colors.primary};
  border-radius: 2px;
  box-shadow: inset 0 0 0 2px ${colors.primary};
  width: max-content;
  align-self: flex-end;
  cursor: pointer;

  font-weight: 600;
  font-size: 14px;
  line-height: 16px;

  &:hover {
    opacity: 0.8;
  }
`;
