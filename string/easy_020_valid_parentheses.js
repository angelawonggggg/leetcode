var isValid = function (s) {
  const brackets = new Map();
  brackets.set("(", -1);
  brackets.set("{", -2);
  brackets.set("[", -3);
  brackets.set(")", 1);
  brackets.set("}", 2);
  brackets.set("]", 3);

  let bracketValueSum = 0;
  let pass = true;

  for (let i = 0; i < s.length; i++) {
    let bracketValues = brackets.get(s[i]);
    bracketValueSum += bracketValues;

    // check the total number of brackets

    if ((bracketValueSum === 0 && s.length % 2 === 0)) {
        pass = true;
      } else {
        pass = false;
      }

      // check the format 

    
    let valueFirstBracket = brackets.get(s[0])
    let openBracketIndex = s.indexOf(s[i])

    
    console.log(bracketsKeys)

    }
    
//     if (valueFirstBracket < 0 )

//   }
  

  return console.log(pass)
};

isValid("{[]}");
