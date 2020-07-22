import React, { useState, useEffect } from 'react';
import { getData } from 'utils/sanity/'

// Queries
import { contentQuery } from "utils/sanity/sanity-queries"
import { pagesQuery } from "utils/sanity/sanity-queries"

const ContentContext = React.createContext({});

const ContentProvider = (props) => {
  // Set two loading states for without and with data
  const [loaded, setLoaded] = useState(false);
  // Set a project state
  const [content, setContent] = useState([]);
  const [pages, setPages] = useState([]);


  // Get the data from Sanity
  useEffect(() => {
    async function fetchData() { 
      try {
        // Get Home Content
        const contentResponse = await getData(contentQuery)
        setContent(contentResponse)
        const pagesResponse = await getData(pagesQuery)
        setPages(pagesResponse)
        setLoaded(true)
      }
      catch (err) {
        console.log('fetch failed', err);
        throw err
      }
    }
    fetchData()
  }, []);

  return (
    <ContentContext.Provider value={{ loaded, content, pages }}>
      {props.children}
    </ContentContext.Provider>
  );
}

export { ContentContext, ContentProvider };