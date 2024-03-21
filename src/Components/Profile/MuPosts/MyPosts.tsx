import React from 'react';
import s from './MyPosts.module.css'

import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
               <div>
                   <textarea></textarea>
               </div>

                <div>
                    <button>add Post</button>
                </div>

            </div>
            <div>
                <Post message={'Hello 11'} count={4}/>
                <Post message={'Helo 222'} count={6}/>

            </div>

        </div>
    )
};

