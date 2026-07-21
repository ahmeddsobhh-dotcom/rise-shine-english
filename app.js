// ============================================================
// RISE & SHINE ENGLISH — Complete Application
// ============================================================

// ============================================================
// 0. GLOBAL HELPERS
// ============================================================
function __(key,fallback=''){return (translations&&translations[currentLanguage]&&translations[currentLanguage][key])||fallback}
function store(key,def){try{const v=JSON.parse(localStorage.getItem(key));return v!==null&&v!==undefined?v:def}catch(e){return def}}
function save(key,val){localStorage.setItem(key,JSON.stringify(val))}
function $id(id){return document.getElementById(id)}
let $sectionTags=null,$sectionTitles=null,$sectionSubs=null;
document.addEventListener('DOMContentLoaded',function(){
 $sectionTags=document.querySelectorAll('.section-tag');
 $sectionTitles=document.querySelectorAll('.section-title');
 $sectionSubs=document.querySelectorAll('.section-subtitle');
});

// ============================================================
// 1. ORANGE WAVE CANVAS
// ============================================================
const hwc=$id('heroWaveCanvas'),wctx=hwc.getContext('2d');let wid;
function rw(){hwc.width=hwc.offsetWidth;hwc.height=hwc.offsetHeight}
function dw(t){const w=hwc.width,h=hwc.height;wctx.clearRect(0,0,w,h);
['rgba(251,146,60,0.08)','rgba(251,146,60,0.12)','rgba(249,115,22,0.10)','rgba(234,88,12,0.06)'].forEach((c,i)=>{wctx.beginPath();const o=i*0.5,a=20+i*8,f=0.008+i*0.002,s=0.0008+i*0.0003;wctx.moveTo(0,h);for(let x=0;x<=w;x+=4){const y=h-80+i*25+Math.sin(x*f+t*s+o)*a+Math.sin(x*f*2.3+t*s*1.4+o)*(a*0.4);wctx.lineTo(x,y)}wctx.lineTo(w,h);wctx.closePath();wctx.fillStyle=c;wctx.fill()});wid=requestAnimationFrame(dw)}
window.addEventListener('resize',rw);rw();dw(0);

// ============================================================
// 2. PARTICLES
// ============================================================
(function(){const c=$id('heroParticles');for(let i=0;i<25;i++){const p=document.createElement('div');p.className='particle';p.style.left=Math.random()*100+'%';p.style.top=Math.random()*100+'%';p.style.width=(4+Math.random()*6)+'px';p.style.height=p.style.width;p.style.animationDelay=(Math.random()*20)+'s';p.style.animationDuration=(12+Math.random()*18)+'s';p.style.opacity=0.1+Math.random()*0.25;c.appendChild(p)}})();

// ============================================================
// 3. NAVIGATION
// ============================================================
const nav=$id('nav'),navLinks=$id('navLinks'),mobileBtn=$id('mobileMenuBtn');
window.addEventListener('scroll',()=>{nav.classList.toggle('scrolled',window.scrollY>50)});
if(mobileBtn)mobileBtn.addEventListener('click',()=>{navLinks.classList.toggle('open');mobileBtn.classList.toggle('open')});
navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{navLinks.classList.remove('open');mobileBtn.classList.remove('open')}));

// ============================================================
// 4. AI MOTIVATION MESSAGES
// ============================================================
const aiMessages=[
 {en:"The only limit to your impact is your imagination and commitment. — Steve Jobs",ar:"الحد الوحيد لتأثيرك هو خيالك والتزامك. — ستيف جوبز"},
 {en:"Success is not final, failure is not fatal: it is the courage to continue that counts. — Churchill",ar:"النجاح ليس نهائيًا، والفشل ليس قاتلاً: الشجاعة للاستمرار هي ما يهم. — تشرشل"},
 {en:"The beautiful thing about learning is that nobody can take it away from you. — B.B. King",ar:"الجمال في التعلم هو أن لا أحد يمكنه أن يسلبك إياه. — بي. بي. كينج"},
 {en:"Your English journey is a marathon, not a sprint. Every word you learn moves you forward.",ar:"رحلة تعلم الإنجليزية ماراثون وليست سباقًا قصيرًا. كل كلمة تتعلمها تدفعك للأمام."},
 {en:"The mind is everything. What you think you become. — Buddha",ar:"العقل هو كل شيء. ما تفكر فيه تصبح عليه. — بوذا"},
 {en:"Language is the road map of a culture.",ar:"اللغة هي خريطة طريق الثقافة."},
 {en:"You are braver than you believe, stronger than you seem, and smarter than you think.",ar:"أنت أشجع مما تعتقد، وأقوى مما تبدو، وأذكى مما تتصور."},
 {en:"The secret of getting ahead is getting started. — Mark Twain",ar:"سر التقدم هو البدء. — مارك توين"},
 {en:"Believe you can and you are halfway there. — Theodore Roosevelt",ar:"آمن أنك تستطيع، وستكون في منتصف الطريق."},
 {en:"Every expert was once a beginner. Keep going, your breakthrough is coming.",ar:"كل خبير كان مبتدئًا يومًا ما. استمر، اختراقك قادم."},
];
let aiIdx=0;
function showAIMsg(){const msg=aiMessages[aiIdx];const lang=currentLanguage||'en';const el=$id('aiMessageText');if(!el)return;const txt=lang==='ar'?msg.ar:msg.en;el.textContent='';let ci=0;const ti=setInterval(()=>{el.textContent=txt.slice(0,ci)+'|';ci++;if(ci>txt.length){clearInterval(ti);el.textContent=txt;el.innerHTML+='<span class="typing-cursor"></span>'}},25);$id('aiMsgCounter').textContent=(aiIdx+1)+' / '+aiMessages.length}
function nextAIMsg(){aiIdx=(aiIdx+1)%aiMessages.length;showAIMsg()}
$id('aiNewMsgBtn').addEventListener('click',nextAIMsg);
setInterval(nextAIMsg,15000);setTimeout(showAIMsg,1500);

// ============================================================
// 5. COURSE DATA
// ============================================================
const courseData=[
 {icon:'🌱',level:'Beginner',lessons:5,key:'course-foundation',
  lessonsData:[
   {titleEN:'Greetings & Introductions',titleAR:'التحيات والتعارف',contentEN:'<p>Learn how to greet people and introduce yourself in English.</p><div class="example">"Hello, my name is Ahmed. Nice to meet you!"</div><p><strong>Key phrases:</strong> Hello / Hi / Good morning / Good evening / Nice to meet you / How are you?</p>'},
   {titleEN:'Numbers & Time',titleAR:'الأرقام والوقت',contentEN:'<p>Master numbers 1-100 and telling time in English.</p><div class="example">"It is quarter past three." / "My phone number is 555-1234."</div>'},
   {titleEN:'Colors & Shapes',titleAR:'الألوان والأشكال',contentEN:'<p>Learn common colors and shapes vocabulary.</p><div class="example">"The sky is blue." / "The table is a rectangle."</div>'},
   {titleEN:'Family & Friends',titleAR:'العائلة والأصدقاء',contentEN:'<p>Describe your family members and friends.</p><div class="example">"My mother is a teacher. I have two brothers."</div>'},
   {titleEN:'Daily Routines',titleAR:'الروتين اليومي',contentEN:'<p>Talk about your daily activities using present simple tense.</p><div class="example">"I wake up at 7 AM, brush my teeth, and eat breakfast."</div>'}
 ]},
 {icon:'🌟',level:'Elementary',lessons:5,key:'course-everyday',
  lessonsData:[
   {titleEN:'Food & Dining',titleAR:'الطعام وتناول الطعام',contentEN:'<p>Order food and talk about meals.</p><div class="example">"I would like a pizza, please." / "The food is delicious."</div>'},
   {titleEN:'Weather & Seasons',titleAR:'الطقس والفصول',contentEN:'<p>Describe weather conditions and the four seasons.</p><div class="example">"It is raining outside. Autumn is my favorite season."</div>'},
   {titleEN:'Clothes & Shopping',titleAR:'الملابس والتسوق',contentEN:'<p>Go shopping and talk about clothes.</p><div class="example">"How much is this shirt? / I am looking for a blue dress."</div>'},
   {titleEN:'Directions & Places',titleAR:'الاتجاهات والأماكن',contentEN:'<p>Ask for and give directions in English.</p><div class="example">"Excuse me, where is the nearest bank? / Turn left at the corner."</div>'},
   {titleEN:'Hobbies & Interests',titleAR:'الهوايات والاهتمامات',contentEN:'<p>Talk about things you enjoy doing.</p><div class="example">"I like reading books. / My hobby is playing football."</div>'}
 ]},
 {icon:'🔥',level:'Intermediate',lessons:5,key:'course-confident',
  lessonsData:[
   {titleEN:'Travel & Tourism',titleAR:'السفر والسياحة',contentEN:'<p>Book hotels, ask for information, and talk about travel experiences.</p><div class="example">"I have visited three countries so far. / I am planning a trip to London."</div>'},
   {titleEN:'Health & Body',titleAR:'الصحة والجسم',contentEN:'<p>Describe symptoms and talk about health.</p><div class="example">"I have a headache. / You should see a doctor."</div>'},
   {titleEN:'Technology & Internet',titleAR:'التكنولوجيا والإنترنت',contentEN:'<p>Discuss technology and online activities.</p><div class="example">"I downloaded a new app. / The internet connection is slow."</div>'},
   {titleEN:'Education & School',titleAR:'التعليم والمدرسة',contentEN:'<p>Talk about your studies and educational background.</p><div class="example">"I am studying engineering. / The professor gave us a project."</div>'},
   {titleEN:'Movies & Entertainment',titleAR:'الأفلام والترفيه',contentEN:'<p>Discuss movies, TV shows, and entertainment.</p><div class="example">"Have you seen the new Marvel movie? / I prefer comedies."</div>'}
 ]},
 {icon:'💪',level:'Advanced',lessons:5,key:'course-fluency',
  lessonsData:[
   {titleEN:'News & Current Events',titleAR:'الأخبار والأحداث الجارية',contentEN:'<p>Discuss news and express opinions on current events.</p><div class="example">"According to the latest report... / In my opinion, the government should..."</div>'},
   {titleEN:'Environment & Nature',titleAR:'البيئة والطبيعة',contentEN:'<p>Talk about environmental issues and nature.</p><div class="example">"Climate change is affecting our planet. / We need to reduce plastic waste."</div>'},
   {titleEN:'Work & Career',titleAR:'العمل والوظيفة',contentEN:'<p>Discuss professional life and career goals.</p><div class="example">"I work as a software engineer. / I am looking for new opportunities."</div>'},
   {titleEN:'Society & Culture',titleAR:'المجتمع والثقافة',contentEN:'<p>Compare cultures and discuss social issues.</p><div class="example">"In my country, we celebrate... / The cultural differences are fascinating."</div>'},
   {titleEN:'Science & Discovery',titleAR:'العلوم والاكتشاف',contentEN:'<p>Discuss scientific topics and discoveries.</p><div class="example">"Scientists have discovered a new species. / The experiment proved the theory."</div>'}
 ]},
 {icon:'💼',level:'Professional',lessons:5,key:'course-business',
  lessonsData:[
   {titleEN:'Business Meetings',titleAR:'الاجتماعات التجارية',contentEN:'<p>Lead business meetings in English.</p><div class="example">"Let us move to the next agenda item."</div>'},
   {titleEN:'Negotiations',titleAR:'المفاوضات',contentEN:'<p>Learn negotiation language and strategies.</p><div class="example">"We are offering a 10% discount."</div>'},
   {titleEN:'Presentations',titleAR:'العروض التقديمية',contentEN:'<p>Deliver powerful presentations in English.</p><div class="example">"Today I am going to present..."</div>'},
   {titleEN:'Emails & Reports',titleAR:'البريد الإلكتروني والتقارير',contentEN:'<p>Write professional emails and reports.</p><div class="example">"Dear Mr. Smith, I am writing to inform you..."</div>'},
   {titleEN:'Networking',titleAR:'التواصل المهني',contentEN:'<p>Network effectively at professional events.</p><div class="example">"Let me give you my business card."</div>'}
 ]},
 {icon:'🎯',level:'Interview Prep',lessons:5,key:'course-interview',
  lessonsData:[
   {titleEN:'Tell Me About Yourself',titleAR:'حدثني عن نفسك',contentEN:'<p>Master the most common interview opening question.</p><div class="example">"I have 5 years of experience in..."</div>'},
   {titleEN:'Strengths & Weaknesses',titleAR:'نقاط القوة والضعف',contentEN:'<p>Discuss your strengths and weaknesses professionally.</p>'},
   {titleEN:'Behavioral Questions',titleAR:'الأسئلة السلوكية',contentEN:'<p>Answer behavioral questions using the STAR method.</p>'},
   {titleEN:'Technical Interviews',titleAR:'المقابلات التقنية',contentEN:'<p>Explain technical concepts clearly in English.</p>'},
   {titleEN:'Salary & Negotiation',titleAR:'الراتب والتفاوض',contentEN:'<p>Discuss salary expectations and negotiate offers.</p>'}
 ]},
 {icon:'🎓',level:'Academic',lessons:5,key:'course-academic-lvl',
  lessonsData:[
   {titleEN:'Essay Structure',titleAR:'بنية المقال',contentEN:'<p>Learn how to structure academic essays.</p>'},
   {titleEN:'Research & Citations',titleAR:'البحث والاستشهادات',contentEN:'<p>Cite sources using APA/MLA format.</p>'},
   {titleEN:'Academic Vocabulary',titleAR:'المفردات الأكاديمية',contentEN:'<p>Use formal academic vocabulary appropriately.</p>'},
   {titleEN:'Critical Analysis',titleAR:'التحليل النقدي',contentEN:'<p>Analyze and critique academic texts.</p>'},
   {titleEN:'Thesis Writing',titleAR:'كتابة الأطروحة',contentEN:'<p>Write a strong thesis statement and paper.</p>'}
 ]}
];
const srLK=['course-foundation','course-everyday','course-confident','course-fluency','course-business','course-interview','course-academic-lvl'];
function getLessonTitle(ci,li){const t=translations&&translations[currentLanguage]||{};const k=srLK[ci];return (t&&t[k]||'Course')+' - '+(t['lesson-label']||'Lesson')+' '+(li+1)}

// Quiz data
const quizData=(function(){
 function q(qs){return qs.map(function(q){return{q:q[0],opts:q[1],a:q[2],f:q[3]||'Keep studying!'}})}
 return [
  [q([['What do you say when meeting someone?',['Goodbye','Nice to meet you','I am sleeping','See you later'],1],['What is 10+5?',['Fifteen','Fifty','Five','Sixteen'],0],['Which color is the sky?',['Red','Green','Blue','Yellow'],2],['Who is your mother\'s son?',['Uncle','Brother','Father','Cousin'],1],['What do you do in the morning?',['Eat dinner','Brush teeth','Go to bed'],1]])],
  [q([['What do you say when food tastes good?',['Terrible','Delicious','I hate it','More salt'],1],['Which season comes after summer?',['Spring','Winter','Autumn','Rainy'],2],['How much is $20 with 50% off?',['$5','$10','$15','$20'],1],['Where is the bank?',['Turn left','I am happy','It is blue'],0],['What do you like doing?',['I am a teacher','I like reading','I am tall'],1]])],
  [q([['Where can you book a hotel?',['At school','Online','In the sky'],1],['What do you say when sick?',['I have a headache','I am happy','Let us go'],0],['What is an app?',['A type of food','A computer program','A car brand'],1],['What do you study at university?',['A major','A car','A color'],0],['Have you seen the new movie?',['I am reading','Yes it was great','I like pizza'],1]])],
  [q([['What is climate change?',['Today weather','Long-term change','A storm'],1],['Where do you work?',['As an engineer','I am sleeping','I like blue'],0],['What is a tradition?',['Math formula','Custom passed down','A type food'],1],['What did scientists discover?',['A new song','A new species','A new color'],1],['In my opinion...',['States fact','States opinion','Asks question'],1]])],
  [q([['How to start a meeting?',['Goodbye','Let us begin','I am tired'],1],['What is a discount?',['Price increase','Price reduction','New product'],1],['How to start presentation?',['That is all','Today I will present','Goodbye'],1],['How to start email?',['Dear Sir','Hey dude','What up'],0],['What to say when networking?',['Leave me alone','Nice to meet you','I am busy'],1]])],
  [q([['Tell me about yourself.',['My name is...','I am a banana','Go away'],0],['Your greatest strength?',['I am perfect','Problem-solving','I sleep a lot'],1],['What is STAR method?',['Space program','Situation Task Action Result','Dance move'],1],['Explain architecture.',['A building','Frontend backend database','A car'],1]])],
  [q([['What is an essay?',['Short story','Formal writing','A poem'],1],['What is APA format?',['Citation style','Dance style','Car model'],0],['What does consequently mean?',['Before','As a result','Maybe'],1],['What is critical analysis?',['Agreeing','Evaluating arguments','Copying'],1]])]
 ];
})();

let lessonProgress=store('ep',{});
function saveP(){save('ep',lessonProgress)}

// ============================================================
// 6. COURSE RENDERING
// ============================================================
function renderCourseWithLang(lang){
 const t=translations&&translations[lang]||{};const grid=$id('courseGrid');
 if(!grid)return;grid.innerHTML='';const lk=['course-beginner','course-elementary','course-intermediate','course-advanced','course-professional','course-career','course-academic-lvl'];
 courseData.forEach((course,ci)=>{
  const lessonsCompleted=course.lessonsData.filter((_,li)=>lessonProgress[ci+'-'+li]).length;
  const progress=course.lessonsData.length>0?Math.round(lessonsCompleted/course.lessonsData.length*100):0;
  const card=document.createElement('div');card.className='course-card';card.style.animationDelay=(ci*0.1)+'s';
  card.innerHTML='<div class="course-card-icon">'+course.icon+'</div><div class="course-card-level">'+(t[lk[ci]]||course.level)+'</div><div class="course-card-title">'+(t[lk[ci]+'-title']||course.level)+'</div><div class="course-card-desc">'+(t[lk[ci]+'-desc']||'Master '+course.level+' level English')+'</div><div class="course-card-lessons">'+course.lessonsData.map((lesson,li)=>{
   const done=lessonProgress[ci+'-'+li];
   return '<div class="course-lesson" data-ci="'+ci+'" data-li="'+li+'"><div class="course-lesson-check'+(done?' completed':'')+'">'+(done?'✓':'')+'</div><span>'+(lang==='ar'?lesson.titleAR:lesson.titleEN)+'</span></div>'
  }).join('')+'</div><div class="course-card-progress"><div class="course-progress-bar"><div class="course-progress-fill" style="width:'+progress+'%"></div></div><span class="course-progress-text">'+progress+'%</span></div>';
  grid.appendChild(card);
  setTimeout(()=>card.classList.add('visible'),100)
 });
 grid.querySelectorAll('.course-lesson').forEach(el=>el.addEventListener('click',function(){openLesson(parseInt(this.dataset.ci),parseInt(this.dataset.li))}))
}

// ============================================================
// 7. LESSON & QUIZ
// ============================================================
let currentCourse=0,currentLesson=0;
function openLesson(ci,li){
 currentCourse=ci;currentLesson=li;
 const course=courseData[ci];if(!course)return;const lesson=course.lessonsData[li];if(!lesson)return;
 const t=translations&&translations[currentLanguage]||{};
 const qz=quizData[ci]&&quizData[ci][li];const isCompleted=!!lessonProgress[ci+'-'+li];
 $id('lessonModalTitle').innerHTML=course.icon+' '+(currentLanguage==='ar'?lesson.titleAR:lesson.titleEN);
 $id('lessonModalBody').innerHTML=(currentLanguage==='ar'?lesson.contentAR||lesson.contentEN:lesson.contentEN)+(qz?'':'<p style="margin-top:1rem;color:var(--text-light);">No quiz available.</p>')+renderQuiz(qz,ci,li);
 $id('lessonCompleteBtn').textContent=isCompleted?(t['lesson-completed']||'Completed!'):(t['lesson-complete']||'Mark as Completed');
 $id('lessonCompleteBtn').className='lesson-modal-complete-btn'+(isCompleted?' completed':'');
 $id('lessonModal').classList.add('active');document.body.style.overflow='hidden'
}
$id('lessonModalClose').addEventListener('click',()=>{$id('lessonModal').classList.remove('active');document.body.style.overflow=''});
$id('lessonModal').addEventListener('click',function(e){if(e.target===this){this.classList.remove('active');document.body.style.overflow=''}});

