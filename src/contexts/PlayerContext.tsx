import { createContext } from 'react'

type Episode = {
    title: string;
    members: string;
    thumbnail: string;
    duration: number;
    url: string;
}

type PlayContextDate = {
    episodeList: Episode[];
    currentEpisodeIndex: number;
    isPlaying: boolean;
    togglePlay: () => void;
    setPlayingState: (state: boolean) => void;
    handlePlay: (episode: Episode) => void
}

export const PlayerContext = createContext({} as PlayContextDate);

