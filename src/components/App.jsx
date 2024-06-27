
import {  Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const Home = lazy(()=>import("pages/Home"))
const Moves = lazy(()=>import("pages/Moves"))
const SimgleMove=lazy(()=>import("./SingleMove/SingleMove"))
const MoveCast = lazy(()=>import("./MeveCast/MoveCast"))
const MoveReviews = lazy(()=>import("./MoveReviews/MoveReviews")) 

export const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>

    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/moves" element={<Moves />} />
      <Route path="/moves/:moveid" element={<SimgleMove/>}>
        <Route path="cast"element={<MoveCast/>} />
        <Route path="reviews" element={<MoveReviews/>} />
      </Route>
    </Routes>
    </Suspense>
    
  );
};
