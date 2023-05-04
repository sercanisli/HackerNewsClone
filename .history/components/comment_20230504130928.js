import React from 'react'
import styles from '@/styles/comment.module.scss';
import timeAgo from '@/lib/time-ago';


export default class Comment extends React.Component {
    //parametre alan bir constructorım var.
    constructor(props) {
        super (props);
        //toggled: yorumlar açılıp kapanabildiği için kullanacağım bir fonksiyonum olacak. 
        this.state={toggled: false}
        this.toggled=this.toggled.bind(this)
    }
    //toggle statemizin var olan boolen halinin tersine çevirip açıp kapanmasını sağlayacağız.
    toggle() {
        this.setState({
            toggled: !this.state.toggled
        })
    }
    //proplarımı  obje destructor yaptığım fonksiyon
    render() {
        const {
            user,
            text,
            date,
            comments
        } = this.props;
        return (
            <div className={styles.comment}>
                <div className={styles.meta}>
                    {user} {timeAgo(new Date(date))} ago {` `}
                    <span onClick={this.toggle}> 
                        {
                            this.state.toggled ? `[+${(this.props.commentsCount || 0)+1}]` : `[-]`
                        }
                    </span>
                </div>
                {this.state.toggled ? null : [
                    //iç içe commentleri yazdırmak için div bloklarının içine değil direkt divin kendisine yazdırmamız gerekiyor.
                    <div key="text" className="text" 
                    //html yazabilmek için gerekli olan ko yapısı dangerouslySrtInnerHTML;
                        dangerouslySetInnerHTML={{
                            //render içerinde prop olarak aldığımız text.
                            __html: text
                        }}
                    />,
                    //yukarıdan gelen commentleri maplediğimiz alan
                    <div key='children' className={styles.children}>
                        {comments.map(comment => (
                            <Comment key = { comment.id } {...comment} />
                        ))}
                    </div>
                ]}
            </div>
        )
    }
}

