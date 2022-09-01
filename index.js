import express from 'express';
import cors from 'cors';

import longestWord from './bootcamp/longestWord.js'
import shortestWord from './bootcamp/shortestWord.js'
import wordLengths from './bootcamp/wordLengths.js'

const app = express();

app.use(express.static('public'));
app.use(cors())

app.get('/', function(req,res){
    res.json({
        server_state:'Server running'
    })
})


app.get('/api/word_game', function(req, res){
    const sentence = req.query.sentence; 

    if (!sentence) { 
        res.json({
            error: 'Please send in a sentence to analyze'
        })
    }
    
    res.json({
        longestWord : longestWord(sentence), 
        shortestWord : shortestWord(sentence),   
        "sum" : wordLengths(sentence)
    });
    
});

const PORT = 6007;
app.listen(PORT, function(){
    console.log('api started on port',PORT)

})