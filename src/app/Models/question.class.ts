export class Question {
    id: string;
    answerDescription: string;
    answerFirst: string;
    answerSecond: string;
    answerThird: string;
    answerFour: string;
    categoryId: number;
    correctPoint: number;
    diffId: number;
    questionContent: string;
}

export class Difficult {
    id: string;
    level: string;
}

export class Class {
    id: string;
    classname: string;
}

export class Answer {
    id: string;
    content: string;
}