function renderQuiz(qz,ci,li){
 if(!qz||!qz.length)return'<div class="quiz-section"><div class="quiz-title">Quiz</div><p style="color:var(--text-light);margin-top:0.5rem;">No quiz for this lesson.</p></div>';
 const t=translations&&translations[currentLanguage]||{};
 let html='<div class="quiz-section" id="quizSection"><div class="quiz-header"><div class="quiz-title">'+(t['quiz-title']||'Knowledge Check')+'</div><div class="quiz-score" id="quizScoreDisplay">0 / '+qz.length+'</div></div>';
 qz.forEach((q,qi)=>{
  html+='<div class="quiz-question" id="q'+qi+'"><div class="quiz-question-number">'+(t['quiz-question']||'Question')+' '+(qi+1)+'</div><div class="quiz-question-text">'+q.q+'</div><div class="quiz-options">';
  q.opts.forEach((o,oi)=>{
   html+='<button class="quiz-option" data-qi="'+qi+'" data-oi="'+oi+'" data-correct="'+(oi===q.a)+'"><span class="quiz-option-letter">'+String.fromCharCode(65+oi)+'</span>'+o+'<span class="quiz-option-check"></span></button>'
  });
  html+='</div><div class="quiz-feedback" id="qf'+qi+'" style="display:none;"></div></div>'
 });
 html+='</div>';return html
}

function handleQuizAnswer(btn,qi,ci,li,correctIdx){
 const parent=btn.closest('.quiz-question');if(!parent)return;
 const selected=parseInt(btn.dataset.oi);const isCorrect=selected===correctIdx;
 parent.querySelectorAll('.quiz-option').forEach(function(b){b.classList.add('quiz-option-disabled');b.removeAttribute('onclick')});
 parent.querySelectorAll('.quiz-option[data-correct="true"]').forEach(function(b){b.classList.add('quiz-option-correct')});
 if(!isCorrect)btn.classList.add('quiz-option-wrong');
 const fb=parent.querySelector('.quiz-feedback');if(!fb)return;
 const t=translations&&translations[currentLanguage]||{};
 const q=quizData[ci]&&quizData[ci][li]&&quizData[ci][li][qi];
 const fbMsg=q&&q.f?q.f:'Keep studying!';
 // Track for spaced repetition
 if(!window._srRes)window._srRes={};
 window._srRes[ci+'-'+li+'-'+qi]=isCorrect;
 if(isCorrect){fb.innerHTML='<strong>'+((t&&t['quiz-correct'])||'Correct!')+'</strong> '+fbMsg;fb.style.display='block'}else{fb.innerHTML='<strong>'+(t&&t['quiz-wrong']||'Not quite!')+'</strong> '+fbMsg;fb.style.display='block'}
 const scoreDisplay=document.getElementById('quizScoreDisplay');
 if(scoreDisplay){const correct=parent.closest('.quiz-section').querySelectorAll('.quiz-option-correct').length;const total=quizData[ci][li].length;scoreDisplay.textContent=correct+' / '+total;if(correct===total&&total>0)showQuizResult(ci,li,correct,total)}
}

// ============================================================
// 8. VIDEOS
// ============================================================
const videoData=[
 {id:'Q16L0RMmqq4',cat:'Mindset',titleEN:'The Power of Belief',titleAR:'قوة الاعتقاد',descEN:'How a growth mindset transforms learning.',descAR:'كيف تغير العقلية النامية التعلم.'},
 {id:'ZqE1Wl8qXjA',cat:'Motivation',titleEN:'The Psychology of Success',titleAR:'سيكولوجية النجاح',descEN:'What drives successful people.',descAR:'ما الذي يدفع الأشخاص الناجحين.'},
 {id:'h8Wnx3N8SJs',cat:'Discipline',titleEN:'Master Your Habits',titleAR:'أتقن عاداتك',descEN:'Build habits that stick for life.',descAR:'ابنِ عادات تدوم مدى الحياة.'},
 {id:'5MgBikgcWnY',cat:'Mindset',titleEN:'The Power of Now',titleAR:'قوة اللحظة الحالية',descEN:'Live in the present moment.',descAR:'عش في اللحظة الحالية.'},
 {id:'Ns7m3N0L4Zw',cat:'Motivation',titleEN:'Unlock Your Potential',titleAR:'أطلق إمكاناتك',descEN:'You have more potential than you know.',descAR:'لديك إمكانات أكثر مما تعرف.'},
 {id:'bF3B0wCw_VU',cat:'Discipline',titleEN:'The 1% Rule',titleAR:'قاعدة 1%',descEN:'Small daily improvements lead to massive results.',descAR:'التحسينات اليومية الصغيرة تؤدي إلى نتائج هائلة.'},
 {id:'fL2v1s3Rd8E',cat:'Resilience',titleEN:'How to Bounce Back',titleAR:'كيف تتعافى',descEN:'Build resilience and overcome setbacks.',descAR:'ابنِ المرونة وتغلب على النكسات.'},
 {id:'kYfN7z3p0mM',cat:'Mindset',titleEN:'The Growth Mindset',titleAR:'العقلية النامية',descEN:'Embrace challenges and keep growing.',descAR:'تقبل التحديات واستمر في النمو.'},
 {id:'G8nL2v5s8A',cat:'Motivation',titleEN:'Your Why Matters',titleAR:'لماذا يهم',descEN:'Find your purpose and let it drive you.',descAR:'اعثر على هدفك واتركه يقودك.'},
 {id:'p3R7mN2kL9',cat:'Resilience',titleEN:'The Art of Persistence',titleAR:'فن المثابرة',descEN:'Keep going when things get tough.',descAR:'استمر عندما تصبح الأمور صعبة.'},
];
function renderVideos(){
 const grid=$id('videosGrid');if(!grid)return;const lang=currentLanguage||'en';
 grid.innerHTML=videoData.map((v,i)=>'<div class="video-card" style="animation-delay:'+(i*0.1)+'s"><div class="video-thumb"><div class="video-thumb-icon">'+(lang==='ar'?'🎥':'▶')+'</div><iframe src="https://www.youtube.com/embed/'+v.id+'?autoplay=0&rel=0" allow="accelerometer;encrypted-media;gyroscope" allowfullscreen></iframe></div><div class="video-info"><div class="video-category">'+(lang==='ar'?catNamesAr[v.cat]||v.cat:v.cat)+'</div><div class="video-title">'+(lang==='ar'?v.titleAR:v.titleEN)+'</div><div class="video-desc">'+(lang==='ar'?v.descAR:v.descEN)+'</div><a class="video-watch-btn" href="https://www.youtube.com/watch?v='+v.id+'" target="_blank">'+(lang==='ar'?'▶ شاهد':'▶ Watch')+'</a></div></div>').join('');
 setTimeout(()=>{grid.querySelectorAll('.video-card').forEach((c,i)=>setTimeout(()=>c.classList.add('visible'),i*100))},100)
}
const catNamesAr={Mindset:'العقلية',Motivation:'التحفيز',Discipline:'الانضباط',Resilience:'المرونة'};
renderVideos();

// ============================================================
// 9. PRAYER TIMES
// ============================================================
let pTimings=null,pTimer=null;
const pNames={Fajr:'Fajr',Sunrise:'Sunrise',Dhuhr:'Dhuhr',Asr:'Asr',Maghrib:'Maghrib',Isha:'Isha',ar_Fajr:'الفجر',ar_Sunrise:'الشروق',ar_Dhuhr:'الظهر',ar_Asr:'العصر',ar_Maghrib:'المغرب',ar_Isha:'العشاء'};
const pIcons={Fajr:'🌙',Sunrise:'🌅',Dhuhr:'☀️',Asr:'🌤️',Maghrib:'🌇',Isha:'🌃'};
function gms(t){const p=t.split(':').map(Number);return p[0]*60+p[1]}
function f12(t){const p=t.split(':').map(Number);const h=p[0]%12||12,am=p[0]<12?'AM':'PM';return h+':'+String(p[1]).padStart(2,'0')+' '+am}

async function fetchPT(){
 try{
  const d=new Date(),ds=d.getDate()+'-'+(d.getMonth()+1)+'-'+d.getFullYear();
  const r=await fetch('https://api.aladhan.com/v1/timingsByCity/'+ds+'?city=Cairo&country=Egypt&method=5');
  const dt=await r.json();
  if(dt.code===200){pTimings=dt.data;
   $id('prayerDate').innerHTML='<strong>'+pTimings.date.readable+'</strong>';
   const hijri='<strong>'+pTimings.date.hijri.day+' '+pTimings.date.hijri.month.en+' '+pTimings.date.hijri.year+'</strong> - '+(currentLanguage==='ar'?'هجري':'Hijri');
   $id('prayerHijriDate').innerHTML=hijri;
   renderPrayerTimings(pTimings)
  }
 }catch(e){$id('prayerNextName').textContent='Prayer Times';
  calcFallbackPT();
 }
}

// Monthly lookup table for Cairo prayer times (Egyptian Authority method)
const CAIRO_PT_TABLE=[
 ['05:07','06:51','12:00','14:55','17:10','18:33'],
 ['04:56','06:38','11:59','15:08','17:35','19:00'],
 ['04:52','06:14','11:57','15:17','17:55','19:16'],
 ['04:27','05:42','11:51','15:23','18:12','19:33'],
 ['04:05','05:11','11:48','15:25','18:29','19:51'],
 ['03:57','04:54','11:50','15:29','18:44','20:07'],
 ['04:07','04:58','11:54','15:28','18:49','20:15'],
 ['04:26','05:19','11:56','15:22','18:31','20:01'],
 ['04:45','05:41','11:51','15:04','17:56','19:27'],
 ['05:04','05:59','11:45','14:42','17:24','18:54'],
 ['06:22','07:23','11:47','14:30','17:05','18:30'],
 ['05:05','06:44','11:52','14:31','16:57','18:19']
];
const PT_NAMES=['Fajr','Sunrise','Dhuhr','Asr','Maghrib','Isha'];

function calcFallbackPT(){
 try{
  const d=new Date();const dayOfYear=Math.floor((d-new Date(d.getFullYear(),0,0))/86400000);
  const lat=30.0444,lng=31.2357;
  const isDST=(d.getMonth()>=3&&d.getMonth()<=9);
  const tz=isDST?3:2;
  const S=Math.sin,C=Math.cos,T=Math.tan,AC=Math.acos;
  const DR=Math.PI/180;
  const decl=23.45*S((284+dayOfYear)*DR);const dR=decl*DR;const lR=lat*DR;
  const B=(dayOfYear-81)*360/365*DR;
  const eot=9.87*S(2*B)-7.53*C(B)-1.5*S(B);
  const dhuhr=12+tz-lng/15+eot/60+0.03;
  function haForAlt(alt){const val=(S(alt*DR)-S(dR)*S(lR))/(C(dR)*C(lR));if(val>1||val<-1)return 999;return AC(val)/DR/15}
  const haSun=haForAlt(-0.8333);
  const fajr=dhuhr-haForAlt(-19.5);
  const shuruq=dhuhr-haSun;
  const asrAlt=Math.atan(1/(Math.abs(T(lR-dR))+1))/DR;
  const asr=dhuhr+haForAlt(-0.8333+(90-asrAlt));
  const maghrib=dhuhr+haSun;
  const isha=dhuhr+haForAlt(-17.5);
  function toT(hh){hh=((hh%24)+24)%24;const hf=Math.floor(hh);const mf=Math.floor(Math.abs(hh-hf)*60);return String(hf).padStart(2,'0')+':'+String(mf).padStart(2,'0')}
  const timings={Fajr:toT(fajr),Sunrise:toT(shuruq),Dhuhr:toT(dhuhr),Asr:toT(asr),Maghrib:toT(maghrib),Isha:toT(isha)};
  pTimings={timings:timings,date:{readable:d.toLocaleDateString('en-US',{weekday:'long',year:'numeric',month:'long',day:'numeric'})}};
  $id('prayerDate').innerHTML='<strong>'+d.toLocaleDateString('en-US',{weekday:'long',year:'numeric',month:'long',day:'numeric'})+'</strong>';
  renderPrayerTimings(pTimings)
 }catch(ex){useTableFallback()}
}

function useTableFallback(){
 try{
  const d=new Date();const m=d.getMonth();const day=d.getDate();
  const curr=CAIRO_PT_TABLE[m];const next=CAIRO_PT_TABLE[(m+1)%12];
  const daysInM=new Date(d.getFullYear(),m+1,0).getDate();
  const frac=day/daysInM;
  function interp(a,b){const [ah,am]=a.split(':').map(Number);const [bh,bm]=b.split(':').map(Number);const ta=ah*60+am,tb=bh*60+bm;const t=Math.round(ta+(tb-ta)*frac);return String(Math.floor(t/60)%24).padStart(2,'0')+':'+String(t%60).padStart(2,'0')}
  const timings={Fajr:interp(curr[0],next[0]),Sunrise:interp(curr[1],next[1]),Dhuhr:interp(curr[2],next[2]),Asr:interp(curr[3],next[3]),Maghrib:interp(curr[4],next[4]),Isha:interp(curr[5],next[5])};
  pTimings={timings:timings,date:{readable:d.toLocaleDateString('en-US',{weekday:'long',year:'numeric',month:'long',day:'numeric'})}};
  $id('prayerDate').innerHTML='<strong>'+d.toLocaleDateString('en-US',{weekday:'long',year:'numeric',month:'long',day:'numeric'})+'</strong>';
  renderPrayerTimings(pTimings)
 }catch(ex){}
}

function renderPrayerTimings(pt){
 try{
  if(!pt||!pt.timings)return;
  const tim=pt.timings;const d=new Date();
  const grid=$id('prayerTimesGrid');if(!grid)return;grid.innerHTML='';
  const nM=d.getHours()*60+d.getMinutes();
  PT_NAMES.forEach(name=>{
   const time=tim[name],tm=gms(time),isA=tm>nM&&grid.querySelector('.active')===null;
   const item=document.createElement('div');item.className='prayer-time-item '+(isA?'active':'');item.id='prayer-'+name;
   const pn=pNames[currentLanguage==='ar'?'ar_'+name:name]||name;
   item.innerHTML='<div class="prayer-time-name"><div class="prayer-time-name-icon">'+(pIcons[name]||'')+'</div><span>'+pn+'</span></div><div class="prayer-time-value">'+f12(time)+'</div>';
   grid.appendChild(item)
  });
  updateCountdown()
 }catch(ex){}
}

function renderPrayerLang(){
 if(pTimings){renderPrayerTimings(pTimings)}else{setTimeout(function(){if(pTimings)renderPrayerTimings(pTimings)},3000)}
}

function updateCountdown(){
 if(!pTimings)return;
 const tim=pTimings.timings;
 const n=new Date(),nM=n.getHours()*60+n.getMinutes();
 let np=null,nt=null;
 for(const name of PT_NAMES){const t=tim[name];if(gms(t)>nM){np=name;nt=t;break}}
 if(!np){np=PT_NAMES[0];nt=tim[PT_NAMES[0]];const t=new Date(n);t.setDate(t.getDate()+1);const[h,m]=nt.split(':').map(Number);t.setHours(h,m,0,0);const d=t-n;showCountdown(np,nt,Math.max(0,d));return}
 const[h,m]=nt.split(':').map(Number);const d=new Date(n);d.setHours(h,m,0,0);showCountdown(np,nt,Math.max(0,d-n));
 document.querySelectorAll('.prayer-time-item').forEach(e=>e.classList.remove('active'));
 const ae=$id('prayer-'+np);if(ae)ae.classList.add('active')
}

function showCountdown(name,time,ms){
 $id('prayerNextName').textContent=pNames[currentLanguage==='ar'?'ar_'+name:name]||name;
 $id('prayerNextTime').textContent=f12(time);
 const s=Math.floor(ms/1000),h=Math.floor(s/3600),m=Math.floor((s%3600)/60),sec=s%60;
 $id('prayerCountdown').textContent=String(h).padStart(2,'0')+':'+String(m).padStart(2,'0')+':'+String(sec).padStart(2,'0')
}
fetchPT();pTimer=setInterval(updateCountdown,1000);setInterval(fetchPT,3600000);

// ============================================================
// 10. NOTIFICATION SYSTEM
// ============================================================
const nb=$id('notificationBar'),nm=$id('notificationMessage'),nc=$id('notificationCounter');
const ns=$id('notificationStop'),nd=$id('notificationDismiss');
let notifInterval=null,notifCount=0;

function startNotif(){notifCount=0;if(notifInterval)clearInterval(notifInterval);notifInterval=setInterval(()=>{
 if(!nb)return;
 const t=translations&&translations[currentLanguage]||{};
 nm.textContent=t['notif-msg']||'Are you still studying? Press the button to confirm.';
 nb.classList.add('show');notifCount++;
 if(nc)nc.textContent=notifCount>0?'('+notifCount+')':'';
 setTimeout(()=>{try{nb.classList.remove('show')}catch(e){}},12000)
},1800000);setTimeout(()=>{if(nb&&!nb.classList.contains('show')){nm.textContent=(translations&&translations[currentLanguage]||{})['notif-welcome']||'Welcome! Ready to start learning?';nb.classList.add('show');setTimeout(()=>{try{nb.classList.remove('show')}catch(e){}},8000)}},5000)}

if(ns)ns.addEventListener('click',function(){nb.classList.remove('show');if(typeof playSfx==='function')playSfx('confirm')});

startNotif();

// ============================================================
// 10b. REMINDERS
// ============================================================
function getRemindConfig(){return store('remind',{browser:false,email:false,time:'09:00',emailAddr:'',emailKey:'',lastSent:''})}
function saveRemindConfig(c){save('remind',c)}

function openRemindModal(){
 const cfg=getRemindConfig();
 $id('remindBrowserToggle').checked=cfg.browser;
 // Build modal content and show it
 $id('reminderModal').classList.add('active')
}
$id('reminderModalClose').addEventListener('click',()=>{$id('reminderModal').classList.remove('active')});

function initReminders(){
 // Auto-check for reminder time every minute
 setInterval(function(){
  const cfg=getRemindConfig();if(!cfg.browser&&!cfg.email)return;
  const today=new Date().toISOString().slice(0,10);
  if(cfg.lastSent===today)return;
  const now=new Date();const[th,tm]=cfg.time.split(':').map(Number);
  if(now.getHours()===th&&now.getMinutes()===tm){
   cfg.lastSent=today;saveRemindConfig(cfg);
   if(cfg.browser&&'Notification'in window&&Notification.permission==='granted'){
    new Notification('Rise & Shine English',{body:(translations&&translations[currentLanguage]||{})['reminder-notif-body']||'Time for your daily English lesson!',icon:'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Crect width=%22100%22 height=%22100%22 rx=%2220%22 fill=%22%23F97316%22/%3E%3Ctext x=%2250%22 y=%2268%22 text-anchor=%22middle%22 font-size=%2250%22 fill=%22white%22%3E%F0%9F%8C%85%3C/text%3E%3C/svg%3E'})
   }
  }
 },60000)
}

// ============================================================
// 11. DARK MODE & LANGUAGE
// ============================================================
let currentLanguage='en';

function setDM(e){try{document.documentElement.classList.toggle('dark-mode',e);save('dm',e?'true':'false')}catch(ex){console.warn('DM err:',ex)}}
try{if(store('dm','')==='true')setDM(true);}catch(ex){}
const dmt=$id('darkModeToggle');
if(dmt)dmt.addEventListener('click',()=>setDM(!document.documentElement.classList.contains('dark-mode')));

