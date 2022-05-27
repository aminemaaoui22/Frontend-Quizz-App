export interface Question {
    question: string;
    currentTime: number;
    initialTime: number;
    remainingQuestionsNumber: number;
    questionsNumber: number;
    type: string;
    isActive: boolean;
    choices: string[];
    players:{
        id: string;
        score: number;
        responses: string[]
    }[];
    ladder: {
        elements: {
            playerId: string,
            score: number
        }[]
    }
}