const shopId = "50353"; // Your Spreadshirt Shop ID
const apiKey = "d6beabc2-efd8-401e-850e-c88809da7d5d"; // Replace with your new API key
const apiUrl = `https://api.spreadshirt.net/api/v1/shops/${shopId}/designs`;

async function fetchDesigns() {
    try {
        const response = await fetch(apiUrl, {
            headers: {
                "Authorization": `SprdAuth apiKey="${apiKey}"`,
                "Accept": "application/json"
            }
        });

        if (!response.ok) throw new Error("Failed to fetch designs");

        const data = await response.json();
        console.log(data); // View design data in the console for now

        // TODO: Add code to display designs on your website
    } catch (error) {
        console.error("Error fetching designs:", error);
    }
}

fetchDesigns();
