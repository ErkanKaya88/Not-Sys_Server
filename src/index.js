import bodyParser from "body-parser";

// Connect to db

// routes

const app = express();

// middleware
app.use(cors());

// parse application/x-www-foimport rm-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// routes

export default app;
