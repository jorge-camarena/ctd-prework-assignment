export interface AlbumResponse {
    name: string;
    cover: string;
    tracks: Tracks[];
}
interface Tracks {
    name: string;
    artists: string[];
}
