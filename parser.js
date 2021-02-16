const babelParser = require("@babel/parser");
const fs = require("fs");
const traverse = require("@babel/traverse").default;
const path = require("path");

let ID = 0;
const cache = {};

//Obtain  target file's dependencies 
const getDependencies = (filename) => {
  //Declare dataRequestObject
  const dataRequests = [];

  class DataRequestObject {
    constructor(dataRequestType) {
      this.dataRequestType = dataRequestType;
    }
  }
  //Read file content
  const content = fs.readFileSync(filename, "utf8");

  //Parse file to convert it into an AST
  const raw_ast = babelParser.parse(content, {
    sourceType: "module",
    plugins: ["jsx"],
  });

  //Stores the name/value of all ImportDeclaration nodes
  const dependencies = [];

  //Traverse AST using babeltraverse to identify imported nodes
  traverse(raw_ast, {
    ImportDeclaration: ({ node }) => {
      if (node.source.value.indexOf('./') !== -1) dependencies.push(node.source.value);
    },
    MemberExpression: ({ node }) => {
      if (node.object.name === 'axios') {
        const dataRequest = new DataRequestObject('axios');
        dataRequests.push(dataRequest);
      }
    },
    enter(path) {
      //Check data request type

      if (path.isIdentifier({ name: "fetch" })) {
        const dataRequest = new DataRequestObject('fetch');
        dataRequests.push(dataRequest);
      }
      // if (path.isIdentifier({ name: "axios" })) {
      //   const dataRequest = new DataRequestObject('axios');
      //   dataRequests.push(dataRequest);
      // }
      if (path.isIdentifier({ name: "ajax" })) {
        const dataRequest = new DataRequestObject('ajax');
        dataRequests.push(dataRequest);
      }
      if (path.isIdentifier({ name: "XMLHttpRequest" })) {
        const dataRequest = new DataRequestObject('XMLHttpRequest');
        dataRequests.push(dataRequest);
      }
    }
  })

  const id = ID++;
  cache[filename] = id;

  return {
    id,
    filename,
    dependencies,
    dataRequests
  };
};

const dependenciesGraph = (entryFile) => {
  const entry = getDependencies(entryFile);
  const queue = [entry];

  for (const asset of queue) {
    asset.mapping = {};
    const dirname = path.dirname(asset.filename);

    asset.dependencies.forEach(relativePath => {
      //If there is no file extension, add it
      let absolutePath = path.resolve(dirname, relativePath);
      let fileCheck = fs.existsSync(absolutePath)
      let child;

      if (!fileCheck) {
        absolutePath = path.resolve(dirname, relativePath + '.js'); //Test for .js
        fileCheck = fs.existsSync(absolutePath);
        if (!fileCheck) absolutePath = absolutePath + 'x'; //Test for .jsx
      }

      //Check for duplicate file paths
      if (!cache[absolutePath]) {
        child = getDependencies(absolutePath);
        queue.push(child);
      }
      asset.mapping[relativePath] = cache[absolutePath];
    })
  }
  return queue;
}


console.log(dependenciesGraph('./src/index.js'));
console.log(cache);
