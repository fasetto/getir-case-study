import { colors } from "@/theme";
import styled from "styled-components";

const Input = styled.input`
  padding: 12px 16px;
  border: 2px solid #e0e0e0;
  border-radius: 2px;
  color: ${colors.gray500};
  width: 100%;

  &::placeholder {
    font-family: Inter, "Open Sans", "Helvetica Neue", Helvetica, Arial,
      sans-serif;
    font-size: 14px;
    line-height: 24px;
    color: ${colors.gray300};
  }
`;

export default Input;
