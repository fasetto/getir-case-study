import React from "react";
import ContentLoader, { IContentLoaderProps } from "react-content-loader";

const Skeleton: React.FC<IContentLoaderProps> = props => (
  <ContentLoader
    speed={2}
    width={138}
    height={148}
    viewBox="0 0 138 148"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="7" y="6" rx="2" ry="2" width="22" height="22" />
    <rect x="7" y="86" rx="2" ry="2" width="22" height="22" />
    <rect x="7" y="126" rx="2" ry="2" width="22" height="22" />
    <rect x="7" y="46" rx="2" ry="2" width="22" height="22" />
    <rect x="37" y="46" rx="2" ry="2" width="101" height="22" />
    <rect x="37" y="6" rx="2" ry="2" width="55" height="22" />
    <rect x="37" y="86" rx="2" ry="2" width="63" height="22" />
    <rect x="37" y="126" rx="2" ry="2" width="86" height="22" />
  </ContentLoader>
);

export default Skeleton;
