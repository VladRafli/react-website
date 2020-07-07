import React, {useState} from 'react';
import "./App.css"

function Posts({author}){

    const [count, setcount] = useState(0);

    const increment = () => {
        setcount(count + 1);
    }

    return(
        <div className="post">
            <div className="post-author">
                <img src="https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819_1280.png" alt={author}/>
                <p>{author}</p>
            </div>
            <div className="post-text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A quo tenetur impedit! Quam fugiat magnam consequatur exercitationem dolor voluptatum corrupti?</p>
            </div>
            <div className="post-buttons">
                <button onClick={increment}>Like</button>
                <p>{count}</p>
            </div>
        </div>
    );
}

export default Posts;