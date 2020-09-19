const codeGenerator=require("./index");

const removeSpacesFromString=(str)=>{
    let transformedString="";
    //Split the string with spaces
    //If string starts with style prop
    transformedString+=` ${transformedString[i]}`
   //else
    transformedString+=`${transformedString[i]}`

    return transformedString;
}

test('Function should return a string', () => {
    let input={
        "type":"div",
        "root":true,
        "name":"First Section",
        "style":{
           "color":"#a8a8a8",
           "font-size":"32px",
           "background":"red"
        },
        "children":[
           
        ]
     }
    expect(typeof codeGenerator(input)).toEqual("string");
  });

  test('Node with no child should be self terminating', () => {
    let input={
        "type":"div",
        "root":true,
        "name":"First Section",
        "style":{
           "color":"#a8a8a8",
           "font-size":"32px",
           "background":"red"
        },
        "children":[
           
        ]
     }
     let output="<FirstSection/>";
     let expectedOutput=removeSpacesFromString(output)

     let receivedOutput=removeSpacesFromString(codeGenerator(input))
     expect(receivedOutput).toEqual(expectedOutput);
});
 