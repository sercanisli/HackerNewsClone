import React from 'react'
import styles from '@/styles/item.module.scss';
import Story from '@/components/story.js';
import CommentForm from '@/components/comment-form.js';
import Comment from '@/components/comment.js'


const Item = ({
    story,
    comments = null
  }) => {
    return (
      <div className={styles.item}>
        <Story
          {...story}
        />
  
        <div className={styles.form}>
          <CommentForm/>
        </div>
  
        <div className={styles.comments}>
          {comments ? (
            comments.map(comment => (
            <Comment 
              key={comment.id}
              {...comment}
            />))
          ) : (
            <div className={styles.loading}>
              Loading...
            </div>
          )}
        </div>
  
      </div>
    )
  }
  
  export default Item