import react from "react";
import lista from "./lista";

const trie = () => {
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
    };

    


}

export default trie
