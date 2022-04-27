import React ,{useState}from "react";
import people from "./data"


const Reviews = ()=>{
    const [index,setIndex] = useState(0)
    const {name,job ,image,text} = people[index]

    const checkNumber = (number) => {
        if (number > people.length - 1) {
          return 0;
        }
        if (number < 0) {
          return people.length - 1;
        }
        return number;
      };

// function
const nextPerson = () => {
    setIndex((index)=>{
        let newIndex = index+1
        return checkNumber(newIndex)
    })
}
// 
const priviousPerson = () => {
    setIndex((index)=>{
        let newIndex = index-1
        return          checkNumber(newIndex)

    })
}
// 
const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  }



return (
    <article className="reviews">
        <div className="img_container">
            <img src={image} alt={name}className="person-img" />
            <span className="quote_icon">

            </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="button_container">
        <button  onClick={nextPerson}  clclassName="forward">forward</button>
        <button  onClick={priviousPerson}  className="backward">backward</button>
        </div>
        <button onClick={randomPerson} className="surprise_me">surprise me</button>

        

    </article>
)
}

export default Reviews