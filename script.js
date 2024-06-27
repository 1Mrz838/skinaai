document.getElementById('uploadForm').onsubmit = async function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
        const response = await fetch('https://your-api-endpoint.com/predict', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();
        document.getElementById('result').textContent = JSON.stringify(result, null, 2);
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('result').textContent = 'Error: ' + error.message;
    }
};
