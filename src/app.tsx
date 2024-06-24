import { RatingComponent } from './rating-component.tsx';
import { Rating } from './types/rating.ts';
import { MultiRatingsComponent } from './multi-ratings-component.tsx';
import { useState } from 'react';

const MultiRatings: Rating[] = [
  { name: 'The Dark Knight', year: 2008, length: 5, rating: 0 },
  { name: 'Knives Out', year: 2019, length: 5, rating: 0 },
  { name: 'Serendipity', year: 2001, length: 5, rating: 0 },
  { name: 'The Dressmaker', year: 2015, length: 5, rating: 0 },
  { name: 'The Grand Budapest Hotel', year: 2015, length: 5, rating: 0 },
];

const App = () => {
  const [ratings, setRatings] = useState(MultiRatings);

  const updateRating = (index: number, newRating: number) => {
    setRatings((prevRatings) =>
      prevRatings.map((r, i) => (i === index ? { ...r, rating: newRating } : r)),
    );
    console.log(ratings);
  };

  return (
    <main className="bg-[#EAF2F8] gap-4 overflow-scroll min-h-[100dvh] flex justify-center items-center flex-col">
      <h1 className="text-3xl">My Ratings Component</h1>
      <RatingComponent />
      <MultiRatingsComponent ratings={ratings} updateRating={updateRating}>
        <MultiRatingsComponent.RatingsContainer />
      </MultiRatingsComponent>
    </main>
  );
};

export { App };