function applyTranslations(lang){
 const t=translations[lang];if(!t)return;
 document.querySelectorAll('.nav-links a').forEach(function(a){const k=a.getAttribute('data-'+lang);if(k)a.textContent=k});
 document.querySelectorAll('[data-'+lang+']').forEach(function(el){const txt=el.getAttribute('data-'+lang);if(txt&&!el.closest('.nav-links'))el.innerHTML=txt});
 document.querySelectorAll('input[data-'+lang+'-placeholder]').forEach(function(inp){inp.placeholder=inp.getAttribute('data-'+lang+'-placeholder')});
 document.documentElement.dir=lang==='ar'?'rtl':'ltr';
 document.documentElement.lang=lang
}

function setLanguage(lang){
 try{
  currentLanguage=lang;
  applyTranslations(lang);
  renderCourseWithLang(lang);
  if(typeof renderDashboard==='function')renderDashboard();
  if(typeof renderGrammar==='function')renderGrammar();
  if(typeof renderPomoLang==='function')renderPomoLang();
  if(typeof renderSoundLang==='function')renderSoundLang();
  if(typeof renderChatLang==='function')renderChatLang();
  if(typeof renderReadingLang==='function')renderReadingLang();
  if(typeof renderPlannerLang==='function')renderPlannerLang();
  if(typeof renderPrayerLang==='function')renderPrayerLang();
  if(typeof renderGoalsLang==='function')renderGoalsLang();
  if(typeof renderFCLang==='function')renderFCLang();
  if(typeof renderPronLang==='function')renderPronLang();
  if(typeof renderSpeakLang==='function')renderSpeakLang();
  $id('langEnBtn').classList.toggle('active',lang==='en');
  $id('langArBtn').classList.toggle('active',lang==='ar');
  save('pl',lang)
 }catch(ex){console.warn('setLanguage err:',ex)}
}

try{currentLanguage=store('pl','en')}catch(e){}
var enBtn=$id('langEnBtn');if(enBtn)enBtn.addEventListener('click',function(){try{setLanguage('en')}catch(ex){}});
var arBtn=$id('langArBtn');if(arBtn)arBtn.addEventListener('click',function(){try{setLanguage('ar')}catch(ex){}});

// ============================================================
// 12. DASHBOARD & STREAK
// ============================================================
function getStreak(){let s=store('streak',{last:'',cnt:0,best:0});
 const today=new Date();const ds=today.toISOString().slice(0,10);
 if(s.last&&s.last!==ds){
  const ld=new Date(s.last+'T00:00:00');const diff=Math.round((today-ld)/86400000);
  if(diff>1){s.cnt=0}else if(diff===1){s.cnt++}
  if(s.cnt>s.best)s.best=s.cnt;
  s.last=ds;save('streak',s)
 }
 return s
}

function updateStreak(){
 let s=store('streak',{last:'',cnt:0,best:0});
 const today=new Date().toISOString().slice(0,10);
 if(s.last){const ld=new Date(s.last+'T00:00:00');const td=new Date(today+'T00:00:00');const diff=Math.round((td-ld)/86400000);if(diff===1){s.cnt++}else if(diff!==0){s.cnt=1}}else{s.cnt=1}
 if(s.cnt>s.best)s.best=s.cnt;s.last=today;save('streak',s);
 if(typeof renderDashboard==='function')renderDashboard()
}

// Badge definitions
const badgeDefs=[
 {id:'first-lesson',icon:'🌟',nameEN:'First Steps',nameAR:'الخطوات الأولى',descEN:'Complete your first lesson',descAR:'أكمل أول درس لك',check:function(lp){return Object.keys(lp).length>=1}},
 {id:'five-lessons',icon:'🔥',nameEN:'On Fire',nameAR:'مشتعل',descEN:'Complete 5 lessons',descAR:'أكمل 5 دروس',check:function(lp){return Object.keys(lp).length>=5}},
 {id:'all-beginner',icon:'🌱',nameEN:'Seedling',nameAR:'شتلة',descEN:'Complete all Beginner lessons',descAR:'أكمل جميع دروس المبتدئين',check:function(lp){for(let i=0;i<5;i++){if(!lp['0-'+i])return false}return true}},
 {id:'perfect-quiz',icon:'🏆',nameEN:'Quiz Master',nameAR:'سيد الاختبارات',descEN:'Get a perfect score on any quiz',descAR:'احصل على درجة كاملة في أي اختبار',check:function(lp,qzd,qs){for(const k in qs){if(qs[k].c===qs[k].t)return true}return false}},
 {id:'streak-7',icon:'📅',nameEN:'Week Warrior',nameAR:'محارب الأسبوع',descEN:'7-day streak',descAR:'تسلسل 7 أيام',check:function(lp,qzd,qs,wh,s){return s.cnt>=7}},
 {id:'streak-30',icon:'💫',nameEN:'Monthly Master',nameAR:'سيد الشهر',descEN:'30-day streak',descAR:'تسلسل 30 يومًا',check:function(lp,qzd,qs,wh,s){return s.cnt>=30}},
 {id:'first-write',icon:'✍️',nameEN:'Writer',nameAR:'كاتب',descEN:'Complete your first writing exercise',descAR:'أكمل أول تمرين كتابة',check:function(lp,qzd,qs,wh){return wh.length>=1}},  {id:'five-writes',icon:'📝',nameEN:'Prolific Writer',nameAR:'كاتب غزير',descEN:'Complete 5 writing exercises',descAR:'أكمل 5 تمارين كتابة',check:function(lp,qzd,qs,wh){return wh.length>=5}},
  {id:'first-speak',icon:'🎤',nameEN:'First Recording',nameAR:'أول تسجيل',descEN:'Score 70%+ on a pronunciation challenge',descAR:'احصل على 70%+ في تحدي النطق',check:function(lp,qzd,qs,wh,s,sp){return sp.length>=1&&sp[sp.length-1].score>=70}},
  {id:'speak-pro',icon:'🎙️',nameEN:'Pronunciation Pro',nameAR:'محترف النطق',descEN:'Score 70%+ on 5 challenges',descAR:'احصل على 70%+ في 5 تحديات',check:function(lp,qzd,qs,wh,s,sp){return sp.filter(function(x){return x.score>=70}).length>=5}},
  {id:'speak-master',icon:'🏅',nameEN:'Pronunciation Master',nameAR:'سيد النطق',descEN:'Average 80%+ across 10 challenges',descAR:'متوسط 80%+ عبر 10 تحديات',check:function(lp,qzd,qs,wh,s,sp){return sp.length>=10&&sp.reduce(function(a,b){return a+b.score},0)/sp.length>=80}},
];

function getEarnedBadges(){return store('badges',[])}
function saveEarnedBadge(id){const b=getEarnedBadges();if(!b.includes(id)){b.push(id);save('badges',b)}return b}

function checkBadges(notify){
 const lp=lessonProgress||{};const qzd=store('qz',{});const qs=store('qs',{});const wh=store('wh',[]);const s=getStreak();const sp=store('speak',[]);
 const earned=getEarnedBadges();const t=translations&&translations[currentLanguage]||{};const newly=[];
 badgeDefs.forEach(function(b){if(!earned.includes(b.id)&&b.check(lp,qzd,qs,wh,s,sp)){saveEarnedBadge(b.id);if(!earned.includes(b.id))newly.push(b)}});
 if(notify&&newly.length>0){newly.forEach(function(b,idx){setTimeout(function(){showBadgeToast(b)},idx*2000)})}
}

function showBadgeToast(b){
 const t=translations&&translations[currentLanguage]||{};
 let el=document.createElement('div');el.className='badge-toast';el.id='badgeToast';
 el.innerHTML='<div class="badge-toast-icon">'+b.icon+'</div><div class="badge-toast-name">'+(currentLanguage==='ar'?b.nameAR:b.nameEN)+'</div><div class="badge-toast-desc">'+(currentLanguage==='ar'?b.descAR:b.descEN)+'</div>';
 document.body.appendChild(el);setTimeout(function(){el.style.opacity='0';el.style.transform='translateX(-50%) translateY(-30px)';el.style.transition='all 0.5s ease';setTimeout(function(){el.remove()},600)},3000);
 if(typeof playSfx==='function')playSfx('badge')
}

function renderBadgeGrid(){
 const earned=getEarnedBadges();const t=translations&&translations[currentLanguage]||{};
 const grid=$id('badgeGrid');if(!grid)return;
 grid.innerHTML=badgeDefs.map(function(b){const has=earned.includes(b.id);return '<div class="badge-item'+(has?' earned':'')+'"><div class="badge-icon">'+b.icon+'</div><div class="badge-name">'+(currentLanguage==='ar'?b.nameAR:b.nameEN)+'</div><div class="badge-desc">'+(currentLanguage==='ar'?b.descAR:b.descEN)+'</div></div>'}).join('')
}

// ============================================================
// 12a. DASHBOARD CARD HELPERS
// ============================================================
function dashStreakCard(t,streak){return '<div class="dashboard-card" style="animation-delay:0s;"><div class="dashboard-card-title">'+(t['dash-streak']||'Streak')+'</div><div class="dashboard-card-value">'+streak.cnt+' '+(t['dash-days']||'days')+'</div><div class="dashboard-card-label">'+(t['dash-best']||'Best')+': '+streak.best+' '+(t['dash-days']||'days')+'</div></div>'}
function dashLessonsCard(t,completed){return '<div class="dashboard-card" style="animation-delay:0.1s;"><div class="dashboard-card-title">'+(t['dash-lessons']||'Lessons')+'</div><div class="dashboard-card-value">'+completed+'</div><div class="dashboard-card-label">'+(t['dash-of-35']||'of 35 completed')+'</div><div class="dashboard-card-bar"><div class="dashboard-card-fill" style="width:'+Math.round(completed/35*100)+'%"></div></div></div>'}
function dashQuizzesCard(t,qPct,correctQ,totalQ){return '<div class="dashboard-card" style="animation-delay:0.2s;"><div class="dashboard-card-title">'+(t['dash-quizzes']||'Quizzes')+'</div><div class="dashboard-card-value">'+qPct+'%</div><div class="dashboard-card-label">'+correctQ+'/'+totalQ+' '+(t['dash-correct']||'correct')+'</div><div class="dashboard-card-bar"><div class="dashboard-card-fill" style="width:'+qPct+'%"></div></div></div>'}
function dashWritingCard(t,sessions){return '<div class="dashboard-card" style="animation-delay:0.3s;"><div class="dashboard-card-title">'+(t['dash-writing']||'Writing')+'</div><div class="dashboard-card-value">'+sessions+'</div><div class="dashboard-card-label">'+(t['dash-sessions']||'sessions')+'</div></div>'}
function dashPronCard(t){
 var scores=store('speak',[]);var sessions=scores.length;
 var lastScore=sessions>0?scores[scores.length-1].score:0;
 var avg=sessions>0?Math.round(scores.reduce(function(a,b){return a+b.score},0)/sessions):0;
 var trend='';if(scores.length>=10){var r5=scores.slice(-5).reduce(function(a,b){return a+b.score},0)/5;var p5=scores.slice(-10,-5).reduce(function(a,b){return a+b.score},0)/5;trend=r5>p5+5?'📈':r5<p5-5?'📉':'➡️'}
 var spark='';var lastN=scores.slice(-10);if(lastN.length>0){var mx=Math.max.apply(null,lastN.map(function(s){return s.score}));spark='<div style="display:flex;gap:2px;align-items:flex-end;height:30px;margin-top:0.5rem;">';lastN.forEach(function(s){var h=mx>0?Math.max(3,Math.round(s.score/mx*28)):3;var c=s.score>=70?'#22C55E':s.score>=45?'#F97316':'#EF4444';spark+='<div style="width:6px;height:'+h+'px;background:'+c+';border-radius:2px;"></div>'});spark+='</div>'}
 return '<div class="dashboard-card" style="animation-delay:0.35s;"><div class="dashboard-card-title">'+(t['dash-pron']||'Pronunciation')+' '+trend+'</div><div class="dashboard-card-value" style="font-size:1.8rem;">'+lastScore+'%</div><div class="dashboard-card-label">'+sessions+' '+(t['dash-sessions']||'sessions')+' | '+(t['dash-avg']||'avg')+': '+avg+'%</div>'+spark+'</div>'
}
function dashGoalsCard(t){return '<div class="dashboard-card dashboard-card-wide" style="animation-delay:0.4s;"><div class="dashboard-card-title">'+(t['dash-goals']||'Goals')+'</div><div style="margin-top:0.5rem;font-size:0.85rem;color:var(--text-light);">'+(t['dash-goals-desc']||'Set daily goals to stay motivated')+'</div></div>'}
function dashBadgesCard(t){return '<div class="dashboard-card" style="animation-delay:0.5s;"><div class="dashboard-card-title">'+(t['dash-badges']||'Badges')+'</div><div class="dashboard-card-value" style="font-size:1.8rem;">'+getEarnedBadges().length+'/'+badgeDefs.length+'</div><div class="dashboard-card-label">'+(t['dash-earned']||'earned')+'</div></div>'}
function dashCertCard(t,completed){return '<div class="dashboard-card" style="animation-delay:0.6s;"><div class="dashboard-card-title">'+(t['dash-cert']||'Certificate')+'</div><div style="margin-top:0.5rem;font-size:0.85rem;color:var(--text-light);">'+(completed>=35?(t['cert-ready']||'Ready to download!'):completed+' / 35 '+(t['dash-lessons-completed']||'lessons'))+'</div>'+(completed>=35?'<button class="cert-btn" onclick="showCertificate()" style="margin-top:0.5rem;">'+(t['cert-view']||'View Certificate')+'</button>':'')+'</div>'}
function dashActionsCard(t){return '<div class="dashboard-card" style="animation-delay:0.7s;"><button class="btn-secondary" style="width:100%;justify-content:center;font-size:0.82rem;padding:0.7rem 1.5rem;" onclick="openAchievements()">'+(t['badge-view-all']||'View All Badges')+'</button></div><div class="dashboard-card" style="animation-delay:0.8s;"><button class="btn-secondary" style="width:100%;justify-content:center;font-size:0.82rem;padding:0.7rem 1.5rem;" onclick="exportAllData()">'+(t['export-btn']||'Download CSV Report')+'</button></div>'}

function renderDashboard(){
 const grid=$id('dashboardGrid');if(!grid)return;
 const t=translations&&translations[currentLanguage]||{};
 const lp=lessonProgress||{};const qzd=store('qz',{});
 const streak=getStreak();
 const completedLessons=Object.keys(lp).length;
 let totalQ=0,correctQ=0;
 const qs=store('qs',{});
 Object.keys(qs).forEach(function(k){totalQ+=qs[k].t||0;correctQ+=qs[k].c||0});
 const qPct=totalQ>0?Math.round(correctQ/totalQ*100):0;
 const writeSessions=(store('wh',[])).length;
 grid.innerHTML=
  dashStreakCard(t,streak)+
  dashLessonsCard(t,completedLessons)+
  dashQuizzesCard(t,qPct,correctQ,totalQ)+
  dashWritingCard(t,writeSessions)+
  dashPronCard(t)+
  dashGoalsCard(t)+
  dashBadgesCard(t)+
  dashCertCard(t,completedLessons)+
  dashActionsCard(t);
 checkBadges(true)
}
renderDashboard();

function openAchievements(){
 renderBadgeGrid();
 $id('achieveModal').classList.add('active')
}
$id('achieveModalClose').addEventListener('click',function(){$id('achieveModal').classList.remove('active')});

// ============================================================
// 12b. DAILY GOALS
// ============================================================
const goalDefs=[
 {id:'study-minutes',icon:'⏱️',en:'Study 30 minutes',ar:'ادرس 30 دقيقة',check:function(pomo){return (pomo&&pomo.today||0)>=1}},
 {id:'complete-lesson',icon:'📚',en:'Complete 1 lesson',ar:'أكمل درسًا واحدًا',check:function(lp){return Object.keys(lp||{}).length>0}},
 {id:'quiz-perfect',icon:'🏆',en:'Perfect quiz score',ar:'درجة كاملة في اختبار',check:function(lp,qzd,qs){for(const k in qs||{}){if(qs[k].c===qs[k].t&&qs[k].t>0)return true}return false}},
 {id:'write-session',icon:'✍️',en:'Practice writing',ar:'تمرن على الكتابة',check:function(lp,qzd,qs,wh){return (wh||[]).length>0}},
 {id:'vocab-game',icon:'🎮',en:'Play vocab game',ar:'العب لعبة المفردات',check:function(lp,qzd,qs,wh,s,vg){return (vg&&vg.best||vgBestStreak||0)>0}},
];

function getGoalsConfig(){return store('gcfg',{goals:goalDefs.map(function(g){return g.id}),streak:0,lastReset:''})}
function saveGoalsConfig(c){save('gcfg',c)}

function initGoals(){
 const cfg=getGoalsConfig();const today=new Date().toISOString().slice(0,10);
 if(cfg.lastReset!==today){cfg.completed=[];cfg.lastReset=today;saveGoalsConfig(cfg)}
 renderGoals()
}

function renderGoals(){
 const t=translations&&translations[currentLanguage]||{};
 const cfg=getGoalsConfig();const today=new Date().toISOString().slice(0,10);
 if(cfg.lastReset!==today){cfg.completed=[];cfg.lastReset=today;saveGoalsConfig(cfg)}
 const lp=lessonProgress||{};const qzd=store('qz',{});const qs=store('qs',{});const wh=store('wh',[]);const s=getStreak();const vg=store('vg',{});const pomo=store('pomo',{});
 const activeGoals=goalDefs.filter(function(g){return cfg.goals.includes(g.id)});
 const allDone=activeGoals.length>0&&activeGoals.every(function(g){return cfg.completed.includes(g.id)||g.check(lp,qzd,qs,wh,s,vg,pomo)});
 // Find goals card in dashboard and update it
 const dashGrid=$id('dashboardGrid');if(!dashGrid)return;
 const goalCard=dashGrid.querySelector('.dashboard-card-wide');
 if(goalCard){
  let html='<div class="goals-header"><span class="goals-title">'+(t['goals-title']||'Daily Goals')+'</span><button class="goals-settings-btn" onclick="openGoalsModal()">⚙️ '+(t['goals-settings']||'Settings')+'</button></div><div class="goals-list">';
  activeGoals.forEach(function(g){
   const done=cfg.completed.includes(g.id)||g.check(lp,qzd,qs,wh,s,vg,pomo);
   if(done&&!cfg.completed.includes(g.id)){cfg.completed.push(g.id);saveGoalsConfig(cfg)}
   html+='<div class="goals-item'+(done?' done':'')+'"><div class="goals-check'+(done?' checked':'')+'" onclick="'+(done?'':'toggleGoal(\''+g.id+'\')')+'">'+(done?'✓':'')+'</div>'+g.icon+' '+(currentLanguage==='ar'?g.ar:g.en)+'</div>'
  });
  html+='</div>';
  if(allDone)html='<div class="goals-all-done"><span class="goals-all-done-icon">🎉</span>'+(t['goals-all-done']||'All goals completed!')+'</div>';
  goalCard.innerHTML=html
 }
}

function toggleGoal(id){
 const cfg=getGoalsConfig();if(!cfg.completed.includes(id)){cfg.completed.push(id);saveGoalsConfig(cfg);renderGoals();updateStreak();if(typeof playSfx==='function')playSfx('confirm')}
}

function openGoalsModal(){
 const cfg=getGoalsConfig();
 const list=$id('goalsConfigList');if(!list)return;
 list.innerHTML=goalDefs.map(function(g){const checked=cfg.goals.includes(g.id);return '<label class="goals-item" style="cursor:pointer;"><input type="checkbox" '+(checked?'checked':'')+' data-id="'+g.id+'" style="width:18px;height:18px;accent-color:var(--orange-500);">'+g.icon+' '+(currentLanguage==='ar'?g.ar:g.en)+'</label>'}).join('');
 $id('goalsModal').classList.add('active')
}

