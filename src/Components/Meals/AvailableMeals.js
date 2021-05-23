import React from 'react'
import Card from '../UI/Card';
import styles from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem'
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Fried Chicken',
      description: 'Something nobody can go wrong with!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'Tasty and smoked',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

export default function AvailableMeals() {
    const mealsList=DUMMY_MEALS.map(meal=>
      <MealItem 
      id={meal.id}
       key={meal.id}
        name={meal.name}
      description={meal.description} 
      price={meal.price}/>
    )
    return (
        <section className={styles.meals}>
          <Card>
            <ul>
                {mealsList}
            </ul>
          </Card>
        </section>
    )
}
