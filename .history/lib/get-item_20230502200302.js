import db from './db'

export default async function getItem(id) {
    const item = await db.child('item').child(id).once('value')
    const val = item.val();

    if(val){
        return transform(val)
    }
    else
    {
        null;
    }
}

export const transform = (val) => {
    return{
        id : val.id,
        url : val.url || null,
        user : val.by,
        date : new Date(val.time * 1000)?.toISOString(),
        comments : val.kids || [],
        title : val.title
    }
}