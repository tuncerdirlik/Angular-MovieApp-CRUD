import { Injectable } from "@angular/core";
import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}

  createDb() {
    const movies = [
      { id: 1, name: "Movie 1", description: "desc 1", imageUrl: "no-img.png" },
      { id: 2, name: "Movie 2", description: "desc 2", imageUrl: "no-img.png" },
      { id: 3, name: "Movie 3", description: "desc 3", imageUrl: "no-img.png" },
      { id: 4, name: "Movie 4", description: "desc 4", imageUrl: "no-img.png" },
      { id: 5, name: "Movie 5", description: "desc 5", imageUrl: "no-img.png" },
      { id: 6, name: "Movie 6", description: "desc 6", imageUrl: "no-img.png" },
      { id: 7, name: "Movie 7", description: "desc 7", imageUrl: "no-img.png" },
      { id: 8, name: "Movie 8", description: "desc 8", imageUrl: "no-img.png" },
      { id: 9, name: "Movie 9", description: "desc 9", imageUrl: "no-img.png" },
      { id: 10,name: "Movie 10",description: "desc 10",imageUrl: "no-img.png" },
    ];

    return { movies };
  }
}
