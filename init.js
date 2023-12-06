const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
main()
  .then(() => {
    console.log("Connetion Done !");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
  {
    from: "neha",
    to: "priya",
    msg: "send me your pics",
    create_at: new Date(),
  },
  {
    from: "rohit",
    to: "mohit",
    msg: "send me pdf",
    create_at: new Date(),
  },
  {
    from: "amit",
    to: "sumit",
    msg: "tech me www",
    create_at: new Date(),
  },
  {
    from: "rakesh",
    to: "rekha",
    msg: "are yaar tu pagal hai",
    create_at: new Date(),
  },
  {
    from: "jay",
    to: "joti",
    msg: "jay suna market chalte hai",
    create_at: new Date(),
  },
];

Chat.insertMany(allChats);

// let Chat1 = new Chat({
//   from: "neha",
//   to: "priya",
//   msg: "send me your pics",
//   create_at: new Date(),
// });
