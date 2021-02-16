export class FilmPreview {
  protected imgSize = 'w200';
  protected baseUrl = 'https://image.tmdb.org/t/p/';
  public id = 0;
  public poster_path = '';
  public title = '';
  public release_date = '';
  public overview = '';
  public vote_average = 0.0;

  public get posterFullPath(): string {
    return this.baseUrl + this.imgSize + this.poster_path;
  }
  public get releaseYear(): number {
    return Number(this.release_date.slice(0, 4));
  }
}

type Actor = { name: string; character: string };
type CrewMember = { name: string; job: string };

interface Credits {
  cast: Actor[];
  crew: CrewMember[];
}

export class Film extends FilmPreview {
  private _credits = {} as Credits;
}
