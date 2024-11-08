import React, { useContext, useState } from "react";
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
  } = useContext(GlobalContext);
const [isModel,setIsModel]=useState(false)

console.log(newresharchResponse);




const handleNodeClick = (value) => {
  setIsLableEmpty(true)
  setSelectedLabel(value);
  setIsModel(true)
  callMoreResearch(); 
};

 
// const Output = newresharchResponse[newresharchResponse.length - 1];

  const initialNodes = responseGenarated.flatMap((el, index) => [
    {
      id: `result-${10}`,
      type: "topic",
      data: {
        text: (
          <div>
            <p>{options} Road Map</p>
          </div>
        ),
      },
      position: { x: 500, y: -200 },
    },
    {
      id: `${el.id}`,
      type: "firstOutPut",
      data: { text: el.Courses, onClick: () => handleNodeClick(el.Courses) },
      position: { x: 500, y: 10 + index * 200 },
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
      position: { x: 100, y: 8 + index * 200 },
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
      position: { x: 100, y: 70 + index * 200 },
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
      position: { x: 100, y: 132 + index * 200 },
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
      position: { x: 900, y: 5 + index * 200 },
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
      position: { x: 900, y: 100 + index * 200 },
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

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div>
      {responseGenarated.length > 0 ? (
        <div
          className=""
          style={{
            width: "100vw",
            height: "200vh",

            marginBottom: "100px",
            background: "#fffefe",
          }}
        >
          <div className="h-[10vh] mb-6 px-10 sticky top-0 bg-[#0f172a] z-20 text-yellow-50 flex items-center justify-between  ">
            <p>Tech RoadMap</p>
            <a href="https://tech-quiz-gxmx.vercel.app/?vercelToolbarCode=1Iqfb5DbSiEhhQs">
              
              Take A Quiz
            </a>
          </div>
          <div className="reactflow-container" style={{ height: "190vh" }}>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              nodeTypes={nodeTypes}
              // panOnScroll={false}
              // zoomOnScroll={true} // Prevents zooming with scroll
              // zoomOnPinch={true} // Prevents zooming with pinch gestures
              fitView
            >
              {/* <Background /> */}
            </ReactFlow>
          </div>
          <div className=" flex h-[50vh] items-center bg-[#f9fafb] justify-center">
            <div className="h-[30vh] w-[50vw] ">
              <h2 className="text-center text-[50px] font-[800]">
                Join the Community
              </h2>
              <p className="text-center font-[300] ">
                roadmap <span className="underline">is our 1st project</span>{" "}
                and is visited by
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
                <p className="text-end">
                  The top resource from Osonwa Precious
                </p>
                <p className="text-end">frontEnd Developer</p>
                <p className="text-end">development and deploment</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>no data networkerror</p>
      )}
      {isModel && (
        <div className="h-[100vh] z-50 px-2 py-5  overflow-y-scroll w-[40vw] shadow-lg bg-white  fixed top-0 right-0">
          <div
            onClick={() => setIsModel(false)}
            className="right-5 h-[30px] w-[30px] top-2 fixed flex items-center justify-center  text-red-600 bg-red-100 rounded-[100%]"
          >
            <p>x</p>
          </div>

          <div>
            {newresharchResponse.map((item) => (
              <div key={item.key}>
                {item.type === "heading" ? (
                  <h2 className="font-[900] text-center text-[15px] text-black mb-1  ">
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
        </div>
      )}
    </div>
  );
}


export default LearningRoadMap;