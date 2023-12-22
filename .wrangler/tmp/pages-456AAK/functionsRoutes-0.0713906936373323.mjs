import { onRequest as __api_message_js_onRequest } from "C:\\Users\\rafte\\Documents\\alex\\experiments\\cf-pages-test\\functions\\api\\message.js"
import { onRequest as __helloworld_js_onRequest } from "C:\\Users\\rafte\\Documents\\alex\\experiments\\cf-pages-test\\functions\\helloworld.js"

export const routes = [
    {
      routePath: "/api/message",
      mountPath: "/api",
      method: "",
      middlewares: [],
      modules: [__api_message_js_onRequest],
    },
  {
      routePath: "/helloworld",
      mountPath: "/",
      method: "",
      middlewares: [],
      modules: [__helloworld_js_onRequest],
    },
  ]