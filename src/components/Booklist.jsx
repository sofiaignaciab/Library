import { Book } from "./Book";
import { books1 } from "./books1";

export const Booklist = () =>{
    const getBook = (id) => {
        const book = books1.find((book)=>book.id === id);
        console.log(book);
    };
    return(
        <>
        <h1>Novedades</h1>
        <section className="booklist">
            {
                books1.map((books, index) => {
                    return <Book {...books} key={books.id} getBook={getBook} number={index + 1}/>
                })
            }
        </section>

        <h1>Best seller</h1>
        <section className="booklist">
            {
                books1.map((books, index) => {
                    return <Book {...books} key={books.id} getBook={getBook} number={index + 1}/>
                })
            }
        </section>
        </>
    );
}