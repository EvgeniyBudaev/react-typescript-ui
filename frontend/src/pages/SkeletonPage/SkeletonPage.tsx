import { useState } from "react";
import type { FC } from "react";
import { Skeleton } from "uikit";
import "./SkeletonPage.scss";

export const SkeletonPage: FC = () => {
  const [isLoading] = useState(true);

  return (
    <section className="SkeletonPage">
      <h2>Skeleton</h2>
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