$id('goalsModalClose').addEventListener('click',function(){$id('goalsModal').classList.remove('active')});
$id('goalsModalSave').addEventListener('click',function(){
 const cfg=getGoalsConfig();
 cfg.goals=[];
 $id('goalsConfigList').querySelectorAll('input[type=checkbox]:checked').forEach(function(cb){cfg.goals.push(cb.dataset.id)});
 if(cfg.goals.length===0)cfg.goals=goalDefs.map(function(g){return g.id});
 cfg.completed=[];cfg.lastReset='';
 saveGoalsConfig(cfg);$id('goalsModal').classList.remove('active');renderGoals()
});
$id('goalsModalReset').addEventListener('click',function(){
 const cfg=getGoalsConfig();
 cfg.goals=goalDefs.map(function(g){return g.id});
 cfg.completed=[];cfg.lastReset='';
 saveGoalsConfig(cfg);$id('goalsModal').classList.remove('active');renderGoals()
});

function renderGoalsLang(){
 const t=translations&&translations[currentLanguage]||{};
 var mTitle=$id('goalsModalTitle');if(mTitle)mTitle.textContent='🎯 '+(t['goals-modal-title']||'Daily Goals Settings');
 var mDesc=$id('goalsModalDesc');if(mDesc)mDesc.textContent=(t['goals-modal-desc']||'Choose what you want to track');
 var sBtn=$id('goalsModalSave');if(sBtn)sBtn.innerHTML='💾 '+(t['goals-saved']||'Save Goals');
 var rBtn=$id('goalsModalReset');if(rBtn)rBtn.innerHTML='↺ '+(t['goals-reset']||'Reset to Default');
 renderGoals()
}

// ============================================================
// 13. POMODORO TIMER
// ============================================================
let pomoInterval=null,pomoRemaining=1500,pomoTotal=1500,pomoRunning=false,pomoMode='focus',pomoSessions=0;
const $pomoStart=$id('pomodoroStartBtn'),$pomoPause=$id('pomodoroPauseBtn');
function setPomoBtns(startDisplay,pauseDisplay,startText){if($pomoStart){$pomoStart.style.display=startDisplay;if(startText)$pomoStart.innerHTML=startText}if($pomoPause)$pomoPause.style.display=pauseDisplay}
function getPomoStats(){return store('pomo',{today:0,totalMin:0,date:''})}
function savePomoStats(s){save('pomo',s)}

function initPomo(){
 const s=getPomoStats();const today=new Date().toISOString().slice(0,10);
 if(s.date!==today){s.today=0;s.date=today;savePomoStats(s)}
 $id('pomodoroTodayCount').textContent=s.today;
 $id('pomodoroTotalMin').textContent=Math.round(s.totalMin);
 // Mode selector
 $id('pomodoroModeSelect').querySelectorAll('.pomodoro-mode-btn').forEach(function(btn){
  btn.addEventListener('click',function(){
   if(pomoRunning)return;
   $id('pomodoroModeSelect').querySelector('.active').classList.remove('active');
   this.classList.add('active');
   const min=parseInt(this.dataset.min);pomoMode=this.dataset.mode;
   pomoRemaining=min*60;pomoTotal=min*60;updatePomoDisplay();
   if(typeof renderPomoLang==='function')renderPomoLang()
  })
 });
 // Controls
 $id('pomodoroStartBtn').addEventListener('click',startPomo);
 $id('pomodoroPauseBtn').addEventListener('click',pausePomo);
 $id('pomodoroResetBtn').addEventListener('click',resetPomo);
 updatePomoDisplay();
 if(typeof renderPomoLang==='function')renderPomoLang()
}

function startPomo(){
 if(pomoRunning)return;if(pomoRemaining<=0)resetPomo();
 pomoRunning=true;
 setPomoBtns('none','inline-flex');
 pomoInterval=setInterval(function(){
  pomoRemaining--;
  updatePomoDisplay();
  if(pomoRemaining<=0){clearInterval(pomoInterval);pomoInterval=null;pomoRunning=false;completePomo()}
 },1000);
 if(typeof playSfx==='function')playSfx('start')
}

function pausePomo(){
 if(!pomoRunning)return;
 clearInterval(pomoInterval);pomoInterval=null;pomoRunning=false;
 setPomoBtns('inline-flex','none','▶ '+__('pomo-resume','Resume'))
}

function resetPomo(){
 clearInterval(pomoInterval);pomoInterval=null;pomoRunning=false;
 const active=document.querySelector('.pomodoro-mode-btn.active');
 const min=active?parseInt(active.dataset.min):25;
 pomoRemaining=min*60;pomoTotal=min*60;
 setPomoBtns('inline-flex','none','▶ '+__('pomo-start','Start'));
 updatePomoDisplay()
}

function completePomo(){
 const s=getPomoStats();s.today++;const mins=pomoTotal/60;
 if(pomoMode==='focus'){s.totalMin+=mins;savePomoStats(s)}
 else{savePomoStats(s)}
 $id('pomodoroTodayCount').textContent=s.today;
 $id('pomodoroTotalMin').textContent=Math.round(s.totalMin);
 setPomoBtns('inline-flex','none','▶ '+__('pomo-start','Start'));
 if(typeof playSfx==='function')playSfx('complete');
 if('Notification'in window&&Notification.permission==='granted'){
  const t2=translations&&translations[currentLanguage]||{};
  const bodyText=pomoMode==='focus'?(t2['pomo-notif-focus']||'Focus session complete! Take a break.'):(t2['pomo-notif-break']||'Break over! Ready to focus?');
  new Notification('Rise & Shine English',{body:bodyText})
 }
 if(typeof nb!=='undefined'&&nb){
  const nm=$id('notificationMessage');
  const t2=translations&&translations[currentLanguage]||{};
  if(nm)nm.textContent=pomoMode==='focus'?(t2['pomo-notif-focus']||'Focus session complete! Take a break.'):(t2['pomo-notif-break']||'Break over! Ready to focus?');
  nb.classList.add('show');setTimeout(function(){nb.classList.remove('show')},8000)
 }
}

function updatePomoDisplay(){
 const mins=Math.floor(pomoRemaining/60);const secs=pomoRemaining%60;
 $id('pomodoroTime').textContent=String(mins).padStart(2,'0')+':'+String(secs).padStart(2,'0');
 const pct=pomoTotal>0?(1-pomoRemaining/pomoTotal)*100:0;
 const ring=$id('pomodoroRing');if(ring)ring.style.strokeDashoffset=440-(440*pct/100)
}

function renderPomoLang(){
 const t=translations&&translations[currentLanguage]||{};
 const st=$sectionTags||document.querySelectorAll('.section-tag');const stitle=$sectionTitles||document.querySelectorAll('.section-title');const ssub=$sectionSubs||document.querySelectorAll('.section-subtitle');
 if(st.length>=10){st[9].innerHTML='<span class="section-tag-emoji">⏱️</span> '+t['pomo-tag']}
 if(stitle.length>=10){stitle[9].innerHTML=t['pomo-title']}
 if(ssub.length>=10){ssub[9].innerHTML=t['pomo-subtitle']}
 $id('pomodoroModeSelect').querySelectorAll('.pomodoro-mode-btn').forEach(function(btn){
  const label=btn.dataset.mode;
  const labels={focus:t['pomo-label-focus']||'Focus',short:t['pomo-label-short']||'Short Break',long:t['pomo-label-long']||'Long Break'};
  btn.textContent=labels[label]||btn.textContent
 });
 const startBtn=$id('pomodoroStartBtn');if(startBtn&&!pomoRunning)startBtn.innerHTML='▶ '+__(t['pomo-start']||'Start');
 const resetBtn=$id('pomodoroResetBtn');if(resetBtn)resetBtn.innerHTML='↺ '+__(t['pomo-reset']||'Reset');
 const pauseBtn=$id('pomodoroPauseBtn');if(pauseBtn)pauseBtn.innerHTML='⏸ '+__(t['pomo-pause']||'Pause');
 const countLbl=$id('pomodoroCount');
 if(countLbl)countLbl.textContent=(t['pomo-session']||'Session')+' #'+(getPomoStats().today+1);
 updatePomoDisplay()
}

// ============================================================
// 14. GRAMMAR REFERENCE
// ============================================================
const grammarData={
 tenses:[
  {title:'Present Simple',example:'I eat breakfast every day.',usage:'Habits, facts, routines'},
  {title:'Present Continuous',example:'I am eating lunch right now.',usage:'Actions happening now'},
  {title:'Present Perfect',example:'I have visited Paris.',usage:'Past experiences, recent changes'},
  {title:'Present Perfect Continuous',example:'I have been studying for 2 hours.',usage:'Actions that started in the past and continue'},
  {title:'Past Simple',example:'I visited London last year.',usage:'Completed past actions'},
  {title:'Past Continuous',example:'I was watching TV when you called.',usage:'Actions in progress in the past'},
  {title:'Past Perfect',example:'I had finished before he arrived.',usage:'Actions before another past action'},
  {title:'Future Simple (will)',example:'I will call you tomorrow.',usage:'Predictions, promises'},
  {title:'Future (going to)',example:'I am going to travel next month.',usage:'Plans, intentions'},
  {title:'Future Continuous',example:'I will be flying to Cairo at 5 PM.',usage:'Actions in progress at a future time'},
  {title:'Future Perfect',example:'I will have finished by Friday.',usage:'Actions completed by a future time'}
 ],
 mistakes:[
  {title:'Your vs You\'re',example:'Your/You\'re beautiful.','fix':'Your shows possession. You\'re = You are.'},
  {title:'Its vs It\'s',example:'Its/It\'s a nice day.','fix':'It\'s = It is. Its = possession.'},
  {title:'There vs Their vs They\'re',example:'There/Their/They\'re house is big.','fix':'There = location. Their = possession. They\'re = They are.'},
  {title:'Then vs Than',example:'I am taller then/than you.','fix':'Then = time. Than = comparison.'},
  {title:'Affect vs Effect',example:'The weather affects/effects my mood.','fix':'Affect = verb. Effect = noun.'},
  {title:'Lose vs Loose',example:'Don\'t lose/loose your keys.','fix':'Lose = misplace. Loose = not tight.'},
  {title:'To vs Too vs Two',example:'I want to/too/two go.','fix':'To = direction. Too = also. Two = number 2.'},
  {title:'Advice vs Advise',example:'Please advice/advise me.','fix':'Advice = noun. Advise = verb.'},
  {title:'Accept vs Except',example:'Everyone accept/except John came.','fix':'Accept = receive. Except = exclude.'},
  {title:'Fewer vs Less',example:'I have fewer/less money.','fix':'Fewer = countable. Less = uncountable.'},
 ]
};

function renderGrammar(){
 const lang=currentLanguage||'en';const t=translations&&translations[lang]||{};
 const activeTab=$id('grammarTabs').querySelector('.active');const tab=activeTab?activeTab.dataset.tab:'tenses';
 const grid=$id('grammarGrid');if(!grid)return;
 const data=tab==='tenses'?grammarData.tenses:grammarData.mistakes;
 grid.innerHTML=data.map(function(item){
  return '<div class="grammar-card"><div class="grammar-card-title"><span>'+item.title+'</span></div><div class="grammar-card-body"><div class="example">"'+item.example+'"</div>'+(item.usage?'<p style="margin-top:0.5rem;"><strong>Usage:</strong> '+item.usage+'</p>':'')+(item.fix?'<p style="margin-top:0.5rem;"><strong>Fix:</strong> '+item.fix+'</p>':'')+'</div></div>'
 }).join('')
}

function initGrammar(){
 renderGrammar();
 $id('grammarTabs').querySelectorAll('.grammar-tab').forEach(function(tab){
  tab.addEventListener('click',function(){
   $id('grammarTabs').querySelector('.active').classList.remove('active');
   this.classList.add('active');
   renderGrammar()
  })
 })
}

// ============================================================
// 15. WRITING PRACTICE
// ============================================================
const writingPrompts=[
 {type:'email',promptEN:'Write a professional email to a client about a project update.',promptAR:'اكتب بريدًا إلكترونيًا احترافيًا لعميل حول تحديث المشروع.',tips:['Start with a clear subject line','Use professional greetings','Be concise and specific','End with a call to action']},
 {type:'email',promptEN:'Write an email to your manager requesting time off.',promptAR:'اكتب بريدًا إلكترونيًا لمديرك تطلب فيه إجازة.',tips:['State the dates clearly','Explain the reason briefly']},
 {type:'interview',promptEN:'Write about your greatest professional achievement.',promptAR:'اكتب عن أعظم إنجاز مهني لك.',tips:['Use the STAR method','Focus on your specific role']},
 {type:'interview',promptEN:'Describe a time you overcame a challenge.',promptAR:'صِف وقتًا تغلبت فيه على تحدٍ.',tips:['Explain the challenge','Describe your actions']},
 {type:'essay',promptEN:'Write about the benefits of learning languages.',promptAR:'اكتب عن فوائد تعلم اللغات.',tips:['Start with a strong thesis','Provide evidence']},
 {type:'essay',promptEN:'Discuss the impact of technology on education.',promptAR:'ناقش تأثير التكنولوجيا على التعليم.',tips:['Present balanced arguments','Use academic vocabulary']},
];
let currentWritingPrompt=0;

function renderWritingPrompts(){
 const sel=$id('writingPromptSelect');if(!sel)return;const lang=currentLanguage||'en';
 sel.innerHTML=writingPrompts.map(function(p,i){return '<option value="'+i+'">'+(lang==='ar'?p.promptAR.slice(0,40):p.promptEN.slice(0,40))+'...</option>'}).join('');
 sel.value='0';updateWritingPrompt(0)
}

function updateWritingPrompt(idx){
 const p=writingPrompts[idx];if(!p)return;const lang=currentLanguage||'en';
 $id('writingPromptText').innerHTML=lang==='ar'?p.promptAR:p.promptEN;
 currentWritingPrompt=idx
}

$id('writingPromptSelect').addEventListener('change',function(){updateWritingPrompt(parseInt(this.value))});

$id('writingEditor').addEventListener('input',function(){
 const words=this.value.trim()?this.value.trim().split(/\s+/).length:0;
 $id('writingWordCount').textContent=words;
 $id('writingCharCount').textContent=this.value.length
});

$id('writingSubmitBtn').addEventListener('click',function(){
 const text=$id('writingEditor').value.trim();if(!text){alert('Please write something first!');return}
 analyzeWriting(text,writingPrompts[currentWritingPrompt].type)
});

$id('writingClearBtn').addEventListener('click',function(){
 $id('writingEditor').value='';
 $id('writingWordCount').textContent='0';
 $id('writingCharCount').textContent='0';
 $id('writingFeedbackContainer').innerHTML=''
});

function analyzeWriting(text,type){
 const t=translations&&translations[currentLanguage]||{};
 const words=text.trim().split(/\s+/).filter(function(w){return w.length>0});
 const wordCount=words.length;
 const sentences=text.split(/[.!?]+/).filter(function(s){return s.trim().length>0});
 const sentCount=sentences.length||1;
 const avgWL=wordCount/sentCount;
 let score=50;
 if(wordCount>50)score+=10;
 if(wordCount>100)score+=10;
 if(avgWL>10&&avgWL<25)score+=10;
 if(sentCount>3)score+=5;
 if(text.length>300)score+=5;
 score=Math.min(100,Math.max(0,score));
 let label=t['write-label-ok']||'Good effort!';
 if(score>=80)label=t['write-label-great']||'Excellent!';
 else if(score>=60)label=t['write-label-good']||'Well written!';
 const result={score,wordCount,sentCount,avgWL:Math.round(avgWL*10)/10,label};
 const feedback=[];
 if(avgWL>20)feedback.push({type:'warn',name:'Long sentences',detail:'Try breaking long sentences into shorter ones.'});
 if(avgWL<8&&wordCount>20)feedback.push({type:'improve',name:'Short sentences',detail:'Try combining short sentences with connectors.'});
 if(wordCount<30)feedback.push({type:'warn',name:'Length',detail:'Try writing more to develop your ideas.'});
 else feedback.push({type:'good',name:'Good length',detail:'Good amount of content.'});
 showWritingFeedback(result,feedback);
 saveWritingResult(result,type,writingPrompts[currentWritingPrompt].promptEN.slice(0,50))
}

function showWritingFeedback(result,feedback){
 const t=translations&&translations[currentLanguage]||{};
 const container=$id('writingFeedbackContainer');
 let html='<div class="writing-feedback"><div class="writing-feedback-header"><div class="writing-feedback-title">'+(t['write-feedback']||'AI Feedback')+'</div><div class="writing-feedback-score">'+result.score+'%</div></div><div class="writing-score-bar"><div class="writing-score-fill" style="width:'+result.score+'%"></div></div><div class="writing-score-label">'+result.label+'</div><div class="writing-feedback-sections">';
 feedback.forEach(function(fb){
  html+='<div class="writing-fb-item '+fb.type+'"><div class="writing-fb-header"><span class="writing-fb-name">'+fb.name+'</span><span class="writing-fb-icon">'+(fb.type==='good'?'✅':fb.type==='warn'?'⚠️':'💪')+'</span></div><div class="writing-fb-detail">'+fb.detail+'</div></div>'
 });
 html+='</div><div style="margin-top:1rem;padding:0.8rem 1rem;background:var(--orange-50);border-radius:10px;font-size:0.8rem;color:var(--text-light);line-height:1.5;"><strong>Stats:</strong> '+result.wordCount+' words, '+result.sentCount+' sentences, avg '+result.avgWL+' w/s</div></div>';
 container.innerHTML=html
}

function saveWritingResult(result,type,promptShort){
 const history=store('wh',[]);
 history.unshift({score:result.score,type:type,date:new Date().toISOString(),prompt:promptShort,wordCount:result.wordCount});
 if(history.length>50)history.length=50;
 save('wh',history);
 renderWritingHistory()
}

function renderWritingHistory(){
 const container=$id('writingHistoryContainer');const grid=$id('writingHistoryGrid');if(!container||!grid)return;
 const history=store('wh',[]);
 if(!history.length){container.style.display='none';return}
 container.style.display='block';
 grid.innerHTML=history.map(function(h,i){
  const cls=h.score>=70?'high':h.score>=50?'med':'low';
  return '<div class="writing-history-item"><div class="writing-history-score '+cls+'">'+h.score+'%</div><div class="writing-history-info"><div class="writing-history-type">'+(h.type||'writing')+'</div><div class="writing-history-date">'+new Date(h.date).toLocaleDateString()+'</div></div><div class="writing-history-bar"><div class="writing-history-bar-fill '+cls+'" style="width:'+h.score+'%"></div></div></div>'
 }).join('')
}
$id('writingHistoryClear').addEventListener('click',function(){save('wh',[]);renderWritingHistory()});

renderWritingPrompts();
renderWritingHistory();

// ============================================================
// 16. CHATBOT
// ============================================================
const chatQuickReplies=[
 {en:'What is present perfect vs past simple?',ar:'ما الفرق بين المضارع التام والماضي البسيط؟',key:'tense1'},
 {en:'How can I improve my vocabulary?',ar:'كيف أحسن مفرداتي؟',key:'vocab'},
 {en:'Practice sentence please!',ar:'جملة تدريبية من فضلك!',key:'practice'},
 {en:'Common interview questions?',ar:'أسئلة المقابلات الشائعة؟',key:'interview'},
];
const chatResponses={
 tense1:{en:'Present perfect connects past to present: "I have lived here for 5 years." Past simple: "I lived there in 2019."',ar:'المضارع التام يربط الماضي بالحاضر: عشت هنا لمدة 5 سنوات. الماضي البسيط: عشت هناك في 2019.'},
 vocab:{en:'Read daily, learn 5 new words each day, use flashcards, practice in sentences!',ar:'اقرأ يوميًا، تعلم 5 كلمات جديدة يوميًا، استخدم البطاقات!'},
 practice:{en:'Write: "By the time I arrive, they will have finished." This is Future Perfect!',ar:'اكتب: عندما أصل سيكونون قد انتهوا. هذا هو المستقبل التام!'},
 interview:{en:'Common: Tell me about yourself, strengths/weaknesses? Why do you want this job?',ar:'الأسئلة الشائعة: حدثني عن نفسك، نقاط القوة والضعف، لماذا تريد هذه الوظيفة؟'},
 default:{en:'Great question! Keep practicing every day and you will see amazing progress!',ar:'سؤال رائع! استمر في الممارسة يوميًا وسترى تقدمًا مذهلاً!'}
};

