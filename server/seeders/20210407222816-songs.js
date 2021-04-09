const createdAt = new Date();
const updatedAt = new Date();

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Songs', [
      {
        "title": " Heartbeat Of The Evening",
        "album": "Alpha",
        "track": 1,
        "bandId": 1,
        createdAt,
        updatedAt
      },
      {
        "title": "  I Think I Like You",
        "album": "Alpha",
        "track": 2,
        "bandId": 1,
        createdAt,
        updatedAt
      },
      {
        "title": " He Thinks She's The Devil",
        "album": "Alpha",
        "track": 3,
        "bandId": 1,
        createdAt,
        updatedAt
      },
      {
        "title": "  You Knock Me Off My Feet",
        "album": "Bravo",
        "track": 1,
        "bandId": 2,
        createdAt,
        updatedAt
      },
      {
        "title": " Bittersweet And Beauty",
        "album": "Bravo",
        "track": 2,
        "bandId": 2,
        createdAt,
        updatedAt
      },
      {
        "title": " Thoughts Of Hell",
        "album": "Bravo",
        "track": 3,
        "bandId": 2,
        createdAt,
        updatedAt
      },
      {
        "title": " A Song Of A Fool",
        "album": "Charlie",
        "track": 1,
        "bandId": 3,
        createdAt,
        updatedAt
      },
      {
        "title": " Vibes Of My Desire",
        "album": "Charlie",
        "track": 2,
        "bandId": 3,
        createdAt,
        updatedAt
      },
      {
        "title": " Creepy And Life",
        "album": "Charlie",
        "track": 3,
        "bandId": 3,
        createdAt,
        updatedAt
      },
      {
        "title": " Angel Of Gold",
        "album": "Lima",
        "track": 1,
        "bandId": 4,
        createdAt,
        updatedAt
      },
      {
        "title": " I Heard She Loves Me",
        "album": "Lima",
        "track": 2,
        "bandId": 4,
        createdAt,
        updatedAt
      },
      {
        "title": " Looking For My Wishes",
        "album": "Lima",
        "track": 3,
        "bandId": 4,
        createdAt,
        updatedAt
      },
      {
        "title": " Dance For Love",
        "album": "Peru",
        "track": 1,
        "bandId": 5,
        createdAt,
        updatedAt
      },
      {
        "title": " Words Of Your Imagination",
        "album": "Peru",
        "track": 2,
        "bandId": 5,
        createdAt,
        updatedAt
      },
      {
        "title": " Moment Of The World",
        "album": "Peru",
        "track": 3,
        "bandId": 5,
        createdAt,
        updatedAt
      },
      {
        "title": " Danger For An Old Friend",
        "album": "India",
        "track": 1,
        "bandId": 6,
        createdAt,
        updatedAt
      },
      {
        "title": " The Girl Of His Angel",
        "album": "India",
        "track": 2,
        "bandId": 6,
        createdAt,
        updatedAt
      },
      {
        "title": " He Hopes I Go My Own Way",
        "album": "India",
        "track": 3,
        "bandId": 6,
        createdAt,
        updatedAt
      },
      {
        "title": " Tracks Of My Pleasures",
        "album": "Hotel",
        "track": 1,
        "bandId": 7,
        createdAt,
        updatedAt
      },
      {
        "title": " He Said She's Paranoid",
        "album": "Hotel",
        "track": 2,
        "bandId": 7,
        createdAt,
        updatedAt
      },
      {
        "title": " Mind For A Great Ride",
        "album": "Hotel",
        "track": 3,
        "bandId": 7,
        createdAt,
        updatedAt
      },
      {
        "title": " Late Night And Survival",
        "album": "Immortalized",
        "track": 1,
        "bandId": 8,
        createdAt,
        updatedAt
      },
      {
        "title": " He Loves We're Rocking The World",
        "album": "Immortalized",
        "track": 2,
        "bandId": 8,
        createdAt,
        updatedAt
      },
      {
        "title": " She Said He's Going To Hell",
        "album": "Immortalized",
        "track": 3,
        "bandId": 8,
        createdAt,
        updatedAt
      },
      {
        "title": " Rumble For An Evening",
        "album": "Soxisix",
        "track": 1,
        "bandId": 9,
        createdAt,
        updatedAt
      },
      {
        "title": " Endless And Heaven",
        "album": "Soxisix",
        "track": 2,
        "bandId": 9,
        createdAt,
        updatedAt
      },
      {
        "title": "  I'm Falling In Love",
        "album": "Soxisix",
        "track": 3,
        "bandId": 9,
        createdAt,
        updatedAt
      },
      {
        "title": " Thinking Of Passion",
        "album": "Terrathree",
        "track": 1,
        "bandId": 10,
        createdAt,
        updatedAt
      },
      {
        "title": " Paradise Of My World",
        "album": "Terrathree",
        "track": 2,
        "bandId": 10,
        createdAt,
        updatedAt
      },
      {
        "title": " Babe, Remember The Good Times?",
        "album": "Terrathree",
        "track": 3,
        "bandId": 10,
        createdAt,
        updatedAt
      },
      {
        "title": " Broken And Madness",
        "album": "Delta",
        "track": 1,
        "bandId": 11,
        createdAt,
        updatedAt
      },
      {
        "title": " Bitter And Dream",
        "album": "Delta",
        "track": 2,
        "bandId": 11,
        createdAt,
        updatedAt
      },
      {
        "title": " Rusty And Dreams",
        "album": "Delta",
        "track": 3,
        "bandId": 11,
        createdAt,
        updatedAt
      },
      {
        "title": " I Said He's The Devil",
        "album": "Echo",
        "track": 1,
        "bandId": 12,
        createdAt,
        updatedAt
      },
      {
        "title": " He Knows She's Going To Hell",
        "album": "Echo",
        "track": 2,
        "bandId": 12,
        createdAt,
        updatedAt
      },
      {
        "title": " Darling, I Made A Deal With The Devil",
        "album": "Echo",
        "track": 3,
        "bandId": 12,
        createdAt,
        updatedAt
      },
      {
        "title": "  I Am The One",
        "album": "Foxtrot",
        "track": 1,
        "bandId": 13,
        createdAt,
        updatedAt
      },
      {
        "title": " Heartbeat For The Beast",
        "album": "Foxtrot",
        "track": 2,
        "bandId": 13,
        createdAt,
        updatedAt
      },
      {
        "title": " Love For My Passion",
        "album": "Foxtrot",
        "track": 3,
        "bandId": 13,
        createdAt,
        updatedAt
      },
      {
        "title": " Smooth And Moments",
        "album": "Golf",
        "track": 1,
        "bandId": 14,
        createdAt,
        updatedAt
      },
      {
        "title": " Silent And Madness",
        "album": "Golf",
        "track": 2,
        "bandId": 14,
        createdAt,
        updatedAt
      },
      {
        "title": " She Said I Am The One",
        "album": "Golf",
        "track": 3,
        "bandId": 14,
        createdAt,
        updatedAt
      },
      {
        "title": " Symphony For The Devil",
        "album": "Kilo",
        "track": 1,
        "bandId": 15,
        createdAt,
        updatedAt
      },
      {
        "title": " Heat Of Wishes",
        "album": "Kilo",
        "track": 2,
        "bandId": 15,
        createdAt,
        updatedAt
      },
      {
        "title": " Feeling Of My Ways",
        "album": "Kilo",
        "track": 3,
        "bandId": 15,
        createdAt,
        updatedAt
      },
      {
        "title": " Whispers Of Your Stories",
        "album": "November",
        "track": 1,
        "bandId": 16,
        createdAt,
        updatedAt
      },
      {
        "title": " Memories Of Her Shadows",
        "album": "November",
        "track": 2,
        "bandId": 16,
        createdAt,
        updatedAt
      },
      {
        "title": " Lost And Things",
        "album": "November",
        "track": 3,
        "bandId": 16,
        createdAt,
        updatedAt
      },
      {
        "title": " Babe, You're My Ball And Chains",
        "album": "Quebec",
        "track": 1,
        "bandId": 17,
        createdAt,
        updatedAt
      },
      {
        "title": " A Song For A Wake Up",
        "album": "Quebec",
        "track": 2,
        "bandId": 17,
        createdAt,
        updatedAt
      },
      {
        "title": " Thunder Of His Fire",
        "album": "Quebec",
        "track": 3,
        "bandId": 17,
        createdAt,
        updatedAt
      },
      {
        "title": "  Let's Rumble",
        "album": "Tango",
        "track": 1,
        "bandId": 18,
        createdAt,
        updatedAt
      },
      {
        "title": " Storm Of The Wolf",
        "album": "Tango",
        "track": 2,
        "bandId": 18,
        createdAt,
        updatedAt
      },
      {
        "title": " Afternoon For You",
        "album": "Tango",
        "track": 3,
        "bandId": 18,
        createdAt,
        updatedAt
      },
      {
        "title": " Hot And Vibes",
        "album": "Uniform",
        "track": 1,
        "bandId": 19,
        createdAt,
        updatedAt
      },
      {
        "title": " Things For A Break",
        "album": "Uniform",
        "track": 2,
        "bandId": 19,
        createdAt,
        updatedAt
      },
      {
        "title": " Devilish And Angel",
        "album": "Uniform",
        "track": 3,
        "bandId": 19,
        createdAt,
        updatedAt
      },
      {
        "title": "  She's In Love",
        "album": "Victor",
        "track": 1,
        "bandId": 20,
        createdAt,
        updatedAt
      },
      {
        "title": " End For An Old Friend",
        "album": "Victor",
        "track": 2,
        "bandId": 20,
        createdAt,
        updatedAt
      },
      {
        "title": " Tracks Of My Hell",
        "album": "Victor",
        "track": 3,
        "bandId": 20,
        createdAt,
        updatedAt
      },
      {
        "title": " Dreams For A Lost Soul",
        "album": "X-Ray",
        "track": 1,
        "bandId": 21,
        createdAt,
        updatedAt
      },
      {
        "title": " Broken And Kiss",
        "album": "X-Ray",
        "track": 2,
        "bandId": 21,
        createdAt,
        updatedAt
      },
      {
        "title": " Close And Beauty",
        "album": "X-Ray",
        "track": 3,
        "bandId": 21,
        createdAt,
        updatedAt
      },
      {
        "title": "  He's A Beast",
        "album": "Yankee",
        "track": 1,
        "bandId": 22,
        createdAt,
        updatedAt
      },
      {
        "title": "  He's The Devil",
        "album": "Yankee",
        "track": 2,
        "bandId": 22,
        createdAt,
        updatedAt
      },
      {
        "title": "Fires",
        "album": "Yankee",
        "track": 3,
        "bandId": 22,
        createdAt,
        updatedAt
      },
      {
        "title": " Dream Your Rock 'N Roll",
        "album": "Alpha",
        "track": 1,
        "bandId": 23,
        createdAt,
        updatedAt
      },
      {
        "title": " Twisted And Life",
        "album": "Alpha",
        "track": 2,
        "bandId": 23,
        createdAt,
        updatedAt
      },
      {
        "title": " Minute Of Freedom",
        "album": "Alpha",
        "track": 3,
        "bandId": 23,
        createdAt,
        updatedAt
      },
      {
        "title": " Heroic And Music",
        "album": "Bravo",
        "track": 1,
        "bandId": 24,
        createdAt,
        updatedAt
      },
      {
        "title": " Baby, Hold Me Tonight",
        "album": "Bravo",
        "track": 2,
        "bandId": 24,
        createdAt,
        updatedAt
      },
      {
        "title": " I Know You Love Me",
        "album": "Bravo",
        "track": 3,
        "bandId": 24,
        createdAt,
        updatedAt
      },
      {
        "title": " I Said She's Paranoid",
        "album": "Charlie",
        "track": 1,
        "bandId": 25,
        createdAt,
        updatedAt
      },
      {
        "title": " Wicked And Moment",
        "album": "Charlie",
        "track": 2,
        "bandId": 25,
        createdAt,
        updatedAt
      },
      {
        "title": " Song Of The Line",
        "album": "Charlie",
        "track": 3,
        "bandId": 25,
        createdAt,
        updatedAt
      },
      {
        "title": " Tired Of My Promises",
        "album": "Lima",
        "track": 1,
        "bandId": 26,
        createdAt,
        updatedAt
      },
      {
        "title": " Tracks Of My Ignorance",
        "album": "Lima",
        "track": 2,
        "bandId": 26,
        createdAt,
        updatedAt
      },
      {
        "title": "  I Got You",
        "album": "Lima",
        "track": 3,
        "bandId": 26,
        createdAt,
        updatedAt
      },
      {
        "title": " Friend Of Strangers",
        "album": "Peru",
        "track": 1,
        "bandId": 27,
        createdAt,
        updatedAt
      },
      {
        "title": "  You're No Good For Me",
        "album": "Peru",
        "track": 2,
        "bandId": 27,
        createdAt,
        updatedAt
      },
      {
        "title": "  This Is For You",
        "album": "Peru",
        "track": 3,
        "bandId": 27,
        createdAt,
        updatedAt
      },
      {
        "title": " Wicked And Smiles",
        "album": "India",
        "track": 1,
        "bandId": 28,
        createdAt,
        updatedAt
      },
      {
        "title": "Turn Up The Volume",
        "album": "India",
        "track": 2,
        "bandId": 28,
        createdAt,
        updatedAt
      },
      {
        "title": " Baby, Let's Go Crazy",
        "album": "India",
        "track": 3,
        "bandId": 28,
        createdAt,
        updatedAt
      },
      {
        "title": " Honey, You Knock Me Off My Feet",
        "album": "Hotel",
        "track": 1,
        "bandId": 29,
        createdAt,
        updatedAt
      },
      {
        "title": " Stranger Of The World",
        "album": "Hotel",
        "track": 2,
        "bandId": 29,
        createdAt,
        updatedAt
      },
      {
        "title": "  She's Numb",
        "album": "Hotel",
        "track": 3,
        "bandId": 29,
        createdAt,
        updatedAt
      },
      {
        "title": " Time Of My Thrills",
        "album": "Immortalized",
        "track": 1,
        "bandId": 30,
        createdAt,
        updatedAt
      },
      {
        "title": "I'm The Devil",
        "album": "Immortalized",
        "track": 2,
        "bandId": 30,
        createdAt,
        updatedAt
      },
      {
        "title": " Haze Of Your Wishes",
        "album": "Immortalized",
        "track": 3,
        "bandId": 30,
        createdAt,
        updatedAt
      },
      {
        "title": " Dusty And Ecstasy",
        "album": "Soxisix",
        "track": 1,
        "bandId": 31,
        createdAt,
        updatedAt
      },
      {
        "title": " Desired And Fire",
        "album": "Soxisix",
        "track": 2,
        "bandId": 31,
        createdAt,
        updatedAt
      },
      {
        "title": " Silent And Joys",
        "album": "Soxisix",
        "track": 3,
        "bandId": 31,
        createdAt,
        updatedAt
      },
      {
        "title": " Crazy And Whispers",
        "album": "Terrathree",
        "track": 1,
        "bandId": 32,
        createdAt,
        updatedAt
      },
      {
        "title": " Morning And Promises",
        "album": "Terrathree",
        "track": 2,
        "bandId": 32,
        createdAt,
        updatedAt
      },
      {
        "title": " He Heard She's The Devil",
        "album": "Terrathree",
        "track": 3,
        "bandId": 32,
        createdAt,
        updatedAt
      },
      {
        "title": " Chains Of Choices",
        "album": "Delta",
        "track": 1,
        "bandId": 33,
        createdAt,
        updatedAt
      },
      {
        "title": " She Hopes I Live On The Wild Side",
        "album": "Delta",
        "track": 2,
        "bandId": 33,
        createdAt,
        updatedAt
      },
      {
        "title": " Twisted And Jungle",
        "album": "Delta",
        "track": 3,
        "bandId": 33,
        createdAt,
        updatedAt
      },
      {
        "title": "You're A Devil",
        "album": "Echo",
        "track": 1,
        "bandId": 34,
        createdAt,
        updatedAt
      },
      {
        "title": " Warmth Of A Full Moon",
        "album": "Echo",
        "track": 2,
        "bandId": 34,
        createdAt,
        updatedAt
      },
      {
        "title": " Baby, Thank You",
        "album": "Echo",
        "track": 3,
        "bandId": 34,
        createdAt,
        updatedAt
      },
      {
        "title": " Promise Of The Night",
        "album": "Foxtrot",
        "track": 1,
        "bandId": 35,
        createdAt,
        updatedAt
      },
      {
        "title": " Numb And Life",
        "album": "Foxtrot",
        "track": 2,
        "bandId": 35,
        createdAt,
        updatedAt
      },
      {
        "title": " Change Of The Wild Side",
        "album": "Foxtrot",
        "track": 3,
        "bandId": 35,
        createdAt,
        updatedAt
      },
      {
        "title": " Rain For A Break",
        "album": "Golf",
        "track": 1,
        "bandId": 36,
        createdAt,
        updatedAt
      },
      {
        "title": " Rusty And Love",
        "album": "Golf",
        "track": 2,
        "bandId": 36,
        createdAt,
        updatedAt
      },
      {
        "title": "  She's Paranoid",
        "album": "Golf",
        "track": 3,
        "bandId": 36,
        createdAt,
        updatedAt
      },
      {
        "title": " Brave And Fires",
        "album": "Kilo",
        "track": 1,
        "bandId": 37,
        createdAt,
        updatedAt
      },
      {
        "title": " Baby, I'm On The Wild Side",
        "album": "Kilo",
        "track": 2,
        "bandId": 37,
        createdAt,
        updatedAt
      },
      {
        "title": " She Loves I'm A Dreamer",
        "album": "Kilo",
        "track": 3,
        "bandId": 37,
        createdAt,
        updatedAt
      },
      {
        "title": " Rusty And Promises",
        "album": "November",
        "track": 1,
        "bandId": 38,
        createdAt,
        updatedAt
      },
      {
        "title": " She Loves She's Rock 'N Roll",
        "album": "November",
        "track": 2,
        "bandId": 38,
        createdAt,
        updatedAt
      },
      {
        "title": "  She's A Beast",
        "album": "November",
        "track": 3,
        "bandId": 38,
        createdAt,
        updatedAt
      },
      {
        "title": " Fire Of Her Time",
        "album": "Quebec",
        "track": 1,
        "bandId": 39,
        createdAt,
        updatedAt
      },
      {
        "title": " She Hopes I'm Gone With The Wind",
        "album": "Quebec",
        "track": 2,
        "bandId": 39,
        createdAt,
        updatedAt
      },
      {
        "title": " Heat Of My Rock 'N Roll",
        "album": "Quebec",
        "track": 3,
        "bandId": 39,
        createdAt,
        updatedAt
      },
      {
        "title": " Joy Of Smoke",
        "album": "Tango",
        "track": 1,
        "bandId": 40,
        createdAt,
        updatedAt
      },
      {
        "title": "  Rock With Me",
        "album": "Tango",
        "track": 2,
        "bandId": 40,
        createdAt,
        updatedAt
      },
      {
        "title": " Loved By His Heaven",
        "album": "Tango",
        "track": 3,
        "bandId": 40,
        createdAt,
        updatedAt
      },
      {
        "title": " Hour For The Beast",
        "album": "Uniform",
        "track": 1,
        "bandId": 41,
        createdAt,
        updatedAt
      },
      {
        "title": " Storm For Yesterday",
        "album": "Uniform",
        "track": 2,
        "bandId": 41,
        createdAt,
        updatedAt
      },
      {
        "title": " Passion Of Heaven",
        "album": "Uniform",
        "track": 3,
        "bandId": 41,
        createdAt,
        updatedAt
      },
      {
        "title": " Journey",
        "album": "Victor",
        "track": 1,
        "bandId": 42,
        createdAt,
        updatedAt
      },
      {
        "title": " House Of Your Name",
        "album": "Victor",
        "track": 2,
        "bandId": 42,
        createdAt,
        updatedAt
      },
      {
        "title": " Crazy And Fire",
        "album": "Victor",
        "track": 3,
        "bandId": 42,
        createdAt,
        updatedAt
      },
      {
        "title": " He Thinks He's Rock 'N Roll",
        "album": "X-Ray",
        "track": 1,
        "bandId": 43,
        createdAt,
        updatedAt
      },
      {
        "title": " I Said You Called For Me",
        "album": "X-Ray",
        "track": 2,
        "bandId": 43,
        createdAt,
        updatedAt
      },
      {
        "title": " Rumble",
        "album": "X-Ray",
        "track": 3,
        "bandId": 43,
        createdAt,
        updatedAt
      },
      {
        "title": "  And Beauty",
        "album": "Yankee",
        "track": 1,
        "bandId": 44,
        createdAt,
        updatedAt
      },
      {
        "title": " Talk For A Night",
        "album": "Yankee",
        "track": 2,
        "bandId": 44,
        createdAt,
        updatedAt
      },
      {
        "title": " Looking For His Mind",
        "album": "Yankee",
        "track": 3,
        "bandId": 44,
        createdAt,
        updatedAt
      },
      {
        "title": " I Think You're Wild",
        "album": "Alpha",
        "track": 1,
        "bandId": 45,
        createdAt,
        updatedAt
      },
      {
        "title": " Lost And Whispers",
        "album": "Alpha",
        "track": 2,
        "bandId": 45,
        createdAt,
        updatedAt
      },
      {
        "title": " Tired Of His Wild Side",
        "album": "Alpha",
        "track": 3,
        "bandId": 45,
        createdAt,
        updatedAt
      },
      {
        "title": " Winter And Angel",
        "album": "Bravo",
        "track": 1,
        "bandId": 46,
        createdAt,
        updatedAt
      },
      {
        "title": " Sweet And Vibes",
        "album": "Bravo",
        "track": 2,
        "bandId": 46,
        createdAt,
        updatedAt
      },
      {
        "title": " Survival Of A Stranger",
        "album": "Bravo",
        "track": 3,
        "bandId": 46,
        createdAt,
        updatedAt
      },
      {
        "title": " All Of Utopia",
        "album": "Charlie",
        "track": 1,
        "bandId": 47,
        createdAt,
        updatedAt
      },
      {
        "title": " He Knows She's Into You",
        "album": "Charlie",
        "track": 2,
        "bandId": 47,
        createdAt,
        updatedAt
      },
      {
        "title": " Morning And Music",
        "album": "Charlie",
        "track": 3,
        "bandId": 47,
        createdAt,
        updatedAt
      },
      {
        "title": " Music Of Your Heart",
        "album": "Lima",
        "track": 1,
        "bandId": 48,
        createdAt,
        updatedAt
      },
      {
        "title": " Corrupt And Love",
        "album": "Lima",
        "track": 2,
        "bandId": 48,
        createdAt,
        updatedAt
      },
      {
        "title": " Thoughts Of Tomorrow",
        "album": "Lima",
        "track": 3,
        "bandId": 48,
        createdAt,
        updatedAt
      },
      {
        "title": "  You're My Ball And Chains",
        "album": "Peru",
        "track": 1,
        "bandId": 49,
        createdAt,
        updatedAt
      },
      {
        "title": " I Said He's Good For You",
        "album": "Peru",
        "track": 2,
        "bandId": 49,
        createdAt,
        updatedAt
      },
      {
        "title": "  We're In Love",
        "album": "Peru",
        "track": 3,
        "bandId": 49,
        createdAt,
        updatedAt
      },
      {
        "title": "  My Time",
        "album": "India",
        "track": 1,
        "bandId": 50,
        createdAt,
        updatedAt
      },
      {
        "title": " She Thinks He Hurt You",
        "album": "India",
        "track": 2,
        "bandId": 50,
        createdAt,
        updatedAt
      },
      {
        "title": "  And Chance",
        "album": "India",
        "track": 3,
        "bandId": 50,
        createdAt,
        updatedAt
      },
      {
        "title": "  For Joy",
        "album": "Hotel",
        "track": 1,
        "bandId": 51,
        createdAt,
        updatedAt
      },
      {
        "title": " Moment Of A Lifetime",
        "album": "Hotel",
        "track": 2,
        "bandId": 51,
        createdAt,
        updatedAt
      },
      {
        "title": " Whispers Of His Passion",
        "album": "Hotel",
        "track": 3,
        "bandId": 51,
        createdAt,
        updatedAt
      },
      {
        "title": " Baby, I Think I Like You",
        "album": "Immortalized",
        "track": 1,
        "bandId": 52,
        createdAt,
        updatedAt
      },
      {
        "title": " He Thinks She's Waiting For You",
        "album": "Immortalized",
        "track": 2,
        "bandId": 52,
        createdAt,
        updatedAt
      },
      {
        "title": " Love Of World",
        "album": "Immortalized",
        "track": 3,
        "bandId": 52,
        createdAt,
        updatedAt
      },
      {
        "title": " Rhythm Of Your Love",
        "album": "Soxisix",
        "track": 1,
        "bandId": 53,
        createdAt,
        updatedAt
      },
      {
        "title": " Soul For Everything",
        "album": "Soxisix",
        "track": 2,
        "bandId": 53,
        createdAt,
        updatedAt
      },
      {
        "title": " Man Of My Dreams",
        "album": "Soxisix",
        "track": 3,
        "bandId": 53,
        createdAt,
        updatedAt
      },
      {
        "title": " Sound For Tomorrow",
        "album": "Terrathree",
        "track": 1,
        "bandId": 54,
        createdAt,
        updatedAt
      },
      {
        "title": " He Hopes He's From Out Of Town",
        "album": "Terrathree",
        "track": 2,
        "bandId": 54,
        createdAt,
        updatedAt
      },
      {
        "title": " Morning And Moments",
        "album": "Terrathree",
        "track": 3,
        "bandId": 54,
        createdAt,
        updatedAt
      },
      {
        "title": " Babe, Rock With Me",
        "album": "Delta",
        "track": 1,
        "bandId": 55,
        createdAt,
        updatedAt
      },
      {
        "title": " Love Of Tears",
        "album": "Delta",
        "track": 2,
        "bandId": 55,
        createdAt,
        updatedAt
      },
      {
        "title": " Sweet And Secrets",
        "album": "Delta",
        "track": 3,
        "bandId": 55,
        createdAt,
        updatedAt
      },
      {
        "title": " He Hopes We're In Love",
        "album": "Echo",
        "track": 1,
        "bandId": 56,
        createdAt,
        updatedAt
      },
      {
        "title": " He Hates He's Paranoid",
        "album": "Echo",
        "track": 2,
        "bandId": 56,
        createdAt,
        updatedAt
      },
      {
        "title": " Master",
        "album": "Echo",
        "track": 3,
        "bandId": 56,
        createdAt,
        updatedAt
      },
      {
        "title": " Tired Of Imagination",
        "album": "Foxtrot",
        "track": 1,
        "bandId": 57,
        createdAt,
        updatedAt
      },
      {
        "title": " Thinking Of Your Mind",
        "album": "Foxtrot",
        "track": 2,
        "bandId": 57,
        createdAt,
        updatedAt
      },
      {
        "title": "She's The Devil",
        "album": "Foxtrot",
        "track": 3,
        "bandId": 57,
        createdAt,
        updatedAt
      },
      {
        "title": " Storm For A Stranger",
        "album": "Golf",
        "track": 1,
        "bandId": 58,
        createdAt,
        updatedAt
      },
      {
        "title": " Stars For The Devil",
        "album": "Golf",
        "track": 2,
        "bandId": 58,
        createdAt,
        updatedAt
      },
      {
        "title": " She Loves She's From Out Of Town",
        "album": "Golf",
        "track": 3,
        "bandId": 58,
        createdAt,
        updatedAt
      },
      {
        "title": " First And Paradise",
        "album": "Kilo",
        "track": 1,
        "bandId": 59,
        createdAt,
        updatedAt
      },
      {
        "title": " Honey, Turn Up The Volume",
        "album": "Kilo",
        "track": 2,
        "bandId": 59,
        createdAt,
        updatedAt
      },
      {
        "title": " Darling, I Think I Like You",
        "album": "Kilo",
        "track": 3,
        "bandId": 59,
        createdAt,
        updatedAt
      },
      {
        "title": " Thoughts For Love",
        "album": "November",
        "track": 1,
        "bandId": 60,
        createdAt,
        updatedAt
      },
      {
        "title": " Love Of My Ignorance",
        "album": "November",
        "track": 2,
        "bandId": 60,
        createdAt,
        updatedAt
      },
      {
        "title": "Life",
        "album": "November",
        "track": 3,
        "bandId": 60,
        createdAt,
        updatedAt
      },
      {
        "title": " New And Stranger",
        "album": "Quebec",
        "track": 1,
        "bandId": 61,
        createdAt,
        updatedAt
      },
      {
        "title": " I Hope We Love To Rock",
        "album": "Quebec",
        "track": 2,
        "bandId": 61,
        createdAt,
        updatedAt
      },
      {
        "title": " Chains Of Her Stories",
        "album": "Quebec",
        "track": 3,
        "bandId": 61,
        createdAt,
        updatedAt
      },
      {
        "title": " She Said She's Waiting For You",
        "album": "Tango",
        "track": 1,
        "bandId": 62,
        createdAt,
        updatedAt
      },
      {
        "title": " I Hate He's Numb",
        "album": "Tango",
        "track": 2,
        "bandId": 62,
        createdAt,
        updatedAt
      },
      {
        "title": " Winter And Sensations",
        "album": "Tango",
        "track": 3,
        "bandId": 62,
        createdAt,
        updatedAt
      },
      {
        "title": "  I Made A Deal With The Devil",
        "album": "Uniform",
        "track": 1,
        "bandId": 63,
        createdAt,
        updatedAt
      },
      {
        "title": " First And Whispers",
        "album": "Uniform",
        "track": 2,
        "bandId": 63,
        createdAt,
        updatedAt
      },
      {
        "title": " Soul For What It's Worth",
        "album": "Uniform",
        "track": 3,
        "bandId": 63,
        createdAt,
        updatedAt
      },
      {
        "title": " New And Chances",
        "album": "Victor",
        "track": 1,
        "bandId": 64,
        createdAt,
        updatedAt
      },
      {
        "title": " Gentle And Dreams",
        "album": "Victor",
        "track": 2,
        "bandId": 64,
        createdAt,
        updatedAt
      },
      {
        "title": " Heartbeat Of A Man",
        "album": "Victor",
        "track": 3,
        "bandId": 64,
        createdAt,
        updatedAt
      },
      {
        "title": " Feeling For The Wolf",
        "album": "X-Ray",
        "track": 1,
        "bandId": 65,
        createdAt,
        updatedAt
      },
      {
        "title": "  And Ecstasy",
        "album": "X-Ray",
        "track": 2,
        "bandId": 65,
        createdAt,
        updatedAt
      },
      {
        "title": "  I Love Another",
        "album": "X-Ray",
        "track": 3,
        "bandId": 65,
        createdAt,
        updatedAt
      },
      {
        "title": " Days Of Freaks",
        "album": "Yankee",
        "track": 1,
        "bandId": 66,
        createdAt,
        updatedAt
      },
      {
        "title": " Paradise Of His Moment",
        "album": "Yankee",
        "track": 2,
        "bandId": 66,
        createdAt,
        updatedAt
      },
      {
        "title": "  I'm Lonely Without You",
        "album": "Yankee",
        "track": 3,
        "bandId": 66,
        createdAt,
        updatedAt
      },
      {
        "title": " He Knows I'm Gone With The Wind",
        "album": "Alpha",
        "track": 1,
        "bandId": 67,
        createdAt,
        updatedAt
      },
      {
        "title": " Thunder Of Dreams",
        "album": "Alpha",
        "track": 2,
        "bandId": 67,
        createdAt,
        updatedAt
      },
      {
        "title": " Loved By Your Hell",
        "album": "Alpha",
        "track": 3,
        "bandId": 67,
        createdAt,
        updatedAt
      },
      {
        "title": " He Heard She Loves You",
        "album": "Bravo",
        "track": 1,
        "bandId": 68,
        createdAt,
        updatedAt
      },
      {
        "title": " Rusty And Dream",
        "album": "Bravo",
        "track": 2,
        "bandId": 68,
        createdAt,
        updatedAt
      },
      {
        "title": "  You Killed Me",
        "album": "Bravo",
        "track": 3,
        "bandId": 68,
        createdAt,
        updatedAt
      },
      {
        "title": " Vibes Of Her Starlight",
        "album": "Charlie",
        "track": 1,
        "bandId": 69,
        createdAt,
        updatedAt
      },
      {
        "title": " Beastly And Choices",
        "album": "Charlie",
        "track": 2,
        "bandId": 69,
        createdAt,
        updatedAt
      },
      {
        "title": " Morning And Ecstasy",
        "album": "Charlie",
        "track": 3,
        "bandId": 69,
        createdAt,
        updatedAt
      },
      {
        "title": " Babe, Don't Worry",
        "album": "Lima",
        "track": 1,
        "bandId": 70,
        createdAt,
        updatedAt
      },
      {
        "title": " I Hope I Am The One",
        "album": "Lima",
        "track": 2,
        "bandId": 70,
        createdAt,
        updatedAt
      },
      {
        "title": " She Heard She's The Devil",
        "album": "Lima",
        "track": 3,
        "bandId": 70,
        createdAt,
        updatedAt
      },
      {
        "title": " Matter For The Beast",
        "album": "Peru",
        "track": 1,
        "bandId": 71,
        createdAt,
        updatedAt
      },
      {
        "title": "  Thank You For Nothing",
        "album": "Peru",
        "track": 2,
        "bandId": 71,
        createdAt,
        updatedAt
      },
      {
        "title": " A Moment",
        "album": "Peru",
        "track": 3,
        "bandId": 71,
        createdAt,
        updatedAt
      },
      {
        "title": "  You And I",
        "album": "India",
        "track": 1,
        "bandId": 72,
        createdAt,
        updatedAt
      },
      {
        "title": " Late Night And Sensations",
        "album": "India",
        "track": 2,
        "bandId": 72,
        createdAt,
        updatedAt
      },
      {
        "title": " Darling, She's Not Here",
        "album": "India",
        "track": 3,
        "bandId": 72,
        createdAt,
        updatedAt
      },
      {
        "title": "You're Wild",
        "album": "Hotel",
        "track": 1,
        "bandId": 73,
        createdAt,
        updatedAt
      },
      {
        "title": " Looking For Tears",
        "album": "Hotel",
        "track": 2,
        "bandId": 73,
        createdAt,
        updatedAt
      },
      {
        "title": " She Hopes He Hurt You",
        "album": "Hotel",
        "track": 3,
        "bandId": 73,
        createdAt,
        updatedAt
      },
      {
        "title": " Passion Of My Passion",
        "album": "Immortalized",
        "track": 1,
        "bandId": 74,
        createdAt,
        updatedAt
      },
      {
        "title": " Friend Of The Beast",
        "album": "Immortalized",
        "track": 2,
        "bandId": 74,
        createdAt,
        updatedAt
      },
      {
        "title": " Honey, She's Not Here",
        "album": "Immortalized",
        "track": 3,
        "bandId": 74,
        createdAt,
        updatedAt
      },
      {
        "title": " Passion Of My Story",
        "album": "Soxisix",
        "track": 1,
        "bandId": 75,
        createdAt,
        updatedAt
      },
      {
        "title": " Winter And Dreams",
        "album": "Soxisix",
        "track": 2,
        "bandId": 75,
        createdAt,
        updatedAt
      },
      {
        "title": " Darling, I Can't Help It",
        "album": "Soxisix",
        "track": 3,
        "bandId": 75,
        createdAt,
        updatedAt
      },
      {
        "title": "For You",
        "album": "Terrathree",
        "track": 1,
        "bandId": 76,
        createdAt,
        updatedAt
      },
      {
        "title": " Wild And Hysteria",
        "album": "Terrathree",
        "track": 2,
        "bandId": 76,
        createdAt,
        updatedAt
      },
      {
        "title": " Rain",
        "album": "Terrathree",
        "track": 3,
        "bandId": 76,
        createdAt,
        updatedAt
      },
      {
        "title": " Feeling Of Beauty",
        "album": "Delta",
        "track": 1,
        "bandId": 77,
        createdAt,
        updatedAt
      },
      {
        "title": " Brave And Love",
        "album": "Delta",
        "track": 2,
        "bandId": 77,
        createdAt,
        updatedAt
      },
      {
        "title": "  He's Waiting For You",
        "album": "Delta",
        "track": 3,
        "bandId": 77,
        createdAt,
        updatedAt
      },
      {
        "title": " Music Of Her Fire",
        "album": "Echo",
        "track": 1,
        "bandId": 78,
        createdAt,
        updatedAt
      },
      {
        "title": "  It's Magic",
        "album": "Echo",
        "track": 2,
        "bandId": 78,
        createdAt,
        updatedAt
      },
      {
        "title": " She Said She's The Devil",
        "album": "Echo",
        "track": 3,
        "bandId": 78,
        createdAt,
        updatedAt
      },
      {
        "title": " Thinking Of My Joy",
        "album": "Foxtrot",
        "track": 1,
        "bandId": 79,
        createdAt,
        updatedAt
      },
      {
        "title": " Roar Of His Shadows",
        "album": "Foxtrot",
        "track": 2,
        "bandId": 79,
        createdAt,
        updatedAt
      },
      {
        "title": " I Said She's Good For You",
        "album": "Foxtrot",
        "track": 3,
        "bandId": 79,
        createdAt,
        updatedAt
      },
      {
        "title": " He Said I'm The Devil",
        "album": "Golf",
        "track": 1,
        "bandId": 80,
        createdAt,
        updatedAt
      },
      {
        "title": " I Know He's Family",
        "album": "Golf",
        "track": 2,
        "bandId": 80,
        createdAt,
        updatedAt
      },
      {
        "title": " Midnight And Angel",
        "album": "Golf",
        "track": 3,
        "bandId": 80,
        createdAt,
        updatedAt
      },
      {
        "title": " Money For My Hell",
        "album": "Kilo",
        "track": 1,
        "bandId": 81,
        createdAt,
        updatedAt
      },
      {
        "title": " Darling, I'm Falling In Love",
        "album": "Kilo",
        "track": 2,
        "bandId": 81,
        createdAt,
        updatedAt
      },
      {
        "title": " Dreams Of Fire",
        "album": "Kilo",
        "track": 3,
        "bandId": 81,
        createdAt,
        updatedAt
      },
      {
        "title": " Love For My Friends",
        "album": "November",
        "track": 1,
        "bandId": 82,
        createdAt,
        updatedAt
      },
      {
        "title": " Think Of Superstitions",
        "album": "November",
        "track": 2,
        "bandId": 82,
        createdAt,
        updatedAt
      },
      {
        "title": " He Knows He's Into You",
        "album": "November",
        "track": 3,
        "bandId": 82,
        createdAt,
        updatedAt
      },
      {
        "title": " Passion Of An Angel",
        "album": "Quebec",
        "track": 1,
        "bandId": 83,
        createdAt,
        updatedAt
      },
      {
        "title": " Babe, I'm Nothing Without You",
        "album": "Quebec",
        "track": 2,
        "bandId": 83,
        createdAt,
        updatedAt
      },
      {
        "title": " I Said You Live On The Wild Side",
        "album": "Quebec",
        "track": 3,
        "bandId": 83,
        createdAt,
        updatedAt
      },
      {
        "title": " Afternoon Of Nothing",
        "album": "Tango",
        "track": 1,
        "bandId": 84,
        createdAt,
        updatedAt
      },
      {
        "title": " Kind For A Journey",
        "album": "Tango",
        "track": 2,
        "bandId": 84,
        createdAt,
        updatedAt
      },
      {
        "title": " Vibes Of My Enemies",
        "album": "Tango",
        "track": 3,
        "bandId": 84,
        createdAt,
        updatedAt
      },
      {
        "title": " Hot And Choice",
        "album": "Uniform",
        "track": 1,
        "bandId": 85,
        createdAt,
        updatedAt
      },
      {
        "title": " Baby, She's Not Here",
        "album": "Uniform",
        "track": 2,
        "bandId": 85,
        createdAt,
        updatedAt
      },
      {
        "title": " Honey, Forget About Me",
        "album": "Uniform",
        "track": 3,
        "bandId": 85,
        createdAt,
        updatedAt
      },
      {
        "title": "If I Didn't Have you",
        "album": "Victor",
        "track": 1,
        "bandId": 86,
        createdAt,
        updatedAt
      },
      {
        "title": " Angelic And Vibes",
        "album": "Victor",
        "track": 2,
        "bandId": 86,
        createdAt,
        updatedAt
      },
      {
        "title": " Times For Love",
        "album": "Victor",
        "track": 3,
        "bandId": 86,
        createdAt,
        updatedAt
      },
      {
        "title": " Chains Of Imagination",
        "album": "X-Ray",
        "track": 1,
        "bandId": 87,
        createdAt,
        updatedAt
      },
      {
        "title": " ",
        "album": "X-Ray",
        "track": 2,
        "bandId": 87,
        createdAt,
        updatedAt
      },
      {
        "title": " Stars",
        "album": "X-Ray",
        "track": 3,
        "bandId": 87,
        createdAt,
        updatedAt
      },
      {
        "title": " Thinking Of His Moments",
        "album": "Yankee",
        "track": 1,
        "bandId": 88,
        createdAt,
        updatedAt
      },
      {
        "title": " Soul Of My Dreams",
        "album": "Yankee",
        "track": 2,
        "bandId": 88,
        createdAt,
        updatedAt
      },
      {
        "title": "  I Hope You'll Be Mine",
        "album": "Yankee",
        "track": 3,
        "bandId": 88,
        createdAt,
        updatedAt
      },
      {
        "title": " Bitter And Survival",
        "album": "Alpha",
        "track": 1,
        "bandId": 89,
        createdAt,
        updatedAt
      },
      {
        "title": " Rusty And Vibrations",
        "album": "Alpha",
        "track": 2,
        "bandId": 89,
        createdAt,
        updatedAt
      },
      {
        "title": " Beastly And",
        "album": "Alpha",
        "track": 3,
        "bandId": 89,
        createdAt,
        updatedAt
      },
      {
        "title": " Nightlife And Love",
        "album": "Bravo",
        "track": 1,
        "bandId": 90,
        createdAt,
        updatedAt
      },
      {
        "title": " Woman Of Life",
        "album": "Bravo",
        "track": 2,
        "bandId": 90,
        createdAt,
        updatedAt
      },
      {
        "title": " Money For Her Heaven",
        "album": "Bravo",
        "track": 3,
        "bandId": 90,
        createdAt,
        updatedAt
      },
      {
        "title": " Crazy And Survival",
        "album": "Charlie",
        "track": 1,
        "bandId": 91,
        createdAt,
        updatedAt
      },
      {
        "title": " Darling, Rock With Me",
        "album": "Charlie",
        "track": 2,
        "bandId": 91,
        createdAt,
        updatedAt
      },
      {
        "title": " Summer Of Lust",
        "album": "Charlie",
        "track": 3,
        "bandId": 91,
        createdAt,
        updatedAt
      },
      {
        "title": "  She's Family",
        "album": "Lima",
        "track": 1,
        "bandId": 92,
        createdAt,
        updatedAt
      },
      {
        "title": " Soul Of Dreams",
        "album": "Lima",
        "track": 2,
        "bandId": 92,
        createdAt,
        updatedAt
      },
      {
        "title": " Love Of Freedom",
        "album": "Lima",
        "track": 3,
        "bandId": 92,
        createdAt,
        updatedAt
      },
      {
        "title": " Roar Of My Pleasures",
        "album": "Peru",
        "track": 1,
        "bandId": 93,
        createdAt,
        updatedAt
      },
      {
        "title": " Brave And Beauty",
        "album": "Peru",
        "track": 2,
        "bandId": 93,
        createdAt,
        updatedAt
      },
      {
        "title": " Rhythm For Tomorrow",
        "album": "Peru",
        "track": 3,
        "bandId": 93,
        createdAt,
        updatedAt
      },
      {
        "title": " Whispers Of My Promises",
        "album": "India",
        "track": 1,
        "bandId": 94,
        createdAt,
        updatedAt
      },
      {
        "title": " Because Of My Imagination",
        "album": "India",
        "track": 2,
        "bandId": 94,
        createdAt,
        updatedAt
      },
      {
        "title": " Vibes For Me",
        "album": "India",
        "track": 3,
        "bandId": 94,
        createdAt,
        updatedAt
      },
      {
        "title": " Darling, I'm Looking For Something",
        "album": "Hotel",
        "track": 1,
        "bandId": 95,
        createdAt,
        updatedAt
      },
      {
        "title": "I Rock All Night Long",
        "album": "Hotel",
        "track": 2,
        "bandId": 95,
        createdAt,
        updatedAt
      },
      {
        "title": " Darling, Thank You",
        "album": "Hotel",
        "track": 3,
        "bandId": 95,
        createdAt,
        updatedAt
      },
      {
        "title": "  I Love Rock 'N Roll",
        "album": "Immortalized",
        "track": 1,
        "bandId": 96,
        createdAt,
        updatedAt
      },
      {
        "title": " Close And Kisses",
        "album": "Immortalized",
        "track": 2,
        "bandId": 96,
        createdAt,
        updatedAt
      },
      {
        "title": " Days Of A Full Moon",
        "album": "Immortalized",
        "track": 3,
        "bandId": 96,
        createdAt,
        updatedAt
      },
      {
        "title": " Numb And Frenzy",
        "album": "Soxisix",
        "track": 1,
        "bandId": 97,
        createdAt,
        updatedAt
      },
      {
        "title": " Rhythm For A Wake Up",
        "album": "Soxisix",
        "track": 2,
        "bandId": 97,
        createdAt,
        updatedAt
      },
      {
        "title": " Lost And Jungle",
        "album": "Soxisix",
        "track": 3,
        "bandId": 97,
        createdAt,
        updatedAt
      },
      {
        "title": " Change",
        "album": "Terrathree",
        "track": 1,
        "bandId": 98,
        createdAt,
        updatedAt
      },
      {
        "title": " Remember Your Pleasures",
        "album": "Terrathree",
        "track": 2,
        "bandId": 98,
        createdAt,
        updatedAt
      },
      {
        "title": " Baby, You're No Good For Me",
        "album": "Terrathree",
        "track": 3,
        "bandId": 98,
        createdAt,
        updatedAt
      },
      {
        "title": " She Hates You Called For Me",
        "album": "Delta",
        "track": 1,
        "bandId": 99,
        createdAt,
        updatedAt
      },
      {
        "title": " Loved By Glass Heart",
        "album": "Delta",
        "track": 2,
        "bandId": 99,
        createdAt,
        updatedAt
      },
      {
        "title": " Feeling Of His Mind",
        "album": "Delta",
        "track": 3,
        "bandId": 99,
        createdAt,
        updatedAt
      },
      {
        "title": " The Girl Of Desire",
        "album": "Echo",
        "track": 1,
        "bandId": 100,
        createdAt,
        updatedAt
      },
      {
        "title": " Wicked And Games",
        "album": "Echo",
        "track": 2,
        "bandId": 100,
        createdAt,
        updatedAt
      },
      {
        "title": " I Love She's In Love",
        "album": "Echo",
        "track": 3,
        "bandId": 100,
        createdAt,
        updatedAt
      },
      {
        "title": "  For An Old Friend",
        "album": "Foxtrot",
        "track": 1,
        "bandId": 101,
        createdAt,
        updatedAt
      },
      {
        "title": " Roar Of Wasted Time",
        "album": "Foxtrot",
        "track": 2,
        "bandId": 101,
        createdAt,
        updatedAt
      },
      {
        "title": " Music Of My Dreams",
        "album": "Foxtrot",
        "track": 3,
        "bandId": 101,
        createdAt,
        updatedAt
      },
      {
        "title": " Free And Hysteria",
        "album": "Golf",
        "track": 1,
        "bandId": 102,
        createdAt,
        updatedAt
      },
      {
        "title": " Full Moon And Madness",
        "album": "Golf",
        "track": 2,
        "bandId": 102,
        createdAt,
        updatedAt
      },
      {
        "title": " I Said He's From Out Of Town",
        "album": "Golf",
        "track": 3,
        "bandId": 102,
        createdAt,
        updatedAt
      },
      {
        "title": " Speed Of My Dreams",
        "album": "Kilo",
        "track": 1,
        "bandId": 103,
        createdAt,
        updatedAt
      },
      {
        "title": " He Thinks She's From Out Of Town",
        "album": "Kilo",
        "track": 2,
        "bandId": 103,
        createdAt,
        updatedAt
      },
      {
        "title": " Smoking And Choice",
        "album": "Kilo",
        "track": 3,
        "bandId": 103,
        createdAt,
        updatedAt
      },
      {
        "title": " Broken And Sensations",
        "album": "November",
        "track": 1,
        "bandId": 104,
        createdAt,
        updatedAt
      },
      {
        "title": " Thoughts Of His Own",
        "album": "November",
        "track": 2,
        "bandId": 104,
        createdAt,
        updatedAt
      },
      {
        "title": " I Know He Loves You",
        "album": "November",
        "track": 3,
        "bandId": 104,
        createdAt,
        updatedAt
      },
      {
        "title": " Darling, Rock My World",
        "album": "Quebec",
        "track": 1,
        "bandId": 105,
        createdAt,
        updatedAt
      },
      {
        "title": " Hot And Beauty",
        "album": "Quebec",
        "track": 2,
        "bandId": 105,
        createdAt,
        updatedAt
      },
      {
        "title": " I Love I'm A Dreamer",
        "album": "Quebec",
        "track": 3,
        "bandId": 105,
        createdAt,
        updatedAt
      },
      {
        "title": "  Let's Get A Move On",
        "album": "Tango",
        "track": 1,
        "bandId": 106,
        createdAt,
        updatedAt
      },
      {
        "title": " Sunset Of Freedom",
        "album": "Tango",
        "track": 2,
        "bandId": 106,
        createdAt,
        updatedAt
      },
      {
        "title": " Moments Of My Mistakes",
        "album": "Tango",
        "track": 3,
        "bandId": 106,
        createdAt,
        updatedAt
      },
      {
        "title": " Corrupt And Life",
        "album": "Uniform",
        "track": 1,
        "bandId": 107,
        createdAt,
        updatedAt
      },
      {
        "title": " Story For Tonight",
        "album": "Uniform",
        "track": 2,
        "bandId": 107,
        createdAt,
        updatedAt
      },
      {
        "title": " Wicked And Choices",
        "album": "Uniform",
        "track": 3,
        "bandId": 107,
        createdAt,
        updatedAt
      },
      {
        "title": " She Thinks He's Rock 'N Roll",
        "album": "Victor",
        "track": 1,
        "bandId": 108,
        createdAt,
        updatedAt
      },
      {
        "title": " Heat Of My Fire",
        "album": "Victor",
        "track": 2,
        "bandId": 108,
        createdAt,
        updatedAt
      },
      {
        "title": " Darling, This Is For You",
        "album": "Victor",
        "track": 3,
        "bandId": 108,
        createdAt,
        updatedAt
      },
      {
        "title": " Hot And Fire",
        "album": "X-Ray",
        "track": 1,
        "bandId": 109,
        createdAt,
        updatedAt
      },
      {
        "title": " She Hates He's Got His Eye On You",
        "album": "X-Ray",
        "track": 2,
        "bandId": 109,
        createdAt,
        updatedAt
      },
      {
        "title": " Love Of My Wishes",
        "album": "X-Ray",
        "track": 3,
        "bandId": 109,
        createdAt,
        updatedAt
      },
      {
        "title": " Heart Of The Loneley",
        "album": "Yankee",
        "track": 1,
        "bandId": 110,
        createdAt,
        updatedAt
      },
      {
        "title": " I Know",
        "album": "Yankee",
        "track": 2,
        "bandId": 110,
        createdAt,
        updatedAt
      },
      {
        "title": " Time Of Love",
        "album": "Yankee",
        "track": 3,
        "bandId": 110,
        createdAt,
        updatedAt
      },
      {
        "title": " I Hate I'm Tainted",
        "album": "Alpha",
        "track": 1,
        "bandId": 111,
        createdAt,
        updatedAt
      },
      {
        "title": " Evening Of Thunder",
        "album": "Alpha",
        "track": 2,
        "bandId": 111,
        createdAt,
        updatedAt
      },
      {
        "title": " Rhythm For The Morning",
        "album": "Alpha",
        "track": 3,
        "bandId": 111,
        createdAt,
        updatedAt
      },
      {
        "title": " Feeling Of Wild Side",
        "album": "Bravo",
        "track": 1,
        "bandId": 112,
        createdAt,
        updatedAt
      },
      {
        "title": " He Said I'm A Dreamer",
        "album": "Bravo",
        "track": 2,
        "bandId": 112,
        createdAt,
        updatedAt
      },
      {
        "title": " She Heard He Loves Me",
        "album": "Bravo",
        "track": 3,
        "bandId": 112,
        createdAt,
        updatedAt
      },
      {
        "title": "  I'm Gone With The Wind",
        "album": "Charlie",
        "track": 1,
        "bandId": 113,
        createdAt,
        updatedAt
      },
      {
        "title": " Smoking And Smiles",
        "album": "Charlie",
        "track": 2,
        "bandId": 113,
        createdAt,
        updatedAt
      },
      {
        "title": " Honey, Let's Go Wild",
        "album": "Charlie",
        "track": 3,
        "bandId": 113,
        createdAt,
        updatedAt
      },
      {
        "title": " Babe, I Love To Rock",
        "album": "Lima",
        "track": 1,
        "bandId": 114,
        createdAt,
        updatedAt
      },
      {
        "title": " She Said He Hurt You",
        "album": "Lima",
        "track": 2,
        "bandId": 114,
        createdAt,
        updatedAt
      },
      {
        "title": " Corrupt And Beauty",
        "album": "Lima",
        "track": 3,
        "bandId": 114,
        createdAt,
        updatedAt
      },
      {
        "title": "  I'm Lonely",
        "album": "Peru",
        "track": 1,
        "bandId": 115,
        createdAt,
        updatedAt
      },
      {
        "title": " Broken And Dream",
        "album": "Peru",
        "track": 2,
        "bandId": 115,
        createdAt,
        updatedAt
      },
      {
        "title": "  It's Nothing",
        "album": "Peru",
        "track": 3,
        "bandId": 115,
        createdAt,
        updatedAt
      },
      {
        "title": " Angel Of Fire",
        "album": "India",
        "track": 1,
        "bandId": 116,
        createdAt,
        updatedAt
      },
      {
        "title": " Survival For Joy",
        "album": "India",
        "track": 2,
        "bandId": 116,
        createdAt,
        updatedAt
      },
      {
        "title": " He Thinks We Love To Rock",
        "album": "India",
        "track": 3,
        "bandId": 116,
        createdAt,
        updatedAt
      },
      {
        "title": " I Love She's Mysterious",
        "album": "Hotel",
        "track": 1,
        "bandId": 117,
        createdAt,
        updatedAt
      },
      {
        "title": " Feeling Of Life",
        "album": "Hotel",
        "track": 2,
        "bandId": 117,
        createdAt,
        updatedAt
      },
      {
        "title": " Life Of Nothing",
        "album": "Hotel",
        "track": 3,
        "bandId": 117,
        createdAt,
        updatedAt
      },
      {
        "title": " Hot And Jungle",
        "album": "Immortalized",
        "track": 1,
        "bandId": 118,
        createdAt,
        updatedAt
      },
      {
        "title": " Endless And Ecstasy",
        "album": "Immortalized",
        "track": 2,
        "bandId": 118,
        createdAt,
        updatedAt
      },
      {
        "title": " He Hates I Love You",
        "album": "Immortalized",
        "track": 3,
        "bandId": 118,
        createdAt,
        updatedAt
      },
      {
        "title": " Loved By My Love",
        "album": "Soxisix",
        "track": 1,
        "bandId": 119,
        createdAt,
        updatedAt
      },
      {
        "title": " He Loves She's In Love",
        "album": "Soxisix",
        "track": 2,
        "bandId": 119,
        createdAt,
        updatedAt
      },
      {
        "title": " First And Survival",
        "album": "Soxisix",
        "track": 3,
        "bandId": 119,
        createdAt,
        updatedAt
      },
      {
        "title": " Desired And Chances",
        "album": "Terrathree",
        "track": 1,
        "bandId": 120,
        createdAt,
        updatedAt
      },
      {
        "title": " Darling, I Got You",
        "album": "Terrathree",
        "track": 2,
        "bandId": 120,
        createdAt,
        updatedAt
      },
      {
        "title": "  I Love You",
        "album": "Terrathree",
        "track": 3,
        "bandId": 120,
        createdAt,
        updatedAt
      },
      {
        "title": " Seconds Of Eternity",
        "album": "Delta",
        "track": 1,
        "bandId": 121,
        createdAt,
        updatedAt
      },
      {
        "title": " Tracks Of His Angel",
        "album": "Delta",
        "track": 2,
        "bandId": 121,
        createdAt,
        updatedAt
      },
      {
        "title": " Result Of Your Dreams",
        "album": "Delta",
        "track": 3,
        "bandId": 121,
        createdAt,
        updatedAt
      },
      {
        "title": " Babe, Let's Rumble",
        "album": "Echo",
        "track": 1,
        "bandId": 122,
        createdAt,
        updatedAt
      },
      {
        "title": " Soul For Love",
        "album": "Echo",
        "track": 2,
        "bandId": 122,
        createdAt,
        updatedAt
      },
      {
        "title": " Thoughts Of His Joy",
        "album": "Echo",
        "track": 3,
        "bandId": 122,
        createdAt,
        updatedAt
      },
      {
        "title": " He Said He's Good For You",
        "album": "Foxtrot",
        "track": 1,
        "bandId": 123,
        createdAt,
        updatedAt
      },
      {
        "title": " Heartbeat",
        "album": "Foxtrot",
        "track": 2,
        "bandId": 123,
        createdAt,
        updatedAt
      },
      {
        "title": " I Hope I Go My Own Way",
        "album": "Foxtrot",
        "track": 3,
        "bandId": 123,
        createdAt,
        updatedAt
      },
      {
        "title": "  He's Paranoid",
        "album": "Golf",
        "track": 1,
        "bandId": 124,
        createdAt,
        updatedAt
      },
      {
        "title": "  Let's Walk On The Wild Side",
        "album": "Golf",
        "track": 2,
        "bandId": 124,
        createdAt,
        updatedAt
      },
      {
        "title": " Cry Of My Friends",
        "album": "Golf",
        "track": 3,
        "bandId": 124,
        createdAt,
        updatedAt
      },
      {
        "title": " Midnight And Life",
        "album": "Kilo",
        "track": 1,
        "bandId": 125,
        createdAt,
        updatedAt
      },
      {
        "title": "For Nothing",
        "album": "Kilo",
        "track": 2,
        "bandId": 125,
        createdAt,
        updatedAt
      },
      {
        "title": " Survival Of Teardrops",
        "album": "Kilo",
        "track": 3,
        "bandId": 125,
        createdAt,
        updatedAt
      },
      {
        "title": " Name For A Lonely Night",
        "album": "November",
        "track": 1,
        "bandId": 126,
        createdAt,
        updatedAt
      },
      {
        "title": " Rhythm Of Enemies",
        "album": "November",
        "track": 2,
        "bandId": 126,
        createdAt,
        updatedAt
      },
      {
        "title": " She Hates She's Paranoid",
        "album": "November",
        "track": 3,
        "bandId": 126,
        createdAt,
        updatedAt
      },
      {
        "title": " I Love He's A Beast",
        "album": "Quebec",
        "track": 1,
        "bandId": 127,
        createdAt,
        updatedAt
      },
      {
        "title": " Desired And Choices",
        "album": "Quebec",
        "track": 2,
        "bandId": 127,
        createdAt,
        updatedAt
      },
      {
        "title": " Taint For Yesterday",
        "album": "Quebec",
        "track": 3,
        "bandId": 127,
        createdAt,
        updatedAt
      },
      {
        "title": " New And Sensations",
        "album": "Tango",
        "track": 1,
        "bandId": 128,
        createdAt,
        updatedAt
      },
      {
        "title": " Rhythm",
        "album": "Tango",
        "track": 2,
        "bandId": 128,
        createdAt,
        updatedAt
      },
      {
        "title": " Twisted And Hysteria",
        "album": "Tango",
        "track": 3,
        "bandId": 128,
        createdAt,
        updatedAt
      },
      {
        "title": "  We're Rocking All Night",
        "album": "Uniform",
        "track": 1,
        "bandId": 129,
        createdAt,
        updatedAt
      },
      {
        "title": " Bittersweet And Music",
        "album": "Uniform",
        "track": 2,
        "bandId": 129,
        createdAt,
        updatedAt
      },
      {
        "title": "  He's Mysterious",
        "album": "Uniform",
        "track": 3,
        "bandId": 129,
        createdAt,
        updatedAt
      },
      {
        "title": " Broken And Music",
        "album": "Victor",
        "track": 1,
        "bandId": 130,
        createdAt,
        updatedAt
      },
      {
        "title": " Broken And Secrets",
        "album": "Victor",
        "track": 2,
        "bandId": 130,
        createdAt,
        updatedAt
      },
      {
        "title": " I Think You Live On The Wild Side",
        "album": "Victor",
        "track": 3,
        "bandId": 130,
        createdAt,
        updatedAt
      },
      {
        "title": "  You Live On The Wild Side",
        "album": "X-Ray",
        "track": 1,
        "bandId": 131,
        createdAt,
        updatedAt
      },
      {
        "title": " Soul Of My Love",
        "album": "X-Ray",
        "track": 2,
        "bandId": 131,
        createdAt,
        updatedAt
      },
      {
        "title": "  Feel The Rhythm",
        "album": "X-Ray",
        "track": 3,
        "bandId": 131,
        createdAt,
        updatedAt
      },
      {
        "title": " Heart Of Your Fire",
        "album": "Yankee",
        "track": 1,
        "bandId": 132,
        createdAt,
        updatedAt
      },
      {
        "title": " He Heard I'm Done",
        "album": "Yankee",
        "track": 2,
        "bandId": 132,
        createdAt,
        updatedAt
      },
      {
        "title": " Joy Of Us",
        "album": "Yankee",
        "track": 3,
        "bandId": 132,
        createdAt,
        updatedAt
      },
      {
        "title": " She Said",
        "album": "Alpha",
        "track": 1,
        "bandId": 133,
        createdAt,
        updatedAt
      },
      {
        "title": " Change Of Her Hell",
        "album": "Alpha",
        "track": 2,
        "bandId": 133,
        createdAt,
        updatedAt
      },
      {
        "title": " Roar Of Ways",
        "album": "Alpha",
        "track": 3,
        "bandId": 133,
        createdAt,
        updatedAt
      },
      {
        "title": " Passion Of My Inner Fire",
        "album": "Bravo",
        "track": 1,
        "bandId": 134,
        createdAt,
        updatedAt
      },
      {
        "title": "Of Time",
        "album": "Bravo",
        "track": 2,
        "bandId": 134,
        createdAt,
        updatedAt
      },
      {
        "title": "Memories",
        "album": "Bravo",
        "track": 3,
        "bandId": 134,
        createdAt,
        updatedAt
      },
      {
        "title": " Full Moon And Chances",
        "album": "Charlie",
        "track": 1,
        "bandId": 135,
        createdAt,
        updatedAt
      },
      {
        "title": " Friends Of Her Soul",
        "album": "Charlie",
        "track": 2,
        "bandId": 135,
        createdAt,
        updatedAt
      },
      {
        "title": " Stars For A Full Moon",
        "album": "Charlie",
        "track": 3,
        "bandId": 135,
        createdAt,
        updatedAt
      },
      {
        "title": " Babe, I Hope You'll Be Mine",
        "album": "Lima",
        "track": 1,
        "bandId": 136,
        createdAt,
        updatedAt
      },
      {
        "title": " Chains Of My Time",
        "album": "Lima",
        "track": 2,
        "bandId": 136,
        createdAt,
        updatedAt
      },
      {
        "title": " Late Night And Kiss",
        "album": "Lima",
        "track": 3,
        "bandId": 136,
        createdAt,
        updatedAt
      },
      {
        "title": " Symphony Of A Promise",
        "album": "Peru",
        "track": 1,
        "bandId": 137,
        createdAt,
        updatedAt
      },
      {
        "title": " Dreams Of Her Rock 'N Roll",
        "album": "Peru",
        "track": 2,
        "bandId": 137,
        createdAt,
        updatedAt
      },
      {
        "title": "  She Hurt You",
        "album": "Peru",
        "track": 3,
        "bandId": 137,
        createdAt,
        updatedAt
      },
      {
        "title": " She Heard I'm In Love",
        "album": "India",
        "track": 1,
        "bandId": 138,
        createdAt,
        updatedAt
      },
      {
        "title": "  It's Time For Rock And Roll",
        "album": "India",
        "track": 2,
        "bandId": 138,
        createdAt,
        updatedAt
      },
      {
        "title": " New And Madness",
        "album": "India",
        "track": 3,
        "bandId": 138,
        createdAt,
        updatedAt
      },
      {
        "title": " Honey, I'm Looking For Something",
        "album": "Hotel",
        "track": 1,
        "bandId": 139,
        createdAt,
        updatedAt
      },
      {
        "title": " I Know He's The Devil",
        "album": "Hotel",
        "track": 2,
        "bandId": 139,
        createdAt,
        updatedAt
      },
      {
        "title": " Words Of Her Hell",
        "album": "Hotel",
        "track": 3,
        "bandId": 139,
        createdAt,
        updatedAt
      },
      {
        "title": " Looking For My Imagination",
        "album": "Immortalized",
        "track": 1,
        "bandId": 140,
        createdAt,
        updatedAt
      },
      {
        "title": " Creepy And Madness",
        "album": "Immortalized",
        "track": 2,
        "bandId": 140,
        createdAt,
        updatedAt
      },
      {
        "title": " She Hopes We're Rocking All Night",
        "album": "Immortalized",
        "track": 3,
        "bandId": 140,
        createdAt,
        updatedAt
      },
      {
        "title": " Free And Frenzy",
        "album": "Soxisix",
        "track": 1,
        "bandId": 141,
        createdAt,
        updatedAt
      },
      {
        "title": " Remember My Passion",
        "album": "Soxisix",
        "track": 2,
        "bandId": 141,
        createdAt,
        updatedAt
      },
      {
        "title": " Smooth And Angel",
        "album": "Soxisix",
        "track": 3,
        "bandId": 141,
        createdAt,
        updatedAt
      },
      {
        "title": " Brave And Dream",
        "album": "Terrathree",
        "track": 1,
        "bandId": 142,
        createdAt,
        updatedAt
      },
      {
        "title": "You Broke My Heart",
        "album": "Terrathree",
        "track": 2,
        "bandId": 142,
        createdAt,
        updatedAt
      },
      {
        "title": " Full Moon And Feelings",
        "album": "Terrathree",
        "track": 3,
        "bandId": 142,
        createdAt,
        updatedAt
      },
      {
        "title": " Heat Of His Hell",
        "album": "Delta",
        "track": 1,
        "bandId": 143,
        createdAt,
        updatedAt
      },
      {
        "title": " Sunset Of Thunder",
        "album": "Delta",
        "track": 2,
        "bandId": 143,
        createdAt,
        updatedAt
      },
      {
        "title": " Crazy And Stranger",
        "album": "Delta",
        "track": 3,
        "bandId": 143,
        createdAt,
        updatedAt
      },
      {
        "title": "  And Love",
        "album": "Echo",
        "track": 1,
        "bandId": 144,
        createdAt,
        updatedAt
      },
      {
        "title": " Honey, You're My Ball And Chains",
        "album": "Echo",
        "track": 2,
        "bandId": 144,
        createdAt,
        updatedAt
      },
      {
        "title": " Thrill For A Great Ride",
        "album": "Echo",
        "track": 3,
        "bandId": 144,
        createdAt,
        updatedAt
      },
      {
        "title": " Desired And Hysteria",
        "album": "Foxtrot",
        "track": 1,
        "bandId": 145,
        createdAt,
        updatedAt
      },
      {
        "title": "  You're A Fool",
        "album": "Foxtrot",
        "track": 2,
        "bandId": 145,
        createdAt,
        updatedAt
      },
      {
        "title": " Thoughts Of Your Stories",
        "album": "Foxtrot",
        "track": 3,
        "bandId": 145,
        createdAt,
        updatedAt
      },
      {
        "title": " I Hope We're Rocking All Night",
        "album": "Golf",
        "track": 1,
        "bandId": 146,
        createdAt,
        updatedAt
      },
      {
        "title": " She Thinks She's The Devil",
        "album": "Golf",
        "track": 2,
        "bandId": 146,
        createdAt,
        updatedAt
      },
      {
        "title": " Gentle And Heaven",
        "album": "Golf",
        "track": 3,
        "bandId": 146,
        createdAt,
        updatedAt
      },
      {
        "title": "  I'm A Sinner",
        "album": "Kilo",
        "track": 1,
        "bandId": 147,
        createdAt,
        updatedAt
      },
      {
        "title": "  You're The One For Me",
        "album": "Kilo",
        "track": 2,
        "bandId": 147,
        createdAt,
        updatedAt
      },
      {
        "title": " Babe, I'm Falling In Love",
        "album": "Kilo",
        "track": 3,
        "bandId": 147,
        createdAt,
        updatedAt
      },
      {
        "title": " Heat Of My Starlight",
        "album": "November",
        "track": 1,
        "bandId": 148,
        createdAt,
        updatedAt
      },
      {
        "title": " Honey, I Love To Rock",
        "album": "November",
        "track": 2,
        "bandId": 148,
        createdAt,
        updatedAt
      },
      {
        "title": " Tired Of Thrills",
        "album": "November",
        "track": 3,
        "bandId": 148,
        createdAt,
        updatedAt
      },
      {
        "title": "  I'm Nothing Without You",
        "album": "Quebec",
        "track": 1,
        "bandId": 149,
        createdAt,
        updatedAt
      },
      {
        "title": " Dream My Hell",
        "album": "Quebec",
        "track": 2,
        "bandId": 149,
        createdAt,
        updatedAt
      },
      {
        "title": "  You Rock My World",
        "album": "Quebec",
        "track": 3,
        "bandId": 149,
        createdAt,
        updatedAt
      },
      {
        "title": " She Hopes He Loves You",
        "album": "Tango",
        "track": 1,
        "bandId": 150,
        createdAt,
        updatedAt
      },
      {
        "title": " He Hates He's Into You",
        "album": "Tango",
        "track": 2,
        "bandId": 150,
        createdAt,
        updatedAt
      },
      {
        "title": " Stars Of The Rider",
        "album": "Tango",
        "track": 3,
        "bandId": 150,
        createdAt,
        updatedAt
      },
      {
        "title": " Paradise For A Whisper",
        "album": "Uniform",
        "track": 1,
        "bandId": 151,
        createdAt,
        updatedAt
      },
      {
        "title": " Way Of Guilt",
        "album": "Uniform",
        "track": 2,
        "bandId": 151,
        createdAt,
        updatedAt
      },
      {
        "title": " Late Night And Fires",
        "album": "Uniform",
        "track": 3,
        "bandId": 151,
        createdAt,
        updatedAt
      },
      {
        "title": " Baby, It's Not Okay",
        "album": "Victor",
        "track": 1,
        "bandId": 152,
        createdAt,
        updatedAt
      },
      {
        "title": " Honey, You Broke My Heart",
        "album": "Victor",
        "track": 2,
        "bandId": 152,
        createdAt,
        updatedAt
      },
      {
        "title": " Spirit Of A Fool",
        "album": "Victor",
        "track": 3,
        "bandId": 152,
        createdAt,
        updatedAt
      },
      {
        "title": " World Of The Line",
        "album": "X-Ray",
        "track": 1,
        "bandId": 153,
        createdAt,
        updatedAt
      },
      {
        "title": " Day Of Love",
        "album": "X-Ray",
        "track": 2,
        "bandId": 153,
        createdAt,
        updatedAt
      },
      {
        "title": " Vibes Of Ignorance",
        "album": "X-Ray",
        "track": 3,
        "bandId": 153,
        createdAt,
        updatedAt
      },
      {
        "title": " She Hates I Love You",
        "album": "Yankee",
        "track": 1,
        "bandId": 154,
        createdAt,
        updatedAt
      },
      {
        "title": " Dreams Of Guilt",
        "album": "Yankee",
        "track": 2,
        "bandId": 154,
        createdAt,
        updatedAt
      },
      {
        "title": " Money For Your Shadows",
        "album": "Yankee",
        "track": 3,
        "bandId": 154,
        createdAt,
        updatedAt
      },
      {
        "title": " He Knows He Loves Me",
        "album": "Alpha",
        "track": 1,
        "bandId": 155,
        createdAt,
        updatedAt
      },
      {
        "title": " Memories Of Your Story",
        "album": "Alpha",
        "track": 2,
        "bandId": 155,
        createdAt,
        updatedAt
      },
      {
        "title": " Free And Vibrations",
        "album": "Alpha",
        "track": 3,
        "bandId": 155,
        createdAt,
        updatedAt
      },
      {
        "title": " Man For A Great Ride",
        "album": "Bravo",
        "track": 1,
        "bandId": 156,
        createdAt,
        updatedAt
      },
      {
        "title": " Brave And Vibes",
        "album": "Bravo",
        "track": 2,
        "bandId": 156,
        createdAt,
        updatedAt
      },
      {
        "title": " Baby, Let's Rumble",
        "album": "Bravo",
        "track": 3,
        "bandId": 156,
        createdAt,
        updatedAt
      },
      {
        "title": "  Rock My World",
        "album": "Charlie",
        "track": 1,
        "bandId": 157,
        createdAt,
        updatedAt
      },
      {
        "title": " Rusty And Smiles",
        "album": "Charlie",
        "track": 2,
        "bandId": 157,
        createdAt,
        updatedAt
      },
      {
        "title": " With Heaven",
        "album": "Charlie",
        "track": 3,
        "bandId": 157,
        createdAt,
        updatedAt
      },
      {
        "title": " Baby, I'm Lonely Without You",
        "album": "Lima",
        "track": 1,
        "bandId": 158,
        createdAt,
        updatedAt
      },
      {
        "title": " Babe, I Need To Be Alone",
        "album": "Lima",
        "track": 2,
        "bandId": 158,
        createdAt,
        updatedAt
      },
      {
        "title": "  He's Going To Hell",
        "album": "Lima",
        "track": 3,
        "bandId": 158,
        createdAt,
        updatedAt
      },
      {
        "title": " Roll Of A Man",
        "album": "Peru",
        "track": 1,
        "bandId": 159,
        createdAt,
        updatedAt
      },
      {
        "title": " For My Own",
        "album": "Peru",
        "track": 2,
        "bandId": 159,
        createdAt,
        updatedAt
      },
      {
        "title": " He Thinks You Live On The Wild Side",
        "album": "Peru",
        "track": 3,
        "bandId": 159,
        createdAt,
        updatedAt
      },
      {
        "title": "Story",
        "album": "India",
        "track": 1,
        "bandId": 160,
        createdAt,
        updatedAt
      },
      {
        "title": " With Your Enemies",
        "album": "India",
        "track": 2,
        "bandId": 160,
        createdAt,
        updatedAt
      },
      {
        "title": " Corrupt And Sensations",
        "album": "India",
        "track": 3,
        "bandId": 160,
        createdAt,
        updatedAt
      },
      {
        "title": " Day Of Eternity",
        "album": "Hotel",
        "track": 1,
        "bandId": 161,
        createdAt,
        updatedAt
      },
      {
        "title": " She Heard I'm Rocking Every Day",
        "album": "Hotel",
        "track": 2,
        "bandId": 161,
        createdAt,
        updatedAt
      },
      {
        "title": " Endless And Choices",
        "album": "Hotel",
        "track": 3,
        "bandId": 161,
        createdAt,
        updatedAt
      },
      {
        "title": "  You Called For Me",
        "album": "Immortalized",
        "track": 1,
        "bandId": 162,
        createdAt,
        updatedAt
      },
      {
        "title": " State Of Your Wild Side",
        "album": "Immortalized",
        "track": 2,
        "bandId": 162,
        createdAt,
        updatedAt
      },
      {
        "title": " I Love I Go My Own Way",
        "album": "Immortalized",
        "track": 3,
        "bandId": 162,
        createdAt,
        updatedAt
      },
      {
        "title": "Pleasures",
        "album": "Soxisix",
        "track": 1,
        "bandId": 163,
        createdAt,
        updatedAt
      },
      {
        "title": " Nightlife And Joys",
        "album": "Soxisix",
        "track": 2,
        "bandId": 163,
        createdAt,
        updatedAt
      },
      {
        "title": " Babe, I'm Lonely",
        "album": "Soxisix",
        "track": 3,
        "bandId": 163,
        createdAt,
        updatedAt
      },
      {
        "title": "  I Got A Feeling",
        "album": "Terrathree",
        "track": 1,
        "bandId": 164,
        createdAt,
        updatedAt
      },
      {
        "title": " Loved By His Imagination",
        "album": "Terrathree",
        "track": 2,
        "bandId": 164,
        createdAt,
        updatedAt
      },
      {
        "title": "  Don't Worry",
        "album": "Terrathree",
        "track": 3,
        "bandId": 164,
        createdAt,
        updatedAt
      },
      {
        "title": " I Know She's Mysterious",
        "album": "Delta",
        "track": 1,
        "bandId": 165,
        createdAt,
        updatedAt
      },
      {
        "title": " She Loves We're In Love",
        "album": "Delta",
        "track": 2,
        "bandId": 165,
        createdAt,
        updatedAt
      },
      {
        "title": "  You're Everything To Me",
        "album": "Delta",
        "track": 3,
        "bandId": 165,
        createdAt,
        updatedAt
      },
      {
        "title": " Feeling Of Promises",
        "album": "Echo",
        "track": 1,
        "bandId": 166,
        createdAt,
        updatedAt
      },
      {
        "title": " Moments Of My Life",
        "album": "Echo",
        "track": 2,
        "bandId": 166,
        createdAt,
        updatedAt
      },
      {
        "title": " She Thinks She Hurt You",
        "album": "Echo",
        "track": 3,
        "bandId": 166,
        createdAt,
        updatedAt
      },
      {
        "title": " Seconds Of Paradise",
        "album": "Foxtrot",
        "track": 1,
        "bandId": 167,
        createdAt,
        updatedAt
      },
      {
        "title": "  She's Waiting For You",
        "album": "Foxtrot",
        "track": 2,
        "bandId": 167,
        createdAt,
        updatedAt
      },
      {
        "title": " Cry For The Beast",
        "album": "Foxtrot",
        "track": 3,
        "bandId": 167,
        createdAt,
        updatedAt
      },
      {
        "title": "Feelings",
        "album": "Golf",
        "track": 1,
        "bandId": 168,
        createdAt,
        updatedAt
      },
      {
        "title": " Love For My",
        "album": "Golf",
        "track": 2,
        "bandId": 168,
        createdAt,
        updatedAt
      },
      {
        "title": " Tired Of My Own",
        "album": "Golf",
        "track": 3,
        "bandId": 168,
        createdAt,
        updatedAt
      },
      {
        "title": " Angelic And Madness",
        "album": "Kilo",
        "track": 1,
        "bandId": 169,
        createdAt,
        updatedAt
      },
      {
        "title": " He Hates He's The Devil",
        "album": "Kilo",
        "track": 2,
        "bandId": 169,
        createdAt,
        updatedAt
      },
      {
        "title": " Sense For It All",
        "album": "Kilo",
        "track": 3,
        "bandId": 169,
        createdAt,
        updatedAt
      },
      {
        "title": " Sound For Joy",
        "album": "November",
        "track": 1,
        "bandId": 170,
        createdAt,
        updatedAt
      },
      {
        "title": " Feeling Of My World",
        "album": "November",
        "track": 2,
        "bandId": 170,
        createdAt,
        updatedAt
      },
      {
        "title": " Anger For The Devil",
        "album": "November",
        "track": 3,
        "bandId": 170,
        createdAt,
        updatedAt
      },
      {
        "title": " Rhythm Of Your Choices",
        "album": "Quebec",
        "track": 1,
        "bandId": 171,
        createdAt,
        updatedAt
      },
      {
        "title": " Smooth And Vibes",
        "album": "Quebec",
        "track": 2,
        "bandId": 171,
        createdAt,
        updatedAt
      },
      {
        "title": " Winter And Survival",
        "album": "Quebec",
        "track": 3,
        "bandId": 171,
        createdAt,
        updatedAt
      },
      {
        "title": " Words Of My Glass Heart",
        "album": "Tango",
        "track": 1,
        "bandId": 172,
        createdAt,
        updatedAt
      },
      {
        "title": " Late Night And Vibrations",
        "album": "Tango",
        "track": 2,
        "bandId": 172,
        createdAt,
        updatedAt
      },
      {
        "title": "  He's Family",
        "album": "Tango",
        "track": 3,
        "bandId": 172,
        createdAt,
        updatedAt
      },
      {
        "title": "  I'm A Beast",
        "album": "Uniform",
        "track": 1,
        "bandId": 173,
        createdAt,
        updatedAt
      },
      {
        "title": " Night Of A Feeling",
        "album": "Uniform",
        "track": 2,
        "bandId": 173,
        createdAt,
        updatedAt
      },
      {
        "title": " Breath Of Wishes",
        "album": "Uniform",
        "track": 3,
        "bandId": 173,
        createdAt,
        updatedAt
      },
      {
        "title": " Darling, You're A Fool",
        "album": "Victor",
        "track": 1,
        "bandId": 174,
        createdAt,
        updatedAt
      },
      {
        "title": " Rhythm Of World",
        "album": "Victor",
        "track": 2,
        "bandId": 174,
        createdAt,
        updatedAt
      },
      {
        "title": " Moment Of An Angel",
        "album": "Victor",
        "track": 3,
        "bandId": 174,
        createdAt,
        updatedAt
      },
      {
        "title": " Paradise Of Her Demons",
        "album": "X-Ray",
        "track": 1,
        "bandId": 175,
        createdAt,
        updatedAt
      },
      {
        "title": " Full Moon And Frenzy",
        "album": "X-Ray",
        "track": 2,
        "bandId": 175,
        createdAt,
        updatedAt
      },
      {
        "title": " She Said You Rock My World",
        "album": "X-Ray",
        "track": 3,
        "bandId": 175,
        createdAt,
        updatedAt
      },
      {
        "title": " Moments Of Ways",
        "album": "Yankee",
        "track": 1,
        "bandId": 176,
        createdAt,
        updatedAt
      },
      {
        "title": " Honey, Thank You",
        "album": "Yankee",
        "track": 2,
        "bandId": 176,
        createdAt,
        updatedAt
      },
      {
        "title": " Lost And Soul",
        "album": "Yankee",
        "track": 3,
        "bandId": 176,
        createdAt,
        updatedAt
      },
      {
        "title": "  You're Wild",
        "album": "Alpha",
        "track": 1,
        "bandId": 177,
        createdAt,
        updatedAt
      },
      {
        "title": " City Of Midnight",
        "album": "Alpha",
        "track": 2,
        "bandId": 177,
        createdAt,
        updatedAt
      },
      {
        "title": " Dusty And Whispers",
        "album": "Alpha",
        "track": 3,
        "bandId": 177,
        createdAt,
        updatedAt
      },
      {
        "title": " Darling, If I Didn't Have You",
        "album": "Bravo",
        "track": 1,
        "bandId": 178,
        createdAt,
        updatedAt
      },
      {
        "title": " Story For Love",
        "album": "Bravo",
        "track": 2,
        "bandId": 178,
        createdAt,
        updatedAt
      },
      {
        "title": " She Loves I'm Rocking Every Day",
        "album": "Bravo",
        "track": 3,
        "bandId": 178,
        createdAt,
        updatedAt
      },
      {
        "title": " Vibes Of My Ignorance",
        "album": "Charlie",
        "track": 1,
        "bandId": 179,
        createdAt,
        updatedAt
      },
      {
        "title": " Fear Of Dreams",
        "album": "Charlie",
        "track": 2,
        "bandId": 179,
        createdAt,
        updatedAt
      },
      {
        "title": " Honey, I'm Going Crazy",
        "album": "Charlie",
        "track": 3,
        "bandId": 179,
        createdAt,
        updatedAt
      },
      {
        "title": " Feeling Of My Imagination",
        "album": "Lima",
        "track": 1,
        "bandId": 180,
        createdAt,
        updatedAt
      },
      {
        "title": " He Loves She's Got Her Eye On You",
        "album": "Lima",
        "track": 2,
        "bandId": 180,
        createdAt,
        updatedAt
      },
      {
        "title": " Rock 'N Roll And Hysteria",
        "album": "Lima",
        "track": 3,
        "bandId": 180,
        createdAt,
        updatedAt
      },
      {
        "title": " Speed Of Tomorrow",
        "album": "Peru",
        "track": 1,
        "bandId": 181,
        createdAt,
        updatedAt
      },
      {
        "title": " The Guy Of My Angel",
        "album": "Peru",
        "track": 2,
        "bandId": 181,
        createdAt,
        updatedAt
      },
      {
        "title": " I Said He's Got His Eye On You",
        "album": "Peru",
        "track": 3,
        "bandId": 181,
        createdAt,
        updatedAt
      },
      {
        "title": " Afternoon Of A Paranoid Mind",
        "album": "India",
        "track": 1,
        "bandId": 182,
        createdAt,
        updatedAt
      },
      {
        "title": " Haze Of My World",
        "album": "India",
        "track": 2,
        "bandId": 182,
        createdAt,
        updatedAt
      },
      {
        "title": " Days Of Nothing",
        "album": "India",
        "track": 3,
        "bandId": 182,
        createdAt,
        updatedAt
      },
      {
        "title": " Honey, Let's Be Free",
        "album": "Hotel",
        "track": 1,
        "bandId": 183,
        createdAt,
        updatedAt
      },
      {
        "title": " Tired Of Her Wishes",
        "album": "Hotel",
        "track": 2,
        "bandId": 183,
        createdAt,
        updatedAt
      },
      {
        "title": " Endless And Fires",
        "album": "Hotel",
        "track": 3,
        "bandId": 183,
        createdAt,
        updatedAt
      },
      {
        "title": " All Of The Night",
        "album": "Immortalized",
        "track": 1,
        "bandId": 184,
        createdAt,
        updatedAt
      },
      {
        "title": " Nightlife And Frenzy",
        "album": "Immortalized",
        "track": 2,
        "bandId": 184,
        createdAt,
        updatedAt
      },
      {
        "title": " He Heard You Called For Me",
        "album": "Immortalized",
        "track": 3,
        "bandId": 184,
        createdAt,
        updatedAt
      },
      {
        "title": " Change Of My Moment",
        "album": "Soxisix",
        "track": 1,
        "bandId": 185,
        createdAt,
        updatedAt
      },
      {
        "title": " Woman For An Angel",
        "album": "Soxisix",
        "track": 2,
        "bandId": 185,
        createdAt,
        updatedAt
      },
      {
        "title": " Devilish And Feelings",
        "album": "Soxisix",
        "track": 3,
        "bandId": 185,
        createdAt,
        updatedAt
      },
      {
        "title": " She Hates I'm A Survivor",
        "album": "Terrathree",
        "track": 1,
        "bandId": 186,
        createdAt,
        updatedAt
      },
      {
        "title": " Silence Of The Night",
        "album": "Terrathree",
        "track": 2,
        "bandId": 186,
        createdAt,
        updatedAt
      },
      {
        "title": " Change Of His Hell",
        "album": "Terrathree",
        "track": 3,
        "bandId": 186,
        createdAt,
        updatedAt
      },
      {
        "title": " Smooth And Hysteria",
        "album": "Delta",
        "track": 1,
        "bandId": 187,
        createdAt,
        updatedAt
      },
      {
        "title": " Memories Of Her Demons",
        "album": "Delta",
        "track": 2,
        "bandId": 187,
        createdAt,
        updatedAt
      },
      {
        "title": " I Know She Loves You",
        "album": "Delta",
        "track": 3,
        "bandId": 187,
        createdAt,
        updatedAt
      },
      {
        "title": "ymphony Of Superstitions",
        "album": "Echo",
        "track": 1,
        "bandId": 188,
        createdAt,
        updatedAt
      },
      {
        "title": " Fortune Of The Wolf",
        "album": "Echo",
        "track": 2,
        "bandId": 188,
        createdAt,
        updatedAt
      },
      {
        "title": "  Her Dreams",
        "album": "Echo",
        "track": 3,
        "bandId": 188,
        createdAt,
        updatedAt
      },
      {
        "title": " Speed Of My Wild Side",
        "album": "Foxtrot",
        "track": 1,
        "bandId": 189,
        createdAt,
        updatedAt
      },
      {
        "title": " Darling, You Knock Me Off My Feet",
        "album": "Foxtrot",
        "track": 2,
        "bandId": 189,
        createdAt,
        updatedAt
      },
      {
        "title": "  I'm Tainted",
        "album": "Foxtrot",
        "track": 3,
        "bandId": 189,
        createdAt,
        updatedAt
      },
      {
        "title": " Mind For You",
        "album": "Golf",
        "track": 1,
        "bandId": 190,
        createdAt,
        updatedAt
      },
      {
        "title": " Decisions Of His Rock 'N Roll",
        "album": "Golf",
        "track": 2,
        "bandId": 190,
        createdAt,
        updatedAt
      },
      {
        "title": " He Loves He Loves You",
        "album": "Golf",
        "track": 3,
        "bandId": 190,
        createdAt,
        updatedAt
      },
      {
        "title": " Memories Of Her Heart",
        "album": "Kilo",
        "track": 1,
        "bandId": 191,
        createdAt,
        updatedAt
      },
      {
        "title": " Result Of Your Story",
        "album": "Kilo",
        "track": 2,
        "bandId": 191,
        createdAt,
        updatedAt
      },
      {
        "title": " Broken And Love",
        "album": "Kilo",
        "track": 3,
        "bandId": 191,
        createdAt,
        updatedAt
      },
      {
        "title": "Moments",
        "album": "November",
        "track": 1,
        "bandId": 192,
        createdAt,
        updatedAt
      },
      {
        "title": " Sound Of My Mistakes",
        "album": "November",
        "track": 2,
        "bandId": 192,
        createdAt,
        updatedAt
      },
      {
        "title": " Darling, You Broke My Heart",
        "album": "November",
        "track": 3,
        "bandId": 192,
        createdAt,
        updatedAt
      },
      {
        "title": " Thoughts Of Your Silence",
        "album": "Quebec",
        "track": 1,
        "bandId": 193,
        createdAt,
        updatedAt
      },
      {
        "title": " Rhythm Of Your Silence",
        "album": "Quebec",
        "track": 2,
        "bandId": 193,
        createdAt,
        updatedAt
      },
      {
        "title": " Smooth And Jungle",
        "album": "Quebec",
        "track": 3,
        "bandId": 193,
        createdAt,
        updatedAt
      },
      {
        "title": "  I'm Rocking Every Day",
        "album": "Tango",
        "track": 1,
        "bandId": 194,
        createdAt,
        updatedAt
      },
      {
        "title": " Baby, I'm Insane",
        "album": "Tango",
        "track": 2,
        "bandId": 194,
        createdAt,
        updatedAt
      },
      {
        "title": " Morning And Hysteria",
        "album": "Tango",
        "track": 3,
        "bandId": 194,
        createdAt,
        updatedAt
      },
      {
        "title": " Honey, Thank You For Nothing",
        "album": "Uniform",
        "track": 1,
        "bandId": 195,
        createdAt,
        updatedAt
      },
      {
        "title": "  He's Good For You",
        "album": "Uniform",
        "track": 2,
        "bandId": 195,
        createdAt,
        updatedAt
      },
      {
        "title": " Wild And Heart",
        "album": "Uniform",
        "track": 3,
        "bandId": 195,
        createdAt,
        updatedAt
      },
      {
        "title": " Crazy And Secrets",
        "album": "Victor",
        "track": 1,
        "bandId": 196,
        createdAt,
        updatedAt
      },
      {
        "title": " Chained And Fires",
        "album": "Victor",
        "track": 2,
        "bandId": 196,
        createdAt,
        updatedAt
      },
      {
        "title": " She Heard She's In Love",
        "album": "Victor",
        "track": 3,
        "bandId": 196,
        createdAt,
        updatedAt
      },
      {
        "title": "  I'm Insane",
        "album": "X-Ray",
        "track": 1,
        "bandId": 197,
        createdAt,
        updatedAt
      },
      {
        "title": "  I Love To Rock",
        "album": "X-Ray",
        "track": 2,
        "bandId": 197,
        createdAt,
        updatedAt
      },
      {
        "title": " Haze Of My Ways",
        "album": "X-Ray",
        "track": 3,
        "bandId": 197,
        createdAt,
        updatedAt
      },
      {
        "title": "Shadows",
        "album": "Yankee",
        "track": 1,
        "bandId": 198,
        createdAt,
        updatedAt
      },
      {
        "title": " Sound Of His Ignorance",
        "album": "Yankee",
        "track": 2,
        "bandId": 198,
        createdAt,
        updatedAt
      },
      {
        "title": " She Hopes I'm Tainted",
        "album": "Yankee",
        "track": 3,
        "bandId": 198,
        createdAt,
        updatedAt
      },
      {
        "title": " Storm Of A Man",
        "album": "Hooli",
        "track": 1,
        "bandId": 199,
        createdAt,
        updatedAt
      },
      {
        "title": " Darling, I'm Lonely Without You",
        "album": "Hooli",
        "track": 2,
        "bandId": 199,
        createdAt,
        updatedAt
      },
      {
        "title": " Babe, You Killed Me",
        "album": "Hooli",
        "track": 3,
        "bandId": 199,
        createdAt,
        updatedAt
      },
      {
        "title": " He Thinks She's Numb",
        "album": "Orange Crush",
        "track": 1,
        "bandId": 200,
        createdAt,
        updatedAt
      },
      {
        "title": " I Hope He's Paranoid",
        "album": "Orange Crush",
        "track": 2,
        "bandId": 200,
        createdAt,
        updatedAt
      },
      {
        "title": " Riders Of Us",
        "album": "Orange Crush",
        "track": 3,
        "bandId": 200,
        createdAt,
        updatedAt
      },
      {
        "title": " Morning Of A Paranoid Mind",
        "album": "Baconator",
        "track": 1,
        "bandId": 201,
        createdAt,
        updatedAt
      },
      {
        "title": "  You Crushed Me",
        "album": "Baconator",
        "track": 2,
        "bandId": 201,
        createdAt,
        updatedAt
      },
      {
        "title": " He Hates He's Waiting For You",
        "album": "Baconator",
        "track": 3,
        "bandId": 201,
        createdAt,
        updatedAt
      },
      {
        "title": " End Of My Dreams",
        "album": "Juliet",
        "track": 1,
        "bandId": 202,
        createdAt,
        updatedAt
      },
      {
        "title": " Joy For The Wolf",
        "album": "Juliet",
        "track": 2,
        "bandId": 202,
        createdAt,
        updatedAt
      },
      {
        "title": " Babe, Let's Go Crazy",
        "album": "Juliet",
        "track": 3,
        "bandId": 202,
        createdAt,
        updatedAt
      },
      {
        "title": " Thoughts Of Her World",
        "album": "Romeo",
        "track": 1,
        "bandId": 203,
        createdAt,
        updatedAt
      },
      {
        "title": " Honey, It's Nothing",
        "album": "Romeo",
        "track": 2,
        "bandId": 203,
        createdAt,
        updatedAt
      },
      {
        "title": " Darling, Let's Be Free",
        "album": "Romeo",
        "track": 3,
        "bandId": 203,
        createdAt,
        updatedAt
      },
      {
        "title": " I Think I'm The Devil",
        "album": "Zulu",
        "track": 1,
        "bandId": 204,
        createdAt,
        updatedAt
      },
      {
        "title": " Memories Of Love",
        "album": "Zulu",
        "track": 2,
        "bandId": 204,
        createdAt,
        updatedAt
      },
      {
        "title": " Baby, You're A Fool",
        "album": "Zulu",
        "track": 3,
        "bandId": 204,
        createdAt,
        updatedAt
      },
      {
        "title": " Babe, Let's Get A Move On",
        "album": "Sierra",
        "track": 1,
        "bandId": 205,
        createdAt,
        updatedAt
      },
      {
        "title": " Baby, Turn Up The Volume",
        "album": "Sierra",
        "track": 2,
        "bandId": 205,
        createdAt,
        updatedAt
      },
      {
        "title": "  Let's Be Free",
        "album": "Sierra",
        "track": 3,
        "bandId": 205,
        createdAt,
        updatedAt
      },
      {
        "title": " Baby, You're The One For Me",
        "album": "Mike",
        "track": 1,
        "bandId": 206,
        createdAt,
        updatedAt
      },
      {
        "title": "  She's Got Her Eye On You",
        "album": "Mike",
        "track": 2,
        "bandId": 206,
        createdAt,
        updatedAt
      },
      {
        "title": " Lost And Fires",
        "album": "Mike",
        "track": 3,
        "bandId": 206,
        createdAt,
        updatedAt
      },
      {
        "title": " Honey, I'm On The Wild Side",
        "album": "Oscar",
        "track": 1,
        "bandId": 207,
        createdAt,
        updatedAt
      },
      {
        "title": " I Hope She Loves You",
        "album": "Oscar",
        "track": 2,
        "bandId": 207,
        createdAt,
        updatedAt
      },
      {
        "title": "Of Tomorrow",
        "album": "Oscar",
        "track": 3,
        "bandId": 207,
        createdAt,
        updatedAt
      },
      {
        "title": " Dreams Of My Friends",
        "album": "Whiskey",
        "track": 1,
        "bandId": 208,
        createdAt,
        updatedAt
      },
      {
        "title": "  It's Not Okay",
        "album": "Whiskey",
        "track": 2,
        "bandId": 208,
        createdAt,
        updatedAt
      },
      {
        "title": " Baby, This Is For You",
        "album": "Whiskey",
        "track": 3,
        "bandId": 208,
        createdAt,
        updatedAt
      }
     ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
