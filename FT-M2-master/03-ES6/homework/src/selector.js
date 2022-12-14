var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if (matchFunc(startEl)) {
    resultSet.push(startEl);
  }
  for (let i = 0; i < startEl.children.length; i++) {
    resultSet = resultSet.concat(traverseDomAndCollectElements(matchFunc, startEl.children[i]));
  }
  return resultSet;
};


// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if (  selector[0] === "#" ){
    return "id";
    } 
    
  if( selector[0] === "."){
    return "class";
   } 

  if(selector.includes('.')) {
    return 'tag.class';
   }
  
  if ( selector.includes('>')){
    return'childCombinator';
  }  

  if ( selector.includes(' ')){
    return 'descendantCombinator';
  }
  
  return "tag"
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { //si es id
    matchFunction = el => {//matchFunction es una funcion que recibe un elemento y devuelve true o false
      return '#' + el.id === selector//se compara el elemento html vs el selector
    }

  } else if (selectorType === "class") {//si es class
    matchFunction = el => {//el es el elemento html
      let classes = el.classList;//classList es una propiedad de los elementos html
      for (let i = 0; i < classes.length; i++) {//recorre el array de clases
        if('.' + classes[i] === selector){//si la clase del elemento html es igual al selector
        return true   //retorna true
        }
      }
      return false;
    }
} else if (selectorType === "tag.class") {//si es tag.class
    matchFunction = el => {//el es el elemento html
      let [tag, clase] = selector.split('.');//separa el selector en tag y clase
      return matchFunctionMaker(tag)(el) && matchFunctionMaker('.' + clase)(el);//retorna true si el elemento html es igual al tag y si el elemento html es igual a la clase
    }

  } else if (selectorType === "tag") {//si es tag
    var matchFunction = el => {//el es el elemento html
      return el.tagName && (el.tagName.toLowerCase() === selector);//retorna true si el elemento html es igual al selector
    };
  }

  // Extra test

  // En caso de que nos pasen un elemento con un ascendente directo: <div><span></span></div>
  if (selectorType === "childCombinator") {
    return element => {

      // ["div > span"] // ["div", ">", "span"] // ["div>span"] // ["div", "span"]
      let [father, child] = selector.toUpperCase().split(" > "); // ["div", "span"]

      return (element.parentNode.tagName === father) && (element.tagName === child);//retorna true si el padre del elemento html es igual al padre del selector y si el elemento html es igual al hijo del selector
    }
  }

  // En caso de que nos pasen un elemento con un ascendente: <div><span><li></li></span></div>
  if (selectorType === "descendantCombinator") {//si es descendantCombinator
    return element => {//element es el elemento html

      // ["div li"] // ["div", "li"]
      var [rootFather, descendant] = selector.toUpperCase().split(" ");//separa el selector en rootFather y descendant
      let father = false;//inicializa la variable father en false

      if (element.parentNode) {//si el padre del elemento html existe
        father = element.parentNode;//father es igual al padre del elemento html
        while (father) {//mientras father exista
          if (father.tagName === rootFather) break//si el padre del elemento html es igual al rootFather, se rompe el ciclo
          father = father.parentNode;//father es igual al padre del padre del elemento html
        }
      }
      return father && father.tagName === rootFather && element.tagName === descendant;//retorna true si el padre del elemento html es igual al rootFather y si el elemento html es igual al descendant
    }
  } return matchFunction
};
 

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};

