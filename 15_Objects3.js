// De Structuring

const course={
    courname:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

//course.instrcutor

const {courseInstructor : instructor} = course


console.log(instructor);