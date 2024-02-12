import QuizCategory from './QuizCategory'
import { GiBrain, GiSmartphone, GiBookshelf, GiGraduateCap, GiFireplace, GiIceCreamCone, GiSoccerBall, GiMicrophone } from "react-icons/gi";
import { FaMusic, FaFootballBall, FaRegBuilding, FaSpaceShuttle, FaPaintBrush } from "react-icons/fa";
import { FaEarthAsia } from "react-icons/fa6";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { Category } from '../../@types/Quiz';
import { useState } from 'react';
import ReadyToPlay from '../popovers/ReadyToPlay';

type Props = {}
const categories: Category[] = [
  {
    id: 1,
    name: 'General Knowledge',
    description: "Science is the field of study of the natural world. Not just math, but also the physical world. Astrophysics, biology, cosmology, chemistry, astronomy and so on.",
    icon: <GiBrain />
  },
  {
    id: 2,
    name: 'Geography',
    description: "Science is the field of study of the natural world. Not just math, but also the physical world. Astrophysics, biology, cosmology, chemistry, astronomy and so on.",
    icon: <FaEarthAsia />
  },
  {
    id: 3,
    name: 'Technology',
    description: "Science is the field of study of the natural world. Not just math, but also the physical world. Astrophysics, biology, cosmology, chemistry, astronomy and so on.",
    icon: <GiSmartphone />
  },
  {
    id: 4,
    name: 'Puzzle',
    description: "Science is the field of study of the natural world. Not just math, but also the physical world. Astrophysics, biology, cosmology, chemistry, astronomy and so on.",
    icon: <IoExtensionPuzzleOutline />
  },
  {
    id: 5,
    name: 'Literature',
    description: "Science is the field of study of the natural world. Not just math, but also the physical world. Astrophysics, biology, cosmology, chemistry, astronomy and so on.",
    icon: <GiBookshelf />
  },
  {
    id: 6,
    name: 'Science',
    description: "Science is the field of study of the natural world. Not just math, but also the physical world. Astrophysics, biology, cosmology, chemistry, astronomy and so on.",
    icon: <FaSpaceShuttle />
  },
  {
    id: 7,
    name: 'Music',
    description: "Science is the field of study of the natural world. Not just math, but also the physical world. Astrophysics, biology, cosmology, chemistry, astronomy and so on.",
    icon: <FaMusic />
  },
  {
    id: 8,
    name: 'Sports',
    description: "Science is the field of study of the natural world. Not just math, but also the physical world. Astrophysics, biology, cosmology, chemistry, astronomy and so on.",
    icon: <FaFootballBall />
  },
  {
    id: 9,
    name: 'Architecture',
    description: "Science is the field of study of the natural world. Not just math, but also the physical world. Astrophysics, biology, cosmology, chemistry, astronomy and so on.",
    icon: <FaRegBuilding />
  },
  {
    id: 10,
    name: 'Art',
    description: "Science is the field of study of the natural world. Not just math, but also the physical world. Astrophysics, biology, cosmology, chemistry, astronomy and so on.",
    icon: <FaPaintBrush />
  },
  {
    id: 11,
    name: 'Education',
    description: "Science is the field of study of the natural world. Not just math, but also the physical world. Astrophysics, biology, cosmology, chemistry, astronomy and so on.",
    icon: <GiGraduateCap />
  },
  {
    id: 12,
    name: 'Fire & Ice',
    description: "Science is the field of study of the natural world. Not just math, but also the physical world. Astrophysics, biology, cosmology, chemistry, astronomy and so on.",
    icon: <GiFireplace />
  },
  {
    id: 13,
    name: 'Desserts',
    description: "Science is the field of study of the natural world. Not just math, but also the physical world. Astrophysics, biology, cosmology, chemistry, astronomy and so on.",
    icon: <GiIceCreamCone />
  },
  {
    id: 14,
    name: 'Soccer',
    description: "Science is the field of study of the natural world. Not just math, but also the physical world. Astrophysics, biology, cosmology, chemistry, astronomy and so on.",
    icon: <GiSoccerBall />
  },
  {
    id: 15,
    name: 'Entertainment',
    description: "Science is the field of study of the natural world. Not just math, but also the physical world. Astrophysics, biology, cosmology, chemistry, astronomy and so on.",
    icon: <GiMicrophone />
  }
];

const QuizCategories = (props: Props) => {
  const [showDescription, setShowDescription] = useState<Category | null>()
  const handleShowDescription = (id: number) => {
    if (id === 0) {
      setShowDescription(null)
      return
    }
    setShowDescription(categories.find((category: Category) => category.id === id))
  }
  return (
    <>
    {showDescription && <ReadyToPlay id={1} name={showDescription?.name} icon={showDescription?.icon} description={showDescription?.description} handleShowDescription={handleShowDescription} />}
    <div className='quiz-categories'>
      {categories.map((category: Category) => (
        <QuizCategory id={category.id} name={category.name} icon={category.icon} key={category.name} description={category.description} handleShowDescription={handleShowDescription} />
      ))}
    </div>
    </>
  )
}

export default QuizCategories