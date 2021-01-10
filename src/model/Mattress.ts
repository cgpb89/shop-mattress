import { serializable } from "serializr";

class Mattress {
    @serializable
    private name: string;

    @serializable
    private price: number;

    @serializable
    private reviewRating: number;
    
    @serializable
    private imageFileName: string;

    public constructor() {
        this.name        = "";
        this.price       = 0;
        this.reviewRating  = 0;
        this.imageFileName    = "";
    }

    public get_Name(): string {
        return this.name;
    }

    public set_Name(name: string): void {
        this.name = name;
    }

    public get_Price(): number {
        return this.price;
    }

    public set_Price(price: number): void {
        this.price = price;
    }

    public get_ReviewRating(): number {
        return this.reviewRating;
    }

    public set_ReviewRating(reviewRating: number): void {
        this.reviewRating = reviewRating;
    }

    public get_ImageFileName(): string {
        return this.imageFileName;
    }

    public set_ImageFileName(imageFileName: string): void {
        this.imageFileName = imageFileName;
    }
}

export default Mattress;