export default function longestWord (word){
     var sentence = word.split('');
     let sum = 0
     let longest = ''; 
     for (let i = 0; i < sentence.lenth; i++) {
        let characters = sentece[i];
        if (characters.lenth >= sum) {
            sum = characters.length; 
            longest = characters; 
        }
     } 
     return longest 
}