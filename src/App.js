import "./App.css";
import Table from "./components/Table";
import NameInput from "./components/InputSearch/NameInput";
import TagInput from "./components/InputSearch/TagInput";
import Students from "./components/StudentCard/Students";
function App() {
  return (
    <div className="App">
      {/* <Nav/>
      <Step1/> pull in pic, fullName = {firstName + lastName}, email, company, skill, average
      <Step2/> Container 
      //left image in circle //right fullName h1 bold/heavy font, email,company.skill,avg almost in a ul/il  scoll in container
      <Step3/> add input to top of Container, search students by name/fullName
      <Step4/> each student gets expanded view button to display test scores in list under average
      <Step5/> add a text input field to add tags for a specific student, then add another search bar to search for students based on tags
      
      */}
      <NameInput />
      <TagInput />
      <Students />
      <Table />
    </div>
  );
}

export default App;
