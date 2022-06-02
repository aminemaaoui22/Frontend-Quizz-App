export interface Question {
    question: string;
    currentTime: Number;
    initialTime: Number;
    remainingQuestionsNumber: Number;
    questionsNumber: Number;
    type: string;
    isActive: boolean;
    choices: string[];
    players:{
        id: string;
        score: Number;
        responses: string[]
    }[];
    ladder: Ladder
}

export interface Ladder {
    elements:LadderElement[];
}
export interface LadderElement {
    playerId: string;
    score: Number;
}