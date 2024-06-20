const arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru"
    },
];

const regex = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/;
const trustedEmails = [];

for (let i = 0; i < arr.length; i++) {
    const email = arr[i].email;
    if (regex.test(email)) {
        trustedEmails.push(email);
    }
}

console.log(trustedEmails); 