"use client";

import {Metadata} from "next";

export const metadata: Metadata = {
  title: "BR | ERROR",
  description: "Books Reading error in root layout",
};

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.log("GLOBAL_ERROR", error.message);

  return (
    <html>
      <body>
        <h2>Помилку спіймав global-error!</h2>
        <p>
          Можливо це тимчасова помилка, спробуй натиснути Try again що викличе
          метод reset
        </p>
        <p>
          Якщо не допомогло: Спробуй додати error.tsx у своєму сегменті, якщо не
          допоможе додай батьківському і так до кореневого, таким чином можна
          перевірити в якому саме сегменті виникає помилка і локальніше
          налаштувати обробники помилок. Це покращить користувацький інтерфейс,
          помилка буде відображатись лише у сегменті в якому є проблема, а
          батьківські будуть відображатись та поточний layout збереже свій стан.
        </p>

        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
