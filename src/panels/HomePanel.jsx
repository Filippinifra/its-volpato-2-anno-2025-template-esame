import { Card } from "../components/Card";
import { useBooks } from "../hooks/useBooks";

export const HomePanel = () => {
  const { books, addBooks } = useBooks();

  return (
    <>
      Questa è la home!
      {books.map(({ asdf }) => (
        <Card titolo={asdf} onClick={() => addBooks("Pippo")} />
      ))}
    </>
  );
};
