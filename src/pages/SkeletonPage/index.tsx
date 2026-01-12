import { useState } from "react";

import { Title } from "components/Title";
import { Skeleton } from "uikit";

export const SkeletonPage: FC = () => {
  const [isLoading] = useState(true);

  return (
    <section>
      <Title>Skeleton</Title>
      <div style={{ height: "50px", width: "50px", marginBottom: "25px" }}>
        {isLoading && <Skeleton />}
      </div>
      {isLoading ? <Skeleton height="27px" width="200px" /> : <h2>Skeleton</h2>}
      {isLoading ? (
        <div className="ProductsList">
          {new Array(1).fill(1).map((product, index) => (
            <Skeleton height="330px" width="100%" key={index} />
          ))}
        </div>
      ) : (
        <div className="ProductsList">List items</div>
      )}
      {isLoading ? (
        <Skeleton height="100px" width="100px" isCircle />
      ) : (
        <div style={{ height: "100px" }} />
      )}
    </section>
  );
};
