const comments= ({comments}) => (
    <>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,1,0" />
        <h3>Comments</h3><br/>
        {comments.map((com)=>(
            <div className="comment" key = {com.by + ":" + com.commment}>
                <br/><div className="color"><span class="material-symbols-outlined">account_circle</span>
                <h4>{com.by}</h4></div>
                <p className="side">{com.comment}</p>
                <br/><br></br>
                <hr></hr>
            </div>
            
        ))
        }
    </>
)
export default comments;