$id('chatToggle').addEventListener('click',function(){$id('chatPanel').classList.toggle('open');this.style.display='none'});
$id('chatCloseBtn').addEventListener('click',function(){$id('chatPanel').classList.remove('open');$id('chatToggle').style.display=''});
$id('chatSendBtn').addEventListener('click',sendChatMsg);
$id('chatInput').addEventListener('keypress',function(e){if(e.key==='Enter')sendChatMsg()});

function sendChatMsg(){
 const input=$id('chatInput');const text=input.value.trim();if(!text)return;
 addChatMsg(text,true);input.value='';
 setTimeout(function(){const lang=currentLanguage||'en';const resp=chatResponses.default[lang];addChatMsg(resp,false)},600+Math.random()*400)
}

function sendQuickReply(key){
 const lang=currentLanguage||'en';const qr=chatQuickReplies.find(function(q){return q.key===key});
 if(qr){addChatMsg(qr[lang],true);setTimeout(function(){const resp=chatResponses[key]?chatResponses[key][lang]:chatResponses.default[lang];addChatMsg(resp,false)},500)}
}

function addChatMsg(text,isUser){
 const container=$id('chatMessages');
 const msg=document.createElement('div');msg.className='chat-msg '+(isUser?'user':'bot');
 msg.textContent=text;container.appendChild(msg);
 container.scrollTop=container.scrollHeight
}

function renderChatLang(){
 const t=translations&&translations[currentLanguage]||{};const lang=currentLanguage||'en';
 const header=$id('chatHeaderTitle');if(header)header.textContent=t['chat-title']||'English AI Tutor';
 const container=$id('chatQuickReplies');if(!container)return;
 container.innerHTML=chatQuickReplies.map(function(qr){return '<button class="chat-quick-btn" onclick="sendQuickReply(\''+qr.key+'\')">'+(lang==='ar'?qr.ar:qr.en)+'</button>'}).join('');
 const inp=$id('chatInput');if(inp)inp.placeholder=lang==='ar'?'اسأل سؤالاً...':'Ask a question...'
}

function initChat(){
 renderChatLang();
 const lastQ=localStorage.getItem('lastChatQ');
 if(lastQ){setTimeout(function(){addChatMsg('Last time you asked about: "'+lastQ+'". Feel free to ask more!',false)},2000)}
}

// ============================================================
// 17. READING COMPREHENSION
// ============================================================
const readingStories=[
 {id:0,level:'easy',titleEN:'A Day at the Market',titleAR:'يوم في السوق',
  textEN:'Sarah wakes up early on Saturday. The sun is bright and the birds are singing. She goes to the market with her mother. She buys fresh apples and oranges. The market is full of colors and smells. Sarah feels happy.',
  textAR:'تستيقظ سارة مبكرًا يوم السبت. الشمس مشرقة والعصافير تغرد. تذهب إلى السوق مع والدتها. تشتري تفاحًا وبرتقالًا طازجًا. السوق مليء بالألوان والروائح. سارة تشعر بالسعادة.',
  qs:[{q:'What day does Sarah go to the market?',a:0,opts:['Saturday','Sunday','Friday']},{q:'What does Sarah buy?',a:0,opts:['Apples and oranges','Bread and milk','Flowers']},{q:'How does Sarah feel?',a:2,opts:['Sad','Tired','Happy']}]},
 {id:1,level:'medium',titleEN:'The Lost Key',titleAR:'المفتاح المفقود',
  textEN:'Ahmed cannot find his house key. He looks in his bag, his pockets, and under the table. He remembers he left it at his friend\'s house. He calls his friend and they agree to meet tomorrow. Ahmed is relieved.',
  textAR:'أحمد لا يجد مفتاح منزله. يبحث في حقيبته وجيوبه وتحت الطاولة. يتذكر أنه تركه عند صديقه. يتصل بصديقه ويتفقان على اللقاء غدًا. أحمد يشعر بالارتياح.',
  qs:[{q:'What did Ahmed lose?',a:0,opts:['His key','His bag','His phone']},{q:'Where did he leave it?',a:2,opts:['At home','In the car','At his friend\'s house']},{q:'How does Ahmed feel at the end?',a:1,opts:['Worried','Relieved','Angry']}]},
 {id:2,level:'hard',titleEN:'The Job Interview',titleAR:'مقابلة العمل',
  textEN:'Maria prepared for her job interview for weeks. She researched the company, practiced answers, and chose professional clothes. During the interview, she spoke clearly and confidently. The interviewer was impressed. A week later, she received the job offer.',
  textAR:'استعدت ماريا لمقابلة العمل لأسابيع. بحثت عن الشركة، تدربت على الإجابات، واختارت ملابس مهنية. خلال المقابلة، تحدثت بوضوح وثقة. أعجب بها المحاور. بعد أسبوع، تلقت عرض العمل.',
  qs:[{q:'How long did Maria prepare?',a:2,opts:['One day','One month','Weeks']},{q:'How did Maria speak during the interview?',a:1,opts:['Quickly and quietly','Clearly and confidently','Loudly and fast']},{q:'What happened after a week?',a:2,opts:['She had another interview','She was rejected','She received a job offer']}]},
];
let readingIdx=0,readingScore=0,readingAnswered=0;

function initReading(){
 const t=translations&&translations[currentLanguage]||{};
 const lang=currentLanguage||'en';
 const sel=$id('readingStorySelect');if(!sel)return;
 sel.innerHTML=readingStories.map(function(s,i){return '<button class="reading-story-btn" data-idx="'+i+'" onclick="selectReadingStory('+i+')">'+(lang==='ar'?s.titleAR:s.titleEN)+'</button>'}).join('');
 selectReadingStory(0)
}

function selectReadingStory(idx){
 readingIdx=idx;readingScore=0;readingAnswered=0;
 const lang=currentLanguage||'en';const story=readingStories[idx];
 $id('readingStorySelect').querySelectorAll('.reading-story-btn').forEach(function(b){b.classList.remove('active')});
 const btn=document.querySelector('.reading-story-btn[data-idx="'+idx+'"]');if(btn)btn.classList.add('active');
 const container=$id('readingStoryContainer');if(!container)return;
 container.innerHTML='<div class="reading-story-text">'+(lang==='ar'?story.textAR:story.textEN).split(/(?<=[.!?])\s*/).map(function(p){return p?'<p>'+p+'</p>':''}).join('')+'</div><div class="reading-questions">'+story.qs.map(function(q,qi){return '<div class="reading-q"><div class="reading-q-num">Question '+(qi+1)+'</div><div class="reading-q-text">'+(lang==='ar'?q.q:q.q)+'</div><div class="reading-q-opts">'+q.opts.map(function(o,oi){return '<button class="reading-q-opt" onclick="handleReadingAnswer(this,'+qi+','+q.a+')">'+String.fromCharCode(65+oi)+'. '+o+'</button>'}).join('')+'</div></div>'}).join('')+'</div>'
}

function handleReadingAnswer(btn,qi,correctIdx){
 const parent=btn.closest('.reading-q');if(!parent)return;
 const selected=parseInt(btn.textContent.charAt(0).charCodeAt(0)-65);
 const isCorrect=selected===correctIdx;
 parent.querySelectorAll('.reading-q-opt').forEach(function(b){b.disabled=true});
 if(isCorrect){btn.classList.add('correct');readingScore++}else{btn.classList.add('wrong');parent.querySelectorAll('.reading-q-opt')[correctIdx].classList.add('correct')}
 readingAnswered++;
 if(readingAnswered>=readingStories[readingIdx].qs.length)showReadingResult()
}

function showReadingResult(){
 const t=translations&&translations[currentLanguage]||{};
 const total=readingStories[readingIdx].qs.length;
 const pct=Math.round(readingScore/total*100);
 const emoji=pct>=100?'🏆':pct>=70?'🌟':'💪';
 const container=$id('readingStoryContainer');if(!container)return;
 container.innerHTML+='<div class="quiz-result" style="margin-top:1.5rem;"><div class="quiz-result-emoji">'+emoji+'</div><div class="quiz-result-text">'+readingScore+' / '+total+'</div></div>'
}

function renderReadingLang(){
 const t=translations&&translations[currentLanguage]||{};
 const st=$sectionTags||document.querySelectorAll('.section-tag');const stitle=$sectionTitles||document.querySelectorAll('.section-title');const ssub=$sectionSubs||document.querySelectorAll('.section-subtitle');
 if(st.length>=12){st[11].innerHTML='<span class="section-tag-emoji">📖</span> '+t['reading-tag']}
 if(stitle.length>=12){stitle[11].innerHTML=t['reading-title']}
 if(ssub.length>=12){ssub[11].innerHTML=t['reading-subtitle']}
 selectReadingStory(readingIdx)
}

// ============================================================
// 18. PLANNER
// ============================================================
function getPlannerData(){return store('planner',{})}
function savePlannerData(d){save('planner',d)}
let plannerDate=new Date();

function renderPlanner(){
 const data=getPlannerData();const t=translations&&translations[currentLanguage]||{};
 const lang=currentLanguage||'en';
 const year=plannerDate.getFullYear();const month=plannerDate.getMonth();
 const firstDay=new Date(year,month,1).getDay();
 const daysInM=new Date(year,month+1,0).getDate();
 const prevDays=new Date(year,month,0).getDate();
 const today=new Date();const todayStr=today.toISOString().slice(0,10);
 const monthNames=lang==='ar'?['يناير','فبراير','مارس','إبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر']:['January','February','March','April','May','June','July','August','September','October','November','December'];
 const dayNames=lang==='ar'?['ح','ن','ث','ر','خ','ج','س']:['Su','Mo','Tu','We','Th','Fr','Sa'];
 $id('plannerMonthYear').textContent=monthNames[month]+' '+year;
 let html=dayNames.map(function(dn){return '<div class="planner-day-header">'+dn+'</div>'}).join('');
 for(let i=0;i<firstDay;i++){html+='<div class="planner-day other-month"><div class="planner-day-num">'+(prevDays-firstDay+1+i)+'</div></div>'}
 for(let day=1;day<=daysInM;day++){
  const key=year+'-'+String(month+1).padStart(2,'0')+'-'+String(day).padStart(2,'0');
  const isToday=key===todayStr;
  const tasks=data[key]||[];
  html+='<div class="planner-day'+(isToday?' today':'')+'" data-date="'+key+'"><div class="planner-day-num">'+day+'</div>'+tasks.slice(0,2).map(function(tk){return '<div class="planner-task'+(tk.done?' done':'')+'" title="'+(tk.title||'')+'">'+tk.title+'</div>'}).join('')+(tasks.length>2?'<div style="font-size:0.6rem;color:var(--orange-600);font-weight:600;">+'+(tasks.length-2)+'</div>':'')+'</div>'
 }
 const remaining=42-firstDay-daysInM;
 for(let i=1;i<=remaining;i++){html+='<div class="planner-day other-month"><div class="planner-day-num">'+i+'</div></div>'}
 $id('plannerGrid').innerHTML=html
}

$id('plannerPrev').addEventListener('click',function(){plannerDate.setMonth(plannerDate.getMonth()-1);renderPlanner();renderPlannerLang()});
$id('plannerNext').addEventListener('click',function(){plannerDate.setMonth(plannerDate.getMonth()+1);renderPlanner();renderPlannerLang()});
$id('plannerToday').addEventListener('click',function(){plannerDate=new Date();renderPlanner();renderPlannerLang()});

function renderPlannerLang(){
 const t=translations&&translations[currentLanguage]||{};
 const st=$sectionTags||document.querySelectorAll('.section-tag');const stitle=$sectionTitles||document.querySelectorAll('.section-title');const ssub=$sectionSubs||document.querySelectorAll('.section-subtitle');
 if(st.length>=13){st[12].innerHTML='<span class="section-tag-emoji">📅</span> '+t['planner-tag']}
 if(stitle.length>=13){stitle[12].innerHTML=t['planner-title']}
 if(ssub.length>=13){ssub[12].innerHTML=t['planner-subtitle']}
}
renderPlanner();

// ============================================================
// 19. VOCABULARY GAME
// ============================================================
let vgScore=0,vgIdx=0,vgTotal=0,vgStreak=0,vgBestStreak=0,vgAnswered=false;
let vgTimer=null,vgTimeLeft=10;

function initVocabGame(){
 const t=translations&&translations[currentLanguage]||{};
 const saved=store('vg',{best:0});vgBestStreak=saved.best;
 $id('vocabStartBtn').addEventListener('click',startVocabGame);
 $id('vocabPlayAgainBtn')&&$id('vocabPlayAgainBtn').addEventListener('click',startVocabGame)
}

function startVocabGame(){
 const t=translations&&translations[currentLanguage]||{};
 vgScore=0;vgStreak=0;vgIdx=0;
 $id('vocabStartBtn').style.display='none';
 $id('vocabQuestionArea').innerHTML='<div id="vocabTimer" class="vocab-timer">10</div><div id="vocabWordDisplay" class="vocab-word">---</div><div class="vocab-options" id="vocabOptions"></div><div class="vocab-score" id="vocabScoreDisplay">0 correct</div><div class="vocab-streak" id="vocabStreakDisplay">Streak: 0</div>';
 nextVocabQuestion()
}

function nextVocabQuestion(){
 const t=translations&&translations[currentLanguage]||{};
 vgAnswered=false;clearInterval(vgTimer);vgTimeLeft=10;
 const word='vocabulary';
 const options=['المفردات','الكتب','الأفعال','القواعد'];
 const correct=0;
 $id('vocabWordDisplay').textContent=word;
 const optsDiv=$id('vocabOptions');optsDiv.innerHTML=options.map(function(o,i){return '<button class="vocab-opt" onclick="vocabSelect('+i+','+correct+')">'+o+'</button>'}).join('');
 vgTimer=setInterval(function(){vgTimeLeft--;const t=$id('vocabTimer');if(t)t.textContent=vgTimeLeft;if(vgTimeLeft<=0){clearInterval(vgTimer);handleVocabTimeout()}},1000)
}

function vocabSelect(selected,correct){if(vgAnswered)return;vgAnswered=true;clearInterval(vgTimer);
 const opts=document.querySelectorAll('.vocab-opt');opts.forEach(function(o,i){o.disabled=true});
 if(selected===correct){opts[selected].classList.add('correct');vgScore++;vgStreak++;if(vgStreak>vgBestStreak){vgBestStreak=vgStreak;save('vg',{best:vgBestStreak})}}else{opts[selected].classList.add('wrong');opts[correct].classList.add('correct');vgStreak=0}
 $id('vocabScoreDisplay').textContent=vgScore+' correct';
 $id('vocabStreakDisplay').textContent='Streak: '+vgStreak;
 setTimeout(nextVocabQuestion,1000)
}

function handleVocabTimeout(){vgStreak=0;$id('vocabStreakDisplay').textContent='Streak: 0';setTimeout(nextVocabQuestion,500)}

$id('vocabPlayAgainBtn')&&$id('vocabPlayAgainBtn').addEventListener('click',startVocabGame);

// ============================================================
// 19b. FLASHCARDS WITH SPACED REPETITION
// ============================================================
const fcData=[
 // Course 0 - Foundation
 [
  [{w:'apple',d:'a round fruit',p:'/ˈæp.əl/',e:'I eat an apple every day.'},{w:'book',d:'something you read',p:'/bʊk/',e:'I am reading a good book.'},{w:'cat',d:'a small pet animal',p:'/kæt/',e:'The cat is sleeping.'},{w:'dog',d:'a loyal pet animal',p:'/dɒɡ/',e:'My dog loves to play.'},{w:'house',d:'a building to live in',p:'/haʊs/',e:'We live in a big house.'},{w:'water',d:'clear liquid we drink',p:'/ˈwɔː.tər/',e:'Please give me some water.'},{w:'friend',d:'a person you like',p:'/frend/',e:'She is my best friend.'},{w:'school',d:'a place to learn',p:'/skuːl/',e:'I go to school every day.'},{w:'family',d:'parents, siblings, relatives',p:'/ˈfæm.əl.i/',e:'My family is very kind.'},{w:'morning',d:'early part of the day',p:'/ˈmɔːr.nɪŋ/',e:'Good morning! How are you?'}],
  [{w:'happy',d:'feeling good',p:'/ˈhæp.i/',e:'I am happy today.'},{w:'sad',d:'feeling unhappy',p:'/sæd/',e:'She looks sad.'},{w:'beautiful',d:'very pretty',p:'/ˈbjuː.tɪ.fəl/',e:'The sunset is beautiful.'},{w:'big',d:'large in size',p:'/bɪɡ/',e:'That is a big tree.'},{w:'small',d:'little in size',p:'/smɔːl/',e:'The kitten is very small.'},{w:'hot',d:'high temperature',p:'/hɒt/',e:'The coffee is hot.'},{w:'cold',d:'low temperature',p:'/kəʊld/',e:'The water is cold.'},{w:'new',d:'not old',p:'/njuː/',e:'I bought a new phone.'},{w:'old',d:'not new',p:'/əʊld/',e:'This is an old building.'},{w:'good',d:'of high quality',p:'/ɡʊd/',e:'This is a good idea.'}],
 ]
];

function getFCProgress(){
 const d=store('fc',{});
 const now=Date.now();const due=[];let total=0;let mastered=0;
 fcData.forEach(function(c,ci){c.forEach(function(l,li){l.forEach(function(w,wi){
  total++;const key=ci+'-'+li+'-'+wi;const rec=d[key];
  if(!rec||rec.next<=now){due.push({ci,li,wi,w,key,rec})}
  if(rec&&rec.interval>=21){mastered++}
 })})});
 return {data:d,due:due,total:total,mastered:mastered}
}

function saveFC(key,correct){
 const d=store('fc',{});const rec=d[key]||{next:0,interval:0,ef:2.5,reps:0};
 if(correct){rec.reps++;rec.ef=Math.max(1.3,rec.ef+(0.1-(5-5)*(0.08+(5-5)*0.02)));const ints=[0,1,3,7,14,30,60,120];rec.interval=ints[Math.min(rec.reps,ints.length-1)];rec.next=Date.now()+rec.interval*86400000}else{rec.reps=0;rec.interval=0;rec.next=Date.now()+600000}
 d[key]=rec;save('fc',d)
}

