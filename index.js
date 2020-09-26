function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    ).replace(" ", "");
}

function toCamelCase(str) {
    str = str.replace("-", " ")
    return str
        .replace(/\s(.)/g, function ($1) { return $1.toUpperCase(); })
        .replace(/\s/g, '')
        .replace(/^(.)/, function ($1) { return $1.toLowerCase(); });
}
function recur(obj) {
    ret_str = "<"
    ret_str += toTitleCase(obj.name) + " "
    if (obj.style !== undefined && Object.keys(obj.style).length > 0) {
        var stypeKeys = Object.keys(obj.style)
        ret_str += "style={{"
        for (var i = 0; i < stypeKeys.length; i++) {
            ret_str += toCamelCase(stypeKeys[i]) + ':"' + obj.style[stypeKeys[i]] + '",'
        }
        ret_str = ret_str.substr(0, ret_str.length - 1) + "}}"
    }

    if (obj.children !== undefined && obj.children.length > 0) {
        ret_str += ">\n";
        for (var i = 0; i < obj.children.length; i++) {
            ret_str += recur(obj.children[i])
        }
        ret_str += "</" + toTitleCase(obj.name) + ">"
    }
    else {
        ret_str += '/>'
    }

    return ret_str
}

function generateCodeFromObject(obj) {
    return recur(obj)
}
let input = {
    "type": "div",
    "root": true,
    "name": "First Section",
    "style": {
       "color": "#a8a8a8",
       "font-size": "32px",
       "background": "red"
    },
    "children": [

    ]
 }
 let output = `<FirstSection style={{color:"#a8a8a8",fontSize:"32px",background:"red"}}/>`;



const removeSpacesFromString = (str) => {
    let transformedString = "";
    let retstr = [];
    //  regex to identify new lines and tab spaces
    var separators = [' ', '\n', '\t'];
    separators.join('|')
    retstr = str.split(new RegExp(separators.join('|'), 'g'));

    for (var i in retstr) {
        if (retstr[i].length > 0)
            if (retstr[i].startsWith('style'))
                transformedString += ` ${retstr[i]}`
            else
                transformedString += `${retstr[i]}`
    }
    // console.log(transformedString)
    return transformedString;
}

console.log(removeSpacesFromString(generateCodeFromObject(input)))
console.log(removeSpacesFromString(output))

// module.exports = generateCodeFromObject;