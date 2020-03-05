import app from "./app";

const PORT = 3500;

const handleListening = () => {
    console.log(`Listening on https://localhost:${PORT}`)
}
app.listen(PORT, handleListening);