import arcade from './assets/images/arcade.jpg';
import guitar from './assets/images/guitar.jpg';
import bike from './assets/images/mountain-bike.png';

export default [
    {
        id: 1,
        title: "Enjoy Arcade Gaming",
        price: 36,
        coverImg: arcade,
        stats: {
            rating: 5.0,
            reviewCount: 6
        },
        location: "Online",
        openSpots: 0,
    },
    {
        id: 2,
        title: "Learn How To Play Guitar",
        price: 125,
        coverImg: guitar,
        stats: {
            rating: 5.0,
            reviewCount: 30
        },
        location: "Online",
        openSpots: 27,
    },
    {
        id: 3,
        title: "Group Mountain Biking",
        price: 50,
        coverImg: bike,
        stats: {
            rating: 4.8,
            reviewCount: 2
        },
        location: "Norway",
        openSpots: 3,
    }
]