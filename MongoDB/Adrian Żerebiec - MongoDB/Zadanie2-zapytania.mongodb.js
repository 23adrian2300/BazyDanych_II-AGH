//wykorzystywano rozszerzenie MongoDB for VS Code
//zapytania powstały dzięki MongoDB Playground
use('Trips-AZ')


const getTripStats = () => {
  const pipeline = [
    { $match: { rating: { $gte: 3.6 } } },
    {
      $group: {
        _id: null,
        numberOFTrips: { $sum: 1 },
        numberOfOpinions: { $sum: '$numberOfOpinions' },
        rating: { $avg: '$rating' },
        avgPrice: { $avg: '$price' },
        minPrice: { $min: '$price' },
        maxPrice: { $max: '$price' }
      }
    }
  ];

  const result = db.trips.aggregate(pipeline);

  print("Trip Statistics:");

  while (result.hasNext()) {
    const document = result.next();
    console.log("Number of Trips:", document.numberOFTrips);
    console.log("Number of Opinions:", document.numberOfOpinions);
    console.log("Average Rating:", document.rating);
    console.log("Average Price:", document.avgPrice);
    console.log("Minimum Price:", document.minPrice);
    console.log("Maximum Price:", document.maxPrice);
  }
};

const getTripsByDateRange = () => {
  const pipeline = [
    {
      $match: {
        startingDates: {
          $gte: '2023-07-01',
          $lte: '2023-08-31'
        }
      }
    },
    {
      $project: {
        tripName: 1,
        startingDates: 1
      }
    }
  ];

  const result = db.trips.aggregate(pipeline);

  print("Trips by Date Range:");

  while (result.hasNext()) {
    const document = result.next();
    console.log("Trip Name:", document.tripName);
    console.log("Starting Date: ", document.startingDates);
    console.log("---");
  }
};


const getUserReviewCounts = () => {
  const pipeline = [
    {
      $group: {
        _id: "$user",
        count: { $sum: 1 }
      }
    },
    {
      $sort: { count: -1 }
    }
  ];

  const result = db.reviews.aggregate(pipeline);

  print("User Review Counts:");

  while (result.hasNext()) {
    const document = result.next();
    console.log("User:", JSON.stringify(document._id));
    console.log("Count:", document.count);
    console.log("---");
  }
};

// Wywołania funkcji
getTripStats();
getTripsByDateRange();
getUserReviewCounts();
