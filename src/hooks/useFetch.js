import { useEffect, useState } from 'react';
import { get } from '../api';

export default (url, defaultResponse = null) => {
  const [response, setResponse] = useState(defaultResponse);
  const [loading, setLoading] = useState(false);

  let completed = false;

  useEffect(() => {
    setLoading(true);
    setResponse(defaultResponse);
    completed = false;

    const abortController = window.AbortController ? new AbortController() : null;
    const signal = abortController && abortController.signal;

    get(url, { signal })
      .then(x => {
        completed = true;
        setResponse(x);
        setLoading(false);
      })
      .catch(err => {
        setResponse(defaultResponse);
        setLoading(false);
      });

    return () => {
      if (completed) {
        return;
      }

      abortController && abortController.abort();
    }
  }, [url]);

  return { response, loading };
};