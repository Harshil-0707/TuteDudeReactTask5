import { useEffect, useState } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    // In a real app, you would fetch from a backend
    // For this example, we'll use dummy data
    const fetchMeals = () => {
      const DUMMY_MEALS = [
        {
          id: "m1",
          name: "Sushi",
          description: "Finest fish and veggies",
          price: 22.99,
        },
        {
          id: "m2",
          name: "Schnitzel",
          description: "A german specialty!",
          price: 16.5,
        },
        {
          id: "m3",
          name: "Barbecue Burger",
          description: "American, raw, meaty",
          price: 12.99,
        },
        {
          id: "m4",
          name: "Green Bowl",
          description: "Healthy...and green...",
          price: 18.99,
        },
      ];

      setMeals(DUMMY_MEALS);
      setIsLoading(false);
    };

    fetchMeals();
  }, []);

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
