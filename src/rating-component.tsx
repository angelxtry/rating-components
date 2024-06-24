import { FiStar } from 'react-icons/fi'
import { useState } from 'react'

const RatingData = [
  { label: 'Poor', color: '#E74C3C' },
  { label: 'Bad', color: '#E59866' },
  { label: 'Okay', color: '#F7DC6F' },
  { label: 'Good', color: '#76D7C4' },
  { label: 'Great', color: '#229954' },
]

const RatingComponent = () => {
  const [stars, setStars] = useState(0)

  const handleClick = (index) => {
    setStars(index + 1)
  }

  return (
    <div className="flex bg-white items-center justify-between  border border-black rounded-md min-w-[600px]  p-2">
      <div className="p-2 text-base font-semibold">
        Intersteller <span className={'text-gray-400'}>(2014)</span>
      </div>
      <div className="flex gap-4 p-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="flex justify-center">
            <FiStar
              size={25}
              strokeWidth={0}
              fill={index + 1 <= stars ? 'gold' : '#D6DBDF'}
              cursor="pointer"
              className="star"
              onClick={() => handleClick(index)}
            />
          </div>
        ))}
      </div>
      {stars > 0 ? (
        <div
          className="font-semibold min-w=[60px] p-2"
          style={{ color: RatingData[stars - 1].color }}
        >
          {RatingData[stars - 1].label}
        </div>
      ) : (
        <p className="font-semibold text-gray-400">No ratings yet...</p>
      )}
    </div>
  )
}

export { RatingComponent }
