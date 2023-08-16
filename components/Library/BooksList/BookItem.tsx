import { FC } from "react";

type BookItemProps = {
    book: {
        id: number;
        title: string;
        author: string;
        publishYear: number;
        pagesTotal: number;
    };
};

export const BookItem: FC<BookItemProps> = ({ book }) => {
    return (
        <div>
            <h2>{book.title}</h2>
            <p>Автор: {book.author}</p>
            <p>Рік випуску: {book.publishYear}</p>
            <p>Кількість сторінок: {book.pagesTotal}</p>
        </div>
    );
};