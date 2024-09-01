import BookForm from "../components/BookForm";

export default function AddBook() {
    return (
        <main className="mt-5 text-center px-6">
            <h1 className="text-4xl font-bold">Add Book</h1>
            <div className="max-w-96 mx-auto mt-6">
                <BookForm />
            </div>
        </main>

    )
}