var Redis = require('redis');
var Url = require('url');

var url = "redis://127.0.0.1:6379/0";
var RedisURL = Url.parse(url);
var Client = Redis.createClient(RedisURL.port, RedisURL.hostname);


//object
for (var i = 0; i<20; ++i) {
    var review = {
        date: "21-09-2015",
        artistName: "daVinci",
        artName: "Modernism",
        tags: "fashion",
        galleryName: "Holborn Gallery",
        free: true,
        endDate: "22-09-2015",
        permanent: false,
        stars: 2,
        hearts: 3,
        icon1: 2,
        icon2: 5,
        location: 12344
    };

    var pictures = JSON.stringify(['/assets/pictures/pic1.png', '/assets/pictures/pic2.png']);
    review.pictures = pictures;

    Client.hmset('review:' + i, review);

}



console.log('Data inserted');
exit();
