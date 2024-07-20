export interface AlbumResponse {
    name: string;
    cover: string;
    link: string;
    tracks: Tracks[];
}
export interface Tracks {
    name: string;
    artists: string[];
    url: string;
}
