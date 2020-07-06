require("dotenv/config");
import Server from "./server/server";

const PORT = process.env.PORT || 3000;
const server = Server;

try {
    server.listen(PORT, () =>
        console.log(`[SERVER] Running at http://localhost:${PORT}`)
    );
} catch (error) {
    console.error(`Couldn't start the server. Error: ${JSON.stringify(error)}`);
}
