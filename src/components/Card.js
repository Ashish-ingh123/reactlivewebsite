import React from "react";
import {FcLike} from 'react-icons/fc'
import { toast } from "react-toastify";
import { FcLikePlaceholder } from "react-icons/fc";
const Card=(props)=>{
    let course=props.course;
    let likedCourses=props.likedCourses;
    let setLikedCourses=props.setLikedCourses;
    const clickHandler=()=>{
        if(likedCourses.includes(course.id))
        {
            setLikedCourses((prev)=>prev.filter((cid)=>(cid!=course.id)));
            toast.warning("like removed");
            
        }
        else
        {
            if(likedCourses.length==0)
            {
                setLikedCourses([course.id])
            }
            else{
                setLikedCourses((prev)=>[...prev,course.id]);
            }
            toast.success("Liked Successfully");
        }


    }
    return (
    <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
        <div className="relative flex flex-col">
         <img src={course.image.url}></img>
         <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-6px] gird place-items-center ">
            <button onClick={clickHandler}>
                {/* <FcLike fontSize="2.4rem"/> */}
                {
                    !likedCourses.includes(course.id)? (<FcLikePlaceholder fontSize="2.3rem" />):(<FcLike fontSize="2.3rem"/>)
                }
            </button>
           </div>
        </div>
        <div className="p-4">
            <p className="text-white font-semibold text-lgleading-6">{course.title}</p>
            <p className="mt-2 text-white">
                {
                    course.description.length>100 ?(course.description.substr(0,100))+"...":(course.description)
                }
            </p>
        </div>

    </div>);
}
export default Card;