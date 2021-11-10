import styled from "styled-components";
import ReactPaginate from "react-paginate";
import { breakpoints, colors } from "@/theme";
import { ChevronLeft, ChevronRight, DotsHorizontal } from "@/icons";

type Props = {
  pageCount: number;
  onPageChange: (value: number) => void;
};

const Pagination = ({ pageCount, onPageChange }: Props) => {
  return (
    <StyledWrapper>
      <StyledPagination
        containerClassName="pagination"
        pageClassName="page"
        breakClassName="break"
        nextClassName="next"
        previousClassName="prev"
        breakLabel={<StyledDots />}
        previousLabel={<PrevButton />}
        nextLabel={<NextButton />}
        pageRangeDisplayed={4}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        onPageChange={e => onPageChange(e.selected + 1)}
      />
    </StyledWrapper>
  );
};

export default Pagination;

type PaginationButtonProps = {
  pageDirection: "prev" | "next";
};

const PrevButton = () => (
  <StyledButton pageDirection="prev">
    <ChevronLeft />
    <span>Prev</span>
  </StyledButton>
);

const NextButton = () => (
  <StyledButton pageDirection="next">
    <span>Next</span>
    <ChevronRight />
  </StyledButton>
);

const StyledButton = styled.div<PaginationButtonProps>`
  display: flex;
  align-items: center;
  gap: 7px;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  order: ${p => (p.pageDirection === "prev" ? -1 : 9999)};

  svg {
    font-size: 24px;
  }
`;

const StyledDots = styled(DotsHorizontal)`
  color: #697488;
  font-size: 10px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 608px;
`;

const StyledPagination = styled(ReactPaginate)`
  display: flex;
  list-style-type: none;
  align-items: center;
  max-width: 535px;
  align-self: center;

  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  user-select: none;

  .page {
    width: 32px;
    height: 40px;
    border-radius: 2px;
    cursor: pointer;
    color: ${colors.gray500};
    display: none;

    &.selected {
      color: white;
      background-color: ${colors.primary};
    }

    a {
      display: grid;
      place-items: center;
    }
  }

  .break {
    display: none;
  }

  .prev:hover,
  .next:hover,
  .page:hover {
    opacity: 0.8;
  }

  .prev,
  .next {
    cursor: pointer;
    color: ${colors.primary};

    &.disabled {
      cursor: not-allowed;
      color: ${colors.gray500};
    }
  }

  .prev {
    margin-right: auto;
  }

  .next {
    margin-left: auto;
  }

  @media ${breakpoints.sm} {
    .page {
      display: grid;
    }

    .break {
      display: list-item;
    }
  }

  @media ${breakpoints.md} {
    width: 100%;
  }
`;
