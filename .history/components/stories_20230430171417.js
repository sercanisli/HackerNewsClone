import React  from 'react'
import Link from 'next-link'
import styles from '@/styles/story.module.scss'
import Story from './story'

const Stories = ({page=1, stories, offset=null, morePath='news', showMoreButton}) => {
    return (
        <div>
            {stories && stories.map((story, i) => {
                return (
                    <div key={story.id} className="item">
                        {offset !== null ? (
                            <>
                            <span className='count'>
                                {offset + i + 1}
                            </span>
                            </>
                        ) : null}
                        <Story
                            id={story.id}
                            title={stories.title}
                            date={story.date}
                            url={story.url}
                            user={story.user}
                            score={story.score}
                            commentsCount={story.comments.length}
                        />
                    </div>
                )
            })}
            <footer className={styles.footer}>
                {showMoreButton && (
                    <Link href={`/${morePath}/${page +1}`}>
                        <a>More</a>
                    </Link>
                )}
            </footer>
        </div>
    )
} 

export default Stories