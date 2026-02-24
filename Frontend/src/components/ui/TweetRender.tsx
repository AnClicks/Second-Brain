import { Tweet } from "react-tweet"
export const EmbeddedTweet = (id:string) =>{

        return (
            <>
            <div className="light"> 
                <Tweet id={id} />
            </div>
            </>
        
    );
};
