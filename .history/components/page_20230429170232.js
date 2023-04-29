import React from  'react'

const Page = ({children}) => {
    return (
        <div className='main'>
            <div className="page">
                {children}
            </div>
            <style jsx global>{` body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
                'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
                'Helvetica Neue', sans-serif;
                background: #eee;
            }`} </style> 
        </div>
    )
}
export default Page