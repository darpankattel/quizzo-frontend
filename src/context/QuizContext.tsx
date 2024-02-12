import React, {useState} from 'react';
import { Level, Category, QuizContextType } from '../@types/Quiz';

export const QuizContext = React.createContext<QuizContextType | null>(null);

type Props = {
    children: React.ReactNode
}
const QuizProvider = ({ children }: Props) => {
    const [categories, setCategories] = useState<Category[]>(
        [
            {
                "id": 17,
                "name": "Environment and Conservation",
                "description": "Test your knowledge of ecology, environmental issues, and conservation efforts."
            },
            {
                "id": 16,
                "name": "Psychology and Mind",
                "description": "Dive into the human mind, emotions, cognitive processes, and psychological theories."
            },
            {
                "id": 15,
                "name": "Language and Linguistics",
                "description": "Explore languages, word origins, grammar rules, and linguistic curiosities."
            },
            {
                "id": 14,
                "name": "Space and Astronomy",
                "description": "Journey through the cosmos with questions about planets, stars, galaxies, and space exploration."
            },
            {
                "id": 13,
                "name": "Fashion and Style",
                "description": "Learn about fashion trends, designers, iconic outfits, and fashion history."
            },
            {
                "id": 12,
                "name": "Food and Culinary Delights",
                "description": "Discover facts about cuisines, ingredients, cooking techniques, and culinary traditions."
            },
            {
                "id": 11,
                "name": "Mythology and Legends",
                "description": "Explore ancient myths, folklore, and legendary creatures from different cultures."
            },
            {
                "id": 10,
                "name": "Sports and Athletics",
                "description": "Challenge yourself with questions about various sports, athletes, and sporting events."
            },
            {
                "id": 9,
                "name": "Film and Cinema",
                "description": "Test your knowledge of iconic movies, directors, actors, and film trivia."
            },
            {
                "id": 8,
                "name": "Art and Art History",
                "description": "Delve into the world of artistic masterpieces, famous artists, and different art movements."
            },
            {
                "id": 7,
                "name": "Mathematics",
                "description": "Challenge your logical and mathematical reasoning skills."
            },
            {
                "id": 6,
                "name": "Music",
                "description": "Dive into the melody and rhythm of different musical genres and artists."
            },
            {
                "id": 5,
                "name": "Literature",
                "description": "Immerse yourself in the world of literature, from classic to contemporary works."
            },
            {
                "id": 4,
                "name": "Technology",
                "description": "Explore the latest advancements and innovations in the world of technology."
            },
            {
                "id": 3,
                "name": "Geography",
                "description": "Discover the diverse landscapes, cultures, and physical features of the Earth."
            },
            {
                "id": 2,
                "name": "History",
                "description": "Journey through the events and stories that shaped the world."
            },
            {
                "id": 1,
                "name": "Science",
                "description": "The Science quiz category covers a broad spectrum of topics related to the natural world, scientific principles, discoveries, and innovations. Explore questions ranging from biology and chemistry to physics and astronomy. Test your knowledge of scientific phenomena and historical breakthroughs in this fascinating category."
            }
        ]
    );
    const [levels, setLevels] = useState<Level[]>(
        [
            {
                id: null,
                name: "Any"
            },
            {
                id: 1,
                name: "Novice"
            },
            {
                id: 2,
                name: "Adept"
            },
            {
                id: 3,
                name: "Elite"
            },
            {
                id: 4,
                name: "Mastermind"
            }
        ]
    );
    return (
        <QuizContext.Provider value={{ levels, categories, setCategories }}>
          {children}
        </QuizContext.Provider>
    );
};

export default QuizProvider