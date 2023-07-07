
import { Helmet } from 'react-helmet-async';

const Blogs = () => {
    return (
        <div>
            <Helmet>
                <title> Kids Toy Hut | Blog</title>
            </Helmet>

            <h3 className='text-4xl font-bold text-blue-700 text-center my-8'>This Is My Blogs Area </h3>
            <p className='font-medium'>Qus-1: What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>
            <p>
                Ans:Tokens are pieces of data that carry just enough information to facilitate the process of determining a user identity or authorizing a user to perform an action.Access tokens help users to get the resources they need to complete their tasks, but such tokens can also expose our organization to data compromise or other malicious actions if a hacker is able to steal them. <br /> <br />

                As mentioned, for security purposes, access tokens may be valid for a short amount of time. Once they expire, client applications can use a refresh token to refresh the access token. That is, a refresh token is a credential artifact that lets a client application get new access tokens without having to ask the user to log in again. <br /> <br />

                Access token and refresh token should not be stored in the local/session storage, because they are not a place for any sensitive data. Hence I would store the access token in a httpOnly cookie (even though there is CSRF) and we need it for most of our requests to the Resource Server anyway. <br />

                1. Storing the refresh token in an in-memory JavaScript variable, which has two drawbacks:

                a. It is vulnerable to XSS but may be not as obvious as local/session storage
                b. It looses the session if a user closes the browser tab
                Especially the latter drawback makes will turn out as a bad UX.


            </p>

            <p className='font-medium'>
                Ques-2: Compare SQL and NoSQL databases?
            </p>
            <p>
                Ans:
                SQL: SQL databases are vertically scalable, it is table-based, so SQL databases are better for multi-row transactions, <br /> <br />

                NoSQL: NoSQL databases are horizontally scalable, where databases are document, key-value, graph, or wide-column stores.  so NoSQL is better for unstructured data like documents or JSON.

            </p>
            <br /> <br />


            <p className='font-medium'>Ques-3: What is express js? and What is nest js?</p>
            <p>
                Ans:
            </p> <br /> <br />

            <p className='font-medium'>Ques-4: What is mongodb aggregate and how does it work? </p>
            <p>
                Ans:
            </p> <br /> <br />


        </div>
    );
};

export default Blogs;