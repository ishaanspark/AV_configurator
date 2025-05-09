document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("recommendButton").addEventListener("click", getRecommendations);
});

function getRecommendations() {
    const roomType = document.getElementById("roomType").value;
    const roomSize = document.getElementById("roomSize").value;
    const useCase = document.getElementById("useCase").value;
    const budget = document.getElementById("budget").value;

    const recommendations = document.getElementById("recommendations");
    recommendations.innerHTML = ""; // Clear previous recommendations

    let videoProducts = [];
    let audioProducts = [];
    let controlProducts = [];
    let thirdPartyProducts = [];

    if (roomType === "Conference Room" && roomSize === "Medium" && useCase === "Video Conferencing" && budget === "High") {
        videoProducts = [
            { name: "AMX NMX-ENC-N2612 Video Encoder", quantity: 1 },
            { name: "AMX NMX-DEC-N2622 Video Decoder", quantity: 1 },
            { name: "Harman Cables & Accessories", quantity: 1 }
        ];
        audioProducts = [
            { name: "JBL Control 25-1 Speakers", quantity: 2 },
            { name: "BSS BLU-50 DSP Processor", quantity: 1 },
            { name: "Crown XLC21300 Amplifier", quantity: 1 },
            { name: "AKG Wireless Microphone Set", quantity: 1 }
        ];
        controlProducts = [
            { name: "AMX NX-3200 Controller", quantity: 1 },
            { name: "AMX Massio Keypad", quantity: 1 }
        ];
        thirdPartyProducts = [
            { name: "Logitech Rally Camera", quantity: 1 },
            { name: "Shure MXA910 Ceiling Microphone", quantity: 1 },
            { name: "NETGEAR AV Line Switch", quantity: 1 }
        ];
    }

    appendRecommendations("Video Products", videoProducts);
    appendRecommendations("Audio Products", audioProducts);
    appendRecommendations("Control Products", controlProducts);
    appendRecommendations("Third-Party Products", thirdPartyProducts);
}

function appendRecommendations(title, products) {
    const recommendations = document.getElementById("recommendations");
    if (products.length > 0) {
        let categoryContainer = document.createElement("div");
        categoryContainer.classList.add("recommendation-category");

        let categoryTitle = document.createElement("h3");
        categoryTitle.textContent = title;
        categoryContainer.appendChild(categoryTitle);

        let productList = document.createElement("ul");
        productList.classList.add("recommendation-list");
        
        products.forEach(product => {
            let listItem = document.createElement("li");
            listItem.innerHTML = `<strong>${product.name}</strong> <span class="quantity">(Quantity: ${product.quantity})</span>`;
            productList.appendChild(listItem);
        });
        
        categoryContainer.appendChild(productList);
        recommendations.appendChild(categoryContainer);
    }
}
function appendRecommendations(title, products) {
    const recommendations = document.getElementById("recommendations");

    if (products.length > 0) {
        let categoryContainer = document.createElement("div");
        categoryContainer.classList.add("recommendation-category");

        let categoryTitle = document.createElement("h3");
        categoryTitle.textContent = title;
        categoryContainer.appendChild(categoryTitle);

        let productList = document.createElement("ul");
        productList.classList.add("recommendation-list");

        products.forEach(product => {
            let listItem = document.createElement("li");
            listItem.innerHTML = `<strong>${product.name}</strong> <span class="quantity">(Quantity: ${product.quantity})</span>`;
            productList.appendChild(listItem);
        });

        categoryContainer.appendChild(productList);

        // Ensure the recommendations grid exists
        let recommendationsGrid = document.querySelector(".recommendations-grid");
        if (!recommendationsGrid) {
            recommendationsGrid = document.createElement("div");
            recommendationsGrid.classList.add("recommendations-grid");
            recommendations.appendChild(recommendationsGrid);
        }

        recommendationsGrid.appendChild(categoryContainer);
    }
}
