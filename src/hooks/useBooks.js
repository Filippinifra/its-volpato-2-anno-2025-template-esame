import useSWR from "swr";
import { axiosWithToken } from "../utils/axios";

export const useBooks = (filterName) => {
  const { data, isLoading, error } = useSWR(
    // {
    //   name: string;
    //   id: number;
    //   description: string;
    // }[]
    process.env.BACKEND_BASE_URL + "books"
  );

  const dataFiltered = filterName
    ? data?.filter(({ name }) => name.includes(filterName))
    : data;

  const add = async (name) => {
    await axiosWithToken.post(process.env.BACKEND_BASE_URL + "/books", {
      name,
    });
  };

  return {
    books: dataFiltered,
    addBooks: add,
    loading: isLoading,
    error,
  };
};
