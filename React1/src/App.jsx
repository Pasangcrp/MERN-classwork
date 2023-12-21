//Hello
// const World = () => {
//   return (
//     <div>
//  <p>Hello World</p>
//     </div>
//   )
// }
// const Hello = (props) => {
//   console.log(props);
//   return (
//     <div>
//  <p>Hello {props.name} your age is {props.age}</p>
//     </div>
//   )
// }

// const App = () => {
//   const name= 'Ram';
//   const age = 25;

//   return (
//     <div>
//     <h1>Grettings</h1>
//     <Hello />
//     <Hello name='George' age={26+25} />
//     <Hello name={name} age={age} />
//    <World />
//     </div>
    
//   )

// }

//! Exercixce 1
// const Header = (props) => {
//   console.log(props);
//     return (
//       <div>
//         <h1>{props.course}</h1>
//       </div>
//     )
//   }
// const Content = (props) => {
//   console.log(props);
//     return (
//       <div>
//         <p>part1: {props.part1} : {props.exercises1}</p>
//         <p>part2: {props.part2} : {props.exercises2}</p>
//         <p>part3: {props.part3} : {props.exercises3}</p>
//       </div>
//     )
//   }

// const Total = (props) => {
//   console.log(props);
//     return (
//       <div>
//        <p>Total Number of exercises : {props.sum}</p>
//       </div>
//     )
//   }


// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14
//   const sum = exercises1+exercises2+exercises3

//   return (
//     <div>
//       <Header course ={course} />
//       <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3 = {part3} exercises3={exercises3}/>
//       <Total sum= {sum}/>
//     </div> 
//   )


//! Exercise 1 JS

/*

 const Header = (props) => {
  return <h1>{props.name}</h1>
   
    const Part = (props) => {
     const totalExercises = props.part.exercises;
     return <p>{props.part.name} {totalExercises}</p>
    }
  const Content = (props) => {
    return props.parts.map(p => <Part part = {p} />);
    }

 const App = () => {
  const course = 'Half Stack application development' 
  const part1 ={
     name: 'Fundamentals of React',
     exercises: 10
  }
  const part2 ={
     name: 'Using props to pass data',
     exercises: 7
  }
  const part3 = {
     name: 'State of a component',
     exercises: 14
  } 

  return (
     <div>
       <Header name ={course}/>
       <Content parts = {[part1,part2,part3]} />
      
     </div>
    
  )

 }

 export default App
Hello
 const World = () => {
   return (
     <div>
  <p>Hello World</p>
     </div>
   )
 }
 const Hello = (props) => {
   console.log(props);
   return (
     <div>
  <p>Hello {props.name} your age is {props.age}</p>
     </div>
   )
 }

 const App = () => {
   const name= 'Ram';
   const age = 25;

   return (
     <div>
     <h1>Grettings</h1>
     <Hello />
     <Hello name='George' age={26+25} />
     <Hello name={name} age={age} />
    <World />
     </div>
    
   )

 }
 */

//! Exercixce 1
/*
 const Header = (props) => {
   console.log(props);
     return (
       <div>
         <h1>{props.course}</h1>
       </div>
     )
   }
 const Content = (props) => {
   console.log(props);
     return (
       <div>
         <p>part1: {props.part1} : {props.exercises1}</p>
         <p>part2: {props.part2} : {props.exercises2}</p>
         <p>part3: {props.part3} : {props.exercises3}</p>
       </div>
     )
   }

 const Total = (props) => {
   console.log(props);
     return (
       <div>
        <p>Total Number of exercises : {props.sum}</p>
       </div>
     )
   }


 const App = () => {
   const course = 'Half Stack application development'
   const part1 = 'Fundamentals of React'
   const exercises1 = 10
   const part2 = 'Using props to pass data'
   const exercises2 = 7
   const part3 = 'State of a component'
   const exercises3 = 14
   const sum = exercises1+exercises2+exercises3

   return (
     <div>
       <Header course ={course} />
       <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3 = {part3} exercises3={exercises3}/>
       <Total sum= {sum}/>
     </div> 
   )
*/

//! Exercise 1 JS
const Header = (props) => {
    return <h1>{props.name}</h1>
  }
  
  const Part = (props) => {
    return <p>{props.part.name} {props.part.excercises}</p>
  }
  
  const Content = (props) => {
    return props.parts.map(p => <Part part={p}/>);
  }
  
  const Total = (props) => {
    var total = 0;
    props.parts.forEach(val => total+=val.excercises);
    return <p>Total: {total}</p>
  }
  
  const App = () => {
    const course = 'Half Stack Program'
    const part1 = {
      'name': 'Fundamentals of React',
      'excercises': 10
    }
    const part2 = {
      'name': 'Fundamentals of React',
      'excercises': 20
    }
    return (
      <div>
        <Header name={course} />
        <Content parts={[part1, part2]} />
        <Total parts={[part1, part2]}/>
      </div>
    )
  }
  
  export default App

