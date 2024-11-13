import React, { useEffect, useState } from 'react';
import axios from 'axios';

function useFetch() {
    const [data, setData] = useState(null);
    const [amount, setAmount] = useState(10);

    function dataFetch(url) {
        axios.get(url)
            .then(res => {
                setData(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    return [data, dataFetch,  setAmount];  // Return `data` instead of `users`
}

export default useFetch;
