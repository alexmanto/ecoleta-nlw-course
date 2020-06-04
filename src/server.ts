import express from 'express';

const app = express();

const users = [
    'sdad',
    'dfsa',
    'dssass',
    'ghfhhgh'
];

app.get('/users', (request, response) => {
    const search = String(request.query.search);

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    return response.json(filteredUsers);
});

app.get('/users/:id', (request, response) => {
   const id = Number(request.params.id);
   const user = users[id];
   return response.json(user);
});

app.post('/users', (request, response) => {
    const user = {
        name: 'dsasd',
        email: 'sdasd@dsad.com'
    };

    return response.json(user);
});

app.listen(5000);