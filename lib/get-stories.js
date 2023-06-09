import db from './db'
import { transform } from '@/lib/get-item';

const getStories = async (type='topstories', {page=1, max=30}) => {
    const start = max * (page-1);
    const end = start + max;
    const ids = await db.child(type).once('value');
    const stories = await Promise.all(
        ids.val().slice(start, end).map(id=> db.child('item').child(id).once('value'))
    )
    return stories.map(story => transform(story.val()))
}

export default getStories