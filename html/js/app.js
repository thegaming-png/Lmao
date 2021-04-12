imagesArray = [
    "ads/ad1.jpg",
    "ads/ad2.jpg",
    "ads/ad3.jpg"
]

function get_random_image() {
    random_index = Math.floor(Math.random() * imagesArray.length);

    selected_image = imagesArray[random_index];

    document.getElementById('ad').src = imagesArray[random_index];
}