function renderFlashcards(){
 const t=translations&&translations[currentLanguage]||{};
 const p=getFCProgress();
 $id('fcStats').innerHTML='<span>🗂️ '+(t['fc-total']||'total')+': '+p.total+' | 🔄 '+(t['fc-due']||'due')+': '+p.due.length+' | ✅ '+(t['fc-mastered']||'mastered')+': '+p.mastered+'</span>';
 const area=$id('fcReviewArea');if(!area)return;
 if(p.due.length===0){
  area.innerHTML='<div style="text-align:center;padding:2rem;"><div style="font-size:3rem;margin-bottom:1rem;">🎉</div><p style="color:var(--text-light);font-size:1.1rem;">'+(t['fc-all-done']||'All flashcards reviewed!')+'</p></div>';
  return
 }
 const card=p.due[0];
 area.innerHTML='<div class="fc-card" id="fcCard" style="max-width:500px;margin:0 auto;background:var(--bg-card);border-radius:var(--radius-lg);padding:2.5rem;box-shadow:var(--shadow);border:1px solid rgba(249,115,22,0.08);text-align:center;cursor:pointer;" onclick="flipFC()"><div class="fc-front" id="fcFront"><div style="font-size:0.75rem;color:var(--text-light);margin-bottom:0.5rem;">'+card.w.w+'</div><div class="fc-word" style="font-size:2rem;font-weight:700;color:var(--dark);font-family:\'Playfair Display\',serif;margin-bottom:1rem;">'+card.w.w+'</div><div style="font-size:0.85rem;color:var(--text-light);">'+(t['fc-tap-hint']||'Tap to reveal')+'</div></div><div class="fc-back" id="fcBack" style="display:none;"><div style="font-size:1rem;color:var(--text-light);margin-bottom:0.5rem;">'+card.w.d+'</div><div style="font-size:0.9rem;color:var(--orange-600);margin-bottom:0.5rem;">'+card.w.p+'</div><div style="font-size:0.82rem;font-style:italic;color:var(--text-light);margin-bottom:1.5rem;">"'+card.w.e+'"</div><div style="display:flex;gap:0.75rem;justify-content:center;"><button class="btn-secondary" style="padding:0.6rem 1.5rem;font-size:0.85rem;" onclick="event.stopPropagation();rateFC(\''+card.key+'\',false)">'+(t['fc-dontknow']||'Don\'t Know')+'</button><button class="btn-primary" style="padding:0.6rem 1.5rem;font-size:0.85rem;" onclick="event.stopPropagation();rateFC(\''+card.key+'\',true)">'+(t['fc-know']||'Know')+'</button></div></div></div>'
}

let fcFlipped=false;
function flipFC(){fcFlipped=!fcFlipped;$id('fcFront').style.display=fcFlipped?'none':'block';$id('fcBack').style.display=fcFlipped?'block':'none'}

function rateFC(key,correct){
 fcFlipped=false;
 saveFC(key,correct);
 renderFlashcards()
}

function initFlashcards(){
 renderFlashcards()
}

function renderFCLang(){
 renderFlashcards()
}

// ============================================================
// 19c. PRONUNCIATION GUIDE
// ============================================================
const pronData=[
 {cat:'vowels',catAr:'حروف العلة',items:[
  {word:'apple',ipa:'/ˈæp.əl/',breakdown:'æ-p-əl',tipAR:'افتح فمك واسعًا',tipEN:'Open your mouth wide'},
  {word:'egg',ipa:'/eɡ/',breakdown:'e-g',tipAR:'ارفع لسانك للأعلى',tipEN:'Raise your tongue up'},
  {word:'ice',ipa:'/aɪs/',breakdown:'aɪ-s',tipAR:'مد الصوت',tipEN:'Stretch the sound long'},
  {word:'orange',ipa:'/ˈɒr.ɪndʒ/',breakdown:'ɒr-ɪndʒ',tipAR:'دور شفتيك',tipEN:'Round your lips slightly'},
  {word:'umbrella',ipa:'/ʌmˈbrel.ə/',breakdown:'ʌm-brel-ə',tipAR:'اخفض فكك',tipEN:'Drop your jaw'},
  {word:'boot',ipa:'/buːt/',breakdown:'b-uː-t',tipAR:'دور شفتيك للأمام',tipEN:'Round your lips forward'},
 ]},
 {cat:'consonants',catAr:'الحروف الساكنة',items:[
  {word:'think',ipa:'/θɪŋk/',breakdown:'θ-ɪ-ŋ-k',tipAR:'ضع لسانك بين أسنانك',tipEN:'Place tongue between teeth'},
  {word:'this',ipa:'/ðɪs/',breakdown:'ð-ɪ-s',tipAR:'اهتز الحبال الصوتية',tipEN:'Vibrate vocal cords'},
  {word:'ship',ipa:'/ʃɪp/',breakdown:'ʃ-ɪ-p',tipAR:'دور شفتيك',tipEN:'Purse your lips'},
  {word:'measure',ipa:'/ˈmeʒ.ər/',breakdown:'me-ʒ-ər',tipAR:'اهتز حلقك',tipEN:'Vibrate your throat'},
  {word:'ring',ipa:'/rɪŋ/',breakdown:'r-ɪ-ŋ',tipAR:'اخفض الجزء الخلفي من لسانك',tipEN:'Lower back of tongue'},
  {word:'light',ipa:'/laɪt/',breakdown:'l-aɪ-t',tipAR:'المس سقف فمك',tipEN:'Touch roof of mouth'},
 ]},
 {cat:'diphthongs',catAr:'الإدغامات',items:[
  {word:'face',ipa:'/feɪs/',breakdown:'f-eɪ-s',tipAR:'حرك لسانك',tipEN:'Glide your tongue'},
  {word:'time',ipa:'/taɪm/',breakdown:'t-aɪ-m',tipAR:'اجمع بين الأصوات',tipEN:'Combine two sounds smoothly'},
  {word:'voice',ipa:'/vɔɪs/',breakdown:'v-ɔɪ-s',tipAR:'انتقل من o إلى i',tipEN:'Move from o to i'},
  {word:'home',ipa:'/həʊm/',breakdown:'h-əʊ-m',tipAR:'حافظ على استرخاء شفتيك',tipEN:'Keep lips relaxed'},
  {word:'near',ipa:'/nɪər/',breakdown:'n-ɪər',tipAR:'انتقل من i إلى schwa',tipEN:'Glide from i to schwa'},
  {word:'care',ipa:'/keər/',breakdown:'k-eər',tipAR:'افتح فمك ثم أغلقه',tipEN:'Open then close mouth'},
 ]},
];

function renderPron(filter){
 const grid=$id('pronGrid');if(!grid)return;
 const t=translations&&translations[currentLanguage]||{};
 const lang=currentLanguage||'en';
 const catKey=lang==='ar'?'catAr':'cat';
 const data=filter?pronData.filter(function(c){return c.cat===filter}):pronData;
 grid.innerHTML=data.map(function(cat){
  return '<div style="margin-bottom:2rem;"><h3 style="font-size:1.1rem;font-weight:600;color:var(--dark);margin-bottom:1rem;">'+cat[catKey]+'</h3><div class="pron-grid">'+cat.items.map(function(item,i){
   const tipKey=lang==='ar'?'tipAR':'tipEN';
   return '<div class="pron-card" style="opacity:0;transform:translateY(20px);" data-delay="'+i+'"><div class="pron-card-word"><span class="pron-card-text">'+item.word+'</span><span class="pron-card-ipa">'+item.ipa+'</span></div><div class="pron-card-details"><span>'+item.breakdown+'</span></div><div class="pron-card-example">💡 '+item[tipKey]+'</div><div class="pron-card-actions"><button class="pron-play-btn" onclick="playPron(\''+item.word+'\')">🔊 '+(t['pron-play']||'Play')+'</button><button class="pron-slow-btn" onclick="playPron(\''+item.word+'\',true)">🐢 '+(t['pron-slow']||'Slow')+'</button></div></div>'
  }).join('')+'</div></div>'
 }).join('');
 // Animate cards
 setTimeout(function(){grid.querySelectorAll('.pron-card').forEach(function(c){setTimeout(function(){c.style.opacity='1';c.style.transform='translateY(0)';c.style.transition='all 0.4s ease'},parseInt(c.dataset.delay)*50)})},100)
}

function renderPronFilter(){
 const filter=$id('pronFilter');if(!filter)return;
 const lang=currentLanguage||'en';
 filter.innerHTML='<button class="pron-filter-btn active" onclick="renderPron()">'+(lang==='ar'?'الكل':'All')+'</button>'+pronData.map(function(c){return '<button class="pron-filter-btn" onclick="renderPron(\''+c.cat+'\')">'+(lang==='ar'?c.catAr:c.cat)+'</button>'}).join('');
 filter.querySelectorAll('.pron-filter-btn').forEach(function(btn){
  btn.addEventListener('click',function(){filter.querySelector('.active')&&filter.querySelector('.active').classList.remove('active');this.classList.add('active')})
 })
}

function playPron(word,slow){
 try{
  if(!window.speechSynthesis)return;
  // Cancel any ongoing speech
  window.speechSynthesis.cancel();
  const utterance=new SpeechSynthesisUtterance(word);
  utterance.lang='en-US';
  utterance.rate=slow?0.4:0.85;
  utterance.pitch=1.0;
  utterance.volume=1.0;
  // Try to find a good English voice
  var voices=window.speechSynthesis.getVoices();
  var selectedVoice=null;
  for(var i=0;i<voices.length;i++){
   var v=voices[i];
   if(v.lang.startsWith('en')&&(v.name.includes('Google')||v.name.includes('Microsoft')||v.name.includes('Samantha')||v.name.includes('Daniel')||v.name.includes('Female')||v.name.includes('Male'))){
    selectedVoice=v;break
   }
  }
  if(!selectedVoice){for(var i=0;i<voices.length;i++){if(voices[i].lang.startsWith('en')){selectedVoice=voices[i];break}}}
  if(selectedVoice)utterance.voice=selectedVoice;
  // Visual feedback
  const btns=document.querySelectorAll('.pron-play-btn,.pron-slow-btn');
  btns.forEach(function(b){b.classList.add('speaking')});
  utterance.onend=function(){btns.forEach(function(b){b.classList.remove('speaking')})};
  utterance.onerror=function(){btns.forEach(function(b){b.classList.remove('speaking')})};
  window.speechSynthesis.speak(utterance);
  // Fallback timeout for visual feedback in case onend doesn't fire
  setTimeout(function(){btns.forEach(function(b){b.classList.remove('speaking')})},(slow?3:1.5)*1000)
 }catch(ex){}
}

function initPron(){
 renderPronFilter();
 renderPron()
}

function renderPronLang(){
 renderPronFilter();
 renderPron()
}

// ============================================================
// 19d. SPEAKING PRACTICE
// ============================================================
const speakSentences=[
 {courseEN:'Greetings',courseAR:'التحيات',icon:'👋',sentences:[
  'Hello, my name is Ahmed. Nice to meet you!',
  'Good morning! How are you today?',
  'I am fine, thank you. And you?',
  'Good evening! It is wonderful to see you.',
  'Welcome to our city! I hope you enjoy your stay.',
  'It was a pleasure meeting you. Have a great day!',
 ]},
 {courseEN:'Daily Life',courseAR:'الحياة اليومية',icon:'☀️',sentences:[
  'I wake up at 7 AM, brush my teeth, and eat breakfast.',
  'She goes to work by bus every morning.',
  'We usually have dinner together as a family.',
  'He reads a book before going to bed.',
  'On weekends, I like to go for a walk in the park.',
  'I usually cook dinner and then watch a movie with my family.',
 ]},
 {courseEN:'Shopping & Food',courseAR:'التسوق والطعام',icon:'🛒',sentences:[
  'I would like a pizza and a glass of water, please.',
  'How much does this shirt cost?',
  'The food at this restaurant is absolutely delicious!',
  'Can I have the bill, please?',
  'I am looking for a blue dress in size medium.',
  'Do you have any discounts or promotions available right now?',
 ]},
 {courseEN:'Travel',courseAR:'السفر',icon:'✈️',sentences:[
  'I am planning a trip to London next summer.',
  'Excuse me, where is the nearest train station?',
  'I need to book a hotel room for two nights.',
  'The view from the mountain is breathtaking!',
  'Could you please recommend a good restaurant nearby?',
  'I would like to check in, please. I have a reservation.',
 ]},
 {courseEN:'Work & Career',courseAR:'العمل والوظيفة',icon:'💼',sentences:[
  'I have five years of experience in software development.',
  'Let me give you my business card.',
  'Thank you for the opportunity to interview with your company.',
  'I am looking for new challenges and opportunities to grow.',
  'I work closely with cross-functional teams to deliver projects on time.',
  'Our company is expanding into new international markets this quarter.',
 ]},
 {courseEN:'Academic',courseAR:'أكاديمي',icon:'🎓',sentences:[
  'In conclusion, the research demonstrates significant results.',
  'According to the study, regular practice improves fluency.',
  'The main argument of this essay is that education transforms lives.',
  'I would like to cite three sources that support this claim.',
  'The methodology employed in this study provides a robust framework.',
  'These findings contribute to our understanding of second language acquisition.',
 ]},
 {courseEN:'Business English',courseAR:'الإنجليزية للأعمال',icon:'📊',sentences:[
  'Let us move to the next agenda item for today meeting.',
  'I would like to propose a strategic partnership between our companies.',
  'Our quarterly revenue has shown a steady increase over the past year.',
  'We need to streamline our operations to improve overall efficiency.',
  'Please find attached the revised proposal for your review.',
  'I appreciate your prompt response to my previous inquiry.',
 ]},
 {courseEN:'Interviews & Networking',courseAR:'المقابلات والتواصل',icon:'🤝',sentences:[
  'My greatest strength is my ability to solve complex problems under pressure.',
  'I am excited about the opportunity to contribute to your team success.',
  'In my previous role, I successfully led a team of ten people.',
  'I believe my skills and experience align perfectly with this position.',
  'It was great meeting you at the conference. Let us stay in touch.',
  'I am particularly skilled in data analysis and strategic planning.',
 ]},
 {courseEN:'Academic Writing',courseAR:'الكتابة الأكاديمية',icon:'📝',sentences:[
  'The purpose of this paper is to examine the effects of climate change on biodiversity.',
  'A comprehensive literature review reveals several gaps in existing research.',
  'The data were collected using a mixed-methods approach to ensure validity.',
  'The results indicate a statistically significant correlation between the two variables.',
  'This study has several limitations that should be addressed in future research.',
  'In light of these findings, we recommend further investigation into this phenomenon.',
 ]},
];

let speakIdx=0,speakCourseIdx=0;

function speakInit(){
 renderSpeakCourses();
 selectSpeakCourse(0);
 $id('speakPlayBtn').addEventListener('click',function(){speakSentence(false)});
 $id('speakSlowBtn').addEventListener('click',function(){speakSentence(true)});
 $id('speakNextBtn').addEventListener('click',nextSpeakSentence);
 // Recording listeners
 speakAddRecordingListeners();
 // Challenge mode listeners
 $id('speakChallengeBtn').addEventListener('click',toggleSpeakChallenge);
 $id('speakChallengeStartBtn').addEventListener('click',startSpeakChallenge);
 renderChallengeProgress()
}

function renderSpeakCourses(){
 const container=$id('speakCourseSelect');if(!container)return;
 const lang=currentLanguage||'en';
 container.innerHTML=speakSentences.map(function(c,i){return '<button class="speak-course-btn'+(i===speakCourseIdx?' active':'')+'" onclick="selectSpeakCourse('+i+')">'+c.icon+' '+(lang==='ar'?c.courseAR:c.courseEN)+'</button>'}).join('')
}

function selectSpeakCourse(idx){
 speakCourseIdx=idx;speakIdx=0;
 renderSpeakCourses();
 updateSpeakCard();
 // Hide previous comparison
 var cp=$id('speakComparePanel');if(cp)cp.style.display='none'
}

function updateSpeakCard(){
 const course=speakSentences[speakCourseIdx];if(!course)return;
 const sentence=course.sentences[speakIdx];if(!sentence)return;
 const card=$id('speakCard');if(!card)return;
 card.classList.add('transitioning');
 setTimeout(function(){
  $id('speakCardIcon').textContent=course.icon;
  $id('speakCardSentence').textContent=sentence;
  $id('speakProgress').textContent=(speakIdx+1)+' / '+course.sentences.length;
  card.classList.remove('transitioning')
 },150)
}

function nextSpeakSentence(){
 const course=speakSentences[speakCourseIdx];
 if(!course)return;
 speakIdx=(speakIdx+1)%course.sentences.length;
 updateSpeakCard();
 // Hide previous comparison
 var cp=$id('speakComparePanel');if(cp)cp.style.display='none'
}

function speakSentence(slow){
 try{
  if(!window.speechSynthesis)return;
  window.speechSynthesis.cancel();
  const sentence=$id('speakCardSentence').textContent;
  if(!sentence||sentence==='Click a course to begin')return;
  const utterance=new SpeechSynthesisUtterance(sentence);
  utterance.lang='en-US';
  utterance.rate=slow?0.35:0.8;
  utterance.pitch=1.0;
  utterance.volume=1.0;
  // Try to find a good English voice
  var voices=window.speechSynthesis.getVoices();
  var selectedVoice=null;
  for(var i=0;i<voices.length;i++){
   var v=voices[i];
   if(v.lang.startsWith('en')&&(v.name.includes('Google')||v.name.includes('Microsoft')||v.name.includes('Samantha')||v.name.includes('Daniel')||v.name.includes('Female')||v.name.includes('Male'))){
    selectedVoice=v;break
   }
  }
  if(!selectedVoice){for(var i=0;i<voices.length;i++){if(voices[i].lang.startsWith('en')){selectedVoice=voices[i];break}}}
  if(selectedVoice)utterance.voice=selectedVoice;
  // Visual feedback
  const playBtn=$id('speakPlayBtn'),slowBtn=$id('speakSlowBtn');
  if(playBtn)playBtn.classList.add('speaking');
  if(slow&&slowBtn)slowBtn.classList.add('speaking');
  utterance.onend=function(){
   if(playBtn)playBtn.classList.remove('speaking');
   if(slowBtn)slowBtn.classList.remove('speaking')
  };
  utterance.onerror=function(){
   if(playBtn)playBtn.classList.remove('speaking');
   if(slowBtn)slowBtn.classList.remove('speaking')
  };
  window.speechSynthesis.speak(utterance);
  // Fallback cleanup (generous timeout for long sentences at slow speeds)
  setTimeout(function(){
   if(playBtn)playBtn.classList.remove('speaking');
   if(slowBtn)slowBtn.classList.remove('speaking')
  },(slow?15:8)*1000)
 }catch(ex){}
}

// ============================================================
// 19f. CHALLENGE MODE
// ============================================================
var speakBadgeIds=['first-speak','speak-pro','speak-master'];

function toggleSpeakChallenge(){
 var btn=$id('speakChallengeBtn');
 var isActive=btn.classList.contains('active');
 if(isActive){
  btn.classList.remove('active');
  btn.innerHTML='🏆 <span '+(currentLanguage==='ar'?'data-ar="وضع التحدي"':'data-en="Challenge Mode"')+'>'+(currentLanguage==='ar'?'وضع التحدي':'Challenge Mode')+'</span>';
  $id('speakChallengePanel').style.display='none';
  $id('speakCourseSelect').style.display='';
  selectSpeakCourse(speakCourseIdx) }else{
  btn.classList.add('active');
  btn.innerHTML='🏆 <span '+(currentLanguage==='ar'?'data-ar="وضع التحدي"':'data-en="Challenge Mode"')+'>'+(currentLanguage==='ar'?'وضع التحدي':'Challenge Mode')+' ✓</span>';
  $id('speakChallengePanel').style.display='block';
  $id('speakCourseSelect').style.display='none';
  renderChallengeProgress();
  startSpeakChallenge()
 }
}

function startSpeakChallenge(){
 // Pick a random sentence from a random course
 var courseIdx=Math.floor(Math.random()*speakSentences.length);
 var course=speakSentences[courseIdx];
 if(!course)return;
 var sentIdx=Math.floor(Math.random()*course.sentences.length);
 var sentence=course.sentences[sentIdx];
 if(!sentence)return;
 speakCourseIdx=courseIdx;speakIdx=sentIdx;
 var card=$id('speakCard');if(!card)return;
 card.classList.add('transitioning');
 setTimeout(function(){
  $id('speakCardIcon').textContent='🏆';
  $id('speakCardSentence').textContent=sentence;
  $id('speakProgress').textContent=(currentLanguage==='ar'?'تحدي #':'Challenge #')+' '+(store('speak',[]).length+1);
  card.classList.remove('transitioning');
  // Hide previous comparison
  var cp=$id('speakComparePanel');if(cp)cp.style.display='none'
 },150)
}

