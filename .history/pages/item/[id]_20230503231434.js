import getItem from '@/lib/get-item'
import React, { useEffect, useState } from 'react'
import getComments from '@/lib/get-comment'

export function getStaticPaths() {
    return {
        paths: [{
            params: {
                id:'29001721'
            }
        }],
        fallback: 'blocking'
    }
}

export async function getStaticProps({
    params: {
        id=1
    }
    //getItem API request

})
{
    const story = await getItem(id); 
    return {
        props: {
            story
        }
    }
}

const News = ({story}) => {
    const [comments, setComments] = useState([])
    useEffect(() => {
        //getComments() API Request
        if(story)
        {
            getComments(story.comments)
            .then(comments => {
                //setting State
                setComments(comments)
            })
            .catch(err => {
                console.log({err});
            })
        }
    }, [story])

  return (
    <Page>
        {/* <Item/> */}
    </Page>
  )
}

export default News