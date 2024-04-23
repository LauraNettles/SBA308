// Instructions
// You will create a script that gathers data, processes it, and then outputs a consistent result as described by a specification. This is a very typical situation in industry, and this particular scenario has been modified from a real application. The data you will use is provided below.
// You will be provided with four different types of data:

// A CourseInfo object, which looks like this:
// {
//   "id": number,
//   "name": string,
// }
const num_assignments = 11;

const CourseInfo = {
    course_id: 12345,
    course_name:"Software Engineering",
}

console.log(CourseInfo);
console.log("Welcome to Software Engineering, 12345.  This course covers programs used to develope websites and applications.  This course includes lessons in JavaScript, HTML, CSS, GitHub, and other tools used in Software Development.");
console.log("To successfully pass this course the following assigments must be completed with a grade of 70% or higher:")

// An AssignmentGroup object(quizzes, labs, test), which looks like this:
// {
//   "id": number,......course_id
//   "name": string,
  // the ID of the course the assignment group belongs to
//   "course_id": number,
  // the percentage weight of the entire assignment group
//   "group_weight": number,
//   "assignments": [AssignmentInfo],
// }

const AssignmentGroup1 = {
    group1_id: "Quizzes",
    part1_name: "Quizzes on HTML, CSS, and JavaScript",
    //point to course_id
    group1_weight: 20,

// Each AssignmentInfo object within the assignments array looks like this:
// {
//   "id": number,
//   "name": string,
  // the due date for the assignment
//   "due_at": Date string,
  // the maximum points possible for the assignment
//   "points_possible": number,
// }
    assignments_part1: [
        {
            quiz1_id: 1,
            quiz1_name: "Quiz 1",
            quiz1due_on: "2024-01-24",
            points_quiz1: 50, 
        },
        {
            quiz2_id: 2,
            quiz2_name: "Quiz 2",
            quiz2due_on: "2024-02-22",
            points_quiz2: 50, 
        },
        {
            quiz3_id: 3,
            quiz3_name: "Quiz 3",
            quiz3due_on: "2024-03-24",
            points_quiz3: 50, 
        },
        {
            quiz4_id: 4,
            quiz4_name: "Quiz 4",
            quiz4due_on: "2024-04-23",
            points_quiz4: 50, 
        }
    ]
}

console.log(AssignmentGroup1);

const AssignmentGroup2 = {
    group2_id: "Labs",
    part2_name: "Labs on HTML, CSS, and JavaScript",
    //point to course_id
    group2_weight: 50,
    assignments_part2: [
        {
            lab1_id: 1,
            lab1_name: "Lab 1",
            lab1due_on: "2024-01-31",
            points_lab1: 100, 
        },
        {
            lab2_id: 2,
            lab2_name: "Lab 2",
            lab2_on: "2024-02-29",
            points_lab2: 100, 
        },
        {
            lab3_id: 3,
            lab3_name: "Lab 3",
            lab3due_on: "2024-03-31",
            points_lab3: 100, 
        },
        {
            lab4_id: 4,
            lab4_name: "Lab 4",
            lab4due_on: "2024-04-30",
            points_lab4: 100, 
        },
        {
            lab5_id: 5,
            lab5_name: "Final Project",
            lab5due_on: "2024-05-14",
            points_lab5: 100, 
        }
    ]
}

console.log(AssignmentGroup2);

const AssignmentGroup3 = {
    group3_id: "Test",
    part3_name: "Test on HTML, CSS, and JavaScript",
    //point to course_id
    group3_weight: 30,
    assignments_part3: [
        {
            test1_id: 1,
            test1_name: "Midterm",
            test1due_on: "2024-03-07",
            points_test1: 150, 
        },
        {
            test2_id: 2,
            test2_name: "Final",
            test2due_on: "2024-05-14",
            points_test2: 150, 
        }
    ]
}

console.log(AssignmentGroup3);

// An array of LearnerSubmission objects, which each look like this:
// {
//     "learner_id": number,
//     "assignment_id": number,
//     "submission": {
//       "submitted_at": Date string,
//       "score": number
//     }
// }
const LearnerSubmission = [
    {
        learner1_id: 123,
        learner1_name: "Sally Catchingon",
        //assignments_part1 = retrieve each grade for [1, 2, 3, 4]
        learner1_quizScores: [30, 40, 40, 30],
        learner1_quizzesSubmittedOn: ["2024-01-24", "2024-02-22", "2024-03-24", "2024-04-23"]
        //create function "submission"....to record date submitted, and score
        //assignments_part2 = retrieve each grade for [1, 2, 3, 4. 5]
        //create function "submission"....to record date submitted, and score
        //assignments_part3 = retrieve each grade for [1, 2]
    },
    {
        learner2_id: 456,
        learner2_name: "Nellies Overachieving"
        //assignments_part1 = retrieve each grade for [1, 2, 3, 4]
        //create function "submission"....to record date submitted, and score
        //assignments_part2 = retrieve each grade for [1, 2, 3, 4. 5]
        //create function "submission"....to record date submitted, and score
        //assignments_part3 = retrieve each grade for [1, 2]
    },
    {
        learner3_id: 789,
        learner3_name: "Tommy Doesntgetit"
        //assignments_part1 = retrieve each grade for [1, 2, 3, 4]
        //create function "submission"....to record date submitted, and score
        //assignments_part2 = retrieve each grade for [1, 2, 3, 4. 5]
        //create function "submission"....to record date submitted, and score
        //assignments_part3 = retrieve each grade for [1, 2]
    }
]

console.log(LearnerSubmission);

// Your goal is to analyze and transform this data such that the output of your program is an array of objects, each containing the following information in the following format:
// {
    // the ID of the learner for which this data has been collected
    // "id": number,
    // the learner’s total, weighted average, in which assignments
    // with more points_possible should be counted for more
    // e.g. a learner with 50/100 on one assignment and 190/200 on another
    // would have a weighted average score of 240/300 = 80%.
    // "avg": number,
    // each assignment should have a key with its ID,
    // and the value associated with it should be the percentage that
    // the learner scored on the assignment (submission.score / points_possible)
    // <assignment_id>: number,
    // if an assignment is not yet due, it should not be included in either
    // the average or the keyed dictionary of scores
// }

// Create a function named getLearnerData() that accepts these values as parameters, in the order listed: (CourseInfo, AssignmentGroup, [LearnerSubmission]), and returns the formatted result, which should be an array of objects as described above.

function getLearnerData(course, ag, submissions) {
    // here, we would process this data to achieve the desired result.
    // write out the function(s) to do the following calculations
    // wriet out try/catch statements to catch for errors, missed assignements, and late assignments
    const result = [
      {
        //id: number, //retrieve learner_id from LearnerSubmission,
        //avg: number, //=submission.score/points_possible(or points_quiz, points_lab, points_test)
        // 1: 0.94, // 47 / 50
        // 2: 1.0 // 150 / 150 //calculate grade for each assignment
      },
      {
         //id: number, //retrieve learner_id from LearnerSubmission,
        //avg: number, //=submission.score/points_possible(or points_quiz, points_lab, points_test)
        // 1: 0.94, // 47 / 50
        // 2: 1.0 // 150 / 150 //calculate grade for each assignment
      }
    ];
  
    return result; //record results
  }
  
  // send results from the called arrays to memory in "result"
  const result = getLearnerData(CourseInfo, AssignmentGroup1, AssignmentGroup2, AssignmentGroup3, LearnerSubmission);
  
  // print "print result on console"
  console.log(result);