import { Book } from "./Book";
import { books1 } from "./books1";
import { books2 } from "./books2";

export const Booklist = () =>{
    const getBook = (id) => {
        const book = books1.find((book)=>book.id === id);
        console.log(book);
    };
    return(
        <div className="flex flex-col gap-5 px-20 my-4">
        <h3 className="text-3xl font-bold">Novedades</h3>
        <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {
                books1.map((books, index) => {
                    return <Book {...books} key={`novedades${books.id}`} getBook={getBook} number={index + 1}/>
                })
            }
        </section>

        <h2 className="text-3xl font-bold">Best seller</h2>
        <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {
                books2.map((books, index) => {
                    return <Book {...books} key={`bestseller${books.id}`} getBook={getBook} number={index + 1}/>
                })
            }
        </section>
        </div>
    );
}