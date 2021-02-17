const quiz = [
    {
        question: '世の中を驚かせるサービスづくりには、自由な発想を生み出すための働き方がとても重要であるという理念のもと、場所を選ばずどこでも仕事ができる制度をなんというでしょう？',
        answers: [
            'どこでもオフィス制度',
            'ANYWHERE制度'
            ],
        correct: 'どこでもオフィス制度'
    },{
        question: '藤井万希子の出身地は？',
        answers: [
            '残念な小野町',
            'きらきら郡山市'
            ],
        correct: '残念な小野町'
    },{
        question: '根本夢雅の好きな色は？',
        answers: [
            '青',
            '黒'
            ],
        correct: '青'
    },
];
const quizLength = quiz.length;
let quizIndex = 0;


//クイズの問題文、回答の書き換え
const $button = document.getElementsByTagName('a')
const buttonLength = $button.length;

const setUpQuestion = () => {
    document.getElementById('js-questions').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}
setUpQuestion();

//ボタンをクリックしたら正誤判定
const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解');
    } else {
        window.alert('不正解');
    }
    //回答したクイズ数を足していく
    quizIndex++;
    //クイズ数を比べる
    if(quizIndex < quizLength){
        //問題数があればこちらを実行
        setUpQuestion();
    } else {
        //問題数がもうなければ、こちらを実行
        window.alert('終了');
    }

};

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    })
    handlerIndex++;
};