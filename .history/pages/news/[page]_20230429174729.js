import Page from '@/components/page'
import React from  'react'

export function getStaticPaths()
{
    return {
        paths: [{
            params: {
                page:"1"
            }
        }],
        fallback: 'blocking' 
    }
}

export async function getStaticProps({params: {page=1}})
{
    try{
        page = Number(page);
        const stories = await getStories('topstories', {page});
        return {
            props: {
                stories,
                page
            }
        }
    }
    catch (err){
        console.log({
            Error: err
        });
    }
}

const NewList = ({page, stories}) => {
    const offset = (page -1) * 30;
    return (
        <div>
            <Page>
            Stories
            </Page>
        </div>
    )
}
export default NewList