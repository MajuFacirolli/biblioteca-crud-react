import BooksList from "../components/BooksList";

export default function Home() {
    return (
        <main className="mt-5 text-center px-24">
            <h1 className="text-4xl font-bold">Reading List</h1>
            <BooksList />
        </main>
    );
}
  