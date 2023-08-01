//wykorzystywano rozszerzenie MongoDB for VS Code
//zapytania powstały dzięki MongoDB Playground
use('Trips-AZ');

db.users.insertMany([
    {
        _id: new ObjectId("8a53a254a5e2623de8fc6d1c"),
        name: "Lidia Johnson",
        email: "LJh@gmail.com",
        phone: "123456789",
        role: "lead-guide"
    },
    {
        _id: new ObjectId("fc08865333b2a3d038343e40"),
        name: "Tom Hardy",
        email: "thardy@gmail.com",
        phone: "987654321",
        role: "guide"
    },
    {
        _id: new ObjectId("6abd2ba0cefae0c6043562cf"),
        name: "Carl Johnson",
        email: "cj@gmail.com",
        phone: "789456123",
        role: "lead-guide"
    },
    {
        _id: new ObjectId("e0968ed191c0b63ddbfd3089"),
        name: "Max Payne",
        email: "mpayne@gmail.com",
        phone: "654123789",
        role: "guide"
    },
    {
        _id: new ObjectId("5c8a1dfa2f8fb814b56fa181"),
        name: "Lewis Hamilton",
        email: "lewishamilton@gmail.com",
        phone: "258369147",
        role: "user"
    },
    {
        _id: new ObjectId("30651955b1df2b47b4f5fa5c"),
        name: "Shawn Michaels",
        email: "hbk@gmail.com",
        phone: "369258147",
        role: "user"
    },
    {
        _id: new ObjectId("11df1a504e6f3b241c117adc"),
        name: "Roman Reigns",
        email: "headofthetable@gmail.com",
        phone: "147258369",
        role: "user"
    },
    {
        _id: new ObjectId("37a270d6088f2283a3f7df0e"),
        name: "Chris Jericho",
        email: "chris@gmail.com",
        phone: "456789123",
        role: "user"
    },
    {
        _id: new ObjectId("532c022a8c71eae5e8d084c8"),
        name: "Kyle Walker",
        email: "walker@gmail.com",
        phone: "231456789",
        role: "user"
    },
    {
        _id: new ObjectId("ad54c853d879393cb0a5eeed"),
        name: "Vince McMahon",
        email: "mcmahon@gmail.com",
        phone: "765123987",
        role: "comapny-owner"
    },
    {
        _id: new ObjectId("b96f420ff60165da52ad9310"),
        name: "John Cena",
        email: "cena@gmail.com",
        phone: "123258369",
        role: "user"
    },
    {
        _id: new ObjectId("3f752fb23a76d57721249a04"),
        name: "John Wick",
        email: "wick@gmail.com",
        phone: "901258369",
        role: "user"
    },
    {
        _id: new ObjectId("57381942300d7dca5ecaa69e"),
        name: "Owen Wilson",
        email: "oWenilson@gmail.com",
        phone: "123412341",
        role: "user"
    },
    {
        _id: new ObjectId("9e136739c439c0048dea81be"),
        name: "Vin Diesel",
        email: "vin@gmail.com",
        phone: "982123231",
        role: "user"
    },
    {
        _id: new ObjectId("41a74e9caa34de98feb0f486"),
        name: "Sheyk Abdurahman",
        email: "abrusheyk@gmail.com",
        phone: "908721234",
        role: "company-owner"
    },
    {
        _id: new ObjectId("7504ae9a5972384b0ed958a9"),
        name: "Caroline Wozniacki",
        email: "woz@gmail.com",
        phone: "689123656",
        role: "user"
    }
])

db.companies.insertMany([
    {
        _id: new ObjectId("0a60ccbc93d4291fedae1b4f"),
        companyName: "Tripex",
        address: "Lonly Street 1, 00-021, Praga, Czech Republic",
        owner: new ObjectId("41a74e9caa34de98feb0f486"),
        trips: [
            new ObjectId("6c78fb8cf4afda39709c2955"),
            new ObjectId("7a18fadcf4afda39709c295d")
        ]
    },
    {
        _id: new ObjectId("24718c38a4c1e7bbd92e3f21"),
        companyName: "Sunshine",
        address: "Sunshine Street 1, 00-001, Berlin, Germany",
        owner: new ObjectId("ad54c853d879393cb0a5eeed"),
        trips: [
            new ObjectId("3c88db8cf2afda39709c295a")
        ]
    }
])


