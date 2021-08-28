import React from "react";
import Picture from "./StudentInfo/Picture";
import StudentInfo from "./StudentInfo/StudentInfo";
import Button from "./TestScores/Button";
import TagDisplay from "./TagSection/TagDisplay";
import TagInput from "./TagSection/TagInput";
import ScoreList from "./TestScores/ScoreList";
const Card = () => {
  return (
    <div>
      <Picture />
      <StudentInfo />
      <Button />
      <TagDisplay />
      <TagInput />
      <ScoreList />
      <br />
    </div>
  );
};

export default Card;
