import GatsbyCover from '../../public/images/tgg.jpg';
import PrideCover from '../../public/images/p&p.jpg';
import { Book } from './Book';

const BookMap = {
    "Frankenstein": new Book("Frankenstein", "Mary Shelley", "Frankenstein tells the story of Victor Frankenstein, a young scientist who creates a sapient creature in an unorthodox scientific experiment. ", "https://i0.wp.com/www.printmag.com/wp-content/uploads/2017/10/2a34d8_7edc06080c344f958cde383a3fa6f3f1mv2.jpg?resize=564%2C946&ssl=1", new Date()),
    "The Great Gatsby": new Book("The Great Gatsby", "F. Scott Fitzgerald", "Set in Jazz Age New York, it tells the tragic story of Jay Gatsby, a self-made millionaire, and his pursuit of Daisy Buchanan, a wealthy young woman whom he loved in his youth.", (GatsbyCover), new Date()),
    "Pride and Prejudice": new Book("Pride and Prejudice", "Jane Austen", "", (PrideCover), new Date()),
    "Anne of Green Gables": new Book("Anne of Green Gables", "L.M. Montgomery", "", "https://g.christianbook.com/dg/product/cbd/f450/1313X.jpg", new Date(), "Anne of Green Gables", "#1")
}

export { BookMap };