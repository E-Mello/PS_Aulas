let loginState = false;

function login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  if (username === "admin" && password === "admin") {
    window.location = "./pages/home.html";
  } else {
    alert("Usuário e senha inválida, por favor, tente novamente!");
  }
}

function logout() {
  window.location = "../index.html";
}

class Router {
  constructor() {
    this.routes = [];
    return this;
  }

  get(uri, callback) {
    if (!uri || !callback) throw new Error("Forneça uma uri ou um retorno");

    if (typeof uri !== "string") throw new Error("A uri deve ser uma string");
    if (typeof callback !== "function")
      throw new Error("A callback deve ser uma function");

    this.routes.forEach((route) => {
      if (route.uri === uri) throw new Error(`A uri ${route.uri}`);
    });

    const route = {
      uri,
      callback,
    };
    this.routes.push(route);
  }

  init() {
    this.routes.some((route) => {
      let regEx = new RegExp(`^${route.uri}$`);
      let path = window.location.pathname;

      if (path.match(regEx)) {
        let req = { path };
        return route.callback.call(this, req);
      }
    });
  }
}

const router = new Router();

router.get("/pages/home.html", function (req) {
  console.log(req.path);
  if (loginState === false) {
    alert("você n tem permissão");
    window.location = "/";
  }
});

router.get("/pages/listagem_de_animes.html", function (req) {
  console.log(req.path);
  if (loginState === false) {
    alert("você n tem permissão");
    window.location = "/";
  }
});

router.get("/pages/gerenciar_animes.html", function (req) {
  console.log(req.path);
  if (loginState === false) {
    alert("você n tem permissão");
    window.location = "/";
  }
});

router.init();

// https://dev.to/kodnificent/how-to-build-a-router-with-vanilla-javascript-2a18
