
import { FC } from 'react'
import Image from 'next/image'

interface CourseCardProps {
  title: string
  description: string
  image: string
}

const CourseCard: FC<CourseCardProps> = ({ title, description, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <Image src={image} alt={title} width={400} height={200} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

export default CourseCard

