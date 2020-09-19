const codeGenerator=require("./index");

const removeSpacesFromString=()=>{
    
}

test('Function should return a string', () => {
    
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
 