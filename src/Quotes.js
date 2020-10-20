import React, { useState, useEffect } from 'react';
import QuoteCard from './QuoteCard';
import './index.css';

const useFetch = url => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {

        const response = await fetch(url);

        if (response.status !== 200) {
        throw new Error('cannot fetch the data');
        }
        const data = await response.json();
        const quotes = data;
        console.log(quotes);
        setData(quotes);
        setLoading(true);      

        }
        getData();
    }, [url])

    return { data, loading }
};  

const initCount = Math.floor(Math.random() * 500);


const Quotes = () => {
const { data, loading } = useFetch('https://programming-quotes-api.herokuapp.com/quotes/lang/en');
const [text, setText] = useState('Dev Quotes');
const [author, setAuthor] = useState('(click me)');
const [count, setCount] = useState(initCount);


        // useEffect(() => {
        //   if (count === 1) {
        //     fetchData()
        //     .then(data => {
        //         const quotes = data.map(item => {
        //             return item;
        //         }) 
        //     }) 
        //   }
        // }, [count])

const shuffle = array => {
    let counter = array.length;
    let temp;
    let index;
    

    if (counter > 0) {
        index = Math.floor(Math.random() * counter);
        counter--;
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
        console.log(count);
    }
    
    
    return index;
}



    const changeClicked = () => {

        setCount(shuffle(data));
        setText(data[count].en);
        setAuthor(data[count].author);
        
        

    }

    
    return (
        <QuoteCard data={data} loading={loading} text={text} author={author} count={count} changeClicked={changeClicked}/>
    )
}

export default Quotes;