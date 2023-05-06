import React, { useEffect, useState } from "react";
import type { FC } from "react";

import type { TPosts } from "services/api/posts";
import { getPostsApi } from "services/api/posts/utils";
import { ETypographyVariant, Spinner, Typography, useTable } from "uikit";

import { ETableColumns, PostsTable } from "./PostsTable";
import "./TablePage.scss";

export const TablePage: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPost] = useState<TPosts>([]);

  const currentPage = 1;
  const pageSize = 5;

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await getPostsApi();
        setPost(response);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    void fetchProducts();
  }, []);

  const { onChangePage, onChangeSize, onSortTableByProperty } = useTable({
    pageOption: currentPage,
    sizeOption: pageSize,
  });

  if (isLoading) return <Spinner />;

  return (
    <section className="TablePage">
      <Typography variant={ETypographyVariant.TextH1Medium}>Table</Typography>
      <PostsTable
        fieldsSortState={{
          columns: [ETableColumns.Title],
          multiple: true,
          onChangeSorting: onSortTableByProperty,
        }}
        onChangePage={onChangePage}
        onChangePageSize={onChangeSize}
        posts={posts}
      />
    </section>
  );
};
