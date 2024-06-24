import { RatingComponent } from './rating-component.tsx'

const App = () => {
  return (
    <main className="bg-[#EAF2F8] gap-4 overflow-scroll min-h-[100dvh] flex justify-center items-center flex-col">
      <h1 className="text-3xl">My Ratings Component</h1>
      <RatingComponent />
    </main>
  )
}

export { App }
