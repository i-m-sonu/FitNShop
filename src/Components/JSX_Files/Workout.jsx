import React from "react";
import "../CSS_Files/Workout.css";

// import Banner2_img from "../_Imgs/Gym.jpg";

import Shoulder1 from "../_Vids/Shoulder_DumbbellFrontRaises.mp4";
import Shoulder2 from "../_Vids/Shoulder_OverheadPresses.mp4";
import Shoulder3 from "../_Vids/Shoulder_LateralRaises.mp4";
import Shoulder4 from "../_Vids/Shoulder_UprightRows.mp4";
import Shoulder5 from "../_Vids/Shoulder_BentOverRows.mp4";
import Shoulder6 from "../_Vids/Shoulder_ReverseFlyes.mp4";
import Shoulder7 from "../_Vids/Shoulder_FacePulls.mp4";


import chest1 from "../_Vids/Chest_PushUps.mp4";
import chest2 from "../_Vids/Chest_BenchPress.mp4";
import chest3 from "../_Vids/Chest_DumbbellFlyes.mp4";
import chest4 from "../_Vids/Chest_InclineBenchPress.mp4";
import chest5 from "../_Vids/Chest_InclineDumbbellPress.mp4";
import chest6 from "../_Vids/Chest_DeclineBenchPress.mp4";
import chest7 from "../_Vids/Chest_DeclineDumbbellPress.mp4";


import back1 from "../_Vids/Back_PullUps.mp4";
import back2 from "../_Vids/Back_BentOverRows.mp4";
import back3 from "../_Vids/Back_LateralRaises.mp4";
import back4 from "../_Vids/Back_SeatedCableRows.mp4";
import back5 from "../_Vids/Back_FacePulls.mp4";
import back6 from "../_Vids/Back_Deadlifts.mp4";
import back7 from "../_Vids/Back_BackExtensions.mp4";


import biceps1 from "../_Vids/Biceps_BicepCurls.mp4";
import biceps2 from "../_Vids/Biceps_HammerCurls.mp4";
import biceps3 from "../_Vids/Biceps_ChinUps.mp4";
import biceps4 from "../_Vids/Biceps_ConcentrationCurls.mp4";
import biceps5 from "../_Vids/Biceps_PreacherCurls.mp4";
import biceps6 from "../_Vids/Biceps_InclineDumbbellCurls.mp4";
import biceps7 from "../_Vids/Biceps_DragCurls.mp4";


import triceps1 from "../_Vids/Triceps_TricepDips.mp4";
import triceps2 from "../_Vids/Triceps_CloseGripBenchPress.mp4";
import triceps3 from "../_Vids/Triceps_SkullCrushers.mp4";
import triceps4 from "../_Vids/Triceps_TricepPushdowns.mp4";
import triceps5 from "../_Vids/Triceps_OverheadTricepExtension.mp4";
import triceps6 from "../_Vids/Triceps_DiamondPushUps.mp4";
import triceps7 from "../_Vids/Triceps_TricepKickbacks.mp4";


import forearm1 from "../_Vids/Forearm_WristCurls.mp4";
import forearm2 from "../_Vids/Forearm_ReverseWristCurls.mp4";
import forearm3 from "../_Vids/Forearm_Farmer'sWalk.mp4";
import forearm4 from "../_Vids/Forearm_PlatePinches.mp4";
import forearm5 from "../_Vids/Forearm_TowelPullUps.mp4";
import forearm6 from "../_Vids/Forearm_GripSqueezes.mp4";


import abs1 from "../_Vids/Abs_Crunches.mp4";
import abs2 from "../_Vids/Abs_Planks.mp4";
import abs3 from "../_Vids/Abs_BicycleCrunches.mp4";
import abs4 from "../_Vids/Abs_SideCrunches.mp4";
import abs5 from "../_Vids/Abs_SidePlanks.mp4";
import abs6 from "../_Vids/Abs_BirdDogs.mp4";


import buttocks1 from "../_Vids/Buttocks_Squats.mp4";
import buttocks2 from "../_Vids/Buttocks_Lunges.mp4";
import buttocks3 from "../_Vids/Buttocks_HipThrusts.mp4";
import buttocks4 from "../_Vids/Buttocks_Clamshells.mp4";
import buttocks5 from "../_Vids/Buttocks_LateralBandWalks.mp4";
import buttocks6 from "../_Vids/Buttocks_LateralLegRaises.mp4";
import buttocks7 from "../_Vids/Buttocks_HipAbduction.mp4";


