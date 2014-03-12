var obj = {
  header: "THIS IS A TITLE!",
  things: ['one', 'two', 'threeeeeez'],
  nested: {
    bird: "chirp",
    egg: "egg!"
  }
};

var j2h = {
  toHTML: function(obj) {
    if (Array.isArray(obj))
      return this.toUL(obj);
    else if (typeof(obj) == 'object')
      return this.toDL(obj);
    else
      return obj;
  },
  toUL: function(obj) {
    var string = "<ul>\n";
    for(var el in obj) {
      string += "<li>" + this.toHTML(obj[el]) + "</li>\n";
    }
    return string + "</ul>\n";
  },
  toDL: function(obj) {
    var string = "<dl>\n";
    for(var el in obj) {
      string += "<dt>" + el + "</dt>\n";
      string += "<dd>" + this.toHTML(obj[el]) + "</dd>\n";
    }
    return string + "</dl>\n";
  }
}

console.log(j2h.toHTML(obj));
