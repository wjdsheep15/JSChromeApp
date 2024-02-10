const quotes = [
  {
    quote: "성공은 최선을 다해 노력하는 과정에서 오는 것이다.",
    author: "벤자민 프랭클린",
  },
  {
    quote: "삶이 있는 한 희망은 있다.",
    author: "키케로",
  },
  {
    quote: "모든 인생 문제의 해결책은 참을성을 가지고 대기하는 것이다.",
    author: "프랑츠 카프카",
  },
  {
    quote: "행복은 습관이다. 그것을 몸에 지니라.",
    author: "허먼 헤세",
  },
  {
    quote: "바쁠수록 여유를 가지라.",
    author: "괴테",
  },
  {
    quote: "현실을 수용하는 것이 첫 번째 단계다.",
    author: "캐스터",
  },
  {
    quote: "지식은 힘이다.",
    author: "프랜시스 베이컨",
  },
  {
    quote: "모든 성취의 시작점은 갈망이다.",
    author: "나폴레온 힐",
  },
  {
    quote: "자신을 알라.",
    author: "소크라테스",
  },
  {
    quote: "삶은 자신을 발견하는 것이다. 자신을 발견하는 것은 창조하는 것이다.",
    author: "크리슈나무르티",
  }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length )]

quote.innerText= todaysQuote.quote;
author.innerText = todaysQuote.author;