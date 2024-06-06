document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.querySelector('#startQuiz');
    const infoBox = document.querySelector('.info_box');
    const continueBtn = document.querySelector('.restart');
    const quizBox = document.querySelector('.quiz_box');
    const resultBox = document.querySelector('.result_box');
    const questionText = document.querySelector('#questionText');
    const optionList = document.querySelector('#optionList');
    const timerSec = document.querySelector('.timer_sec');
    const nextButton = document.querySelector('#nextButton');
    const currentQuestionElement = document.querySelector('#currentQuestion');
    const totalQuestionsElement = document.querySelector('#totalQuestions');
    const scoreElement = document.querySelector('#score');
    const totalScoreElement = document.querySelector('#totalScore');

    const replayBtns = document.querySelectorAll('.restart');
    const quitBtns = document.querySelectorAll('.quit');



    let timer;
    let timeValue = 15;
    let questionCount = 0;
    let score = 0;



const questions = [
    {
        question: "When asked what is your salary expectations how should you respond?",
        answers: [    
               { text: " Refuse to answer the question", correct: false},
               { text: " Provide a specific number without any research", correct: false},
               { text: " Provide a salary range based on market research and your experience", correct: true},
               { text: "Ask the interviewer what they think you should be paid ", correct: false},
        ]
    },
    {
        question: "When is it appropriate to discuss salary and benefits during an interview?",
        answers: [    
               { text: "As soon as the interview starts ", correct: false},
               { text: "During the first phone screening ", correct: false},
               { text: "Only after the interviewer brings it up or in a follow-up interview ", correct: true},
               { text: " Before the interview ends", correct: false},
        ]   
    },
    {
        question: "What is the best way to introduce yourself to the interviewer?",
        answers: [    
               { text: "Use a casual greeting like 'Hey'", correct: false},
               { text: "Just start talking about your qualifications", correct: false},
               { text: "Wait for the interviewer to ask for your introduction" , correct: false},
               { text: " Shake hands, make eye contact, and state your full name confidently", correct: true},
        ]
            },
            {
                question: "How should you handle a question about your weaknesses?",
                answers: [    
                       { text: "Talk about a real weakness and explain how you are working to improve it", correct: true},
                       { text: "Make a joke about your weaknesses", correct: false},
                       { text: "Mention a weakness that is irrelevant to the job", correct: false},
                       { text: "Deny having any weaknesses", correct: false},   
                ]
                    },
                    {
                        question: "If an interviewer asks, 'Do you have any questions for us?', what is a strong response?",
                        answers: [    
                               { text: "Ask about vacation time and benefits only", correct: false},
                               { text: "Ask insightful questions about the company's goals, challenges, or culture", correct: true},
                               { text: "Ask if you got the job", correct: false},
                               { text: "Say you have no questions because everything was covered", correct: false},   
                        ]  
                    },
                    {
                        question: "What should you do if you don't know the answer to a question?",
                        answers: [    
                               { text: "Admit you don't know but express a willingness to learn", correct: true},
                               { text: "Make up an answer on the spot", correct: false},
                               { text: "Ask the interviewer to skip the question", correct: false},
                               { text: " Ignore the question and talk about something else", correct: false},
                        ]
                    },
                    {
                        question: "When asked 'Tell me about a time you faced a challenge at work,' what is the best approach?",
                        answers: [    
                               { text: "Make up a story that sounds impressive", correct: false},
                               { text: "Avoid the question if you don't have a relevant example", correct: false},
                               { text: "Describe a challenge but don't explain how you handled it", correct: false},
                               { text: " Use the STAR method to describe the Situation, Task, Action, and Result", correct: true},
                        ]  
                    },
                    {
                        question: "What is the most effective way to research a company before an interview?",
                        answers: [    
                               { text: "Look at the company’s job listings", correct: false},
                               { text: "Browse the company’s social media pages", correct: false},
                               { text: " Talk to current employees", correct: false},
                               { text: "Read the company’s annual reports and recent news articles", correct: true},
                        ]  
                    },
                    {
                        question: "How should you respond if you are asked about a gap in your employment history?",
                        answers: [    
                               { text: "Blame your previous employers", correct: false},
                               { text: "Honestly explain the reason for the gap and what you did during that time", correct: true},
                               { text: "Lie about the gap", correct: false},
                               { text: "Avoid the question", correct: false},
                        ]    
                    },
                    {
                        question: "How should you respond to the question, 'Where do you see yourself in five years?'",
                        answers: [    
                               { text: "Mention that you see yourself in the interviewer's position", correct: false},
                               { text: " Indicate that you haven't thought that far ahead", correct: false},
                               { text: "Describe your ultimate dream job, regardless of its relevance to the current position", correct: false},
                               { text: "Discuss your career goals and how this role aligns with them", correct: true},
                        ] 
                    },
                    {
                        question: "How should you prepare for common interview questions?",
                        answers: [    
                               { text: "Develop a few key points to address each question", correct: true},
                               { text: "Memorize answers verbatim", correct: false},
                               { text: "Wing it during the interview", correct: false},
                               { text: "Ask a friend to answer for you", correct: false},
                        ] 
                    },
                    {
                        question: "What is the best way to handle a question about why you left your last job?",
                        answers: [    
                               { text: " Criticize your former employer", correct: false},
                               { text: "State that you were not happy without giving specifics", correct: false},
                               { text: "Provide a positive reason, focusing on seeking new challenges or growth opportunities", correct: true},
                               { text: "Say it’s personal and refuse to answer", correct: false},
                        ]  
                    },
                    {
                        question: "What is the best way to answer the question, 'Why should we hire you?'",
                        answers: [    
                               { text: "Say that you don't know", correct: false},
                               { text: "Compare yourself to other candidates negatively", correct: false},
                               { text: "Emphasize your unique skills, experiences, and how they match the job requirements", correct: true},
                               { text: "Talk about how badly you need the job", correct: false},
                        ]    
                    },
                    {
                        question:  "What is the STAR method in answering behavioral interview questions?",
                        answers: [    
                               { text: "A technique where you outline the Situation, Task, Action, and Result", correct: true},
                               { text: "A scoring system for interview performance", correct: false},
                               { text: "A method to avoid difficult questions", correct: false},
                               { text: "A way to rate the difficulty of questions", correct: false},
                        ]   
                    },
                    {
                        question:  "Which of the following is an example of a good question to ask at the end of an interview?",
                        answers: [    
                               { text: "What is the company's policy on office parties?", correct: false},
                               { text: "How many hours of overtime will I be expected to work?", correct: false},
                               { text: "How soon can I expect a raise?", correct: false},
                               { text: "Can you describe the company culture and the type of employee who tends to succeed here?", correct: true},
                        ]   
                    },
                    {
                        question:  "What should you bring to an interview?",
                        answers: [    
                               { text: "A copy of your resume, a notepad, and a pen", correct: true},
                               { text: " A list of your demands", correct: false},
                               { text: " Only your smartphone", correct: false},
                               { text: " A gift for the interviewer", correct: false},
                        ]  
                    },
                    {
                        question:  "How should you handle the question, 'What are your salary expectations?'",
                        answers: [    
                               { text: "Ask the interviewer what they think you should be paid", correct: false},
                               { text: " Provide a specific number without any research", correct: false},
                               { text: "Provide a salary range based on market research and your experience", correct: true},
                               { text: "Refuse to answer the question", correct: false},
                        ]  
                    },
                    {
                        question:  "What should you do immediately after an interview?",
                        answers: [    
                               { text: "Start calling other companies", correct: false},
                               { text: "Send a thank-you email or note expressing appreciation for the opportunity", correct: true},
                               { text: "Post about the interview on social media", correct: false},
                               { text: "Call the interviewer to ask if you got the job", correct: false},
                        ]    
                    },
                    {
                        question:  "How can you effectively follow up after an interview if you haven't heard back?",
                        answers: [    
                               { text: "Complain on social media", correct: false},
                               { text: "Send a polite follow-up email after a week", correct: true},
                               { text: " Show up at the office unannounced", correct: false},
                               { text: " Call the interviewer every day", correct: false},
                        ]    
                    },
                    {
                        question:  "How can you best demonstrate your interest in the position during an interview?",
                        answers: [    
                               { text: "Tell the interviewer you have no other job offers", correct: false},
                               { text: "Mention how desperate you are for a job", correct: false},
                               { text: " Show enthusiasm and ask insightful questions about the role and company", correct: true},
                               { text: "Repeatedly express how much you want the job", correct: false},
                        ] 
                    },
                    {
                        question:  "What is the recommended dress code for most professional job interviews?",
                        answers: [    
                               { text: "Whatevwer you feel comfortable in", correct: false},
                               { text: "Formal business attire", correct: true},
                               { text: "Casual attire", correct: false},
                               { text: "Business casual", correct: false},
                        ]   
                    }
                    
];
totalQuestionsElement.textContent = questions.length;
    totalScoreElement.textContent = questions.length;

    startBtn.addEventListener('click', () => {
        document.querySelector('.start_btn').style.display = 'none';
        infoBox.style.display = 'block';
    });

    continueBtn.addEventListener('click', () => {
        infoBox.style.display = 'none';
        quizBox.style.display = 'block';
        showQuestion();
        startTimer();
    });

    nextButton.addEventListener('click', () => {
        questionCount++;
        if (questionCount < questions.length) {
            showQuestion();
            resetTimer();
            startTimer();
        } else {
            clearInterval(timer);
            quizBox.style.display = 'none';
            resultBox.style.display = 'block';
            scoreElement.textContent = score;
        }
    });

    function showQuestion() {
        const question = questions[questionCount];
        questionText.textContent = question.question;
        optionList.innerHTML = '';
        question.answers.forEach(answer => {
            const optionElement = document.createElement('div');
            optionElement.classList.add('option');
            optionElement.textContent = answer.text;
            optionElement.addEventListener('click', () => optionSelected(optionElement, answer));
            optionList.appendChild(optionElement);
        });
        currentQuestionElement.textContent = questionCount + 1;
        nextButton.style.display = 'none';
    }

    function optionSelected(optionElement, selectedOption) {
        clearInterval(timer);
        const question = questions[questionCount];
        const correctOption = question.answers.find(answer => answer.correct);
        
        optionList.childNodes.forEach(child => {
            child.classList.add('disabled');
            if (child.textContent === correctOption.text) {
                child.classList.add('correct');
            } else if (child === optionElement && !selectedOption.correct) {
                child.classList.add('wrong');
            }
        });

        if (selectedOption.correct) {
            score++;
        }

        nextButton.style.display = 'block';
    }

    function startTimer() {
        timer = setInterval(() => {
            timeValue--;
            timerSec.textContent = timeValue;
            if (timeValue <= 0) {
                clearInterval(timer);
                nextButton.style.display = 'block';
                showCorrectAnswer();
            }
        }, 1000);
    }

    function resetTimer() {
        clearInterval(timer);
        timeValue = 15;
        timerSec.textContent = timeValue;
    }

    function showCorrectAnswer() {
        const question = questions[questionCount];
        const correctOption = question.answers.find(answer => answer.correct);
        optionList.childNodes.forEach(child => {
            if (child.textContent === correctOption.text) {
                child.classList.add('correct');
            }
        });
    }

    replayBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Reset quiz and show the questions
            resetQuiz();
            infoBox.style.display = 'none';
            quizBox.style.display = 'block';
            resultBox.style.display = 'none'; // Hide the result box
            showQuestion();
            startTimer();
        });
    });

    // Add event listeners to quit buttons
    quitBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Redirect to the start
            window.location.href = 'index.html'; // Replace 'index.html' with your homepage URL
        });
    });

    // Function to reset the quiz
    function resetQuiz() {
        questionCount = 0;
        score = 0;
        timeValue = 15;
        clearInterval(timer);
    }
});