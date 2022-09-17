import cruise1 from "../../assets/images/cards/south-america.jpg";
import cruise2 from "../../assets/images/cards/black-sea.jpg";
import cruise3 from "../../assets/images/cards/oceania.jpg";
import cruise4 from "../../assets/images/cards/southern-africa.jpg";
import cruise5 from "../../assets/images/cards/caribbean.jpg";
import cruise6 from "../../assets/images/cards/mediterranean-sea.jpg";
import cruise7 from "../../assets/images/cards/antartic.jpg";
import cruise8 from "../../assets/images/cards/central-pacific.jpg";

const cruises = [
    {
        id: 1,
        cruise: "South America",
        image: cruise1,
        alt: "A beach on South America, Brazil",
        departure: "Buenos Aires, Argentina",
        description: 'South America is bounded by the Caribbean Sea to the northwest and north, the Atlantic Ocean to the northeast, east, and southeast, and the Pacific Ocean to the west.',
        date: "December 3, 2022.",
        duration: 5,
        price: 600,
        stock: 4
    },
    {
        id: 2,
        cruise: "Black Sea",
        image: cruise2,
        alt: "A beach on the Black Sea, Sochi", 
        departure: 'Sochi, Russia',
        description: 'The Black Sea is an inland sea between southeastern Europe and Anatolia that is actually a distant arm of the Atlantic Ocean by way of the Mediterranean Sea. It is connected to the Mediterranean by the Bosporus and the Sea of Marmara, and to the Sea of Azov by the Strait of Kerch.',
        date: "July 3, 2022.",
        duration: 6,
        price: 700,
        stock: 4},
    {
        id: 3,
        cruise: "Oceania",
        image: cruise3,
        alt: "A beach on Oceania, Australia",
        departure: "Port Campbell, Australia",
        description: 'Oceania is a region made up of thousands of islands throughout the Central and South Pacific Ocean. It includes Australia, the smallest continent in terms of total land area.',
        date: "December 24, 2022.",
        duration: 7,
        price: 850,
        stock: 4
    },
    {
        id: 4,
        cruise: "Southern Africa",
        image: cruise4,
        alt: "A beach on South Africa",
        departure: "Capetown, South Africa",
        description: 'Southern Africa is the southernmost subregion of the African continent, south of the Congo and Tanzania. The physical location is the large part of Africa to the south of the extensive Congo River basin. Southern Africa is home to a number of river systems; the Zambezi River is the most prominent.',
        date: "December 20, 2022.",
        duration: 9,
        price: 1050,
        stock: 4},
    {
        id: 5,
        cruise: "Caribbean",
        image: cruise5,
        alt: "A beach on the Caribbean, Mexico",
        departure: "Panama, Panama",
        description: 'Physiographically, the Caribbean region is mainly a chain of islands surrounding the Caribbean Sea. To the north, the region is bordered by the Gulf of Mexico, the Straits of Florida and the Northern Atlantic Ocean, which lies to the east and northeast. To the south lies the coastline of the continent of South America.',
        date: "May 15, 2022.",
        duration: 9,
        price: 1100,
        stock: 4
    },
    {
        id: 6,
        cruise: "Mediterranean Sea",
        image: cruise6,
        alt: "A beach on the Mediterranean Sea, Italy",
        departure: "Porto Fino, Italy",
        description: 'For a region that takes its name from the sea it surrounds, the Mediterranean is surprisingly hilly. It includes high mountains and rocky shores, thick scrub and semi-arid steppes, coastal wetlands and sandy beaches as well as a myriad of islands dotted across the sea.',
        date: "June 18, 2022.",
        duration: 10,
        price: 1200,
        stock: 4
    },
    {
        id: 7,
        cruise: "Antartic",
        image: cruise7,
        alt: "Antartic paradise, at the very south",
        departure: "Río Negro, Argentina",
        description: 'Antarctica is the southernmost continent in the world and it is centered asymmetrically around the geographic South Pole and surrounded by the Southern Ocean',
        date: "January 31, 2022.",
        duration: 10,
        price: 1300,
        stock: 4
    },
    {
        id: 8,
        cruise: "Central Pacific",
        image: cruise8,
        alt: "A beach on the Pacific Ocean, Hawaii",
        departure: "Vancouver, Canada",
        description: 'Hawaii is known for its beautiful beaches, its laid-back lifestyle, and its delicious food. From traditional Hawaiian dishes like poi and laulau to modern favorites like poke and Kalua pig, you are in for a treat after exploring the mountains or surfing the waves.',
        date: "May 11, 2022.",
        duration: 12,
        price: 1500,
        stock: 4
    }
]

export default cruises;