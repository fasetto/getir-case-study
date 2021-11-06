import NextLink from "next/link";
import styled from "styled-components";

import { Logo } from "@/icons";
import { breakpoints, colors } from "@/theme";
import { ShoppingCart } from "..";

const Header = () => {
  return (
    <Wrapper>
      <NextLink href="/">
        <a className="logo">
          <Logo />
        </a>
      </NextLink>

      <ShoppingCart
        items={[{ name: "Example Product", price: 14.99, amount: 1 }]}
      />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  justify-content: center;

  width: 100%;
  height: 76px;
  background-color: ${colors.primary};

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
    grid-column: 2 / span 3;
    justify-self: start;
  }

  @media ${breakpoints.md} {
    gap: 16px;

    .logo {
      grid-column: 2 / span 3;
      justify-self: start;
    }
  }

  @media ${breakpoints.xl} {
    grid-template-columns: repeat(12, 88px);

    .logo {
      grid-column: 6 / span 2;
    }
  }
`;
