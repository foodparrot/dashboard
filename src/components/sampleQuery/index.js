import React, { Suspense } from 'react'
import { useQuery, QueryErrorResetBoundary } from 'react-query'
import { fetchRandomDog, fetchRandomDog2 } from './services'
import { ErrorBoundary } from 'react-error-boundary'
import SampleQuerySuspense from './suspense'

const Sample1 = () => {
  const { data, isError, isLoading, error } = useQuery("fetchRepo", fetchRandomDog);
  if (isLoading) {
    return <img className='me-auto ms-auto w-50' src='https://www.inspirationde.com/media/2019/09/cd514331234507.564a1d2324e4e.gif' alt='loading' />
  }
  if (isError) {
    return <h6 className='text-danger text-center'>{error.message}</h6>
  }
  return (
    <div className='row'>
      <img className='me-auto ms-auto w-50' src={data.url} />
    </div>
  )
}

const Sample2 = () => {
  const { data, isError, isLoading, error } = useQuery("fetchRepo2", fetchRandomDog);
  if (isLoading) {
    return <img className='me-auto ms-auto w-50' src='https://www.inspirationde.com/media/2019/09/cd514331234507.564a1d2324e4e.gif' alt='loading' />
  }
  if (isError) {
    return <h6 className='text-danger text-center'>{error.message}</h6>
  }
  return (
    <div className='row'>
      <img className='me-auto ms-auto w-50' src={data.url} />
    </div>
  )
}
const SampleQuery = () => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={reset}
          fallbackRender={({ resetErrorBoundary }) => (
            <div>
              There was an error!
            </div>
          )}
        >
          <div className='container-fluid mb-2'>
            <section>
              <h1 className='text-center'>useQuery sample - 1 (using imperative fetch logic with flags)</h1>
              <Sample1 />
            </section>
            <section>
              <h1 className='text-center'>useQuery sample - 2 (using declarative fetch logic with ReactErrorBoundary)</h1>
              <Sample2 />
            </section>
            <section>
              <h1 className='text-center'>useQuery sample - 2 (using declarative fetch logic with suspense)</h1>
              <SampleQuerySuspense/>
            </section>
          </div>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  )
}
export default SampleQuery