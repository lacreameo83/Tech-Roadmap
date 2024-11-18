import React, { useContext, useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import ReactFlow, {
  Background,
  Controls,
  useEdgesState,
  useNodesState,
} from "reactflow";
import "reactflow/dist/style.css";
import { GlobalContext } from "../context/GlobalContex";
import FirstOutPut from "./FirstOutPut";
import OutPut3 from "./OutPut3";
import School from "./School";
import Resourses from "./Resourses";
import TopicSearched from "./TopicSearched";
import { useNavigate } from "react-router-dom";







  const nodeTypes = {
    firstOutPut: FirstOutPut,
    coursesdisplay: OutPut3,
    displayschool: School,
    resourses: Resourses,
    topic: TopicSearched,
    // Using the actual component for the node type
  };

function LearningRoadMap() {
  const {
    responseGenarated,

    setSelectedLabel,
    newresharch,
    selectedLabel,
    callMoreResearch,
    newresharchResponse,
    setIsLableEmpty,
    options,
    handleGenerateQuestion,
    questionOutput,
  } = useContext(GlobalContext);
const [isModel,setIsModel]=useState(false)
const [loading,setloading]=useState(false)
const [questionModal,setQuestionModal]=useState(false)
const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
const [selectedOption, setSelectedOption] = useState(false);
  const [dispalyResponse, setDisplayResponse] = useState("");
   const [precious, setprecious] = useState("");
   const [osonwa, setosonwa] = useState("");
console.log(newresharchResponse);


const handleQuestion =()=>{
  handleGenerateQuestion()
  setQuestionModal(true)
}

const handleNodeClick = (value) => {
  setIsLableEmpty(true)
  setSelectedLabel(value);
  setIsModel(true)
  setloading(true)
  callMoreResearch() 

  
setIsModel(true);
   setloading(true); // Start loading when a node is clicked
   callMoreResearch(); 
};

useEffect(() => {
  if (newresharchResponse.length > 0) {
    setloading(false); // Stop loading when data is received
  }
}, [newresharchResponse]);

const navigate = useNavigate()

const handleNextQuestion = () => {
  if (selectedOption === currentQuestion.answer) {
    setDisplayResponse("Correct answer!");
    setTimeout(() => {
      if (currentQuestionIndex < questionOutput.length - 1) {
        // Increment question index for the next question
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setDisplayResponse(""); // Clear feedback message
      } else {
        // Final question completed
        setprecious("Congratulations! You've completed the test.");
        setosonwa("Consider moving to the next level!");
        setTimeout(() => {
          navigate("/")
        }, 2000);
      }
      setSelectedOption(null); // Reset selected option
    }, 1000);
  } else {
    setDisplayResponse("Incorrect answer. Try again.");
  }
};


 const currentQuestion = questionOutput[currentQuestionIndex];

 const handleOptionChange = (option) => {
   setSelectedOption(option);
 };
 
// const Output = newresharchResponse[newresharchResponse.length - 1];

  const initialNodes = responseGenarated.flatMap((el, index) => [
    {
      id: `result-${10}`,
      type: "topic",
      data: {
        text: (
          <div>
            <p>Tech Road Map</p>
          </div>
        ),
      },
      position: { x: 600, y: -200 },
    },
    {
      id: `${el.id}`,
      type: "firstOutPut",
      data: { text: el.Courses, onClick: () => handleNodeClick(el.Courses) },
      position: { x: 600, y: 10 + index * 200 },
    },

    {
      id: `Learn-${el.id}`,
      type: "coursesdisplay",
      data: {
        text: (
          <div>
            <p onClick={() => handleNodeClick(el.Learn[0])}>{el.Learn[0]}</p>
          </div>
        ),
      },
      position: { x: 200, y: 8 + index * 200 },
    },
    {
      id: `Learn2-${el.id}`,
      type: "coursesdisplay",
      data: {
        text: (
          <div>
            <p onClick={() => handleNodeClick(el.Learn[1])}>{el.Learn[1]}</p>
          </div>
        ),
      },
      position: { x: 200, y: 70 + index * 200 },
    },
    {
      id: `Learn3-${el.id}`,
      type: "coursesdisplay",
      data: {
        text: (
          <div>
            <p onClick={() => handleNodeClick(el.Learn[2])}>{el.Learn[2]}</p>
          </div>
        ),
      },
      position: { x: 200, y: 132 + index * 200 },
    },

    {
      id: `School1-${el.id}`,
      type: "displayschool",
      data: {
        text: (
          <div>
            <p onClick={() => handleNodeClick(el.School[0])}>{el.School[0]}</p>
          </div>
        ),
      },
      position: { x: 1000, y: 5 + index * 200 },
    },
    {
      id: `School2-${el.id}`,
      type: "displayschool",
      data: {
        text: (
          <div>
            <p onClick={() => handleNodeClick(el.School[1])}>{el.School[1]}</p>
          </div>
        ),
      },
      position: { x: 1000, y: 100 + index * 200 },
    },
    {
      id: `Resourse1-${20}`,
      type: "resourses",
      data: {
        text: (
          <div>
            <p>Make Sure To Learn "Beginener " topics of all Tech Skills</p>
          </div>
        ),
      },
      position: { x: 900, y: -200 },
    },
  ]);

  
  const initialEdges = responseGenarated.flatMap((el) => [
    {
      id: `e-school1-${el.id}`,
      source: `${el.id}`,
      target: `School1-${el.id}`,
      animated: true,
    },
    {
      id: `e-school2-${el.id}`,
      source: `${el.id}`,
      target: `School2-${el.id}`,
      animated: true,
    },
    {
      id: `e-school3-${el.id}`,
      source: `${el.id}`,
      target: `School3-${el.id}`,
      animated: true,
    },
    {
      id: `Learn-${el.id}`,
      source: `Learn-${el.id}`,
      target: `${el.id}`,
      // animated: true,
    },
    {
      id: `Learn2-${el.id}`,
      source: `Learn2-${el.id}`,
      target: `${el.id}`,
      // animated: true,
    },
    {
      id: `Learn3-${el.id}`,
      source: `Learn3-${el.id}`,
      target: `${el.id}`,
      // animated: true,
    },
    // {
    //   id: `result-${10}`,
    //   source: `result-${10}`,
    //   target: `${0}`,
    //   // animated: true,
    // },
  ]);

const handleQUESTION =()=>{

}




  return (
    <div>
      <div className="h-screen w-screen mb-24 bg-[#fffefe]   ">
        <div className="h-[10vh] mb-6 px-10 sticky top-0 bg-[#0f172a] z-20 text-yellow-50 flex items-center justify-between  ">
          <p>Tech RoadMap</p>
          <a href="https://tech-quiz-gxmx.vercel.app/?vercelToolbarCode=1Iqfb5DbSiEhhQs">
            Take A Quiz
          </a>
        </div>
        <div className="h-[200vh] bg-[#fffefe] overflow-y-scroll">
          <ReactFlow
            nodes={initialNodes}
            edges={initialEdges}
            // onNodesChange={onNodesChange}
            // onEdgesChange={onEdgesChange}
            nodeTypes={nodeTypes}
            panOnScroll={false}
            zoomOnScroll={false} // Prevents zooming with scroll
            zoomOnPinch={false} // Prevents zooming with pinch gestures
            fitView
          >
            <Background />
          </ReactFlow>
        </div>
        <div className=" flex h-[50vh] items-center bg-[#f9fafb] justify-center">
          <div className="h-[30vh] w-[50vw] ">
            <h2 className="text-center text-[50px] font-[800]">
              Join the Community
            </h2>
            <p className="text-center font-[300] ">
              roadmap <span className="underline">is our 1st project</span> and
              is visited by
            </p>
            <p className="text-center">hundreds of thousands of people</p>
            <div className="flex items-center my-8 justify-center gap-3">
              <div className="text-center text-[40px] font-[800] border-r-2 pr-5">
                +1M
              </div>
              <div className="text-center text-[40px] font-[800] border-r-2  pr-5">
                28K
              </div>
              <div className="text-center text-[40px] font-[800] border-r-2  pr-5">
                290K
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-[#0f172a] flex justify-center items-center  h-[40vh] w-[100vw] text-yellow-50">
          <div className="h-[20vh] w-[70vw] grid grid-cols-2 ">
            <div>
              <h2>RoadMap tech Genarator</h2>

              <p> Community created roadmaps, best practices, projects,</p>
              <p>articles, resources and journeys to help you choose your</p>
              <p> path and grow in your career.</p>
            </div>
            <div>
              <h2 className="text-end">TheNewStack</h2>
              <p className="text-end">The top resource from Osonwa Precious</p>
              <p className="text-end">frontEnd Developer</p>
              <p className="text-end">development and deploment</p>
            </div>
          </div>
        </div>
      </div>

      {isModel && (
        <div className="h-[100vh] removescrollbar z-50 px-2 py-5  overflow-y-scroll w-[40vw] shadow-lg bg-white  fixed top-0 right-0">
          {!loading ? (
            <div>
              <div
                onClick={() => setIsModel(false)}
                className="right-5 h-[20px] w-[20px] top-1 fixed flex items-center justify-center  text-red-600 bg-red-100 rounded-[100%]"
              >
                <p>x</p>
              </div>

              <div>
                {newresharchResponse.map((item) => (
                  <div key={item.key}>
                    {item.type === "heading" ? (
                      <h2 className="font-[900] text-center text-[18px] text-black mb-1  ">
                        {item.text}
                      </h2>
                    ) : item.type === "subheading" ? (
                      <h3 className=" p-1 text-start my-1 font-[600]    bg-transparent   text-[12px] ">
                        {item.text}
                      </h3>
                    ) : item.type === "boldText" ? (
                      <h3 className=" p-2  text-[15px] border-[3px] border-green-300 ">
                        {item.text}
                      </h3>
                    ) : (
                      <p className="text-[11px] font-[500] ">{item.text}</p>
                    )}
                  </div>
                ))}
              </div>
              <div className="py-1">
                <p
                  onClick={handleQuestion}
                  className="text-blue-600 text-[13px] "
                >
                  Take A Quiz
                </p>
                {questionModal && (
                  <div className="bg-[rgba(0,0,0,0.5)] fixed h-[100vh] w-[100vw] top-0 flex items-center justify-center right-0">
                    <div className="h-[60vh] shadow-lg w-[50vw] bg-white">
                      <p onClick={handleQUESTION} className="text-center py-1">
                        Test Your progress From This Course{" "}
                        <span
                          className="p-1 text-red-600 text-[15px]"
                          onClick={() => setQuestionModal(false)}
                        >
                          x
                        </span>
                      </p>
                      <div className="h-[45vh] w-[49vw]  p-4   ">
                        {questionOutput.length !== 0 ? (
                          <div className="flex flex-col justify-between h-[45vh] w-[49vw] ">
                            <div className="shadow-sm h-[514px] w-[945px]  flex flex-col justify-between rounded-[12px] p-[30px]">
                              <div>
                                <p className="font-[500]  text-[#1B1B1B] text-[12px] mb-1">
                                  <span className="text-black">
                                    {currentQuestionIndex + 1},
                                  </span>
                                  {currentQuestion.question}
                                </p>
                                <ul>
                                  {currentQuestion.options.map(
                                    (option, index) => (
                                      <div
                                        key={index}
                                        className="flex items-center gap-2 mb-1"
                                      >
                                        <input
                                          id={`option-${index}`}
                                          name="answer"
                                          type="radio"
                                          checked={selectedOption === option}
                                          value={option}
                                          onChange={() =>
                                            handleOptionChange(option)
                                          }
                                        />
                                        <label
                                          className="text-[#515151] text-[12px]  font-[500]  "
                                          htmlFor={`option-${index}`}
                                        >
                                          {option}
                                        </label>
                                      </div>
                                    )
                                  )}
                                </ul>
                              </div>
                              <div className=" flex flex-col gap-1 ">
                                <p className="text-[#18A09A] text-[20px]">
                                  {dispalyResponse}
                                </p>
                                <p className="text-[#18A09A] text-[20px]">
                                  {precious}
                                </p>
                                {osonwa}

                                <button
                                  onClick={handleNextQuestion}
                                  disabled={!selectedOption}
                                  className=" bg-[#18A09A] flex items-center justify-center text-[#FFFFFF] font-[600] text-[13px] p-[20px] rounded-[12px] w-[100px] h-[40px] "
                                >
                                  Next
                                </button>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="text-red-600 text-[10px] flex items-center h-[30vh] justify-center flex-col">
                            <CircularProgress size={54} color="inherit" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className=" flex items-center justify-center h-[100vh] bg-[rgba(0,0,0,0.1)]  ">
              <CircularProgress size={84} color="inherit" />
            </div>
          )}
        </div>
      )}
    </div>
  );
}


export default LearningRoadMap;