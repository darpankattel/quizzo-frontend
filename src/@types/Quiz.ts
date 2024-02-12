export interface Level {
    id: number | null;
    name: string;
}
export interface Category {
    id: number;
    name: string;
    description: string;
    icon?: React.JSX.Element;
}

export interface Record {
    quiz: string;
    result: string;
    xp: number;
}

export interface Stats {
    user_total_xp: number;
    user_level: number;
    total_quizzes: number;
    total_right_quizzes: number;
}
export type QuizContextType = {
    levels: Level[];
    categories: Category[];
    setCategories: (categories: Category[]) => void;
};