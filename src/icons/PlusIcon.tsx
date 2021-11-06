import * as React from "react";

function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.44 10.407v-4.21h4.12c.243 0 .44-.2.44-.45a.445.445 0 00-.44-.45H6.44V1.088A.445.445 0 006 .638a.445.445 0 00-.44.45v4.21H1.44a.445.445 0 00-.44.45c0 .248.197.45.44.45h4.12v4.209c0 .248.197.45.44.45s.44-.201.44-.45"
        stroke="currentColor"
      />
    </svg>
  );
}

export default PlusIcon;
