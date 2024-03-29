import jwt from "jsonwebtoken";

function authUser(socket, next) {
  const tokenJwt = socket.handshake.auth.token;
  try {
    /* SEGREDO_JWT comes from the .env file due to import "dotenv/config"; at socket-back.js*/
    const payloadToken = jwt.verify(tokenJwt, process.env.SEGREDO_JWT);
    socket.emit("auth_success", payloadToken);

    next();
  } catch (error) {
    next(error);
  }
}

export default authUser;
