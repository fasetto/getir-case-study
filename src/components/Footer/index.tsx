import { colors } from "@/theme";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <span>©2019 Market</span>
      <span>•</span>
      <span>Privacy Policy</span>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  display: flex;
  gap: 1rem;
  color: ${colors.primary};
  font-size: 13px;
  width: 100%;
  user-select: none;
  justify-content: center;

  margin-top: 136px;
  margin-bottom: 40px;
`;
