export class Game {
    id!: string;
    theme!: string;
    players!: {
        current: Number;
        max: Number
    }
    isActive!: boolean;
    owner!: string;
    roomType!: string
}