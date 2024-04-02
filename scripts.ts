const num: number = 4;
// console.log(num);

let job = "IT";
console.log(typeof job)

// function void dan function return value

function timesNum(a: number, b: number): number {
    return a * b;
}

function printGreet(word: string): void {
    console.log(`Hello, ${word}!`);
}

const newTask = document.getElementById("newTask") as HTMLInputElement;
console.log("object new task: " + newTask.value)

const fetchData = async (): Promise<string[]> => {
    const response = await fetch("https://module3-api-is2m.onrender.com/random-todos");
    const data = await response.json();
    return data;
}

(
    async () => {
        const data = await fetchData();
        console.log(data);
    }
)()


