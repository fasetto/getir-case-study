import React from "react";
import ContentLoader, { IContentLoaderProps } from "react-content-loader";

const Skeleton: React.FC<IContentLoaderProps> = props => (
  <ContentLoader
    speed={2}
    width={129}
    height={30}
    viewBox="0 0 129 30"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="2" ry="2" width="60" height="30" />
    <rect x="68" y="0" rx="2" ry="2" width="61" height="30" />
  </ContentLoader>
);

export default Skeleton;
