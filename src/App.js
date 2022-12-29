import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';
import Shape1 from './Shape1';
import Shape2 from './Shape2';

function App() {

  const wrapperRef = useRef(null)


  const VerticleBars = () => {
    //Bar Array
    var vertArr = []

    //Push Bar to Array
    for(let i = 0; i<100;i++){
      let bar = {
        //Create position by using index and adding pixels 
        position: (i+1) * 10
      }
      vertArr.push(bar)
    } 

     return(
      //Map through array and create html element
      vertArr.map((bar, i) => {
        return(<div className='verticleBar' style={{top:`${bar.position}px`}}></div>)
      })
     )
  }

  const HorizontalBars = () => {
    var vertArr = []
    for(let i = 0; i<200;i++){
      let bar = {
        position: (i+1) * 10
      }
      vertArr.push(bar)
    }  
     return(
      vertArr.map((bar, i) => {
        return(<div className='horizontalBar' style={{left:`${bar.position}px`}}></div>)
     })
     )
  }

  // const wrapper = wrapperRef.current

  
  // wrapper.addEventListener('mouseover', concon)

  // const concon = () => 
  // {
  //   console.log('concon')
  // }



  return (
    <div className='wrapper' ref={wrapperRef}>
      <div className="main">
        <VerticleBars />
        <HorizontalBars />
        <div className='line1'></div>
    <div className='line2'></div>

      {/* <div className='mark1'></div>
      <div className='mark2'></div> */}

        <Shape1/>
        {/* <Shape2/> */}
      </div>
    </div>
  );
}

export default App;
