import React, { useEffect, useState } from 'react'

const UpdatedStory = (props) => {
    const[story, setStory] = useState(props);
    useEffect(() => {
        //observe get-item sayfamıza yazdığımız bir fonksiyonumuz.
    }, [props.id])
  return (
    <div>UpdatedStory</div>
  )
}

export default UpdatedStory