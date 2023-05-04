import React from 'react'
import styles from '@/styles/comment-form.module.scss'
const CommentForm = () => {
  return (
    <div>
        <textarea className={styles.textarea} />
        <button className={styles.button}>
            Add a Comment
        </button>
    </div>
  )
}

export default CommentForm