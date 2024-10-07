async function fetchPet(petId) {
    try {
        const response = await fetch(`https://api.example.com/pets/${petId}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const petData = await response.json();
        return petData;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

export default fetchPet;
