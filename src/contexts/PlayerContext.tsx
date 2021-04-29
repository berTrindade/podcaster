import { createContext } from 'react';

type Episode = {
    title: string;
    members: string;
    thumbnail: string;
    duration: number;
    url: string;
}

type PlayerContextData = {
    episodeList: Episode[];
    currentEpisodeIndex: number;
    play: (episode: Episode) => void;
}

/**
 * Type Assertion: telling the compiler that you know about the types better than it does, 
 * and that it should not second guess you.
 * 
 * URL: https://basarat.gitbook.io/typescript/type-system/type-assertion
 */ 
export const PlayerContext = createContext({} as PlayerContextData);

