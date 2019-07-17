export interface Movie{
    id: number;
    name: string;
    description: string; 
    genre: string;
    year: number;
    duration: string;
    created_at: Date;
    updated_at: Date;
}

export class Movie{

    id: number;
    name: string;
    description: string; 
    genre: string;
    year: number;
    duration: string;

        constructor(datos?: Movie){

                if(datos != null){
                    this.id = datos.id;
                    this.name = datos.name;
                    this.description = datos.description;
                    this.genre = datos.genre;
                    this.year = datos.year;
                    this.duration = datos.duration;
                    return
                }else{
                    this.id = this.id;
                    this.name = this.name;
                    this.description = this.description;
                    this.genre = this.genre;
                    this.year = this.year;
                    this.duration = this.duration;
                }

        }




}