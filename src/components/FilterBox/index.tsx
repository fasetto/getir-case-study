import styled from "styled-components";
import * as TogglePrimitive from "@radix-ui/react-toggle-group";

import debounce from "@/utils/debounce";
import { colors } from "@/theme";
import { CheckIcon } from "@/icons";
import { Input } from "..";

import { LoadingStatus } from "@/types";
import Skeleton from "./Skeleton";

type Props = {
  title: string;
  placeholder: string;
  options: string[];
  defaultOptions: string[];
  loadingStatus: LoadingStatus;
  onSearch: (value: string) => void;
  onChange?: (items: string[]) => void;
};

const FilterBox = ({
  title,
  placeholder,
  options,
  defaultOptions,
  loadingStatus,
  onSearch,
  onChange,
}: Props) => {
  const handleSearch = (value: string) => {
    // Debounced the user input to improve the search experience
    const fn = debounce(() => onSearch(value), 60);
    fn();
  };

  return (
    <StyledWrapper>
      <Title>{title}</Title>

      <StyledBox>
        <Input
          placeholder={placeholder}
          onChange={e => handleSearch(e.target.value)}
        />

        {loadingStatus === "loading" && <Skeleton />}

        {loadingStatus === "success" && (
          <ToggleRoot
            type="multiple"
            defaultValue={defaultOptions}
            onValueChange={onChange}
          >
            {options.map(option => (
              <ToggleItem key={option} value={option}>
                <StyledIcon>
                  <CheckIcon />
                </StyledIcon>

                <span>{option}</span>
              </ToggleItem>
            ))}
          </ToggleRoot>
        )}
      </StyledBox>
    </StyledWrapper>
  );
};

export default FilterBox;

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

const StyledBox = styled.div`
  padding: 24px;
  border-radius: 2px;
  background-color: white;
  box-shadow: 0px 6px 24px rgba(93, 62, 188, 0.04);
  height: 244px;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ToggleRoot = styled(TogglePrimitive.Root)`
  width: 100%;
  height: 100%;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  gap: 18px;

  padding-left: 5px;
`;

const StyledIcon = styled.div`
  background-color: white;
  box-shadow: 0px 1px 7px 0px #5d38c066;
  border-radius: 2px;
  font-size: 22px;
  width: 1em;
  height: 1em;
  display: grid;
  place-items: center;

  svg {
    font-size: 10px;
    color: white;
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
      background-color: ${colors.primary};

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
