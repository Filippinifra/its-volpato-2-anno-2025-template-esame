import useSWR from "swr";
import { axiosWithToken } from "../utils/axios";

export const useBooks = (filterName) => {
  const { data, isLoading, error, mutate } = useSWR(
    // {
    //   name: string;
    //   id: number;
    //   description: string;
    // }[]
    import.meta.env.VITE_BACKEND_BASE_URL + "/books"
  );

  const dataFiltered = filterName
    ? data?.filter(({ name }) => name.includes(filterName))
    : data;

  const add = async (body) => {
    try {
      const response = await axiosWithToken.post(
        import.meta.env.VITE_BACKEND_BASE_URL + "/books",
        body
      );
      mutate();
    } catch {
      console.log("Error");
    }
  };

  return {
    books: dataFiltered,
    addBooks: add,
    loading: isLoading,
    error,
  };
};
