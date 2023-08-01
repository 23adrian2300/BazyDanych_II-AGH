//wykorzystywano rozszerzenie MongoDB for VS Code
//zapytania powstały dzięki MongoDB Playground
const database = 'YELP';
use(database);

const zadanie1a = () => {
  const result = db.business.find(
    {
      'categories': 'Restaurants',
      'hours.Monday.open': { $exists: true },
      'stars': { $gte: 4 }
    },
    {
      'name': 1,
      'address': 1,
      'categories': 1,
      'hours.Monday': 1,
      'stars': 1,
      '_id': 0
    }
  ).sort({ 'name': 1 });

  // Tworzenie tablicy wyników
  const resultsArray = [];
  while (result.hasNext()) {
    const document = result.next();
    resultsArray.push(document);
  }

  // Zapisywanie wyników do pliku JSON
  const fs = require('fs');
  const fileName = 'Zadanie1a-wyniki.json';
  fs.writeFileSync(fileName, JSON.stringify(resultsArray, null, 2));
  console.log(`Wyniki zostały zapisane do pliku ${fileName}`);
};

const zadanie1b = () => {
  const result = db.business.aggregate([
    {
      $match: {
        $or: [
          { categories: 'Hotels & Travel' },
          { categories: 'Hotels' }]
      }
    },
    {
      $group: {
        _id: '$city',
        count: { $sum: 1 }
      }
    },
    {
      $project: {
        city: '$_id',
        count: 1,
        _id: 0
      }
    },
    {
      $sort: {
        count: -1
      }
    }
  ]);
  while (result.hasNext()) {
    const document = result.next();
    console.log(`Miasto: ${document.city}, Liczba hoteli: ${document.count}`);
  }
};

const zadanie1c = () => {
  const result = db.tip.aggregate([
    {
      $match:
      {
        'date':
        {
          $regex: /^2012/
        }
      }
    },
    {
      $group:
      {
        '_id': '$business_id',
        'tip_count':
        {
          $count: {}
        }
      }
    },
    {
      $lookup: {
        from: 'business',
        localField: '_id',
        foreignField: 'business_id',
        as: 'business'
      }
    },
    { $sort: { 'tip_count': -1 } },
    {
      $project: {
        'business_name': { $first: '$business.name' },
        'tip_count': 1
      }
    }
  ]);

  while (result.hasNext()) {
    const document = result.next();
    console.log('Firma:', document.business_name);
    console.log('Liczba ocen/wskazówek:', document.tip_count);
    console.log('---');
  }
};

const zadanie1d = () => {
  const result = db.review.aggregate([
    {
      $group: {
        _id: null,
        cool_count: { $sum: { $cond: [{ $gt: ['$votes.cool', 0] }, 1, 0] } },
        funny_count: { $sum: { $cond: [{ $gt: ['$votes.funny', 0] }, 1, 0] } },
        useful_count: { $sum: { $cond: [{ $gt: ['$votes.useful', 0] }, 1, 0] } }
      }
    },
    {
      $project: {
        _id: 0
      }
    }
  ]);

  const output = result.toArray()[0];

  console.log('Liczba recenzji oznaczonych jako "cool":', output.cool_count);
  console.log('Liczba recenzji oznaczonych jako "funny":', output.funny_count);
  console.log('Liczba recenzji oznaczonych jako "useful":', output.useful_count);
};


const zadanie1e = () => {
  const result = db.user.find(
    {
      $and: [
        { 'votes.funny': { $eq: 0 } },
        { 'votes.useful': { $eq: 0 } }
      ]
    }
  ).sort({ name: 1 });


  while (result.hasNext()) {
    const document = result.next();
    console.log('Użytkownik:', document.name);
    console.log('Yelping Since:', document.yelping_since);
    console.log('Review Count:', document.review_count);
    console.log('User ID:', document.user_id);
    console.log('Friends:', document.friends);
    console.log('Fans:', document.fans);
    console.log('Average Stars:', document.average_stars);
    console.log('Type:', document.type);
    console.log('Compliments:', document.compliments);
    console.log('Elite:', document.elite);

    if (document.votes) {
      console.log('Votes:');
      Object.keys(document.votes).forEach(category => {
        console.log(`  ${category}: ${document.votes[category]}`);
      });
    } else {
      console.log('Votes: None');
    }

    console.log('---');
  }
};


const zadanie1fa = () => {
  const result = db.review.aggregate([
    {
      $group: {
        _id: '$business_id',
        average_stars: { $avg: '$stars' }
      }
    },
    {
      $match: {
        average_stars: { $gt: 3 }
      }
    },
    {
      $sort: {
        _id: 1
      }
    },
    {
      $limit: 500 // Dodanie limitu 500 wyników
    }
  ]);

  console.log('Firmy z oceną powyżej 3 gwiazdek posortowane po ID:');
  while (result.hasNext()) {
    const document = result.next();

    console.log('ID firmy:', document._id);
    console.log('Średnia ocena:', document.average_stars);
    console.log('---');
  }
};


const zadanie1fb = () => {
  const result = db.review.aggregate([
    {
      $match: {
        business_id: { $exists: true }
      }
    },
    {
      $group: {
        _id: '$business_id',
        average_stars: { $avg: '$stars' }
      }
    },
    {
      $match: {
        average_stars: { $gt: 3 }
      }
    },
    {
      $limit: 500
    },
    {
      $lookup: {
        from: 'business',
        localField: '_id',
        foreignField: 'business_id',
        as: 'business'
      }
    },
    {
      $unwind: '$business'
    },
    {
      $project: {
        _id: 0,
        business_name: '$business.name',
        average_stars: 1
      }
    },
    {
      $sort: {
        business_name: 1
      }
    }
  ]);

  console.log('Firmy z oceną powyżej 3 gwiazdek posortowane po nazwie:');
  while (result.hasNext()) {
    const document = result.next();
    console.log('Nazwa firmy:', document.business_name);
    console.log('Średnia ocena:', document.average_stars);
    console.log('---');
  }
};


//Wywołania funkcji
zadanie1a();
console.log('------------------');
zadanie1b();
console.log('------------------');
zadanie1c();
console.log('------------------');
zadanie1d();
console.log('------------------');
zadanie1e();
console.log('------------------');
zadanie1fa();
console.log('------------------');
zadanie1fb();



