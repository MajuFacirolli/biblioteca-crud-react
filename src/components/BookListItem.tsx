import { Link } from "react-router-dom";

interface IBookListItemProps {
    title: string;
    author: string;
    publishedAt: string;
    genre: string;
    pageNumber: number;
    editPath: string;
    handleDelete: () => Promise<void>;
}

export default function BookListItem({ title, author, publishedAt, genre, pageNumber, editPath, handleDelete }: IBookListItemProps) {
    return (
        <div className="border border-slate-300 p-6 space-y-4 rounded-xl text-left w-96">
            <h3 className="text-lg font-semibold leading-tight">{title}</h3>
            <div>
                <p>{author}</p>
                <p>Published at {publishedAt}</p>
                <p>Genre: {genre}</p>
                <p>{pageNumber} pages</p>
            </div>
            <div className="flex items-center space-x-4 text-sm">
                <Link to={editPath} className="text-zinc-700 hover:text-zinc-900 px-4 bg-zinc-100 rounded-md font-medium">
                    Edit
                </Link>
                <button className="text-red-600 hover:text-red-700 bg-red-50 px-4 rounded-md font-medium" onClick={handleDelete}>
                    Delete
                </button>
            </div>
            
        </div>
    )
}
