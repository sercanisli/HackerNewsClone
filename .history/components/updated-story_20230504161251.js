import { observe } from '@/lib/get-item';
import React, { useEffect, useState } from 'react'
import Story from '@/components/story.js';

const UpdatedStory = (props) => {
    const[story, setStory] = useState(props);
    useEffect(() => {
        //observe get-item sayfamıza yazdığımız bir fonksiyonumuz.
        observe(props.id, (data)=>setStory(data))
    }, [props.id])
  return (
    <Story
        id={story.id}
        title={story.title}
        date={story.date}
        url={story.url}
        user={story.user}
        score={story.score}
        commentsCount={story.comments?.length || 0}
    />
  )
}

export default UpdatedStory