import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";
const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([
    {
      id: 1,
      name: "Best of Paris in 8 Days Tour",
      info: "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
      image: "https://www.course-api.com/images/tours/tour-1.jpeg",
      price: 1995,
    },
    {
      id: 2,
      name: "Best of Paris in 7 Days Tour",
      info: "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
      image: "https://www.course-api.com/images/tours/tour-1.jpeg",
      price: 1995,
    },
    {
      id: 3,
      name: "Best of Paris in 7 Days Tour",
      info: "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
      image: "https://www.course-api.com/images/tours/tour-1.jpeg",
      price: 1995,
    },
    {
      id: 4,
      name: "Best of Paris in 7 Days Tour",
      info: "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
      image: "https://www.course-api.com/images/tours/tour-1.jpeg",
      price: 1995,
    },
    {
      id: 5,
      name: "Best of Paris in 7 Days Tour",
      info: "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
      image: "https://www.course-api.com/images/tours/tour-1.jpeg",
      price: 1995,
    },
  ]);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    try {
      const resp = await fetch(url);
      if (!resp.ok) {
        setIsError(true);
        return;
      }
      const data = resp.json();
      setTours(data);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  const handleClick = (tour) => {
    setTours(tours.filter((item) => item.id != tour.id));
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  // still loading
  if (isLoading) {
    return (
      <div className="title">
        <Loading></Loading>
      </div>
    );
  }

  // error
  if (isError) {
    return <h2>there was an error</h2>;
  }

  // no tours
  if (!tours.length) {
    return (
      <div className="title">
        <h2>no tours left</h2>
        <button className="btn" onClick={fetchData}>
          refresh
        </button>
      </div>
    );
  }

  // display tours

  return (
    <>
      <div className="title">
        <h2>our tours</h2>
        <div className="title-underline"></div>
      </div>
      <Tours tours={tours} func={handleClick}></Tours>
    </>
  );
};

export default App;
