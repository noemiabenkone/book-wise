import Image from "next/image";

interface Book {
    id: number;
    title: string;
    year: number;
    cover: string;
  }
  
  export default function BookList({ books }: { books: Book[] }) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <div key={book.id} className="bg-white shadow-md rounded-lg p-4">
            <Image
              src={book.cover}
              alt={book.title}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="text-lg font-semibold mt-4">{book.title}</h3>
            <p className="text-sm text-gray-500">{book.year}</p>
          </div>
        ))}
      </div>
    );
  }
  