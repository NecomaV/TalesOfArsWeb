import React from 'react';
import { useParams } from 'react-router-dom'; // useParams is a hook for getting the current URL parameters
import NotFound from './comps/NotFound'; // Importing the NotFound component to display when no matching page is found.

function Pagerender() {

    // Function to dynamically generate page based on URL parameters.
    const generatePage = (page) => {
        // Dynamically import the requested page using the `require` function.
        const component = () => require(`./pages/${page}`).default;

        try {
            // If the page exists, create and return the component.
            return React.createElement(component());
        } catch (err) {
            // If an error occurs (like the page not existing), return the NotFound component.
            return <NotFound />;
        }
    }

    // Use the useParams hook from react-router to get the dynamic part of the URL.
    const { page, id } = useParams();

    // Construct the name of the requested page
    let pageNum = id ? `${page}/${id}` : `${page}`;

    // Call our generatePage function with the page number and render the returned component.
    return generatePage(pageNum);
}

export default Pagerender;