import legs1 from "../_Vids/Legs_Squats.mp4";
import legs2 from "../_Vids/Legs_LegPresses.mp4";
import legs3 from "../_Vids/Legs_LegExtensions.mp4";
import legs4 from "../_Vids/Legs_HamstringCurls.mp4";
import legs5 from "../_Vids/Legs_InnerThighSqueezes.mp4";
import legs6 from "../_Vids/Legs_StandingCalvesRaises.mp4";
import legs7 from "../_Vids/Legs_SeatedCalvesRaises.mp4";


import { useNavigate } from "react-router-dom";

export const Workout = ({ setExercise }) => {
  const navigate = useNavigate();

  const shoulder = [
    { id: 1, text: "Dumbbell Front Raises", imageUrl: Shoulder1 },
    { id: 2, text: "Overhead Presses", imageUrl: Shoulder2 },
    { id: 3, text: "Lateral Raises", imageUrl: Shoulder3 },
    { id: 4, text: "Upright Rows", imageUrl: Shoulder4 },
    { id: 5, text: "Bent Over Rows", imageUrl: Shoulder5 },
    { id: 6, text: "Reverse Flyes", imageUrl: Shoulder6 },
    { id: 7, text: "Face Pulls", imageUrl: Shoulder7 },
  ];

  const chest = [
    { id: 1, text: "Push Ups", imageUrl: chest1 },
    { id: 2, text: "Bench Press", imageUrl: chest2 },
    { id: 3, text: "Dumbbell Flyes", imageUrl: chest3 },
    { id: 4, text: "Incline Bench Press", imageUrl: chest4 },
    { id: 5, text: "Incline Dumbbell Press", imageUrl: chest5 },
    { id: 6, text: "Decline Bench Press", imageUrl: chest6 },
    { id: 7, text: "Decline Dumbbell Press", imageUrl: chest7 },
  ];

  const back = [
    { id: 1, text: "Pull Ups", imageUrl: back1 },
    { id: 2, text: "Bent Over Rows", imageUrl: back2 },
    { id: 3, text: "Lateral Raises", imageUrl: back3 },
    { id: 4, text: "Seated Cable Rows", imageUrl: back4 },
    { id: 5, text: "Face Pulls", imageUrl: back5 },
    { id: 6, text: "Deadlifts", imageUrl: back6 },
    { id: 7, text: "Back Extensions", imageUrl: back7 },
  ];

  const biceps = [
    { id: 1, text: "Bicep Curls", imageUrl: biceps1 },
    { id: 2, text: "Hammer Curls", imageUrl: biceps2 },
    { id: 3, text: "Chin Ups", imageUrl: biceps3 },
    { id: 4, text: "Concentration Curls", imageUrl: biceps4 },
    { id: 5, text: "Preacher Curls", imageUrl: biceps5 },
    { id: 6, text: "Incline Dumbbell Curls", imageUrl: biceps6 },
    { id: 7, text: "Drag Curls", imageUrl: biceps7 },
  ];

  const triceps = [
    { id: 1, text: "Tricep Dips", imageUrl: triceps1 },
    { id: 2, text: "Close Grip Bench Press", imageUrl: triceps2 },
    { id: 3, text: "Skull Crushers", imageUrl: triceps3 },
    { id: 4, text: "Tricep Pushdowns", imageUrl: triceps4 },
    { id: 5, text: "Overhead Tricep Extension", imageUrl: triceps5 },
    { id: 6, text: "Diamond Push Ups", imageUrl: triceps6 },
    { id: 7, text: "Tricep kickbacks", imageUrl: triceps7 },
  ];
  
  const forearm = [
    { id: 1, text: "Wrist Curls", imageUrl: forearm1 },
    { id: 2, text: "Reverse Wrist Curls", imageUrl: forearm2 },
    { id: 3, text: "Farmer's Walk", imageUrl: forearm3 },
    { id: 4, text: "Plate Pinches", imageUrl: forearm4 },
    { id: 5, text: "Towel Pull Ups", imageUrl: forearm5 },
    { id: 6, text: "Grip Squeezes", imageUrl: forearm6 },
  ];

  const abs = [
    { id: 1, text: "Crunches", imageUrl: abs1 },
    { id: 2, text: "Planks", imageUrl: abs2 },
    { id: 3, text: "Bicycle Crunches", imageUrl: abs3 },
    { id: 4, text: "Side Crunches", imageUrl: abs4 },
    { id: 5, text: "Side Planks", imageUrl: abs5 },
    { id: 6, text: "Bird Dogs", imageUrl: abs6 }
  ];
  
  const buttocks = [
    { id: 1, text: "Squats", imageUrl: buttocks1 },
    { id: 2, text: "Lunges", imageUrl: buttocks2 },
    { id: 3, text: "Hip Thrusts", imageUrl: buttocks3 },
    { id: 4, text: "Clamshells", imageUrl: buttocks4 },
    { id: 5, text: "Lateral Band Walks", imageUrl: buttocks5 },
    { id: 6, text: "Lateral Leg Raises", imageUrl: buttocks6 },
    { id: 7, text: "Hip Abduction", imageUrl: buttocks7 },
  ];
  
  const legs = [
    { id: 1, text: "Squats", imageUrl: legs1 },
    { id: 2, text: "Leg Presses", imageUrl: legs2 },
    { id: 3, text: "Leg Extensions", imageUrl: legs3 },
    { id: 4, text: "Hamstring Curls", imageUrl: legs4 },
    { id: 5, text: "Inner Thigh Squeezes", imageUrl: legs5 },
    { id: 6, text: "Standing Calves Raises", imageUrl: legs6 },
    { id: 7, text: "Seated Calves Raises", imageUrl: legs7 },
  ];

  const handleExercise = (exercise) => {
    setExercise(exercise);
    console.log(exercise);
    navigate("/Workout/Exercises");
  };
  return (
    <>
      <div className="workoutgrid">
        <div
          className="workoutgrid-item shoulder"
          onClick={() => handleExercise(shoulder)}
        >
          <div className="workoutcontainer">
            <h2>Shoulder</h2>
            <p>
              The shoulder muscles include the deltoids, which consist of
              anterior, medial, and posterior heads, responsible for various
              movements such as abduction, flexion, extension, and rotation of
              the arm.
            </p>
          </div>
        </div>

        <div
          className="workoutgrid-item chest"
          onClick={() => handleExercise(chest)}
        >
          <div className="workoutcontainer">
            <h2>Chest</h2>
            <p>
              The chest muscles, primarily the pectoralis major and minor, are
              responsible for movements such as pushing, pressing, and adduction
              of the arms.
            </p>
          </div>
        </div>

        <div
          className="workoutgrid-item back"
          onClick={() => handleExercise(back)}
        >
          <div className="workoutcontainer">
            <h2>Back</h2>
            <p>
              The back muscles, including the latissimus dorsi, rhomboids, and
              erector spinae, support posture, spinal stability, and facilitate
              various upper body movements.
            </p>
          </div>
        </div>

        <div
          className="workoutgrid-item biceps"
          onClick={() => handleExercise(biceps)}
        >
          <div className="workoutcontainer">
            <h2>Biceps</h2>
            <p>
              The biceps brachii, consisting of a short and long head, flexes
              the elbow and supinates the forearm.
            </p>
          </div>
        </div>

        <div
          className="workoutgrid-item triceps"
          onClick={() => handleExercise(triceps)}
        >
          <div className="workoutcontainer">
            <h2>Triceps</h2>
            <p>
              The triceps brachii is a three-headed muscle located on the back
              of the upper arm, responsible for extending the elbow joint.
            </p>
          </div>
        </div>

        <div
          className="workoutgrid-item forearms"
          onClick={() => handleExercise(forearm)}
        >
          <div className="workoutcontainer">
            <h2>Forearm</h2>
            <p>
              The forearm muscles, including the flexors and extensors, control
              wrist and finger movements and support grip strength.
            </p>
          </div>
        </div>

        <div
          className="workoutgrid-item abs"
          onClick={() => handleExercise(abs)}
        >
          <div className="workoutcontainer">
            <h2>Abs</h2>
            <p>
              The abdominal muscles, including the rectus abdominis, obliques,
              and transverse abdominis, provide core stability and support while
              facilitating trunk flexion, rotation, and lateral bending.
            </p>
          </div>
        </div>
        <div
          className="workoutgrid-item buttocks"
          onClick={() => handleExercise(buttocks)}
        >
          <div className="workoutcontainer">
            <h2>Buttocks</h2>
            <p>
              The buttocks muscles, including the gluteus maximus, medius, and
              minimus, are responsible for hip extension, abduction, and
              rotation, providing stability and power for lower body movements.
            </p>
          </div>
        </div>

        <div
          className="workoutgrid-item legs"
          onClick={() => handleExercise(legs)}
        >
          <div className="workoutcontainer">
            <h2>Legs</h2>
            <p>
              The leg muscles consist of the quadriceps, hamstrings, glutes,
              calves, and adductors, responsible for various movements such as
              walking, running, jumping, and squatting
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Workout;
