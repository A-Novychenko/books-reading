'use client'

import { useState, FC } from "react";
import { useSession } from 'next-auth/react';
import style from './FormLibrary.module.scss'


interface Book {
    title: string;
    author: string;
    publishYear: number | string;
    pagesTotal: number | string;
}

export const AddBookForm: FC = () => {
    const [formData, setFormData] = useState<Book>({
        title: '',
        author: '',
        publishYear: '',
        pagesTotal: '',
    });

    const { data: session } = useSession();
    if (!session) {
        return <p>Будь ласка, увійдіть</p>;
    }

    const token = session.user.accessToken;
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));


    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();



        try {
            const response = await fetch('https://bookread-backend.goit.global/book', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${token}`
                },
                body: JSON.stringify(formData),
            });
            console.log(token);


            if (response.ok) {
                console.log('Книга успішно додана');
                // Очищення форми після успішного додавання
                setFormData({
                    title: '',
                    author: '',
                    publishYear: '',
                    pagesTotal: '',
                });
            } else {
                console.error('Помилка при додаванні книги');
            }
        } catch (error) {
            console.error('Помилка при здійсненні запиту');
        }
    };

    return (
        <div className={style.container}>
            <form className={style.form} onSubmit={handleSubmit}>
                <div className={style.container_label}>
                    <label className={style.label}>Book title</label>
                    <input className={style.input} type="text" name="title" placeholder="..." value={formData.title} onChange={handleInputChange} required />
                </div>
                <div className={style.container_label}>
                    <label className={style.label}>Author</label>
                    <input className={style.input} type="text" name="author" placeholder="..." value={formData.author} onChange={handleInputChange} required />
                </div>
                <div className={style.container_label}>
                    <label className={style.label}>Publication date</label>
                    <input className={style.input} type='number' name="publishYear" placeholder="..." value={formData.publishYear} onChange={handleInputChange} required />
                </div>
                <div className={style.container_label}>
                    <label className={style.label}>Amount of pages</label>
                    <input className={style.input} type="number" name="pagesTotal" placeholder="..." value={formData.pagesTotal} onChange={handleInputChange} required />
                </div>
                <button className={style.btn} type="submit">Add</button>
            </form>
        </div>
    );
};