function renderChallengeProgress(){
 var progress=$id('speakChallengeProgress');if(!progress)return;
 var earned=getEarnedBadges();
 var sp=store('speak',[]);  progress.innerHTML=badgeDefs.filter(function(b){return speakBadgeIds.includes(b.id)}).map(function(b){
  var has=earned.includes(b.id);
  var canEarn=b.check(sp);
  var cls=has?'earned':canEarn?'':'locked';
  var tip=has?'✅ '+(currentLanguage==='ar'?b.nameAR:b.nameEN):canEarn?'🎯 '+(currentLanguage==='ar'?b.descAR:b.descEN):'🔒 '+(currentLanguage==='ar'?b.descAR:b.descEN);
  return '<div class="speak-challenge-progress-item '+cls+'" title="'+tip+'">'+b.icon+' '+(has?(currentLanguage==='ar'?b.nameAR:b.nameEN):'???')+'</div>'
 }).join('')
}


function renderSpeakLang(){
 renderSpeakCourses();
 updateSpeakCard();
 renderChallengeProgress()
}

// ============================================================
// 19e. VOICE RECORDING (MediaStream API)
// ============================================================
let speakMediaRecorder=null,speakAudioChunks=[],speakRecording=false,speakRecStream=null,speakRecTimer=null,speakRecSeconds=0,speakRecAudioUrl=null;

function speakStartRecording(){
 try{
  if(speakRecording)return;
  navigator.mediaDevices.getUserMedia({audio:{echoCancellation:true,noiseSuppression:true}}).then(function(stream){
   speakRecStream=stream;
   speakMediaRecorder=new MediaRecorder(stream);
   speakAudioChunks=[];
   speakMediaRecorder.ondataavailable=function(e){if(e.data.size>0)speakAudioChunks.push(e.data)};
   speakMediaRecorder.onstop=function(){speakFinishRecording()};
   speakMediaRecorder.start(100);
   speakRecording=true;
   // UI: show stop, hide record
   $id('speakRecordBtn').style.display='none';
   $id('speakStopBtn').style.display='inline-flex';
   $id('speakPlaybackBtn').style.display='none';
   $id('speakRecordIndicator').style.display='flex';
   // Add recording class for animation
   $id('speakRecordBtn').classList.add('recording');
   $id('speakPlayBtn').disabled=true;$id('speakSlowBtn').disabled=true;
   $id('speakPlayBtn').style.opacity='0.4';$id('speakSlowBtn').style.opacity='0.4';
   // Build waveform bars
   var wave=$id('speakRecordWave');if(wave){wave.innerHTML='';for(var i=0;i<5;i++){var bar=document.createElement('span');wave.appendChild(bar)}}
   // Start timer
   speakRecSeconds=0;
   $id('speakRecordTime').textContent='0:00';
   speakRecTimer=setInterval(function(){speakRecSeconds++;var m=Math.floor(speakRecSeconds/60);var s=speakRecSeconds%60;$id('speakRecordTime').textContent=m+':'+String(s).padStart(2,'0')},1000)
  }).catch(function(err){alert('Microphone access denied. Please allow microphone permissions to record.');console.warn('Mic error:',err)})
 }catch(ex){alert('Recording is not supported in this browser. Please use Chrome or Edge.');console.warn('Rec err:',ex)}
}

function speakStopRecording(){
 try{
  if(speakMediaRecorder&&speakMediaRecorder.state!=='inactive'){speakMediaRecorder.stop()}
  if(speakRecStream){speakRecStream.getTracks().forEach(function(t){t.stop()});speakRecStream=null}
  if(speakRecTimer){clearInterval(speakRecTimer);speakRecTimer=null}
  speakRecording=false;
  $id('speakRecordBtn').style.display='';
  $id('speakStopBtn').style.display='none';
  $id('speakRecordIndicator').style.display='none';
  $id('speakRecordBtn').classList.remove('recording');
  $id('speakPlayBtn').disabled=false;$id('speakSlowBtn').disabled=false;
  $id('speakPlayBtn').style.opacity='';$id('speakSlowBtn').style.opacity='';
  // Clean wave
  var wave=$id('speakRecordWave');if(wave)wave.innerHTML=''
 }catch(ex){}
}

function speakFinishRecording(){
 try{
  if(speakAudioChunks.length===0)return;
  var blob=new Blob(speakAudioChunks,{type:'audio/webm'});
  if(speakRecAudioUrl){URL.revokeObjectURL(speakRecAudioUrl)}
  speakRecAudioUrl=URL.createObjectURL(blob);
  $id('speakPlaybackBtn').style.display='inline-flex';
  // Analyze recording and show comparison
  speakAnalyzeRecording(blob)
 }catch(ex){}
}

function speakAnalyzeRecording(blob){
 try{
  var ctx=new(window.AudioContext||window.webkitAudioContext)();
  var reader=new FileReader();
  reader.onload=function(e){
   ctx.decodeAudioData(e.target.result,function(buffer){
    var data=buffer.getChannelData(0);
    var dur=data.length/buffer.sampleRate;
    // Get current sentence
    var course=speakSentences[speakCourseIdx];
    var sentence=course?course.sentences[speakIdx]:'';
    if(!sentence)return;
    var wordCount=sentence.split(' ').length;
    if(wordCount===0)return;
    // Check if recording has actual audio (not silent)
    var peakLevel=0;
    for(var s=0;s<data.length;s+=Math.floor(buffer.sampleRate/10)){
     var abs=Math.abs(data[s]);if(abs>peakLevel)peakLevel=abs
    }
    if(peakLevel<0.01){
     speakShowComparison(sentence,wordCount,dur,0,5,1,1,0,0,0);
     return
    }
    // Calculate expected duration (0.35s per word at normal pace)
    var expectedDur=wordCount*0.35;
    // Duration score: how close actual vs expected (0-40 pts)
    var ratio=expectedDur>0?Math.min(dur/expectedDur,2):1;
    var durScore=0;
    if(ratio>=0.7&&ratio<=1.4)durScore=40;
    else if(ratio>=0.5&&ratio<=1.8)durScore=25;
    else durScore=10;
    // Volume consistency analysis (0-30 pts)
    var frameSize=Math.floor(buffer.sampleRate*0.05);
    var frames=[];
    for(var i=0;i<data.length;i+=frameSize){
     var max=0;
     for(var j=0;j<frameSize&&i+j<data.length;j++){
      var abs=Math.abs(data[i+j]);
      if(abs>max)max=abs
     }
     frames.push(max)
    }
    var avgFrame=frames.reduce(function(a,b){return a+b},0)/frames.length;
    var variance=frames.reduce(function(a,b){return a+(b-avgFrame)*(b-avgFrame)},0)/frames.length;
    var stdDev=Math.sqrt(variance);
    var cv=avgFrame>0?stdDev/avgFrame:1; // coefficient of variation
    var volScore=0;
    if(cv<0.5)volScore=30;      // very consistent
    else if(cv<0.8)volScore=20; // moderately consistent
    else if(cv<1.2)volScore=10; // somewhat varied
    else volScore=5;             // very varied
    // Silence ratio analysis (0-30 pts)
    var silenceThreshold=Math.max(avgFrame*0.15,0.005);
    var silenceCount=0;
    for(var i=0;i<frames.length;i++){if(frames[i]<silenceThreshold)silenceCount++}
    var silenceRatio=frames.length>0?silenceCount/frames.length:0;
    var silenceScore=0;
    if(silenceRatio<0.15)silenceScore=30;      // very fluent
    else if(silenceRatio<0.25)silenceScore=20; // good
    else if(silenceRatio<0.40)silenceScore=10; // some pauses
    else silenceScore=5;                        // many pauses
    // Total score
    var totalScore=Math.round(durScore+volScore+silenceScore);
    // Show comparison panel
    speakShowComparison(sentence,wordCount,dur,Math.round(expectedDur*100)/100,totalScore,silenceRatio,cv,volScore,silenceScore,durScore)
   },function(){console.warn('Audio decode failed')})
  };
  reader.readAsArrayBuffer(blob)
 }catch(ex){console.warn('Recording analysis error:',ex)}
}

function speakShowComparison(sentence,wordCount,actualDur,expectedDur,score,silenceRatio,cv,volScore,silenceScore,durScore){
 try{
  // Save score to history
  var scores=store('speak',[]);
  var course=speakSentences[speakCourseIdx];
  scores.push({score:score,date:new Date().toISOString(),courseEN:course?course.courseEN:'',courseAR:course?course.courseAR:'',wordCount:wordCount});
  if(scores.length>50)scores=scores.slice(-50);
  save('speak',scores);
  // Update dashboard if visible
  if(typeof renderDashboard==='function')renderDashboard();
  if(typeof renderChallengeProgress==='function')renderChallengeProgress();
  var panel=$id('speakComparePanel');if(!panel)return;
  $id('speakCompareOriginal').textContent=sentence;
  // Format stats
  var wordLabel=currentLanguage==='ar'?'كلمات':'words';
  var secLabel=currentLanguage==='ar'?'ثانية':'sec';
  var expectedLabel=currentLanguage==='ar'?'متوقع':'expected';
  var actualLabel=currentLanguage==='ar'?'فعلي':'actual';
  var paceLabel=currentLanguage==='ar'?'السرعة':'pace';
  var statHTML='';
  statHTML+='<span class="speak-compare-stat"><span class="speak-compare-stat-icon">📝</span> '+wordCount+' '+wordLabel+'</span>';
  statHTML+='<span class="speak-compare-stat"><span class="speak-compare-stat-icon">⏱️</span> '+actualDur+'s / '+expectedDur+'s</span>';
  var pace=wordCount/actualDur;
  statHTML+='<span class="speak-compare-stat"><span class="speak-compare-stat-icon">🏃</span> '+paceLabel+': '+pace.toFixed(1)+' '+wordLabel+'/'+secLabel+'</span>';
  $id('speakCompareStats').innerHTML=statHTML;
  // Score display
  $id('speakCompareScoreValue').textContent=score+'%';
  $id('speakCompareScoreValue').style.color=score>=70?'#22C55E':score>=45?'#F97316':'#EF4444';
  $id('speakCompareBarFill').style.width=score+'%';
  // Tips
  var t=translations&&translations[currentLanguage]||{};
  var tips='';
  if(durScore<30)tips+='<div class="speak-compare-tip">⏱️ '+(t['speak-tip-pace']||'Try to match the natural pace — not too fast, not too slow.')+'</div>';
  if(volScore<20)tips+='<div class="speak-compare-tip">🔊 '+(t['speak-tip-volume']||'Speak with steady confidence — avoid trailing off at the end.')+'</div>';
  if(silenceScore<20)tips+='<div class="speak-compare-tip">⏸️ '+(t['speak-tip-silence']||'Reduce pauses between words for smoother fluency.')+'</div>';
  if(score>=70)tips+='<div class="speak-compare-tip" style="color:#22C55E;">🌟 '+(t['speak-tip-great']||'Great pronunciation! Keep practicing to improve further.')+'</div>';
  else if(score>=45)tips+='<div class="speak-compare-tip" style="color:#F97316;">💪 '+(t['speak-tip-good']||'Good effort! Focus on the tips above to improve.')+'</div>';
  else tips+='<div class="speak-compare-tip" style="color:#EF4444;">🎯 '+(t['speak-tip-keep']||'Keep practicing! Repeat the sentence and try again.')+'</div>';
  $id('speakCompareTips').innerHTML=tips;
  panel.style.display='block'
 }catch(ex){}
}

function speakPlayRecording(){
 try{
  if(!speakRecAudioUrl)return;
  var audio=new Audio(speakRecAudioUrl);
  $id('speakPlaybackBtn').classList.add('playing');
  audio.onended=function(){$id('speakPlaybackBtn').classList.remove('playing')};
  audio.onerror=function(){$id('speakPlaybackBtn').classList.remove('playing')};
  audio.play().catch(function(){})
 }catch(ex){}
}

function speakAddRecordingListeners(){
  $id('speakRecordBtn').addEventListener('click',speakStartRecording);
  $id('speakStopBtn').addEventListener('click',speakStopRecording);
  $id('speakPlaybackBtn').addEventListener('click',speakPlayRecording)
}


// ============================================================
// 20. SOUND SYSTEM
// ============================================================
let smCtx=null,smMaster=true,smMusic=true,smSfx=true,smVol=0.4,smAmbNodes=[];
function getSndCfg(){return store('snd',{master:true,music:true,sfx:true,vol:40})}
function saveSndCfg(c){save('snd',c)}
function getSndCtx(){try{if(!smCtx)smCtx=new(window.AudioContext||window.webkitAudioContext)();if(smCtx.state==='suspended')smCtx.resume()}catch(e){}return smCtx}

function playSfx(type){
 if(!smSfx||!smMaster)return;
 try{const ctx=getSndCtx();if(!ctx)return;const osc=ctx.createOscillator();const g=ctx.createGain();osc.connect(g);g.connect(ctx.destination);g.gain.value=smVol*0.3;
 const now=ctx.currentTime;
 if(type==='start'||type==='confirm'){osc.frequency.setValueAtTime(800,now);osc.frequency.setValueAtTime(1000,now+0.1);g.gain.exponentialRampToValueAtTime(0.001,now+0.3);osc.start(now);osc.stop(now+0.3)}
 else if(type==='complete'){osc.frequency.setValueAtTime(523,now);osc.frequency.setValueAtTime(659,now+0.15);osc.frequency.setValueAtTime(784,now+0.3);g.gain.exponentialRampToValueAtTime(0.001,now+0.6);osc.start(now);osc.stop(now+0.6)}
 else if(type==='badge'){osc.frequency.setValueAtTime(784,now);osc.frequency.setValueAtTime(988,now+0.1);osc.frequency.setValueAtTime(1175,now+0.2);g.gain.exponentialRampToValueAtTime(0.001,now+0.5);osc.start(now);osc.stop(now+0.5)}
 else if(type==='correct'){osc.frequency.setValueAtTime(600,now);osc.frequency.setValueAtTime(800,now+0.08);g.gain.exponentialRampToValueAtTime(0.001,now+0.2);osc.start(now);osc.stop(now+0.2)}
 }catch(e){}
}

function initSound(){
 const cfg=getSndCfg();
 smMaster=cfg.master;smMusic=cfg.music;smSfx=cfg.sfx;smVol=cfg.vol/100;
 const menu=$id('soundMenu');
 // Sound toggle button (could be added to nav)
 if(typeof renderSoundLang==='function')renderSoundLang()
}

function renderSoundLang(){
 const t=translations&&translations[currentLanguage]||{};
 const smt=$id('soundMenuTitle');if(smt)smt.textContent=t['sound-title']||'Sound Settings'
}

// ============================================================
// 21. SPACED REPETITION REVIEW
// ============================================================
function saveSRData(qz,ci,li,score,total){
 const sr=store('sr',{});
 const res=window._srRes||{};
 qz.forEach(function(q,qi){
  const key=ci+'-'+li+'-'+qi;
  const correct=res[key]||false;
  let rec=sr[key]||{interval:1,next:0,ease:2.5};
  if(correct){rec.interval=Math.round(rec.interval*rec.ease);rec.ease=Math.min(2.5,rec.ease+0.15)}else{rec.interval=1;rec.ease=Math.max(1.3,rec.ease-0.2)}
  rec.next=Date.now()+rec.interval*86400000;
  sr[key]=rec
 });
 save('sr',sr);
 delete window._srRes
}

let reviewQ=[],revIdx=0,revCor=0,revTot=0;

function renderReview(){
 const t=translations&&translations[currentLanguage]||{};
 const grid=$id('reviewGrid');if(!grid)return;
 const sr=store('sr',{});const today=new Date().toISOString().slice(0,10);
 const keys=Object.keys(sr);
 const due=keys.filter(function(k){return sr[k].next<=Date.now()});
 const mastered=keys.filter(function(k){return sr[k].interval>=30});
 $id('reviewStats').innerHTML='<span class="review-stats-item">'+(t['review-total']||'Total')+': <strong>'+keys.length+'</strong></span><span class="review-stats-item">'+(t['review-due']||'Due')+': <strong>'+due.length+'</strong></span><span class="review-stats-item">'+(t['review-mastered']||'Mastered')+': <strong>'+mastered.length+'</strong></span>';
 $id('reviewStartBtn').disabled=due.length===0;
 grid.innerHTML=due.slice(0,20).map(function(key,idx){
  const parts=key.split('-');const ci=parseInt(parts[0]);const li=parseInt(parts[1]);const qi=parseInt(parts[2]);
  const course=courseData[ci];const lesson=course&&course.lessonsData[li];
  const question=quizData[ci]&&quizData[ci][li]&&quizData[ci][li][qi];
  if(!question)return '';
  return '<div class="review-card" style="animation-delay:'+(idx*0.1)+'s"><div style="font-size:0.7rem;color:var(--text-light);margin-bottom:0.25rem;text-transform:uppercase;">'+(t['review-course']||'Course')+' '+(ci+1)+' - '+(t['review-lesson']||'Lesson')+' '+(li+1)+'</div><div style="font-size:0.85rem;color:var(--text);font-weight:500;">'+question.q+'</div><div style="font-size:0.75rem;color:var(--text-light);margin-top:0.5rem;">'+(t['review-interval']||'Interval')+': '+(sr[key].interval||1)+' '+(t['review-days']||'days')+'</div></div>'
 }).join('');
 setTimeout(function(){grid.querySelectorAll('.review-card').forEach(function(c,i){setTimeout(function(){c.classList.add('visible')},i*100)})},100)
}

function startReview(){
 const sr=store('sr',{});const today=new Date().toISOString().slice(0,10);
 reviewQ=[];revIdx=0;revCor=0;revTot=0;
 const keys=Object.keys(sr);
 keys.forEach(function(k){if(sr[k].next<=Date.now()){
  const parts=k.split('-');const ci=parseInt(parts[0]);const li=parseInt(parts[1]);const qi=parseInt(parts[2]);
  const question=quizData[ci]&&quizData[ci][li]&&quizData[ci][li][qi];
  if(question)reviewQ.push({data:{ci,li,qi},q:question})
 }});
 if(reviewQ.length===0){alert('No questions due for review!');return}
 $id('reviewModalTitle').textContent='Review Session';
 $id('reviewModal').classList.add('active');
 showReviewQuestion()
}

function showReviewQuestion(){
 if(revIdx>=reviewQ.length){finishReview();return}
 const item=reviewQ[revIdx];const qi=item.data.qi;const q=item.q;const letters=['A','B','C','D'];
 const t=translations&&translations[currentLanguage]||{};
 $id('reviewModalProgress').textContent=(revIdx+1)+' / '+reviewQ.length;
 $id('reviewModalBody').innerHTML='<div class="review-card" style="opacity:1;transform:none;padding:1.5rem;"><div style="font-size:0.85rem;font-weight:600;color:var(--text);margin-bottom:1rem;">'+q.q+'</div><div style="display:flex;flex-direction:column;gap:0.5rem;">'+q.opts.map(function(o,oi){return '<button class="quiz-option" onclick="handleReviewAnswer(this,'+qi+','+q.a+')"><span class="quiz-option-letter">'+letters[oi]+'</span>'+o+'<span class="quiz-option-check"></span></button>'}).join('')+'</div></div>'
}

function handleReviewAnswer(btn,qi,correctIdx){
 const parent=btn.closest('.review-card');if(!parent)return;
 const selected=parseInt(btn.textContent.charAt(0).charCodeAt(0)-65);
 const isCorrect=selected===correctIdx;
 parent.querySelectorAll('.quiz-option').forEach(function(b){b.classList.add('quiz-option-disabled');b.onclick=null});
 parent.querySelectorAll('.quiz-option[data-correct="true"]').forEach(function(b){b.classList.add('quiz-option-correct')});
 if(!isCorrect)btn.classList.add('quiz-option-wrong');
 if(isCorrect)revCor++;
 revIdx++;
 setTimeout(showReviewQuestion,800)
}

