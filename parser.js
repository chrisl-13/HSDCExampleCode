const babelParser = require("@babel/parser");
const fs = require("fs");
const fileSrc = "/src/index.js"
const content = fs.readFileSync(__dirname + fileSrc, "utf8");

//Create data store
const store = {
  data_requests: [],
}

//nodes to store in store.data_requests
class data_request_node {
  constructor(file_name, data_request) {
    this.file_name = fileSrc;
    this.data_request = {
      request_type: null,
      data_variables: null,
    }
  }
}

//stores the name/value of all ImportDeclaration nodes
class dependencies {
  constructor(file_name, imports) {
    this.file_name = fileSrc;
    this.imports = [];
  }
}

const getTree = (content) => {
  //Parse file to convert it into an AST
  const raw_ast = babelParser.parse(content, {
    sourceType: "module",
    plugins: ["jsx"],
  });

  const file_dependencies = new dependencies();

  raw_ast.program.body.forEach((ast_node) => {
    if (ast_node.type === 'ImportDeclaration') {
      if (ast_node.source.value.indexOf(`./`) !== -1) {
        file_dependencies.imports.push(ast_node.source.value)
      }
    }
  })

  console.log(file_dependencies.imports)

  // rawAst.program.body.forEach(
  //   (astNode) => {
  //     if (astNode.type === 'FunctionDeclaration') {
  //       const new_node = new data_request_node();
  //       console.log(astNode.body.body[2].expression)
  //       new_node.data_request.request_type = astNode.body.body[2].expression.arguments[0].body.body[0].expression.callee.object.name;
  //       store.data_requests.push(new_node)
  //     }
  //   })
  // console.log(store.data_requests[0].data_request)
  return store;
};

const app = getTree(content);

console.log(app);

