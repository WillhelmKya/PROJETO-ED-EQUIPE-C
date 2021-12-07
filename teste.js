const fs = require('fs');

var text = fs.readFileSync('Usuários.txt','utf8')

let lista = text.split('\r\n');

console.log(lista)

let ALPHABET_SIZE = 26;

class TrieNode
{
    constructor()
    {
        this.isEndOfWord = false;
        this.children = new Array(ALPHABET_SIZE);
        for (let i = 0; i < ALPHABET_SIZE; i++)
            this.children[i] = null;
    }
}
 
let root;

function insert(key)
{
    let level;
        let length = key.length;
        let index;
       
        let pCrawl = root;
       
        for (level = 0; level < length; level++)
        {
            index = key[level].charCodeAt(0) - 'a'.charCodeAt(0);
            if (pCrawl.children[index] == null)
                pCrawl.children[index] = new TrieNode();
       
            pCrawl = pCrawl.children[index];
        }
       
        pCrawl.isEndOfWord = true;
}

function search(key)
{
    let level;
        let length = key.length;
        let index;
        let pCrawl = root;
       
        for (level = 0; level < length; level++)
        {
            index = key[level].charCodeAt(0) - 'a'.charCodeAt(0);
       
            if (pCrawl.children[index] == null)
                return false;
       
            pCrawl = pCrawl.children[index];
        }
       
        return (pCrawl.isEndOfWord);
}

let output = ['Presente','Não presente'];

root = new TrieNode();

let i;
for (i = 0; i < lista.length; i++)
    insert(lista[i]);


/*    
if (search('Rodrigo') == true)
    console.log(output[0]);
else
    console.log(output[1]);
*/




