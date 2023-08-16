"use client";

import {useEffect} from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & {digest?: string};
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Помилку спіймав SIGNIN_ERROR!</h2>
      <p>
        Можливо це тимчасова помилка, спробуй натиснути Try again що викличе
        метод reset
      </p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
