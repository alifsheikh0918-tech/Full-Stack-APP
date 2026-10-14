import express from "express";

const app = express();

// app.get('/',(req, res) => {
//     res.send("Server Is Ready")
// });

//get a list of 5 jokes

//need slash('/') virsioning and "api"

app.get('/api/jokes',(req, res) => {
    const jokes = [
  {
    "id": 1,
    "title": "The Programmer",
    "content": "Why do programmers prefer dark mode? Because light attracts bugs!"
  },
  {
    "id": 2,
    "title": "The Student",
    "content": "Teacher: Why are you late? Student: Because of the sign. Teacher: What sign? Student: The one that says 'School Ahead, Go Slow!'"
  },
  {
    "id": 3,
    "title": "The Computer",
    "content": "Why did the computer go to the doctor? Because it had a virus!"
  },
  {
    "id": 4,
    "title": "The Math Book",
    "content": "Why was the math book sad? Because it had too many problems!"
  },
  {
    "id": 5,
    "title": "The Wi-Fi",
    "content": "Why did the Wi-Fi break up with the router? Because it felt they had no connection!"
  },
  {
    "id": 6,
    "title": "The Lazy Programmer",
    "content": "Why did the programmer quit his job? Because he didn't get arrays!"
  }
];
    res.send (jokes);
});

const port = process.env.PORT ||3000;

app.listen(port,() => {
    console.log(`Serve at http://localhost:${port}`);
});
