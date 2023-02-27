export class Book {
    title: string;
    author: string;
    cover: string;
    summary: string;
    datePublished: Date;
    seriesName: string;
    seriesNum: string;

    constructor(title: string,
        author: string,
        summary: string,
        cover: string,
        datePublished: Date,
        seriesName?: string,
        seriesNum?: string) {
            this.title = title;
            this.author = author;
            this.cover = cover;
            this.summary = summary;
            this.datePublished = datePublished;
            this.seriesName = seriesName ?? "";
            this.seriesNum = seriesNum ?? "";
    }
}
