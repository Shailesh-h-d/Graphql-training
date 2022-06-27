
const usersList = [
    {
        id: 1,
        name: "abcd",
        username: "abce",
        age: 23,
        nationality: "BRAZIL",
        friends: [
            {
                "id":4,
                "name":"mnop",
                "username":"mnoq",
                "age":21,
                "nationality":"RUSSIA"
            },
            {
                "id":5,
                "name":"qrst",
                "username":"qrtu",
                "age":25,
                "nationality":"INDIA"
            }
        ]
    },
    {
        id:2,
        name:"efgh",
        username:"efgi",
        age:24,
        nationality:"USA",
        friends: [
            {
                "id":5,
                "name":"qrst",
                "username":"qrtu",
                "age":25,
                "nationality":"INDIA"
            },
            {
                id: 1,
                name: "abcd",
                username: "abce",
                age: 23,
                nationality: "BRAZIL",
                friends: [
                    {
                        "id":4,
                        "name":"mnop",
                        "username":"mnoq",
                        "age":21,
                        "nationality":"RUSSIA"
                    },
                    {
                        "id":5,
                        "name":"qrst",
                        "username":"qrtu",
                        "age":25,
                        "nationality":"INDIA"
                    }
                ]
            }
        ]

    },
    {
        "id":4,
        "name":"mnop",
        "username":"mnoq",
        "age":21,
        "nationality":"RUSSIA"
    },
    {
        "id":5,
        "name":"qrst",
        "username":"qrtu",
        "age":25,
        "nationality":"INDIA"
    }
];

const moviesList = [
    {
        id: 1, 
        name:"Avengers", 
        year: 2019,
        inTheatres: true,
    },
    {
        id: 2,
        name:"pirates of the caribbean",
        year: 2017,
        inTheatres: true,
    },
    {
        id: 3,
        name:"Interstellar",
        year: 2007,
        inTheatres: true,
    },
    {
        id: 4,
        name:"superbad",
        year: 2009,
        inTheatres: false,
    }
]

module.exports = {usersList, moviesList};