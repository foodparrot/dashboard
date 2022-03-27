import axios from 'axios'
export const fetchRandomDog = async () => {
    console.log('fetching1...');
    return (await axios.get("https://random.dog/woof.json?filter=mp4,webm")).data;
}

export const fetchRandomDog2 = async () => {
    console.log('fetching2...');
    return (await axios.get("https://random.dog/woof.json?filter=mp4,webm")).data;
}

export const updatePost = async (data) => {
    return (await axios.post("https://jsonplaceholder.typicode.com/posts", JSON.stringify(data))).data;
}