function finishReview(){
 const t=translations&&translations[currentLanguage]||{};
 const pct=revTot?Math.round(revCor/revTot*100):0;
 $id('reviewModalBody').innerHTML='<div style="text-align:center;padding:2rem;"><div style="font-size:3rem;margin-bottom:0.5rem;">🎉</div><h3>Session Complete!</h3><p style="font-size:1.2rem;font-weight:600;color:var(--orange-600);">'+revCor+' / '+reviewQ.length+'</p><button class="review-next-btn btn-primary" style="margin-top:1rem;" onclick="document.getElementById(\'reviewModal\').classList.remove(\'active\')">Close</button></div>'
}

$id('reviewStartBtn').addEventListener('click',startReview);
$id('reviewModalClose').addEventListener('click',function(){$id('reviewModal').classList.remove('active')});

// ============================================================
// 22. EXPORT CSV
// ============================================================
function exportAllData(){
 const t=translations&&translations[currentLanguage]||{};
 const lp=lessonProgress||{};
 const qzd=store('qz',{});
 const qs=store('qs',{});
 const wh=store('wh',[]);
 const sDates=store('sDates',[]);
 const streak=store('streak',{});
 const badges=getEarnedBadges?getEarnedBadges():[];
 let csv='Data,Value\n';
 csv+='Lessons Completed,'+Object.keys(lp).length+'\n';
 csv+='Quizzes Completed,'+Object.keys(qzd).length+'\n';
 csv+='Streak Days,'+(streak.cnt||0)+'\n';
 csv+='Best Streak,'+(streak.best||0)+'\n';
 csv+='Badges Earned,'+badges.length+'\n';
 csv+='Writing Sessions,'+wh.length+'\n';
 csv+='Study Days,'+sDates.length+'\n';
 csv+='\nQuiz Scores\n';
 Object.keys(qs).forEach(function(k){csv+=k+','+qs[k].c+'/'+qs[k].t+'\n'});
 const blob=new Blob([csv],{type:'text/csv'});
 const url=URL.createObjectURL(blob);
 const a=document.createElement('a');a.href=url;a.download='rise-shine-english-stats.csv';a.click();
 URL.revokeObjectURL(url)
}

// ============================================================
// 23. CERTIFICATE
// ============================================================
function isAllComplete(){return Object.keys(lessonProgress).length>=35}

function showCertificate(){
 const t=translations&&translations[currentLanguage]||{};
 const name=localStorage.getItem('studentName')||(t['cert-student']||'Valued Student');
 const today=new Date().toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric'});
 let certHTML='<div style="text-align:center;padding:2.5rem;background:linear-gradient(135deg,var(--orange-50),var(--white));border:3px solid var(--orange-400);border-radius:var(--radius-lg);position:relative;">';
 certHTML+='<div style="font-size:1.2rem;color:var(--orange-600);font-weight:600;letter-spacing:3px;text-transform:uppercase;margin-bottom:1rem;">Certificate of Completion</div>';
 certHTML+='<div style="width:60px;height:3px;background:var(--orange-500);margin:0 auto 1.5rem;"></div>';
 certHTML+='<div style="font-size:0.9rem;color:var(--text-light);margin-bottom:1rem;">This certifies that</div>';
 certHTML+='<div style="font-family:\'Playfair Display\',serif;font-size:2rem;font-weight:700;color:var(--dark);margin-bottom:1rem;">'+name+'</div>';
 certHTML+='<div style="font-size:0.9rem;color:var(--text-light);margin-bottom:1.5rem;">has successfully completed all 35 lessons of the</div>';
 certHTML+='<div style="font-size:1.2rem;font-weight:700;color:var(--orange-600);margin-bottom:1.5rem;">Rise & Shine English Course</div>';
 certHTML+='<div style="font-size:0.82rem;color:var(--text-light);">Date: '+today+'</div>';
 certHTML+='<div style="margin-top:1.5rem;padding-top:1.5rem;border-top:1px solid var(--orange-200);font-size:0.75rem;color:var(--text-light);">Presented by Rise & Shine English — AI-Powered Learning Platform</div></div>';
 certHTML+='<div style="text-align:center;margin-top:1.5rem;"><button class="btn-primary" onclick="downloadCertificate()">Download PDF</button></div>';
 const modal=$id('lessonModal');$id('lessonModalTitle').innerHTML='🎓 Certificate';$id('lessonModalBody').innerHTML=certHTML;$id('lessonCompleteBtn').style.display='none';modal.classList.add('active');document.body.style.overflow='hidden'
}

function downloadCertificate(){
 const t=translations&&translations[currentLanguage]||{};
 const name=localStorage.getItem('studentName')||(t['cert-student']||'Valued Student');
 alert('Certificate download would be triggered here. In a production version, this would generate a PDF using a library like jsPDF or html2canvas.')
}

// ============================================================
// 23b. TRANSLATIONS
// ============================================================
const translations={en:{
'hero-badge':'AI-Powered English Learning Platform','hero-title':'Speak English with <em>Confidence & Power</em>','hero-subtitle':'A revolutionary journey to master English.','course-beginner':'Foundation','course-everyday':'Everyday English','course-confident':'Confident Communication','course-fluency':'Fluent Expression','course-business':'Business English','course-interview':'Interview Prep','course-academic-lvl':'Academic Writing',
'course-beginner-title':'Foundation','course-everyday-title':'Everyday English','course-confident-title':'Confident Communication','course-fluency-title':'Fluent Expression','course-business-title':'Business English','course-interview-title':'Interview Prep','course-academic-lvl-title':'Academic Writing',
'course-beginner-desc':'Start your journey from zero','course-everyday-desc':'Master daily conversations','course-confident-desc':'Express yourself with confidence','course-fluency-desc':'Speak fluently on any topic','course-business-desc':'Professional communication','course-interview-desc':'Ace your job interviews','course-academic-lvl-desc':'Excel in academic writing',
'lesson-label':'Lesson','lesson-completed':'Completed!','lesson-complete':'Mark as Completed','quiz-title':'Knowledge Check','quiz-question':'Question','quiz-correct':'Correct!','quiz-wrong':'Not quite!','quiz-detail':'Keep practicing to improve your score!','quiz-msg-perfect':'Perfect score! Amazing!','quiz-msg-great':'Great job! Almost perfect!','quiz-msg-good':'Good work! Keep studying!','quiz-msg-keep':'Keep practicing!',
'sound-title':'Sound Settings','pomo-tag':'FOCUS TIMER','pomo-title':'Pomodoro Timer','pomo-subtitle':'Stay focused with science-backed time management','pomo-label-focus':'Focus','pomo-label-short':'Short Break','pomo-label-long':'Long Break','pomo-start':'Start','pomo-pause':'Pause','pomo-resume':'Resume','pomo-reset':'Reset','pomo-session':'Session','pomo-notif-focus':'Focus session complete! Take a break.','pomo-notif-break':'Break over! Ready to focus?',
'chat-title':'English AI Tutor','chat-last-msg':'Welcome back! Ask me anything.',
'reading-tag':'READING','reading-title':'Reading Comprehension','reading-subtitle':'Read short stories and test your understanding','reading-question':'Question','reading-questions':'Comprehension Questions',
'planner-tag':'STUDY PLANNER','planner-title':'Weekly Study Planner','planner-subtitle':'Plan your lessons in advance','planner-add-title':'Add Study Task','planner-edit-title':'Edit Study Task',
'vocab-tag':'VOCAB GAME','vocab-title':'Vocabulary Game','vocab-subtitle':'Match words to their meanings','vocab-no-data':'Complete some lessons first!',
'dash-streak':'Streak','dash-days':'days','dash-best':'Best','dash-lessons':'Lessons','dash-of-35':'of 35 completed','dash-quizzes':'Quizzes','dash-correct':'correct','dash-writing':'Writing','dash-sessions':'sessions','dash-pron':'Pronunciation','dash-avg':'avg','dash-goals':'Daily Goals','dash-goals-desc':'Set daily goals to stay motivated','dash-badges':'Badges','dash-earned':'earned','dash-cert':'Certificate','cert-ready':'Ready to download!','cert-view':'View Certificate','cert-complete-all':'Complete all 35 lessons','cert-student':'Valued Student','badge-view-all':'View All Badges','badge-title':'Achievements','export-btn':'Download CSV Report',
'write-feedback':'AI Feedback','write-label-great':'Excellent!','write-label-good':'Well written!','write-label-ok':'Good effort!','write-words':'words','write-sentences':'sentences','write-avg':'avg','write-wps':'w/s',
'review-total':'Total','review-due':'Due','review-mastered':'Mastered','review-course':'Course','review-lesson':'Lesson','review-interval':'Interval','review-days':'days','review-session-done':'Session Complete!','review-close':'Close',
'notif-msg':'Are you still studying?','notif-welcome':'Welcome! Ready to learn?','reminder-notif-body':'Time for your daily English lesson!','reminder-saved':'Reminder settings saved!','reminder-off':'Reminders are off','reminder-test-fail':'Please enter your email and API key first.','pomo-reset':'Reset',
'goals-title':'Daily Goals','goals-settings':'Settings','goals-all-done':'All goals completed!','goals-modal-title':'Daily Goals Settings','goals-reset':'Reset to Default','goals-modal-desc':'Choose what you want to track','goals-saved':'Save Goals','goals-celebrate':'Celebrate!','cert-download':'Download PDF','pron-play':'Play','pron-slow':'Slow','fc-due':'due','fc-total':'total','fc-mastered':'mastered','fc-tap-hint':'Tap to reveal','fc-flip':'Flip','fc-know':'Know','fc-dontknow':'Don\'t Know','review-session-sub':'You reviewed all due questions.','review-start-btn':'Start Review Session','review-close':'Close',
'write-label-needs':'Needs improvement','write-fb-long-sent':'Long sentences','write-fb-short-sent':'Short sentences','write-fb-length':'Length','write-fb-length-good':'Good length','write-fb-structure':'Structure','write-fb-opinion':'Opinion',
'badge-view-all':'View All','dash-lessons-completed':'lessons','export-btn':'Download CSV',
'cert-view':'View Certificate','cert-complete-all':'Complete all 35 lessons','speak-tag':'SPEAKING','speak-title':'<em>Speaking</em> Practice','speak-subtitle':'Listen to example sentences and practice your pronunciation aloud','speak-listen':'Listen','speak-slow':'Slow','speak-next':'Next','speak-tip-pace':'Try to match the natural pace — not too fast, not too slow.','speak-tip-volume':'Speak with steady confidence — avoid trailing off at the end.','speak-tip-silence':'Reduce pauses between words for smoother fluency.','speak-tip-great':'Great pronunciation! Keep practicing to improve further.','speak-tip-good':'Good effort! Focus on the tips above to improve.','speak-tip-keep':'Keep practicing! Repeat the sentence and try again.',
  'pomo-tag':'FOCUS TIMER','pomo-subtitle':'Stay focused with science-backed time management',
  'quiz-title':'Knowledge Check','quiz-question':'Question','quiz-correct':'Correct!','quiz-wrong':'Not quite!',
},
ar:{
'hero-badge':'منصة تعلم الإنجليزية بالذكاء الاصطناعي','hero-title':'تحدث الإنجليزية <em>بثقة وقوة</em>','hero-subtitle':'رحلة ثورية لإتقان الإنجليزية بتوجيه من الذكاء الاصطناعي','course-beginner':'التأسيس','course-everyday':'الإنجليزية اليومية','course-confident':'التواصل بثقة','course-fluency':'التعبير بطلاقة','course-business':'الإنجليزية للأعمال','course-interview':'التحضير للمقابلات','course-academic-lvl':'الكتابة الأكاديمية',
'course-beginner-title':'التأسيس','course-everyday-title':'الإنجليزية اليومية','course-confident-title':'التواصل بثقة','course-fluency-title':'التعبير بطلاقة','course-business-title':'الإنجليزية للأعمال','course-interview-title':'التحضير للمقابلات','course-academic-lvl-title':'الكتابة الأكاديمية',
'course-beginner-desc':'ابدأ رحلتك من الصفر','course-everyday-desc':'أتقن المحادثات اليومية','course-confident-desc':'عبر عن نفسك بثقة','course-fluency-desc':'تحدث بطلاقة في أي موضوع','course-business-desc':'التواصل المهني','course-interview-desc':'أتقن مقابلات العمل','course-academic-lvl-desc':'تفوق في الكتابة الأكاديمية',
'lesson-label':'درس','lesson-completed':'مكتمل!','lesson-complete':'تحديد كمكتمل','quiz-title':'اختبار المعرفة','quiz-question':'سؤال','quiz-correct':'صحيح!','quiz-wrong':'ليس تمامًا!','quiz-detail':'استمر في الممارسة لتحسين درجاتك!','quiz-msg-perfect':'درجة كاملة! رائع!','quiz-msg-great':'عمل رائع!','quiz-msg-good':'عمل جيد! استمر في الدراسة!','quiz-msg-keep':'استمر في الممارسة!',
'sound-title':'إعدادات الصوت','pomo-tag':'مؤقت التركيز','pomo-title':'مؤقت بومودورو','pomo-subtitle':'حافظ على تركيزك بإدارة وقت','pomo-label-focus':'تركيز','pomo-label-short':'استراحة قصيرة','pomo-label-long':'استراحة طويلة','pomo-start':'ابدأ','pomo-pause':'إيقاف','pomo-resume':'استئناف','pomo-reset':'إعادة','pomo-session':'جلسة','pomo-notif-focus':'اكتملت جلسة التركيز! خذ استراحة.','pomo-notif-break':'انتهت الاستراحة! مستعد للتركيز؟',
'chat-title':'مدرس الإنجليزية AI','chat-last-msg':'مرحبًا بعودتك! اسألني أي شيء.',
'reading-tag':'القراءة','reading-title':'فهم القراءة','reading-subtitle':'اقرأ قصصًا قصيرة واختبر فهمك','reading-question':'سؤال','reading-questions':'أسئلة الفهم',
'planner-tag':'مخطط الدراسة','planner-title':'مخطط الدراسة الأسبوعي','planner-subtitle':'خطط لدروسك مسبقًا','planner-add-title':'إضافة مهمة دراسية','planner-edit-title':'تعديل مهمة دراسية',
'vocab-tag':'لعبة المفردات','vocab-title':'لعبة المفردات','vocab-subtitle':'طابق الكلمات مع معانيها','vocab-no-data':'أكمل بعض الدروس أولاً!',
'dash-streak':'التسلسل','dash-days':'أيام','dash-best':'الأفضل','dash-lessons':'الدروس','dash-of-35':'من 35 مكتملة','dash-quizzes':'الاختبارات','dash-correct':'صحيحة','dash-writing':'الكتابة','dash-sessions':'جلسات','dash-pron':'النطق','dash-avg':'المتوسط','dash-goals':'الأهداف اليومية','dash-goals-desc':'حدد أهدافًا يومية للبقاء متحفزًا','dash-badges':'الشارات','dash-earned':'مكتسبة','dash-cert':'الشهادة','cert-ready':'جاهزة للتحميل!','cert-view':'عرض الشهادة','cert-complete-all':'أكمل جميع الدروس الـ35','cert-student':'طالب عزيز','badge-view-all':'عرض الكل','badge-title':'الإنجازات','export-btn':'تحميل تقرير CSV',
'write-feedback':'تقييم AI','write-label-great':'ممتاز!','write-label-good':'كتابة جيدة!','write-label-ok':'مجهود جيد!','write-words':'كلمات','write-sentences':'جمل','write-avg':'متوسط','write-wps':'ك/ج',
'review-total':'الإجمالي','review-due':'مستحق','review-mastered':'مُتقن','review-course':'الدورة','review-lesson':'الدرس','review-interval':'الفاصل','review-days':'أيام','review-session-done':'اكتملت الجلسة!','review-close':'إغلاق',
'notif-msg':'هل مازلت تدرس؟','notif-welcome':'مرحبًا! مستعد للتعلم؟','reminder-notif-body':'حان وقت درس الإنجليزية اليومي!','reminder-saved':'تم حفظ إعدادات التذكير!','reminder-off':'التذكير متوقف','reminder-test-fail':'الرجاء إدخال البريد الإلكتروني ومفتاح API أولاً.',
'goals-title':'الأهداف اليومية','goals-settings':'الإعدادات','goals-all-done':'كل الأهداف مكتملة!','goals-modal-title':'إعدادات الأهداف اليومية','goals-reset':'إعادة للافتراضي','goals-modal-desc':'اختر ما تريد تتبعه','goals-saved':'حفظ الأهداف','goals-celebrate':'احتفل!','pron-play':'تشغيل','pron-slow':'بطيء','fc-due':'مستحق','fc-total':'الإجمالي','fc-mastered':'مُتقن','fc-tap-hint':'اضغط للكشف','fc-flip':'اقلب','fc-know':'أعرف','fc-dontknow':'لا أعرف','review-session-sub':'راجعت جميع الأسئلة المستحقة.','review-close':'إغلاق',
'write-label-needs':'بحاجة تحسين','write-fb-long-sent':'جمل طويلة','write-fb-short-sent':'جمل قصيرة','write-fb-length':'الطول','write-fb-length-good':'طول جيد','write-fb-structure':'البنية','write-fb-opinion':'الرأي','badge-view-all':'عرض الكل',
'dash-lessons-completed':'دروس','speak-tag':'التحدث','speak-title':'<em>تمرين</em> التحدث','speak-subtitle':'استمع إلى جمل نموذجية وتمرن على النطق بصوت عالٍ','speak-listen':'استمع','speak-slow':'بطيء','speak-next':'التالي','speak-tip-pace':'حاول مطابقة السرعة الطبيعية - ليست سريعة جدًا ولا بطيئة جدًا.','speak-tip-volume':'تحدث بثبات وثقة - لا تخفض صوتك في النهاية.','speak-tip-silence':'قلل التوقفات بين الكلمات لطلاقة أكثر سلاسة.','speak-tip-great':'نطق رائع! استمر في الممارسة لتحسين أكثر.','speak-tip-good':'مجهود جيد! ركز على النصائح أعلاه للتحسن.','speak-tip-keep':'استمر في الممارسة! كرر الجملة وحاول مرة أخرى.',
  'pomo-tag':'مؤقت التركيز','pomo-subtitle':'حافظ على تركيزك',
  'quiz-title':'اختبار المعرفة','quiz-question':'سؤال','quiz-correct':'صحيح!','quiz-wrong':'ليس تمامًا!',
}};

// ============================================================
// 24. INIT
// ============================================================
try{setLanguage(currentLanguage);}catch(ex){}
try{if(typeof checkBadges==='function')setTimeout(function(){try{checkBadges(false)}catch(ex){}},1000);}catch(ex){}
try{if(typeof initGrammar==='function')setTimeout(function(){try{initGrammar()}catch(ex){}},1500);}catch(ex){}
try{if(typeof initPomo==='function')setTimeout(function(){try{initPomo()}catch(ex){}},2000);}catch(ex){}
try{if(typeof initSound==='function')setTimeout(function(){try{initSound()}catch(ex){}},2500);}catch(ex){}
try{if(typeof initChat==='function')setTimeout(function(){try{initChat()}catch(ex){}},3000);}catch(ex){}
try{if(typeof initReading==='function')setTimeout(function(){try{initReading()}catch(ex){}},3500);}catch(ex){}
try{if(typeof initVocabGame==='function')setTimeout(function(){try{initVocabGame()}catch(ex){}},4000);}catch(ex){}
try{if(typeof initReminders==='function')setTimeout(function(){try{initReminders()}catch(ex){}},4500);}catch(ex){}
try{if(typeof initGoals==='function')setTimeout(function(){try{initGoals()}catch(ex){}},5000);}catch(ex){}
try{if(typeof initFlashcards==='function')setTimeout(function(){try{initFlashcards()}catch(ex){}},5500);}catch(ex){}
try{if(typeof initPron==='function')setTimeout(function(){try{initPron()}catch(ex){}},6000);}catch(ex){}
try{if(typeof speakInit==='function')setTimeout(function(){try{speakInit()}catch(ex){}},6500);}catch(ex){}
try{if(typeof renderReview==='function')setTimeout(function(){try{renderReview()}catch(ex){}},500);}catch(ex){}


