import { breakpoints } from "@/theme";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  justify-content: center;

  @media ${breakpoints.md} {
    gap: 16px;
  }

  @media ${breakpoints.xl} {
    grid-template-columns: repeat(12, 88px);
  }
`;

export default Grid;
