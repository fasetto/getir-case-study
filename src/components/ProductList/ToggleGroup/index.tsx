import styled from "styled-components";
import { IContentLoaderProps } from "react-content-loader";
import * as TogglePrimitive from "@radix-ui/react-toggle-group";

import { colors } from "@/theme";
import Skeleton from "./Skeleton";

type Props = {
  items: string[];
  value: string;
  onChange: (value: string) => void;
};

interface ToggleGroupProps extends React.FC<Props> {
  Skeleton: React.FC<IContentLoaderProps>;
}

const ToggleGroup: ToggleGroupProps = ({ items, value, onChange }) => {
  return (
    <ToggleRoot type="single" value={value} onValueChange={onChange}>
      {items.map(item => (
        <ToggleItem key={item} value={item} aria-label={item}>
          {item}
        </ToggleItem>
      ))}
    </ToggleRoot>
  );
};

ToggleGroup.Skeleton = Skeleton;

export default ToggleGroup;

const ToggleRoot = styled(TogglePrimitive.Root)`
  display: flex;
  gap: 8px;
`;

const ToggleItem = styled(TogglePrimitive.Item)`
  appearance: none;
  border: none;
  border-radius: 2px;
  background: #f2f0fd;
  color: ${colors.primary};
  cursor: pointer;

  display: grid;
  place-items: center;
  padding: 6px 16px;

  font-weight: 600;
  font-size: 13px;
  line-height: 18px;
  text-transform: lowercase;

  &[data-state="on"] {
    background: ${colors.primary};
    color: #f2f0fd;
  }
`;
