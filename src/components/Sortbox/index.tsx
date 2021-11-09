import React from "react";
import styled from "styled-components";
import * as TogglePrimitive from "@radix-ui/react-toggle-group";

import { colors } from "@/theme";
import CheckIcon from "@/icons/CheckIcon";

export type SortOptionType =
  | "price_asc"
  | "price_desc"
  | "date_desc"
  | "date_asc";

type Props = {
  title: string;
  defaultOption: SortOptionType;
  onChange?: (value: SortOptionType) => void;
};

const optionList: Record<SortOptionType, string> = {
  price_asc: "Price low to high",
  price_desc: "Price high to low",
  date_desc: "New to old",
  date_asc: "Old to new",
};

const Sortbox = ({ title, defaultOption, onChange }: Props) => {
  return (
    <StyledWrapper>
      <Title>{title}</Title>

      <ToggleRoot
        type="single"
        defaultValue={defaultOption}
        onValueChange={onChange}
      >
        {Object.keys(optionList).map(option => (
          <ToggleItem key={option} value={option}>
            <StyledIcon>
              <CheckIcon />
            </StyledIcon>

            <span>{optionList[option as keyof typeof optionList]}</span>
          </ToggleItem>
        ))}
      </ToggleRoot>
    </StyledWrapper>
  );
};

export default Sortbox;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 608px;
`;

const Title = styled.h4`
  font-weight: 600;
  font-size: 13px;
  line-height: 18px;
  color: ${colors.gray500};
`;

const ToggleRoot = styled(TogglePrimitive.Root)`
  padding: 24px;
  border-radius: 2px;
  background-color: white;
  box-shadow: 0px 6px 24px rgba(93, 62, 188, 0.04);
  height: 184px;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StyledIcon = styled.div`
  border-radius: 9999px;
  border: 2px solid #dfdee2;
  font-size: 22px;
  width: 1em;
  height: 1em;
  display: grid;
  place-items: center;

  svg {
    font-size: 10px;
    color: ${colors.primary};
    display: none;
  }
`;

const ToggleItem = styled(TogglePrimitive.Item)`
  appearance: none;
  border: none;
  background: none;
  width: max-content;

  display: flex;
  gap: 8px;
  align-items: center;

  &[data-state="on"] {
    ${StyledIcon} {
      border: 2px solid ${colors.primary};

      svg {
        display: block;
      }
    }
  }

  span {
    font-size: 14px;
    line-height: 18px;
    color: ${colors.gray600};
  }
`;
