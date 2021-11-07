import * as React from "react";

function ChevronRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.933 11.667a.765.765 0 00-.192-.28l-6.127-6.13a.873.873 0 10-1.234 1.235l4.63 4.632H5.875A.878.878 0 005 12c0 .482.394.876.875.876H16.02l-4.63 4.633a.873.873 0 101.234 1.235l6.126-6.13c.08-.08.14-.176.193-.281a.92.92 0 00-.009-.666z"
        fill="currentColor"
      />
    </svg>
  );
}

export default ChevronRight;
