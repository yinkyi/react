import React,{useState,useCallback, useMemo} from 'react';
import './App.css';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';
import DemoList from './components/Demo/DemoList';
function App() {
  console.log("App is Evaluating");
  const [isShowPara,setIsShowPara] = useState(false);
  const [allowToggle,setallowToggle] = useState(false);
  const [listTitle,setListTitle] = useState('My List');

  const paraShowHandler = useCallback(()=>{
    if(allowToggle)
      setIsShowPara((preisShowPara)=>!preisShowPara);
  },[allowToggle]);

  const allowToggleHandler = ()=>{
    setallowToggle(true);
  };
  const changeTitleHandler = useCallback(()=>{
    setListTitle("New Title");
  },[]);
  let itemlist = useMemo(()=>{return [5,3,1,10,9]},[]);
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={isShowPara}></DemoOutput>
      {/* {isShowPara && <p>This is Paragraph</p>} */}
      <Button onClick={allowToggleHandler}>Allow</Button>
      <Button onClick={paraShowHandler}>Toggle</Button>

      <DemoList title={listTitle} items={itemlist}></DemoList>
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;
