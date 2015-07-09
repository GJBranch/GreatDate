'use strict';

GreatDate
    .Reviews
    .factory('Reviews', function () {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var reviews = [
            {
                id: 1,
                reviewer: 'Ben Sparrow',
                venue: 'The Melting Pot',
                rating: 4,
                review: 'This place is awesome to go to.',
                face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
            },
            {
                id: 2,
                reviewer: 'Max Lynx',
                venue: 'The Melting Pot',
                rating: 2,
                review: 'Hated it!!',
                face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
            },
            {
                id: 3,
                reviewer: 'Anderson Cooper',
                venue: 'Mickey Mantle Steakhouse',
                rating: 3,
                review: 'great for a nice, intimate setting',
                face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
            },
            {
                id: 4,
                reviewer: 'Perry Governor',
                venue: 'Cafe Do Brasil',
                rating: 3.5,
                review: 'Only go here on Saturdays',
                face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
            },
            {
                id: 5,
                reviewer: 'Mike Harrington',
                venue: 'Sushi Neko',
                rating: 3.5,
                review: 'Be prepared to pump out the dollars here!',
                face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
            }
        ];

        function all() {
            return reviews;
        }

        function get(venue) {
            return _.where(reviews, { venue: venue });
        }

        function remove(review) {
            reviews.splice(reviews.indexOf(review), 1);
        }

        return {
            all: all,
            remove: remove,
            get: get
        };
    });
