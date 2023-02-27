import GatsbyCover from '../../public/images/tgg.jpg';
import PrideCover from '../../public/images/p&p.jpg';
import { Book } from './Book';

// const BookMap = new Map<string, Book> ([
//     ["Frankenstein", new Book("Frankenstein", "Mary Shelley", "", "https://i0.wp.com/www.printmag.com/wp-content/uploads/2017/10/2a34d8_7edc06080c344f958cde383a3fa6f3f1mv2.jpg?resize=564%2C946&ssl=1", new Date())],
//     ["The Great Gatsby", new Book("The Great Gatsby", "F. Scott Fitzgerald", "", (GatsbyCover), new Date())],
//     ["Pride and Prejudice", new Book("Pride and Prejudice", "Jane Austen", "", (PrideCover), new Date())],
//     ["Anne of Green Gables", new Book("Anne of Green Gables", "L.M. Montgomery", "", "https://g.christianbook.com/dg/product/cbd/f450/1313X.jpg", new Date(), "Anne of Green Gables", "#1")]
// ]);
// type BookMapType = {
//     [key: string]: Book
// }
const BookMap = {
    "Frankenstein": new Book("Frankenstein", "Mary Shelley", "", "https://i0.wp.com/www.printmag.com/wp-content/uploads/2017/10/2a34d8_7edc06080c344f958cde383a3fa6f3f1mv2.jpg?resize=564%2C946&ssl=1", new Date()),
    "The Great Gatsby": new Book("The Great Gatsby", "F. Scott Fitzgerald", "", (GatsbyCover), new Date()),
    "Pride and Prejudice": new Book("Pride and Prejudice", "Jane Austen", "", (PrideCover), new Date()),
    "Anne of Green Gables": new Book("Anne of Green Gables", "L.M. Montgomery", "", "https://g.christianbook.com/dg/product/cbd/f450/1313X.jpg", new Date(), "Anne of Green Gables", "#1")
}

export { BookMap };