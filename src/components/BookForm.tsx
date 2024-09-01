import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createBook, getBookById, updateBook } from '../services/api';

interface Book {
    title: string;
    author: string;
    publishedAt: string;
    genre: string;
    pageNumber: number;
}

export default function BookForm() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [book, setBook] = useState<Book>({
        title: '',
        author: '',
        publishedAt: '',
        genre: '',
        pageNumber: 0,
    });

    const loadBook = async () => {
        try {
            const response = await getBookById(id as string);
            setBook(response.data);
        } catch (error) {
            console.error("Error loading book data", error);
        }
    };

    useEffect(() => {
        if (id) {
            loadBook();
        }
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBook({
            ...book,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (id) {
                await updateBook(id, book);
            } else {
                await createBook(book);
            }
            navigate('/');
        } catch (error) {
            console.error("Error saving book", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
            <div className='input-container'>
                <label>Title</label>
                <input
                    type="text"
                    name="title"
                    placeholder='Book title'
                    value={book.title}
                    onChange={handleChange}
                />
            </div>

            <div className='input-container'>
                <label htmlFor="">Author</label>
                <input
                    type="text"
                    name="author"
                    placeholder='Book author'
                    value={book.author}
                    onChange={handleChange}
                />
            </div>

            <div className='input-container'>
                <label htmlFor="">Published At</label>
                <input
                    type="text"
                    name="publishedAt"
                    placeholder='00/00/0000'
                    value={book.publishedAt}
                    onChange={handleChange}
                />
            </div>

            <div className='input-container'>
                <label htmlFor="">Genre</label>
                <input
                    type="text"
                    name="genre"
                    placeholder='Book genre'
                    value={book.genre}
                    onChange={handleChange}
                />
            </div>

            <div className='input-container'>
                <label htmlFor="">Pages number</label>
                <input
                    type="text"
                    name="pageNumber"
                    placeholder='0'
                    value={book.pageNumber}
                    onChange={handleChange}
                />
            </div>

            <button type="submit" className='bg-zinc-100 py-2 px-6 rounded-lg text-zinc-700 hover:text-zinc-900 font-medium md:self-end'>
                Save
            </button>
        </form>
    );

}
