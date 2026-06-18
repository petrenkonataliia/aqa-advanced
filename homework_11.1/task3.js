async function fetchTodo() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching todo:", error.message);
    }
}

async function fetchUser() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching user:", error.message);
    }
}

async function runRequests() {
    const promisesArray = [fetchTodo(), fetchUser()];

    try {
        const allResult = await Promise.all(promisesArray);
        console.log("--- Promise.all Result (with async/await) ---");
        console.log(allResult);

        const raceResult = await Promise.race(promisesArray);
        console.log("\n--- Promise.race Result (with async/await) ---");
        console.log(raceResult);
        
    } catch (error) {
        console.error("An error occurred during aggregation:", error);
    }
}

runRequests();