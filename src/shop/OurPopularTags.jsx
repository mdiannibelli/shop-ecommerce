import React from 'react';

const tagsList = [ { link: "#", text: "envato", },
 { link: "#", text: "themeforest", },
  { link: "#", text: "codecanyon", },
   { link: "#", text: "videohive", },
    { link: "#", text: "audiojungle", },
    { link: "#", text: "3docean", },
     { link: "#", text: "envato", },
      { link: "#", text: "themeforest", },
       { link: "#", text: "codecanyon", }, ];

export default function OurPopularTags() {
  return (
    <div className='widget widget-tags'>
        <div className='widget-header'>
            <h5>Most Popular Tags</h5>
        </div>
        <ul className='widget-wrapper'>
            {
                tagsList.map((val,i) => (
                    <li key={i}><a href={val.link}>{val.text}</a></li>
                ))
            }
        </ul>
    </div>
  )
}
