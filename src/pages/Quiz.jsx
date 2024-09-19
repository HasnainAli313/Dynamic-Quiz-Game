
function Quiz() {

    const questions = [
        {
        question: "What does Zam Zam mean?",
        answers:["Holy", "water well", "Stop" ],
        correct:"Stop"
        },
        {
        question: "Who was a first cousin of Prophet Muhammad (peace be upon him)?",
        answers:["Abdullah ibn al-Abbas (ra)","Abdullah ibn Umar (ra)",'Ali ibn Abi Talib (ra)' ],
        correct:"Abdullah ibn al-Abbas (ra)"
        },
        {
        question: "Who was Umar bin Abdul Aziz (r)?",
        answers:["A companion of the Prophet (ﷺ)","Grandson of Umar ibn al-Khattab","Great grandson of Umar ibn al-Khattab "],
        correct:"Great grandson of Umar ibn al-Khattab"
        },
        {
        question: "In Jannah, what is Tuba?",
        answers:["A fruit","A tree","A river"],
        correct:"A tree"
        },
        {
        question: "What does Allah’s name Al-Ghani mean?",
        answers:["The Giver","The Protector","The Independant"],
        correct:"The Independant "
        }
    ];

    console.log(questions[0].question)
  return (
   <section>
        <h1>Dynamic Quiz Game</h1>
        <div>
           
        </div>
   </section>
  )
}

export default Quiz