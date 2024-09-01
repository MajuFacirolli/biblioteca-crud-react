import { useEffect, useState } from 'react';
import { getBooks, deleteBook } from '../services/api';
import { Link } from 'react-router-dom';
import BookListItem from './BookListItem';
import { PlusCircle } from 'phosphor-react';

interface Book {
    id: string;
    title: string;
    author: string;
    publishedAt: string;
    genre: string;
    pageNumber: number;
}

export default function BooksList() {
    const [books, setbooks] = useState<Book[]>([]);
    
    const loadbooks = async () => {
        const response = await getBooks();
        setbooks(response.data);
    };

    useEffect(() => {
        loadbooks();
    }, []);
    
   const handleDelete = async (id: string) => {
        await deleteBook(id);
        loadbooks();
    }
    
    return (
        <div className='flex flex-col mt-6 space-y-4 max-w-7xl mx-auto'>
            <Link to="/add">
                <h2 className='font-semibold flex items-center space-x-1 hover:text-zinc-500 self-start'>
                    <PlusCircle />
                    <span>add book</span>
                </h2>
            </Link>
            <ul className='flex space-x-2 flex-wrap'>
                {books.map((book) => (
                    <li key={book.id}>
                        <BookListItem 
                            title={book.title} 
                            author={book.author}
                            publishedAt={book.publishedAt}
                            genre={book.genre}
                            pageNumber={book.pageNumber}
                            editPath={`/edit/${book.id}`}
                            handleDelete={() => handleDelete(book.id)}
                        />
                    </li>
                ))}
            </ul>
        </div>
 );
}
