import React,{useState} from 'react'
const FeedBackForm = () => {
    const [rating,setRating]=useState(10);
    const [comments,setComments]=useState("")
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(rating,comments);
        setRating(10);
        setComments("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <div className="field">
                    <label htmlFor="Rating:">Rating: {rating}</label>
                    <input type="range" id="range" 
                     min="0" max="10" value={rating} 
                     onChange={(e)=>setRating(e.target.value)}/>
                </div>
                <div className="field">
                    <label htmlFor="comments">Comments</label>
                    <textarea id="comments" value={comments}
                    onChange={(e)=>setComments(e.target.value)}></textarea>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </fieldset>
        </form>
      
    )
}
export default FeedBackForm;