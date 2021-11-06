import * as React from "react";

function BasketIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.412 9.467h13.176v11.541H5.412V9.467zM9.672 4.657h4.67l.934.97v3.84l-1.011-.003v-3.84h-4.51v3.84l-1.031.003V5.624l.948-.967z"
        fill="currentColor"
      />
    </svg>
  );
}

export default BasketIcon;
