import fastify from "fastify";

const app = fastify();

app.get("/", (request, reply) => {
  reply.send({ hello: "world" });
});

app.listen(8080)