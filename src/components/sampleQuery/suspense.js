import React, { Suspense } from 'react'
import { useQuery, QueryErrorResetBoundary, useMutation } from 'react-query'
import { fetchRandomDog, fetchRandomDog2, updatePost } from './services'
import { ErrorBoundary } from 'react-error-boundary'
const Sample = () => {
    const { data } = useQuery("fetchRepo3", fetchRandomDog2, { suspense: true });
    return (<div className='container-fluid'>
        <div className='row'>
            <img className='me-auto ms-auto w-50' src={data.url} />
        </div>
    </div>)
}

const SamplePost = () => {
    const { mutate, data, error } = useMutation(updatePost, {
        onSuccess: (data) => {
            alert(JSON.stringify(data))
        },
        onError: (error) => {
            console.log(error);
        }
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            mutate({ title: e.target.elements['title'].value, body: e.target.elements['body'].value });
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <form onSubmit={handleSubmit} className="form-control">
            <h5 className='text-center text-info'>Form</h5>
            <input className='form-control' name='title' />
            <textarea className='form-control' name='body' cols={'2'}></textarea>
            <div className='row'>
                <button type='submit' className='btn btn-primary ms-auto mr-auto' style={{ width: "max-content" }}>Create Post</button>
            </div>
        </form>
    )
}
const SampleQuerySuspense = () => {
    return (
        <ErrorBoundary fallback={<h1>Error</h1>}>
            <Suspense
                fallback="loading"
            >
                <Sample />
                <SamplePost />
            </Suspense>
        </ErrorBoundary>
    )
}
export default SampleQuerySuspense