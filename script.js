"use strict"

window.addEventListener("load",start);

function start(){
    printTree();
}

function printTree(){

    let rootNode = document.documentElement;

    printNode(rootNode,0);
    

}

function printNode(node, depth){
    //SKIP #TEXT nodes (ligegyldige linjeskift tags/nodes idk)
    if (node.nodeType === Node.TEXT_NODE) {
        return;
    }

    let indent = ' '.repeat(depth*4);
    let tagName = node.nodeName.toLowerCase();
    let attributes = '';


    if (node.attributes) {
        for (let i = 0; i < node.attributes.length; i++) {
            attributes += ` ${node.attributes[i].name}="${node.attributes[i].value}"`;
        }
    }


    let startTag = `<${tagName}${attributes}>`;
    let endTag = `</${tagName}>`

 
    console.log(indent + startTag);

    if(node.hasChildNodes()){
        let child = node.firstChild;
        while(child){
            printNode(child, depth+1);
            child = child.nextSibling;
        }
    }
    
    if(tagName !== 'br' && tagName !== 'input'){
        console.log(indent+endTag)
    }
    
}