export interface PlaylistResponse {
    name: string;
    owner: string;
    cover: string;
    link: string;
    tracks: Tracks[];
}

interface Tracks {
    name: string;
    album: string;
    artists: string[];
    url: string;
}
