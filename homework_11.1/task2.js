function fetchTodo() {
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            return response.json();
        })
        .catch(error => console.error("Error fetching todo:", error.message));
}
function fetchUser() {
    return fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            return response.json();
        })
        .catch(error => console.error("Error fetching user:", error.message));
}

const promisesArray = [fetchTodo(), fetchUser()];

Promise.all(promisesArray)
    .then(results => {
        const allResult = results;
        console.log("--- Promise.all Result ---");
        console.log(allResult);
    })
    .catch(error => console.error("Promise.all failed:", error));

Promise.race(promisesArray)
    .then(winner => {
        const raceResult = winner;
        console.log("\n--- Promise.race Result (The Winner) ---");
        console.log(raceResult);
    })
    .catch(error => console.error("Promise.race failed:", error));