import { Rating } from './types/rating.ts';
import React, { Fragment, useContext } from 'react';
import { FiStar } from 'react-icons/fi';

type RatingContextType = {
  ratings: Rating[] | undefined;
  updateRating: (index: number, newRating: number) => void;
};

const RatingContext = React.createContext<RatingContextType>({
  ratings: undefined,
  updateRating: () => {},
});

interface MultiRatingsComponentProps {
  children: React.ReactNode;
  ratings: Rating[];
  updateRating: (index: number, newRating: number) => void;
}

const MultiRatingsComponent = ({ children, ratings, updateRating }: MultiRatingsComponentProps) => {
  return (
    <RatingContext.Provider value={{ ratings, updateRating }}>
      <div className="relative">{children}</div>
    </RatingContext.Provider>
  );
};

interface LabelProps {
  name: string;
  year: number;
}

const Label = ({ name, year }: LabelProps) => {
  return (
    <div className="flex flex-col justify-center gap-1 text-base font-semibold min-w-[220px]">
      <h3>{name}</h3>
      <span className=" text-[12px]  text-[#AAB7B8]">{year}</span>
    </div>
  );
};

const RatingsContainer = () => {
  const { ratings, updateRating } = useContext(RatingContext);

  return (
    <div className="min-w-[600px] bg-white rounded-md flex flex-col">
      {ratings &&
        ratings.map((ratingData, index) => (
          <div
            key={index}
            className="flex items-center px-4 py-6 border-[#f7f8f9] gap-[75px] border-[0.5px]"
          >
            <Label name={ratingData.name} year={ratingData.year} />
            <div className="flex gap-4 ">
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <Fragment key={starIndex}>
                  <RatingIcon
                    filled={starIndex < ratingData.rating}
                    onClick={() => updateRating(index, starIndex + 1)}
                  />
                </Fragment>
              ))}
            </div>
            <RatingLabel ratingValue={ratingData.rating} />
          </div>
        ))}
    </div>
  );
};

interface RatingIconProps {
  filled: boolean;
  onClick: () => void;
}

const RatingIcon = ({ filled, onClick }: RatingIconProps) => {
  return (
    <FiStar
      size={25}
      strokeWidth={0}
      fill={filled ? 'gold' : '#AAB7B8'}
      cursor="pointer"
      className="star"
      onClick={onClick}
    />
  );
};

const RatingLabel = ({ ratingValue }: { ratingValue: number }) => {
  const ratingLabel = [
    { label: 'Poor', color: '#E74C3C' },
    { label: 'Bad', color: '#E59866' },
    { label: 'Okay', color: '#F7DC6F' },
    { label: 'Good', color: '#76D7C4' },
    { label: 'Great', color: '#229954' },
  ];
  return (
    <>
      {ratingValue > 0 ? (
        <div
          className="font-semibold min-w-[60px] p-2"
          style={{ color: ratingLabel[ratingValue - 1]?.color }}
        >
          {ratingLabel[ratingValue - 1]?.label}
        </div>
      ) : (
        <p className="font-semibold text-gray-400">No ratings yet...</p>
      )}
    </>
  );
};

MultiRatingsComponent.Label = Label;
MultiRatingsComponent.RatingsContainer = RatingsContainer;
MultiRatingsComponent.RatingIcon = RatingIcon;
MultiRatingsComponent.RatingLabel = RatingLabel;

export { MultiRatingsComponent };