db.reviews.insertMany([
    {
        _id: new ObjectId("a190bf57d67909284562adeb"),
        trip: new ObjectId("6c78fb8cf4afda39709c2955"),
        opinion: "Not bad",
        rating: 3,
        user: new ObjectId("a190bf57d67909284561adeb")

    },
    {
        _id: new ObjectId("8bcda4c7866ee28f06133b8c"),
        trip: new ObjectId("3c88db8cf2afda39709c295a"),
        opinion: "Not bad at all",
        rating: 4,
        user: new ObjectId("5c8a1dfa2f8fb814b56fa181")
    },
    {
        _id: new ObjectId("4a64417aca4ec4ba59a3e2eb"),
        trip: new ObjectId("7a18fadcf4afda39709c295d"),
        opinion: "Time of my life",
        rating: 5,
        user: new ObjectId("5c8a1dfa2f8fb814b56fa181")
    },
    {
        _id: new ObjectId("5c8a36b714eb5c17645c910f"),
        trip: new ObjectId("6c78fb8cf4afda39709c2955"),
        opinion: "Really boring trip, I don't recommend it to anyone",
        rating: 2,
        user: new ObjectId("30651955b1df2b47b4f5fa5c")

    },
    {
        _id: new ObjectId("5c8a37b114eb5c17645c9111"),
        trip: new ObjectId("3c88db8cf2afda39709c295a"),
        opinion: "Nice trip, but I've seen better ones",
        rating: 4,
        user: new ObjectId("5c8a24402f8fb814b56fa190")
    },
    {
        _id: new ObjectId("f6004b48f9b0734578d61b13"),
        opinion: "Amazing trip, I recommend it to everyone",
        trip: new ObjectId("3c88db8cf2afda39709c295a"),
        rating: 5,
        user: new ObjectId("11df1a504e6f3b241c117adc")

    },
    {
        _id: new ObjectId("f6004b48f9b0734578d61b12"),
        trip: new ObjectId("7a18fadcf4afda39709c295d"),
        opinion: "Terrible",
        rating: 1,
        user: new ObjectId("11df1a504e6f3b241c117adc"),

    },
    {
        _id: new ObjectId("f6004b48f9b0734578d61b15"),
        trip: new ObjectId("7a18fadcf4afda39709c295d"),
        opinion: "I really enjoyed this trip, everything was perfect",
        rating: 5,
        user: new ObjectId("37a270d6088f2283a3f7df0e")

    },
    {
        _id: new ObjectId("f6004b48f9b0734578d61b11"),
        trip: new ObjectId("6c78fb8cf4afda39709c2955"),
        opinion: "Awesome trip, I recommend it to everyone",
        rating: 5,
        user: new ObjectId("37a270d6088f2283a3f7df0e"),

    },
    {
        _id: new ObjectId("9bbc56c9fa8faf83c2a1ae9e"),
        trip: new ObjectId("7a18fadcf4afda39709c295d"),
        opinion: "Nothing special, I've seen better trips",
        rating: 4,
        user: new ObjectId("532c022a8c71eae5e8d084c8")

    },
    {
        _id: new ObjectId("9bbc56c9fa8faf83c2a1ae9f"),
        trip: new ObjectId("6c78fb8cf4afda39709c2955"),
        opinion: "Awesooooooome trip, I love it",
        rating: 5,
        user: new ObjectId("b96f420ff60165da52ad9310")
    },
    {
        _id: new ObjectId("9bcc56c9fa8faf83c2a1ae9e"),
        trip: new ObjectId("3c88db8cf2afda39709c295a"),
        opinion: "So boring trip",
        rating: 2,
        user: new ObjectId("b96f420ff60165da52ad9310")
    },
    {
        _id: new ObjectId("5c8a3b7c14eb5c17645c912f"),
        trip: new ObjectId("6c78fb8cf4afda39709c2955"),
        opinion: "I think it was a good trip, but nothing special",
        rating: 3,
        user: new ObjectId("3f752fb23a76d57721249a04"),

    },
    {
        _id: new ObjectId("5c8a3b9f14eb5c17645c9130"),
        trip: new ObjectId("3c88db8cf2afda39709c295a"),
        opinion: "Woooow, I love it, best trip ever",
        rating: 5,
        user: new ObjectId("57381942300d7dca5ecaa69e")

    },
    {
        _id: new ObjectId("a33ed99b0d8a0e9fbdd3aa01"),
        trip: new ObjectId("3c88db8cf2afda39709c295a"),
        opinion: "Really good, I spent a great time there",
        rating: 4,
        user: new ObjectId("9e136739c439c0048dea81be")

    },
    {
        _id: new ObjectId("ce128b4be3d48baed3849ba9"),
        trip: new ObjectId("7a18fadcf4afda39709c295d"),
        opinion: "Waste of time",
        rating: 1,
        user: new ObjectId("9e136739c439c0048dea81be")

    }
])

