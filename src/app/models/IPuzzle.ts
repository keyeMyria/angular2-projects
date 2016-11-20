import { Tile } from './Tile';

export interface IPuzzle {
    tiles: Tile[];
    goal: boolean;
    image: string;
    tileSize: number;
}