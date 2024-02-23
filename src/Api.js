import React from 'react'

import { useState, useEffect } from 'react'




const Api = (props) => {
  const [articles, setarticles] = useState([])
const [like , setlike] = useState(true)
const onlike =(id)=>{
    if(!like){
      setlike(true)
    }else{
      setlike(false)
    }
}


  const getuser = async () => {
    const apis = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=d8684f9140794cd19ca34af85c64135d`)
      .then(response => response.json()).then(data => setarticles(data.articles))

  }
  useEffect(() => {

    getuser();
  }, [])

  return (

    <>
      {
        articles && articles.map((element) => {
          const { url , id  , title} = element
          return (

            <div className='' key={id}>

              <div className=" container-fluid card my-5 mt-5  " style={{ width: 500, scrollBehavior: 'smooth' }}>
                <div className='row-cols'>


                  <img src={element.urlToImage} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{element.title}</h5>
                    <p className="card-text">{element.discription}</p>
                    <a href={element.url} target="_blank" className="btn btn-primary mx-3" >Go news</a>
                   
                    {like ? (
                      <a   onClick={onlike} className="btn btn-primary mx-3" >like </a>):( <a href={element.like}   onClick={onlike}  className="btn btn-danger mx-3" >Dislike</a>)
                    }

                  </div>
                </div>
              </div>

            </div>


          )
        })
      }


      <div>
        <button className='btn btn-primary fixed-top pt-2'  >
          <a style={{ color: 'whitesmoke', textDecoration: 'none' }} href=''> Go to Home </a>
        </button>
      </div>

    </>

  )
}

export default Api;
