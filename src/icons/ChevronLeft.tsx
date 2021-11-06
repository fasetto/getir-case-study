import * as React from "react";

function ChevronLeft(props: React.SVGProps<SVGSVGElement>) {
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
        d="M5.067 12.333a.766.766 0 00.192.28l6.127 6.13a.873.873 0 101.234-1.235l-4.63-4.632h10.135A.878.878 0 0019 12a.878.878 0 00-.875-.876H7.98l4.63-4.633a.873.873 0 10-1.234-1.235l-6.126 6.13c-.08.08-.14.176-.193.281a.92.92 0 00.009.666z"
        fill="#1EA4CE"
      />
    </svg>
  );
}

export default ChevronLeft;
