import { useState, useEffect } from 'react';

function useFetch(initRequest) {

    const [url, setUrl] = useState('');
    const [request, setRequest] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [response, setResponse] = useState();

    useEffect(() => {
        async function customFetch() {
            await setIsLoading(true);
            await setError(null);
            await setResponse(null);
            let res = await fetch(url, {
                method: request.method || 'GET',
                body: JSON.stringify(request.body) || null,
                headers: { ...request.headers, 'Content-Type': 'application/json','Accept': 'application/json' },
            });

            await setIsLoading(false);

            if (res.status >= 300) {
                await setError(res);
                return;
            }

            await setResponse(await res.json());
        }

        if (request) customFetch();
    }, [request, url]);


    return {
        setUrl,
        setRequest,
        isLoading,
        error,
        response,
    };
}

export default useFetch;