import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import testimonialsHeader from "@/assets/testimonials-header.png";

const Testimonials = () => {
  const allTestimonials = [
    // 기존 후기들
    {
      challenge: "모닝리추얼챌린지",
      content: "모리가 주는 기분과 성취가 너무 소중해요. 밀도 있게 아침 시간을 보내면 성취감이 크고 높은 생산성으로 하루를 보낼 수 있을 것 같은 기분이 더욱 크게 들어요. 모리는 제 삶의 중심이자 꾸준함의 힘을 알려주고 있는 원동력이라서 계속 이어나가고 싶어요.",
      author: "주디"
    },
    {
      challenge: "영어리추얼챌린지",
      content: "영어 공부뿐만이 아니라 하루 루틴을 형성하는 데도 큰 도움이 되었어요. 하루를 보다 여유롭게, 그리고 자기주도적으로 이끌어가는, 한 마디로 주체적인 삶을 산다는 만족감이 굉장히 컸어요!",
      author: "망고"
    },
    {
      challenge: "운동리추얼챌린지",
      content: "한 달만에 약 1.5kg 감량에 성공했습니다! 운동을 한 다음 날 아침은 확실히 기상하기가 한결 수월했고, 출근길 발걸음도 이전보다 가벼워졌어요. 그만큼 운동이 일상의 한 부분으로 자연스럽게 자리 잡았다는 것을 체감할 수 있었습니다.",
      author: "지로"
    },
    {
      challenge: "기록리추얼챌린지",
      content: "매일 글을 쓰고, 다른 사람들이 읽는다는 전제를 두다 보니 글의 흐름을 어떻게 잡을지 고민하게 되었고, 업로드 전에 최소 한두 번은 다시 읽고 고치는 습관이 생겼습니다! 단순히 '글을 쓴다'는 행위가 아니라, '읽히는 글을 쓴다'는 태도로 변화한 것이 가장 큰 성과라고 느껴요.",
      author: "지로"
    },
    {
      challenge: "독서리추얼챌린지",
      content: "내가 지금 무언가 바꾸고 싶다면, 더 나아지고 싶은 어떤 방향이 있다면, 책을 읽어야 한다고 생각해요. 저는 매일 읽는 책 30분이 제 인생을 바꾸고 있다고 확신합니다.",
      author: "쨈"
    },
    {
      challenge: "정리리추얼챌린지",
      content: "해결되지 않았던 문제들을 하나둘 정리해나가는 기분이에요. 마음상태가 집에도 반영되기 때문에, 이 집을 치워야 새로운 시작을 할 수 있다는 생각이 들었습니다.",
      author: "쨈"
    },
    {
      challenge: "모닝리추얼챌린지",
      content: "모리를 하기 전에는 하고 싶은 공부가 있어도 못하거나 미루게 되었었고 어쩔수없이 모든 생활이 일에 맞추어져 있었어요. 그런데 모리챌린지 이후에는 내가 하고싶은게 생활의 1순위가 되었어요. 환경과 시스템을 만드는 것이 중요하다는 것을 배운 시간이었어요.",
      author: "재은"
    },
    {
      challenge: "영어리추얼챌린지",
      content: "이번 챌린지를 통해 나를 소진하는 것이 아닌 채우는 귀한 것을 하는 시간을 갖게 되어서 좋았습니다. 예전부터 지금도 저의 귀감이 되는 롤라님의 실행력, 끈기, 긍정의 끌어당김 등 롤라님의 매력을 가까이서 느낄 수 있어서 좋았어요!",
      author: "그레이스"
    },
    {
      challenge: "운동리추얼챌린지",
      content: "내가 건강한 삶을 살고 있다는 만족감과 뿌듯함이 생겼고, 살도 조금 빠졌어요! 내가 나를 잘 챙기고 있다는 느낌이 너무 좋았습니다.",
      author: "율무"
    },
    {
      challenge: "기록리추얼챌린지",
      content: "사람들에게 말을 하면서 서로 공감하고 슬픔은 나누며 스트레스를 푼다고 생각했는데 글에 감정을 녹이는 게 더욱 깊이 있는 치유가 됨을 느꼈어요. 밀도 있고 짜임새 있는 글을 쓸 수 있는 연습을 꾸준히 하고 싶어요!",
      author: "주디"
    },
    {
      challenge: "독서리추얼챌린지",
      content: "한 달 동안 다섯권이나 되는 책을 읽었어요! 30분 책을 읽기 시작하니 한 시간, 두 시간도 읽게 되더라고요. 독서리추얼 덕에 시도하기 쉬운 작은 습관 하나로 독서의 재미에 푹 빠져보는 한 달이었어요!",
      author: "올리"
    },
    {
      challenge: "정리리추얼챌린지",
      content: "버리고 나니 가뿐함을 이루 말로 표현할 수 없더라고요! 집에있는거 전반적으로 다 버리고 싶은 마음이 들었어요. 시간이 나면 각 방별로 더 열심히 정리해보고 싶어요.",
      author: "니나"
    },
    {
      challenge: "모닝리추얼챌린지",
      content: "모리 이전에는 기분좋게 아침을 시작하지 못했는데, 그 이유가 하루를 자발적으로 시작하지 못했기 때문인 것 같아요. 함께 하는 친구와 나를 위한 시간이 있으니 아침이 즐거워요! 아침의 나를 믿는 마음이 생겨서, 나를 믿으면서 하루를 시작하는 느낌이 좋아요.",
      author: "올리"
    },
    {
      challenge: "영어리추얼챌린지",
      content: "약 3개월 동안 매일 짤막한 영어 공부와 함께 영어 일기 쓰기를 해온 스스로가 대견한 것 같습니다. 3개월 동안 꾸준히 해보겠다는 마음가짐을 갖고 정말 실천한다면 성공확률 100%일 것 같습니다.",
      author: "모르페우스"
    },
    {
      challenge: "운동리추얼챌린지",
      content: "운리를 통해 오랜만에 밖에서 러닝을 했는데, 내가 왜 노래를 들으면서 밖에서 뛰는 걸 좋아하는 지 다시 알려주었던 좋은 시간이었어요. 오직 운동에만 집중하니까 다른 잡생각이 안 들고, 여러 쓸데없는 생각을 떨쳐낼 수 있는 힘을 길러주는 시간이었어요!",
      author: "재은"
    },
    {
      challenge: "기록리추얼챌린지",
      content: "일어나자마자 온갖 정보를 넣는 대신 쏟아내는 것, 무언가 쓰는 걸로 습관이 잡혀서 좋아요. 소비자에서 생산자로!",
      author: "쏭갱"
    },
    {
      challenge: "독서리추얼챌린지",
      content: "저녁 시간에 진짜 낭비를 많이 한다는 느낌이 있었는데, 이 시간에 줌을 키고 같이 책을 읽는게 좋았어요. 책 읽기 전에 잘 준비하고, 책 다 읽고 바로 침대에 누워 잘 준비를 하니 12시 전에 자는 게 습관이 들었어요.",
      author: "요나"
    },
    {
      challenge: "모닝리추얼챌린지",
      content: "모리를 완벽하게 성공한 날은 하루종일 기분이 좋고, 계획한 일들이 순조롭게 진행되는 경향이 있어요. 모리 덕분에 내가 목표한 활동을 나의 의지로 계속할 수 있어서, 내가 어제보다 더 성장한 사람이 됐다는 느낌이 너무 좋아요.",
      author: "지로"
    },
    {
      challenge: "영어리추얼챌린지",
      content: "하루에 한 번이라도 영어를 접하고, 생각하게 된다는 점이 좋아요. 강제로 시스템 안에 들어갈 수 있어 가능한 것 같아요. 10분만 영어 컨텐츠 보는게 어려운게 아닌데 혼자 하긴 어렵거든요. 제 알고리즘도 점점 영어로 바뀌고 있어요.",
      author: "모브"
    },
    {
      challenge: "운동리추얼챌린지",
      content: "러닝을 해보자고 해놓고 거의 10년이상 못했는데 처음으로 일주일에 최소 2번은 러닝을 하게 되었어요. 그것만으로도 정말 어마무시한 변화! 운동한 날은 확실히 에너지가 넘치고, 거의 4-5시까지는 긍정의 기운이 따라가는것 같아요.",
      author: "니나"
    },
    {
      challenge: "기록리추얼챌린지",
      content: "제가 글쓰기를 좋아한다는 걸 알게되었어요! 다른 사람의 사연만 글로 받아 정리하는 기록만 해왔는데 나를 위한 기록을 하기 시작하니까 한달간의 마음변화를 회고할 수 있어서 좋았어요.",
      author: "춘봉"
    },
    {
      challenge: "독서리추얼챌린지",
      content: "독서습관을 꼭 만들고 싶었는데, 독서리추얼을 하면서 3주 동안 4권의 책을 읽었어요. 주제가 정말 다른 책들 속에 '변화'라는 공통적인 키워드가 있었다는 것을, 그리고 이것이 지금 저에게 꼭 필요한 키워드라는 것을 깨달았어요.",
      author: "수수"
    },
    {
      challenge: "모닝리추얼챌린지",
      content: "지나치지 않고 매일 조금씩이라도 하게 되는 좋은 습관이 생겼고, 고요한 새벽시간의 매력을 알게된 것만으로도 인생의 큰 자산인 것 같아요. 늦잠, 음주, 자극적인 음식 등 욕망을 충족하는 짧은 행복보다 스스로 통제를 통해 얻는 성취감, 안정감이 더 오래가는 행복이라는 것을 알게 됐어요.",
      author: "톨부장"
    },
    {
      challenge: "영어리추얼챌린지",
      content: "출근시간에 맞춰 하루를 시작하지 않고 하루를 일이 아닌 '나'에게 맞춰서 시작한다는 느낌이 들었어요. 영어일기를 쓰고 문장을 외워서 말로 하는 간단한 것도 일상이 되고 꾸준히 쌓이며 스스로를 영어하는 사람으로 만들어줄 것이라 생각해요.",
      author: "한나"
    },
    {
      challenge: "독서리추얼챌린지",
      content: "규칙적인 독서 루틴으로 환경을 바꾸고 습관으로 만드는 느낌이 좋아요. 책을 읽으면서 내면 탐구로 '나'를 정의하고, 내가 좋아하는 것들을 배우며 경험해보고 있어요.",
      author: "민송"
    },
    // 새로운 후기들
    {
      challenge: "모닝리추얼챌린지",
      content: "미라클모닝을 안 해본 건 아닌데, 항상 화면만 키고 제대로 하지 않았어요. 그런데 모리챌린지의 툴은 할 수밖에 없게 저를 이끌었어요.",
      author: "데이지"
    },
    {
      challenge: "영어리추얼챌린지",
      content: "매일 영어로 일기를 쓰면서 영어로 뭔가를 표현하는 게 생각만큼 어렵지는 않다고 느꼈고, 영어 공부가 재미있었어요.",
      author: "세라"
    },
    {
      challenge: "독서리추얼챌린지",
      content: "이 시간만큼은 다른 잡생각에서 벗어나 책에 몰입할 수 있어요. 작가들의 삶의 지혜를 통해 내 안을 단단하게 채워 나가고 싶어요.",
      author: "율무"
    },
    {
      challenge: "모닝리추얼챌린지",
      content: "나쁜 버릇을 고칠 수 없다고, 늘 바꾸려고 노력하지만 실패하는 나를 보기만 했었는데 이번 모리를 통해 변화하는 내 자신을 관찰하고 있어서 꾸준히 하고 싶어요.",
      author: "로로"
    },
    {
      challenge: "영어리추얼챌린지",
      content: "아침에 일어나자마자 영어공부를 하는게 인생에 처음 있는 일인데, 공부 모드마인드로 하루를 시작하니까 하루 전체를 성실하게 보낼 수 있어서 좋았어요. 30분의 투자로 매일 영어 표현들을 2~3개 배우는 점이 장기적으로 큰 영향이 있을 것 같다는 기대가 생겼고, 영어일기를 마음먹고 쓰지 않으면 오래 지속하기 힘든데 같이 하니 할 수 있었던 것 같아요.",
      author: "영재"
    },
    {
      challenge: "모닝리추얼챌린지",
      content: "저는 아침에 일어나는게 생각보다 잘 맞는 사람이더라고요. 지배되지 않고 통제할수있는 방법을 찾아야한다는 것을 느끼고 있는데, 모리가 그 통제방법중 하나가 되고 자신감의 근거가 되는 것 같아요. 마음만 먹으면 다 할수있다는 생각으로 이어져요.",
      author: "민"
    },
    {
      challenge: "영어리추얼챌린지",
      content: "직접 말할 수 있는 제대로 된 영어 문장이 생겼어요. 짧은 문장이라도 '내가 영어로 말할 수 있다'는 자신감이 생겼고, 계속 지속한다면 알고 있는 문장 데이터가 늘어날 것이 기대됩니다!",
      author: "썸머"
    },
    {
      challenge: "모닝리추얼챌린지",
      content: "조금씩 꾸준히 하는 것의 힘을 알게 되었어요. 모리 시간에 조금이라도 자주 하는 것을 목표로 하니 무리하지 않는 선에서 성취감을 느끼게 되고, 시간을 활용하면서 느끼는 효용감이 큰 것 같아요.",
      author: "수수"
    },
    {
      challenge: "모닝리추얼챌린지",
      content: "아침에 일찍 일어나는 습관을 만드는 것이 얼마나 산뜻함과 여유로움을 느끼게 해주는 행위인지 알게 되었어요. 스트레칭도 꾸준히 하게 되었고, 출근길 독서도 잘 실천하고 있어요. 이번달에 읽은 책이 벌써 4권이에요! 스스로에게 칭찬해주고 싶어요.",
      author: "다니"
    },
    {
      challenge: "영어리추얼챌린지",
      content: "타임 스탬프로 서로 매일 진도를 보고하고, 몇가지 중요 표현은 엑셀에 정리하는 시간을 가졌는데 엑셀에 남긴 표현만큼은 확실히 외워지는게 가장 좋았던 점이었습니다! 매일 매일 같이 공부하며 의지를 다질 수 있어 좋았습니다!",
      author: "묘정"
    },
    {
      challenge: "모닝리추얼챌린지",
      content: "스스로에게 집중하며 살아왔는데, 모리를 통해 타인을 감각하게 되었어요. 다른 분들의 목표, 노력, 변화를 알게 되는 경험이었고, 페이스를 잃었을때에도 다른 사람들을 보며 달려갈 수 있어요. 언제나 등대처럼, 길을 잃어도 다시 돌아올 수 있는 모리가 있어 좋아요.",
      author: "씬나"
    },
    {
      challenge: "모닝리추얼챌린지",
      content: "시스템의 중요성을 많이 느끼고 있어요. 한번 시스템을 구축해놓으니 무의식적으로 하는 일이 많아지더라고요. 함께 하는 분들을 통해 나만 힘든게 아니라는 위로, 그리고 나도 이들처럼 다시 힘을 내야지! 하는 긍정적인 동기부여를 얻어요.",
      author: "디아나"
    },
    {
      challenge: "모닝리추얼챌린지",
      content: "삶의 적지 않은 부분에서 과정은 결과 못지 않게, 때로 결과보다도 더 진득하게 스스로를 규정한다고 생각해요. 모리는 제가 과정을 소중히 여기고 있다는 하나의 증명이라고 느껴요. 컨디션이 안 좋고 루틴이 무너졌을때 정상으로 돌아가는 방법을 꾸준히 함으로써 찾게된 것 같아요.",
      author: "호이"
    },
    {
      challenge: "모닝리추얼챌린지",
      content: "아무것도 안하고 싶은 날들을 보내다가도 모리가 있어서 그나마 숨쉬고 삶을 지킬 수 있는 것 같아요. 삶의 Why가 흔들릴때도 습관으로 삶을 지탱해보고자 노력해요. 아직은 완벽하게 자동화(습관화)가 되지는 않았지만, 이 시간을 조금더 지속하면서 완전히 몸에 익숙해진다면, 삶의 든든한 기둥이 될것이라 기대해요.",
      author: "향기"
    },
    {
      challenge: "모닝리추얼챌린지",
      content: "일기를 쓰거나 요가를 할 때 내가 예전과 달라졌다고 종종 느낄 때가 있어요. 사고방식이 달라졌어요. 안되면 하면 되지, 지금이 아니라도 곧 될거야, 이렇게 생각하게 돼요. 마음 먹으면 할 수 있다, 라는 스스로에 대한 믿음을 키워가는 날들이라 좋고 앞으로 더 튼튼하게 만들고 싶어요.",
      author: "지음"
    },
    {
      challenge: "모닝리추얼챌린지",
      content: "습관이 되면 무언가를 떠올리는 데에서 오는 최소한의 체력소모와 스트레스를 차단할 수 있고, 그렇게 아낀 체력과 감정은 추후에 에너지가 필요한 순간에 폭발적으로 발산할 수 있게 하는 근간이 되어줘요. 선택하지 않음으로써 선택을 할 수 있는 힘을 모아요. 하루에도 수십번의 의사결정을 해야하는데, 좋은 선택을 위한 훈련은 필수이지 않을까요? 모리챌린지 덕에 생각의 폭이 넓어짐을 실감해요.",
      author: "만두"
    },
    {
      challenge: "모닝리추얼챌린지",
      content: "아침에 일어나서 나만의 시간을 가진다는게 너무 좋은 것 같아요. 퇴근하고 와서 할수없는 일들을 아침시간에 보다 깊이있게 할수있다는게 행동력을 만들어줘요.",
      author: "유니"
    },
    {
      challenge: "모닝리추얼챌린지",
      content: "모리를 위해 취침시간을 조절하게 되고 아침에 일찍 일어나는 일이 생각보다 많은 면에서 내 컨디션을 관리하게끔 만든다는 것을 알게되었어요. 기대했던 것보다 많은 면에서 제 스스로의 삶에 대한 통제력이 생기고있다는 걸 느껴서 너무 좋았어요!",
      author: "스윔굿"
    },
    {
      challenge: "모닝리추얼챌린지",
      content: "이제까지 머릿속에 계획만 많던 사람이었는데 모리를 통해 약간이라도 행동하는 사람이 된 것 같아 뿌듯해요. 지금 이 상황에 안주하지 않고 더 나은 나를 위해 노력하는 사람이 되고싶어요.",
      author: "비은"
    },
    {
      challenge: "모닝리추얼챌린지",
      content: "모리를 완벽하게 성공한 날이면 하루의 반은 이미 할 일을 완료했다는 생각이 들어서 그날 기분이 달라져요, 반면에 그렇지 않은 날은 마무리 하지 못한 일이 있다는 생각으로 다소 찜찜한 기분이에요.",
      author: "달리"
    },
    {
      challenge: "모닝리추얼챌린지",
      content: "나도 아침에 일찍 일어날 수 있는 사람이구나! 나도 갓생살 수 있는 사람이다! 라는 자신감이 생겼고, 아침에 일찍 일어나는 습관 들일 때 함께할 사람들이 있다는 게 동기부여에 도움이 많이 된다는 걸 알게 되었어요.",
      author: "영"
    },
    {
      challenge: "모닝리추얼챌린지",
      content: "회사를 다니면서 부정적이었던 마음이 점점 긍정적으로 변하고 있고, 불편한 감정이 올라올 때마다 그 순간을 알아차리는 수가 늘었어요.",
      author: "워니"
    },
    {
      challenge: "모닝리추얼챌린지",
      content: "긍정적인 변화는 6시에 일어나는게 익숙해진다는 점, 독서를 시작해서 연 평균 5권이하였던 독서량이 월 3권으로 늘었다는 점, 저녁에는 절대 하지 않을 내가 목표한 작업들을 실제로 해냈다는 점이에요. 롤라(모임장)이 워낙 긍정적이고, 진행도 잘하고 세심하게 한 명 한 명 챙겨주어서 매일 하루를 기분 좋게 시작할 수 있었어요.",
      author: "지니"
    },
    {
      challenge: "모닝리추얼챌린지",
      content: "하루를 더 생산적이고 알차게 쓸 수 있었던 것 같아요. 혼자 사업을 운영하고, 기획하는데에 있어서 제가 얼만큼 하느냐에 따라 성장하기도 하고 정체되기도 하는데, 미라클모닝을 하는 날은 성장을 위해 더 에너지를 쏟는 듯한 느낌이 들어요.",
      author: "요나"
    },
    {
      challenge: "모닝리추얼챌린지",
      content: "5시 50분에 매일 눈을 번쩍 뜬 내가 기특하다. 역시 겁내고만 있지 말고 해보면 유능감이 생긴다는 것. 아침에 일어나 시간을 쓰는 것이 나의 하루를 정말 길게 만들어준다는 것을 느꼈어요.",
      author: "파도"
    },
    {
      challenge: "모닝리추얼챌린지",
      content: "모리챌린지를 하면서 아침시간의 활용 가능성에 대해 처음으로 알게 되었습니다. 1시간동안 할 수 있는 것들이 정말 많더라고요. 하루의 시작에 큰 리추얼을 하나 해냈다는 성취감 덕분에 하루종일 기분이 좋았고, 자격증 시험을 준비하는데에 모리가 추진력의 동기가 되었습니다!",
      author: "율유리"
    },
    {
      challenge: "모닝리추얼챌린지",
      content: "모리를 통해 아침에 일찍 일어나는게 생각만큼 힘들지 않다는 것을 알게 되었어요. 이제 주말에도 알람 없이 5시 30분에 눈이 떠지고, 아침에 일찍 일어나다보니 늦은 밤에 핸드폰을 보거나 시간을 낭비하지 않게 돼요. 모리팸과 같이 하루를 맞이하는 것이 긍정적인 마인드를 만들어줘요.",
      author: "체리"
    },
    {
      challenge: "모닝리추얼챌린지",
      content: "모리 기간 동안 제가 생각하던 이상적인 하루를 경험해본 것이 큰 자극이 되었어요! 11-12시쯤 일찍 잠들고 6시에 일어나서 나를 위한 시간을 보내는 것, 실제로 저에게는 잘 맞더라구요. 이런 루틴화를 위해 앞으로도 쭉 노력해보려구요!",
      author: "예니"
    },
    {
      challenge: "모닝리추얼챌린지",
      content: "모리를 하면서 아침의 에너지가 무엇인지, 누군가의 지지를 받고 안내를 받는다는 것이 무엇인지, 함께하는 힘이 무엇인지 알게 되었어요. 케어받는다는 느낌을 제대로 받았던 것 같아요. 모리를 통해 삶의 우선순위를 매일 생각해보고 나를 위한 선택을 하는 사람이 되고 싶어요.",
      author: "리루"
    },
    {
      challenge: "모닝리추얼챌린지",
      content: "이번 챌린지를 통해, 아침에 책을 읽어야 머리 속에 내용이 훨씬 더 잘 들어오는 것을 느꼈어요. 올해 읽어보려고 리스트업 해놓은 책들이 있는데, 모리챌린지 참여하면서 꾸준히 읽어나가면 좋을 것 같아요.",
      author: "소영"
    },
    {
      challenge: "모닝리추얼챌린지",
      content: "아침 6시에 매일 일어나는 게 쉽지는 않으나, 한번 습관이 되면 나름 할 수 있게 되는 것 같아요. 이 루틴은 지속적으로 유지하고 싶어요.",
      author: "연구"
    },
    {
      challenge: "모닝리추얼챌린지",
      content: "아침 일찍 일어나는 습관이 생기고 있다는 것만으로도 도움이 되고 즐거웠어요. 매일 아침 모리 시간에 나에게 주는 선물을 적어보면서, 저 자신을 즐겁고 행복하게 해주는 일에 더 신경을 써줘야겠다는 사실을 알게 되었어요.",
      author: "원더지"
    },
    {
      challenge: "모닝리추얼챌린지",
      content: "모리 시간에 자격증 공부를 했는데, 시험에 합격했어요! 모리를 하면서 나도 할 수 있구나, 라는 자신감이 많이 생겼어요. 힘들 때마다 모리가 저의 자신감이 되어주더라고요. 남들이 알아주지 않아도 스스로 알아주고, 믿어주는 것의 중요성을 알게 되었어요.",
      author: "쨈"
    }
  ];

  // 같은 작성자가 연속으로 나오지 않도록 배열 재정렬하는 함수
  const shuffleAvoidingConsecutive = (array: typeof allTestimonials) => {
    const shuffled = [...array];
    
    // Fisher-Yates 알고리즘으로 섞기
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    // 연속된 같은 작성자가 있으면 위치 교환
    for (let i = 0; i < shuffled.length - 1; i++) {
      if (shuffled[i].author === shuffled[i + 1].author) {
        // 다음 다른 작성자를 찾아서 교환
        for (let j = i + 2; j < shuffled.length; j++) {
          if (shuffled[j].author !== shuffled[i].author) {
            [shuffled[i + 1], shuffled[j]] = [shuffled[j], shuffled[i + 1]];
            break;
          }
        }
      }
    }
    
    return shuffled;
  };

  // Embla 캐러셀 설정
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      duration: 30,
    },
    [Autoplay({ delay: 2500, stopOnInteraction: false })]
  );

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  // 후기 배열 재정렬 (같은 작성자 연속 방지)
  const testimonials = shuffleAvoidingConsecutive(allTestimonials);

  const blogTestimonials = [
    {
      title: "모닝리추얼 챌린저 후기",
      link: "https://blog.naver.com/minjow1996/223495565888"
    },
    {
      title: "영어리추얼 챌린저 후기",
      link: "https://blog.naver.com/minjow1996/223830499174"
    },
    {
      title: "독서리추얼 챌린저 후기",
      link: "https://blog.naver.com/minjow1996/224032460766"
    },
    {
      title: "운동 & 기록 리추얼 챌린저 후기",
      link: "https://blog.naver.com/gamzzang-/223988087412"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-foreground mb-4">
            실제 참가자 후기
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            리추얼클럽을 통해 변화를 경험한 실제 참가자들의 생생한 후기입니다
          </p>
        </div>

        {/* 자동 슬라이딩 캐러셀 */}
        <div className="relative max-w-7xl mx-auto mb-12">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6 transition-transform duration-700 ease-out">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-[0_0_90%] md:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0">
                  <Card className="border-border hover:shadow-lg transition-all duration-300 h-full">
                    <CardContent className="p-6">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                        {testimonial.challenge}
                      </span>
                      <div className="flex items-start gap-2 mb-3">
                        <Quote className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {testimonial.content}
                        </p>
                      </div>
                      <p className="text-foreground font-semibold text-sm">
                        - {testimonial.author}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          {/* 화살표 버튼 */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background z-10 shadow-lg"
            onClick={scrollPrev}
            disabled={!canScrollPrev}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background z-10 shadow-lg"
            onClick={scrollNext}
            disabled={!canScrollNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* 블로그 후기 링크 */}
        <div className="max-w-6xl mx-auto">
          <h4 className="text-2xl font-bold text-center text-foreground mb-8">
            더 많은 후기 보기
          </h4>
          <div className="grid md:grid-cols-2 gap-8">
            {blogTestimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="border-border hover:shadow-lg transition-all duration-300 cursor-pointer hover:border-primary/50"
                onClick={() => window.open(testimonial.link, '_blank')}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Star className="w-5 h-5 fill-primary text-primary" />
                    <h5 className="font-semibold text-foreground text-sm">{testimonial.title}</h5>
                  </div>
                  <div className="text-xs text-primary font-medium">
                    후기 전문 보기 →
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12">
            <img 
              src={testimonialsHeader} 
              alt="참가자 후기 모음" 
              className="w-full max-w-5xl mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
