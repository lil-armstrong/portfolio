import { useEffect, useState } from 'react'

export const useFetch = <T = unknown>(request: Promise<T>) => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [result, setResult] = useState<T>()

  useEffect(() => {
    request.then((data) => {
        setResult(data);
        setIsLoading(false)
    })
  }, []);

  return { loading: isLoading, result}
}
