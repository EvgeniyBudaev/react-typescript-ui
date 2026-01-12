import { useEffect, useState } from "react";

import { Title } from "components/Title";
import type { TPosts } from "services/api/posts/types";
import { getPostsApi } from "services/api/posts/utils/getPostsApi";
import { Spinner, useTable } from "uikit";

import { PostsTable } from "./PostsTable";
import { ETableColumns } from "./PostsTable/enums";

export const TablePage: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPost] = useState<TPosts>([]);

  const currentPage = 1;
  const pageSize = 5;

  useEffect(() => {
    const fetchPosts = async () => {
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
    void fetchPosts();
  }, []);

  const { onChangePage, onChangeSize, onSortTableByProperty } = useTable({
    pageOption: currentPage,
    sizeOption: pageSize,
  });

  if (isLoading) return <Spinner />;

  return (
    <section>
      <Title>Table</Title>
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
