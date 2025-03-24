document.addEventListener('DOMContentLoaded', () => {
    const ramenImages = document.querySelectorAll('#ramen img');
    const ramenName = document.querySelector('.name');
    const ramenRestaurant = document.querySelector('.restaurant');
    const ratingDisplay = document.querySelector('#rating-display');
    const commentDisplay = document.querySelector('#comment-display');
    const newRamenForm = document.querySelector('#new-ramen');

    let ramenData = [
        {
            name: 'kojiro',
            restaurant: 'Menya',
            image: 'kojiro.jpg',
            rating: 6,
            comment: 'Good enough',
        },
        {
            name: 'I1',
            restaurant: 'Ichiran',
            image: 'I1.jpg',
            rating: 7,
            comment: 'Tasty',
        },
        {
            name: 'Nirvana',
            restaurant: 'Ramen Nagi',
            image: 'nirvana.jpg',
            rating: 5,
            comment: 'Average',
        },
        {
            name: 'Shoyu',
            restaurant: 'Ichiran',
            image: 'shoyu.jpg',
            rating: 4,
            comment: 'Can do better',
        },
        {
            name: 'Naruto',
            restaurant: 'Ramen Nagi',
            image: 'naruto.jpg',
            rating: 3,
            comment: 'Try to make it better next time',
        },
    ];

    // Function to display ramen details
    function displayRamenDetails(index) {
        const ramen = ramenData[index];
        ramenName.textContent = ramen.name;
        ramenRestaurant.textContent = ramen.restaurant;
        ratingDisplay.textContent = ramen.rating || 'N/A';
        commentDisplay.textContent = ramen.comment || '';
        document.querySelector('.holder').src = ramen.image;
    }

    // Add click event listeners to ramen images
    ramenImages.forEach((img, index) => {
        img.addEventListener('click', () => displayRamenDetails(index));
    });

    // Handle form submission
    newRamenForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.querySelector('#new-name').value;
        const restaurant = document.querySelector('#new-restaurant').value;
        const image = document.querySelector('#new-image').value;
        const rating = document.querySelector('#new-rating').value;
        const comment = document.querySelector('#new-comment').value;

        const newRamen = {
            name,
            restaurant,
            image,
            rating,
            comment,
        };

        ramenData.push(newRamen);

        // Create a new image element
        const newImg = document.createElement('img');
        newImg.src = newRamen.image;
        newImg.alt = newRamen.name;

        // Add click event listener to the new image
        newImg.addEventListener('click', () => displayRamenDetails(ramenData.length - 1));

        // Append the new image to the ramen container
        document.querySelector('#ramen').appendChild(newImg);

        // Reset the form
        newRamenForm.reset();
    });

    // Display the first ramen by default
    if (ramenData.length > 0) {
        displayRamenDetails(0);
    }
});