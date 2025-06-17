import { v4 } from "uuid";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { useBooks } from "../hooks/useBooks";

export const HomePanel = () => {
  const { books, addBooks } = useBooks();

  return (
    <>
      Questa è la home!
      {books?.map(({ name }) => (
        <Card
          titolo={name}
          onClick={() => addBooks({ id: v4, name: "Pippo" })}
        />
      ))}
      <Button onClick={() => addBooks({ id: v4, name: "Pippo" })}>
        Aggiugni
      </Button>
    </>
  );
};
