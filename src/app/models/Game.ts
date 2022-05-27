export class Game {
    id!: string;
    theme!: string;
    players!: {
        current: number;
        max: number
    }
    isActive!: boolean;
    owner!: string;
    roomType!: string
}