// wartości domyślne dla rating i numberOfOpinions to 0 poniewaz nastepnie sa obliczne na postawie reviews w funkcji ponizej
db.trips.insertMany([
    {
        _id: ObjectId("6c78fb8cf4afda39709c2955"),
        company: ObjectId("0a60ccbc93d4291fedae1b4f"),
        tripName: "Samba and Tango in Argentina",
        duration: 8,
        groupSize: 10,
        rating: 0,
        numberOfOpinions: 0,
        price: 1500,
        description: "Argentina is best country in the South America. World Cup winners love chilling there. You can see Messi, Maradona and other football stars.",
        startingDates: [
            "2023-09-12",
            "2023-10-28"
        ],
        details: [
            {
                place: "Buenos Aires",
                accommodation: "Hotel Rubi",
                day: 5,
                restaurants: [
                    { name: "El Gaucho", cuisine: "Argentinian" },
                    { name: "La Cabrera", cuisine: "Steakhouse" },
                    { name: "Don Julio", cuisine: "Argentinian" }
                ]
            },
            {
                place: "Rosario",
                accommodation: "Hotel Flea",
                day: 3,
                restaurants: [
                    { name: "La Buena Vida", cuisine: "Italian" },
                    { name: "Pichincha", cuisine: "Argentinian" }
                ]
            }
        ],
        guides: [
            ObjectId("8a53a254a5e2623de8fc6d1c"),
            ObjectId("fc08865333b2a3d038343e40")
        ]
    },

    {
        _id: ObjectId("3c88db8cf2afda39709c295a"),
        company: ObjectId("24718c38a4c1e7bbd92e3f21"),
        tripName: "Paris in the summer",
        duration: 7,
        groupSize: 20,
        rating: 0,
        numberOfOpinions: 0,
        price: 600,
        description: "Paris is best city in the world. You can see Eiffel Tower, Louvre and other famous places.",
        startingDates: [
            "2023-06-11",
            "2023-07-21"
        ],
        details: [
            {
                place: "Paris",
                accommodation: "Hotel Paris",
                day: 5,
                restaurants: [
                    { name: "Le Jules Verne", cuisine: "French" },
                    { name: "Chez L'Ami Jean", cuisine: "Italian" }
                ]
            },
            {
                place: "Versailles",
                accommodation: "Hotel France",
                day: 1,
                restaurants: [
                    { name: "L'Orangerie", cuisine: "French" }
                ]
            },
            {
                place: "Disneyland Paris",
                accommodation: "Hotel Mickey",
                day: 1,
                restaurants: [
                    { name: "Auberge de Cendrillon", cuisine: "French" }
                ]
            },
        ],
        guides: [
            ObjectId("6abd2ba0cefae0c6043562cf")
        ]
    },

    {
        _id: ObjectId("7a18fadcf4afda39709c295d"),
        company: ObjectId("0a60ccbc93d4291fedae1b4f"),
        tripName: "Lisbon and Porto",
        duration: 5,
        groupSize: 15,
        rating: 0,
        numberOfOpinions: 0,
        price: 1000,
        description: "Portugal is amazing country. You can see beautiful beaches, amazing cities and other famous places. You can also taste delicious food and wine.",
        startingDates: [
            "2023-06-14",
            "2023-08-18"
        ],
        details: [
            {
                place: "Porto",
                accommodation: "Hotel Pepel",
                day: 2,
                restaurants: [
                    { name: "Cafe Santiago", cuisine: "Portuguese" },
                    { name: "Cantina 32", cuisine: "Portuguese" }
                ]
            },
            {
                place: "Lisbon",
                accommodation: "Hotel Benfica",
                day: 3,
                restaurants: [
                    { name: "Time Out Market", cuisine: "Various" },
                    { name: "Pasteis de Belem", cuisine: "Portuguese" }
                ]
            }
        ],
        guides: [
            ObjectId("6abd2ba0cefae0c6043562cf"),
            ObjectId("e0968ed191c0b63ddbfd3089")
        ]
    }
]);
//funckja przeliczająca wartości srednie oceny oraz ich liczbe
db.trips.find().forEach(function (trip) {
    var reviews = db.reviews.find({ trip: trip._id }).toArray();
    var ratingsSum = 0;
    reviews.forEach(function (review) {
        ratingsSum += review.rating;
    });
    var rating = reviews.length > 0 ? ratingsSum / reviews.length : 0;

    db.trips.updateOne(
        { _id: trip._id },
        { $set: { rating: rating, numberOfOpinions: reviews.length } }
    );
});