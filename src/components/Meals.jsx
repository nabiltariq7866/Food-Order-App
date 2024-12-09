import { useState } from "react";
import { useEffect } from "react";
import MealsItem from "./MealsItem";
function Meals(){
    const [mealsItem,setMealsItem]=useState([])
    
    useEffect(() => {
        async function fetchMeals(){
            try {
                const response=await fetch("http://localhost:3000/meals");
                console.log(response)
                if(!response.ok){
                    throw new Error("Data is not fetch" +response.status)
                }
                const meals=await response.json();
                setMealsItem(meals)

            } catch (error) {
                
            }

    
        }
    fetchMeals();
    }, [])

 return <ul id="meals">{
    mealsItem.map((meal)=><MealsItem key={meal.id} meal={meal}/>)
 }

 </ul>
}
export default Meals;