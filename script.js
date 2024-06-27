let model, labelContainer, maxPredictions;

// Load the image model and setup the webcam
async function init() {
    const modelURL = "URL_К_ВаШЕЙ_МОДЕЛИ/model.json";
    const metadataURL = "URL_К_ВаШЕЙ_МОДЕЛИ/metadata.json";

    // Load the model
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();
}

async function predict() {
    // Prediction
    const image = document.getElementById("imageUpload").files[0];
    const img = document.createElement("img");
    img.src = URL.createObjectURL(image);

    const prediction = await model.predict(img, false);
    document.getElementById("result").innerText = JSON.stringify(prediction, null, 2);
}

document.getElementById("uploadForm").onsubmit = function(event) {
    event.preventDefault();
    predict();
};

init();
