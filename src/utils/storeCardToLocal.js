import { toast } from "react-toastify";

// Utility function to get items from local storage
export const getItems = () => {
    // Retrieve the stored coffee data as a string
    const coffeeString = localStorage.getItem('coffee');
    
    // If data exists, parse and return it; otherwise, return an empty array
    if (coffeeString) {
        const coffeeObj = JSON.parse(coffeeString);
        return coffeeObj;
    } else {
        return [];
    }
};

// Utility function to add a new coffee item to local storage
export const setItemToLocalStorage = (coffee) => {
    // Get the existing coffee items from local storage
    const prevCoffee = getItems();
    
    // Add the new coffee item to the array
    const newCoffee = [...prevCoffee, coffee];
    
    // Convert the updated array back to a string
    const newCoffeeString = JSON.stringify(newCoffee);
    
    // Store the updated coffee array in local storage
    localStorage.setItem('coffee', newCoffeeString);
    toast.success("Item added to dashboard");
};


export const removeFromLocalStorage = (id)=>{
    const coffee = getItems();

    const newCoffee = coffee.filter(item => item.id != id);
    const newCoffeeString = JSON.stringify(newCoffee);
    localStorage.setItem('coffee', newCoffeeString);
    toast.warning("Item removed from dashboard");

}
