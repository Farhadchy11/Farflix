import express from "express";
const app = express();
import cors from "cors";
import jwt from "jsonwebtoken";
import { MongoClient, ServerApiVersion, ObjectId } from "mongodb";
const port = 5050;
app.use(cors());
app.use(express.json());

const key = "farhad@$";

const uri = `mongodb+srv://farhadchy500_db_user:farhad140@cluster0.moyeg4p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    console.log("MongoDB Connected Successfully!");
    const userCollection = client.db("blogs").collection("blogcontent");

    app.post("/jwt", async (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, key, {
        expiresIn: "2h",
      });
      res.send({ token });
    });

    const verifyToken = (req, res, next) => {
      const token = req.headers.authorization.split(" ")[1];
      jwt.verify(token, key, (error, decoded) => {
        if (error) {
          return res.status(401).send({ message: "forbidden access" });
        }
        req.decoded = decoded;
        next();
      });
    };

    app.get("/allblogs", async (req, res) => {
      const result = await userCollection.find().toArray();
      res.send(result);
    });

    app.get("/allblogs/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await userCollection.findOne(query);
      res.send(result);
    });
  } catch (error) {
    console.log("Database Connection Error:", error);
  }
}

run();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
