import { useCallback, useEffect, useState } from "react";
import type { MultiValue, OnChangeValue, SingleValue } from "react-select";
import debounce from "lodash/debounce";
import isNil from "lodash/isNil";
import type { TPosts } from "services/api/posts";
import { getPostsApi } from "services/api/posts/utils";
import { DEBOUNCE_TIMEOUT } from "uikit";
import type {
  TSelectMultiType,
  TAsyncSelectLoadOptions,
  TAsyncSelectLoadOptionsCallback,
  TSelectOption,
} from "uikit";

export const usePosts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSelectOpened, setIsSelectOpened] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [posts, setPosts] = useState<TPosts>([]);

  const [selectedOption, setSelectedOption] = useState<
    SingleValue<TSelectOption> | MultiValue<TSelectOption>
  >({
    value: "",
    label: "",
  });
  const [multipleSelectedOption, setMultipleSelectedOption] = useState<
    SingleValue<TSelectOption> | MultiValue<TSelectOption>
  >({ value: "", label: "" });

  const handleChange = (selectedOption?: OnChangeValue<TSelectOption, TSelectMultiType>) => {
    if (isNil(selectedOption)) return;
    if (Array.isArray(selectedOption)) {
      setMultipleSelectedOption(selectedOption); // onSortingChange?.(selectedOption[0].value);
    } else {
      const selectedOptionSingle = selectedOption as TSelectOption;
      setSelectedOption(selectedOptionSingle); // onSortingChange?.(selectedOptionSingle.value);
    }
    setIsSubmitting((prevState) => !prevState);
  };

  const handleBlur = () => {
    setIsSelectOpened(false);
  };

  const handleFocus = () => {
    setIsSelectOpened(true);
  };

  useEffect(() => {
    if (!isSubmitting) return;
    setIsSubmitting((prevState) => !prevState);
  }, [isSubmitting, setIsSubmitting]);

  const fetchPosts = async ({
    inputValue,
    callback,
  }: {
    inputValue: string;
    callback: TAsyncSelectLoadOptionsCallback;
  }) => {
    setIsLoading(true);
    try {
      const params = { userId: inputValue };
      const response = await getPostsApi(params);
      setPosts(response);
      callback(response.map((item) => ({ label: item.title, value: String(item.id) })));
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const debouncedFetcher = useCallback(
    debounce(({ inputValue, callback }) => {
      void fetchPosts({ inputValue, callback });
    }, DEBOUNCE_TIMEOUT),
    [],
  );

  const handleLoadOptions: TAsyncSelectLoadOptions = (inputValue, callback) => {
    debouncedFetcher({ inputValue, callback });
  };

  return {
    isLoading,
    isSelectOpened,
    isSubmitting,
    multipleSelectedOption,
    onBlur: handleBlur,
    onChange: handleChange,
    onFocus: handleFocus,
    onLoadOptions: handleLoadOptions,
    posts,
    selectedOption,
  };
};
