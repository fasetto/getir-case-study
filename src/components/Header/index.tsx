import NextLink from "next/link";
import styled from "styled-components";

import { Logo } from "@/icons";
import { breakpoints, colors } from "@/theme";
import { Grid, ShoppingCart } from "..";

const Header = () => {
  return (
    <Wrapper>
      <Grid>
        <NextLink href="/">
          <a className="logo">
            <Logo />
          </a>
        </NextLink>

        <ShoppingCart />
      </Grid>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  width: 100%;
  height: 76px;
  background-color: ${colors.primary};
  position: sticky;
  top: 0;

  .logo {
    color: white;
    place-self: center;
    transition: opacity 200ms;
    grid-column: 1 / span 2;

    &:hover {
      opacity: 0.8;
    }
  }

  .logo {
    grid-column: 2 / span 5;
    justify-self: start;
  }

  @media ${breakpoints.xl} {
    .logo {
      grid-column: 6 / span 2;
    }
  }
`;
