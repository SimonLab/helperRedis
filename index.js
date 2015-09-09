var Redis = require('redis');
var Url = require('url');
var Shortid = require('shortid');

var url = "redis://127.0.0.1:6379/0";
var RedisURL = Url.parse(url);
var Client = Redis.createClient(RedisURL.port, RedisURL.hostname);


//object
for (var i = 0; i<20; ++i) {
    var review = {
        date: "21-09-2015",
        artistName: "daVinci",
        artName: "Modernism",
        tags: "music",
        galleryName: Shortid.generate(),
        free: true,
        endDate: "22-09-2015",
        permanent: false,
        stars: 2,
        hearts: 3,
        icon1: 2,
        icon2: 5,
        location: 12344,
        author: 'Jon'
    };

    var pictures = JSON.stringify(['/assets/pictures/pic1.jpg', '/assets/pictures/pic2.jpg', '/assets/pictures/pic3.jpg', '/assets/pictures/pic4.jpg']);
    review.pictures = pictures;


    var extraReviews = [{
        stars: 2,
        hearts: 3,
        icon1: 2,
        icon2: 5,
        author: "Anita",
        pictures: ['/assets/pictures/pic1.jpg', '/assets/pictures/pic2.jpg', '/assets/pictures/pic3.jpg', '/assets/pictures/pic4.jpg']
    }];
    
    review.extraReviews = JSON.stringify(extraReviews);

    Client.hmset('review:' + i, review);

}



console.log('Data inserted');

