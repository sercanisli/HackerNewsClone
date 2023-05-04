import React from 'react'
import Stories from '@/components/stories'
import Page from '@/components/page'
import getStories from '@/lib/get-stories';

export async function getStaticProps() {
    const stories = await getStories('jobstories', { page: 1});
  
    return {
      props: {
        stories
      },
      revalidate: 1
    }
  }
  
  const Jobs = ({ stories }) => {
    return (
      <Page>
        <Stories stories={stories} morePath='jobs' showMoreButton={false}/>
      </Page>
    )
  }
  
  export default Jobs