import React from 'react'

const Story = ({id, title, date, url = null, user, score, commentCount=0 }) => {
    return (
        <div className='story'>
            <div className="title">
                {url ? (
                    <a href={url}>
                        {title}
                    </a>
                ): (
                    <Link href={`/item/${id}`} legacyBehavior>
                        <a>
                            {title}
                        </a>
                    </Link>
                )}
                {url && (
                    <span>
                        <a href={`http://${host}`}>
                            {host.name.replace(/^www\./,'')}
                        </a>
                    </span>
                )}
            </div>
        </div>
    )
}

export default Story