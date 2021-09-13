
function Quiz(questions) {
  this.score = 0;
  this.scr = new Array(90);
  this.ed=0;
  this.ab=0;
  this.ma=0;
  this.si=0;
  this.ds=0;
  this.fa=0;
  this.ai=0;
  this.vu=0;
  this.eu=0;
  this.sb=0;
  this.ss=0;
  this.ei=0;
  this.us=0;
  this.et=0;
  this.is=0;
  this.as=0;
  this.np=0;
  this.pu=0;
  this.questions = questions;
  this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
  return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
      this.scr[this.questionIndex]=this.getQuestionIndex().isCorrectAnswer(answer);
      this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
  return this.questionIndex === this.questions.length;
}


function Question(text, choices) {
  this.text = text;
  this.choices = choices;
}

Question.prototype.isCorrectAnswer = function(choice) {
  if(choice== "کاملا غلط")
  return this.score = 1;
  if(choice== "تقریبا غلط")
  return this.score = 2;
  if(choice== "بیشتر درست است تا غلط")
  return this.score = 3;
  if(choice== "اندکی درست")
  return this.score = 4;
  if(choice== " تقریبا درست")
  return this.score = 5;
  if(choice== "کاملا درست")
  return this.score = 6;
}


function populate() {
  if(quiz.isEnded()) {
      showScores();
  }
  else {
      // show question
      var element = document.getElementById("question");
      element.innerHTML = quiz.getQuestionIndex().text;

      // show options
      var choices = quiz.getQuestionIndex().choices;
      for(var i = 0; i < choices.length; i++) {
          var element = document.getElementById("choice" + i);
          element.innerHTML = choices[i];
          guess("btn" + i, choices[i]);
      }

      showProgress();
  }
};
function backward()
{
  if(quiz.questionIndex>0)
  quiz.questionIndex--;
  populate();
}
function guess(id, guess) {
  var button = document.getElementById(id);
  button.onclick = function() {
      quiz.guess(guess);
      populate();
  }
};


function showProgress() {
  var currentQuestionNumber = quiz.questionIndex + 1;
  var element = document.getElementById("progress");
  element.innerHTML = "سوال " + currentQuestionNumber + " از " + quiz.questions.length;
  if(currentQuestionNumber<30)
  document.getElementById("progresss-bar").style.backgroundColor= "red";
  if(currentQuestionNumber>29 && currentQuestionNumber<60)
  document.getElementById("progresss-bar").style.backgroundColor= "orange";
  if(currentQuestionNumber>59 && currentQuestionNumber<100)
  document.getElementById("progresss-bar").style.backgroundColor= "green";
  if(currentQuestionNumber==100)
  document.getElementById("progresss-bar").style.backgroundColor= "green";

  //document.getElementById("progresss-bar").innerHTML= ((currentQuestionNumber/90)*100).toFixed(0)+"%";
  document.getElementById("progresss-bar").innerHTML=" "
  document.getElementById("progresss-bar").style.width= (currentQuestionNumber/90)*100+"%";
};

function showScores() {
  for(let index=0;index<90;index++)
  {
    if(index==0 || index==18 || index==36 || index==54 || index==72)
    quiz.ed+=quiz.scr[index];
    if(index==1 || index==19 || index==37 || index==55 || index==73)
    quiz.ab+=quiz.scr[index];
    if(index==2 || index==20 || index==38 || index==56 || index==74)
    quiz.ma+=quiz.scr[index];
    if(index==3 || index==21 || index==39 || index==57 || index==75)
    quiz.si+=quiz.scr[index];
    if(index==4 || index==22 || index==40 || index==58 || index==76)
    quiz.ds+=quiz.scr[index];
    if(index==5 || index==23 || index==41 || index==59 || index==77)
    quiz.fa+=quiz.scr[index];
    if(index==6 || index==24 || index==42 || index==60 || index==78)
    quiz.ai+=quiz.scr[index];
    if(index==7 || index==25 || index==43 || index==61 || index==79)
    quiz.vu+=quiz.scr[index];
    if(index==8 || index==26 || index==44 || index==62 || index==80)
    quiz.eu+=quiz.scr[index];
    if(index==9 || index==27 || index==45 || index==63 || index==81)
    quiz.sb+=quiz.scr[index];
    if(index==10 || index==28 ||index==46 || index==64 || index==82)
    quiz.ss+=quiz.scr[index];
    if(index==11 || index==29 ||index==47 || index==65 || index==83)
    quiz.ei+=quiz.scr[index];
    if(index==12 || index==30 ||index==48 || index==66 || index==84)
    quiz.us+=quiz.scr[index];
    if(index==13 || index==31 || index==49 || index==67 || index==85)
    quiz.et+=quiz.scr[index];
    if(index==14 || index==32 || index==50 || index==68 || index==86)
    quiz.is+=quiz.scr[index];
    if(index==15 || index==33 || index==51 || index==69 || index==87)
    quiz.as+=quiz.scr[index];
    if(index==16 || index==34 || index==52 || index==70 || index==88)
    quiz.np+=quiz.scr[index];
    if(index==17 || index==35 || index==53 || index==71 || index==89)
    quiz.pu+=quiz.scr[index];
  }
  /*if(this.questionIndex==0 || this.questionIndex==18 || this.questionIndex==36 || this.questionIndex==54 || this.questionIndex==72)
  this.ed+=this.getQuestionIndex().isCorrectAnswer(answer);
  if(this.questionIndex==1 || this.questionIndex==19 || this.questionIndex==37 || this.questionIndex==55 || this.questionIndex==73)
  this.ab+=this.getQuestionIndex().isCorrectAnswer(answer);
  if(this.questionIndex==2 || this.questionIndex==20 || this.questionIndex==38 || this.questionIndex==56 || this.questionIndex==74)
  this.ma+=this.getQuestionIndex().isCorrectAnswer(answer);
  if(this.questionIndex==3 || this.questionIndex==21 || this.questionIndex==39 || this.questionIndex==57 || this.questionIndex==75)
  this.si+=this.getQuestionIndex().isCorrectAnswer(answer);
  if(this.questionIndex==4 || this.questionIndex==22 || this.questionIndex==40 || this.questionIndex==58 || this.questionIndex==76)
  this.ds+=this.getQuestionIndex().isCorrectAnswer(answer);
  if(this.questionIndex==5 || this.questionIndex==23 || this.questionIndex==41 || this.questionIndex==59 || this.questionIndex==77)
  this.fa+=this.getQuestionIndex().isCorrectAnswer(answer);
  if(this.questionIndex==6 || this.questionIndex==24 || this.questionIndex==42 || this.questionIndex==60 || this.questionIndex==78)
  this.ai+=this.getQuestionIndex().isCorrectAnswer(answer);
  if(this.questionIndex==7 || this.questionIndex==25 || this.questionIndex==43 || this.questionIndex==61 || this.questionIndex==79)
  this.vu+=this.getQuestionIndex().isCorrectAnswer(answer);
  if(this.questionIndex==8 || this.questionIndex==26 || this.questionIndex==44 || this.questionIndex==62 || this.questionIndex==80)
  this.eu+=this.getQuestionIndex().isCorrectAnswer(answer);
  if(this.questionIndex==9 || this.questionIndex==27 || this.questionIndex==45 || this.questionIndex==63 || this.questionIndex==81)
  this.sb+=this.getQuestionIndex().isCorrectAnswer(answer);
  if(this.questionIndex==10 || this.questionIndex==28 || this.questionIndex==46 || this.questionIndex==64 || this.questionIndex==82)
  this.ss+=this.getQuestionIndex().isCorrectAnswer(answer);
  if(this.questionIndex==11 || this.questionIndex==29 || this.questionIndex==47 || this.questionIndex==65 || this.questionIndex==83)
  this.ei+=this.getQuestionIndex().isCorrectAnswer(answer);
  if(this.questionIndex==12 || this.questionIndex==30 || this.questionIndex==48 || this.questionIndex==66 || this.questionIndex==84)
  this.us+=this.getQuestionIndex().isCorrectAnswer(answer);
  if(this.questionIndex==13 || this.questionIndex==31 || this.questionIndex==49 || this.questionIndex==67 || this.questionIndex==85)
  this.et+=this.getQuestionIndex().isCorrectAnswer(answer);
  if(this.questionIndex==14 || this.questionIndex==32 || this.questionIndex==50 || this.questionIndex==68 || this.questionIndex==86)
  this.is+=this.getQuestionIndex().isCorrectAnswer(answer);
  if(this.questionIndex==15 || this.questionIndex==33 || this.questionIndex==51 || this.questionIndex==69 || this.questionIndex==87)
  this.as+=this.getQuestionIndex().isCorrectAnswer(answer);
  if(this.questionIndex==16 || this.questionIndex==34 || this.questionIndex==52 || this.questionIndex==70 || this.questionIndex==88)
  this.np+=this.getQuestionIndex().isCorrectAnswer(answer);
  if(this.questionIndex==17 || this.questionIndex==35 || this.questionIndex==53 || this.questionIndex==71 || this.questionIndex==89)
  this.pu+=this.getQuestionIndex().isCorrectAnswer(answer);*/

  var rslt="<table class='styled-table'>"+" <thead><tr>"+  "<th>طرحواره</th>"+"<th>نمره از 30</th></tr></thead>"+" <tbody>";
  if(quiz.ed>=17)
  rslt+="<tr class='active-row'><td >محرومیت هیجانی</td>"+" <td>"+quiz.ed+"</td>  </tr>";
  else
  rslt+="<tr ><td >محرومیت هیجانی</td>"+" <td>"+quiz.ed+"</td>  </tr>";

  if(quiz.ab>=17)
  rslt+="<tr class='active-row' ><td>رها شدنگی/بی ثباتی</td><td>"+quiz.ab+"</td></tr>";
  else
  rslt+="<tr ><td>رها شدنگی/بی ثباتی</td><td>"+quiz.ab+"</td></tr>";

  if(quiz.ma>=17)
  rslt+="<tr class='active-row'><td>بی اعتمادی/بدرفتاری</td><td >"+quiz.ma+"</td></tr>";
  else
  rslt+="<tr ><td>بی اعتمادی/بدرفتاری</td><td >"+quiz.ma+"</td></tr>";

  if(quiz.si>=17)
  rslt+="<tr class='active-row'><td>انزوای اجتماعی/بیگانگی</td><td>"+quiz.si+"</td></tr>";
  else
  rslt+="<tr ><td>انزوای اجتماعی/بیگانگی</td><td>"+quiz.si+"</td></tr>";

  if(quiz.ds>=17)
  rslt+="<tr class='active-row'><td>نقص/شرم</td><td>"+quiz.ds+"</td></tr>";
  else
  rslt+="<tr ><td>نقص/شرم</td><td>"+quiz.ds+"</td></tr>";

  if(quiz.fa>=17)
  rslt+="<tr class='active-row'><td>شکست</td><td>"+quiz.fa+"</td></tr>";
  else
  rslt+="<tr ><td>شکست</td><td>"+quiz.fa+"</td></tr>";

  if(quiz.ai>=17)
  rslt+="<tr class='active-row'><td>وابستگی/بی کفایتی</td><td>"+quiz.ai+"</td></tr>";
  else
  rslt+="<tr ><td>وابستگی/بی کفایتی</td><td>"+quiz.ai+"</td></tr>";

  if(quiz.vu>=17)
  rslt+="<tr class='active-row'><td>آسیب پذیری نسبت به ضرر یا بیماری</td><td >"+quiz.vu+"</td></tr>";
  else
  rslt+="<tr ><td>آسیب پذیری نسبت به ضرر یا بیماری</td><td >"+quiz.vu+"</td></tr>";

  if(quiz.eu>=17)
  rslt+="<tr class='active-row'><td>گفتار/خویشتن تحول نیافته </td><td>"+quiz.eu+"</td></tr>";
  else
  rslt+="<tr ><td>گفتار/خویشتن تحول نیافته </td><td>"+quiz.eu+"</td></tr>";

  if(quiz.sb>=17)
  rslt+="<tr class='active-row'><td>اطاعت</td><td>"+quiz.sb+"</td></tr>";
  else
  rslt+="<tr><td>اطاعت</td><td>"+quiz.sb+"</td></tr>";

  if(quiz.ss>=17)
  rslt+="<tr class='active-row'><td>ایثارگری</td><td>"+quiz.ss+"</td></tr>";
  else
  rslt+="<tr ><td>ایثارگری</td><td>"+quiz.ss+"</td></tr>";

  if(quiz.ei>=17)
  rslt+="<tr class='active-row'><td>بازداری هیجانی</td><td>"+quiz.ei+"</td></tr>";
  else
  rslt+="<tr ><td>بازداری هیجانی</td><td>"+quiz.ei+"</td></tr>";

  if(quiz.us>=17)
  rslt+="<tr class='active-row'><td>معیار های سرسختانه</td><td>"+quiz.us+"</td></tr>";
  else
  rslt+="<tr ><td>معیار های سرسختانه</td><td>"+quiz.us+"</td></tr>";

  if(quiz.et>=17)
  rslt+="<tr class='active-row'><td> استحقاق/بزرگ منشی</td><td >"+quiz.et+"</td></tr>";
  else
  rslt+="<tr ><td> استحقاق/بزرگ منشی</td><td >"+quiz.et+"</td></tr>";

  if(quiz.is>=17)
  rslt+="<tr class='active-row'><td>خویشتن داری/خود انضباطی ناکافی </td><td>"+quiz.is+"</td></tr>";
  else
  rslt+="<tr ><td>خویشتن داری/خود انضباطی ناکافی </td><td>"+quiz.is+"</td></tr>";

  if(quiz.as>=17)
  rslt+="<tr class='active-row'><td>پذیرش جویی/جلب توجه</td><td>"+quiz.as+"</td></tr>";
  else
  rslt+="<tr ><td>پذیرش جویی/جلب توجه</td><td>"+quiz.as+"</td></tr>";

  if(quiz.np>=17)
  rslt+="<tr class='active-row'><td>منفی گرایی/بدبینی</td><td >"+quiz.np+"</td></tr>";
  else
  rslt+="<tr ><td>منفی گرایی/بدبینی</td><td >"+quiz.np+"</td></tr>";

  if(quiz.pu>=17)
  rslt+="<tr class='active-row'><td>تنبیه</td><td>"+quiz.pu+"</td></tr></tbody></table>";
  else
  rslt+="<tr ><td>تنبیه</td><td>"+quiz.pu+"</td></tr></tbody></table>";

  
  

  var element = document.getElementById("quiz");
  element.innerHTML = rslt;
};

// create questions here
var questions = [
  new Question("اغلب کسی را نداشته ام که مرا حمایت کند،حرف هایش را به من بزند و عمیقا نگران اتفاقی باشد که برای من می افتد.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("من به افراد نزدیک خیلی وابسته ام چون میترسم که مبادا مرا ترک کنند.", ["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("احساس میکنم مردم از من سودجویی میکنند.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("وصله ناجور جمع هستم.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("مردان یا زنانی که مرا دوس دارند وقتی عیب های مرا میبینند نمیتوانند مرا دوست داشته باشند.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("تقریبا هیچ کاری را نمیتوانم به خوبی انجام دهم.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("احساس میکنم نمیتوانم به تنهایی از پس کارهای روز مره ام بر بیایم.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("نمیتوانم از شر این احساس رها شوم که مبادا اتفاق بدی بی افتد.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("قادر نیستم از والدینم جدا شوم.کاری که هم سن و سال هایم انجام میدهند.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("اعتقاد دارم اگر بخواهم هرکاری انجام دهم برای خودم دردسر درست میکنم.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("در نهایت کار مراقبت از نزدیکانم روی دوش من است.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("از اینکه احساسات مثبتم ( مثل محبت و توجّه ) را به دیگران نشان دهم، خیلی خجالت می کشم.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("باید در بیشتر کارها بهترین باشم، نفر دوم بودن را نمی توانم بپذیرم. ",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("وقتی از کسی چیزی می خواهم پذیرش جواب “نه” برایم بسیار دشوار است.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("نمی توانم خودم را مقید کنم که کارهای تکراری و کسل کننده را انجام دهم.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("ثروتمند بودن و ارتباط با افراد مهم به من احساس ارزشمندی می دهد.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("احساس می کنم حتی زمانی هم که کارها به خوبی پیش می رود، یک روند موقتی است.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("اگر اشتباه کنم سزاوار مجازاتم. ",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("کسی را نداشته ام که به من صمیمیت، توجّه و محبت نشان دهد.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("آنقدر به دیگران نیازمندم که نگران از دست دادن آنها هستم.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("احساس می کنم باید در حضور دیگران از خودم محافظت کنم و گرنه عمدا ً به من صدمه می زنند.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("من اساساً با دیگران تفاوت هایی دارم.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("اگر کسی واقعاً مرا بشناسد، مایل نیست با من ارتباط نزدیکی بر قرار کند.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("برای رسیدن به اهدافم بی کفایت هستم.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("فکر می کنم برای انجام کارهای روزمره ام به دیگران وابسته هستم.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("احساس می کنم هر لحظه ممکن است یک مصیبت (طبیعی، حقوقی و یا پزشکی) برایم اتّفاق بیفتد.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("من و پدر و مادرم تمایل داریم بیش از حد در زندگی و مشکلات یکدیگر درگیر شویم.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("احساس می کنم چاره ای ندارم جز اینکه به خواسته های دیگران تن بدهم، وگرنه یا درصدد تلافی بر می آیند یا عصبانی می شوند یا مرا طرد می کنند.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("آدم خوبی هستم چون بیش از آنکه به فکر خودم باشم به دیگران فکر می کنم.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("برایم شرم آور است که احساساتم را نزد دیگران بروز دهم.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("سعی می کنم کارم را به بهترین نحو انجام دهم، اینکه کاری «تا حدودی خوب باشد» راضی ام نمی کند.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("من آدم خاصی هستم و مجبور نیستم محدودیّت هایی را که سر راه مردم قرار داد بپذیرم.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("اگر به هدفم نرسم زود مایوس می شوم و دست از کار می کشم.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("اگر دیگران به موفقیت هایم توجّه کنند این موفقیت ها بیش از هر چیز برایم با ارزش می شود.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("اگر رویداد خوبی پیش آید، نگران می شوم که به دنبال آن حادثه بدی اتّفاق بیفتد.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("اگر سخت تلاش نکنم باید منتظر ضرر و باخت باشم.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("من این احساس را نداشته ام که برای کسی فرد خاصی هستم.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("نگرانم افرادی که به آنها احساس نزدیکی می کنم مرا ترک کنند.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("دیر یا زود کسی به من خیانت می کند.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("به کسی یا چیزی تعلق خاطر ندارم و احساس تنهایی می کنم.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("لیاقت عشق، توجّه و احترام دیگران را ندارم.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("بیشتر مردم در حوزه های کار و موفقیت از من تواناترند.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("نمی توانم عاقلانه فکر کنم.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("نگرانم که از جانب دیگران مورد حمله فیزیکی قرار بگیرم.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("اگر من و والدینم مسائل خصوصی خودمان را از یکدیگر پنهان کنیم، احساس گناه یا خیانت می کنیم.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("معمولاً در روابطم با دیگران به آنها اجازه می دهم بر من مسلط شوند.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("آنقدر به خاطر کارهای افرادی که از آنها مراقبت می کنم سرم شلوغ است که زمان کمی برای خودم باقی می ماند.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("برایم بسیار دشوار است که مستقل از دیگران باشم.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("من باید به تمام مسئولیت هایم عمل کنم.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("از اینکه مرا محدود کنند یا نگذارند آنچه می خواهم انجام دهم متنفرم.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("برایم بسیار دشوار است که کارهای لذّت بخش و لذّت های آنی را رها کنم تا برای هدف های دراز مدت تلاش کنم.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("اگر دیگران توجّه زیادی به من نکنند، احساس بی ارزشی می کنم.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("دقت و احتیاط زیاد فایده ای ندارد، چون تقریباً همیشه مشکلی به وجود می آید.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("اگر کاری را درست انجام ندهم باید از عواقب آن رنج ببرم.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("کسی را نداشته ام که واقعاً به درد دل من گوش دهد، مرا بفهمد، یا نیازها و احساسات مرا به درستی درک کند.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("وقتی کسی که برایم مهم است از من دوری می کند، احساس نا امیدی می کنم.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("به انگیزه های دیگران کاملاً سوء ظن دارم.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("احساس می کنم که از دیگران بریده ام و با آنها غریبه شده ام.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("احساس می کنم دوست داشتنی نیستم.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("به اندازه اکثر مردم در کارهایم با استعداد نیستم.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("به قضاوت هایم در موقعیّت های روزمره اعتماد ندارم.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("نگرانم همه سرمایه ام را از دست بدهم و خیلی فقیر شوم.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("اغلب احساس می کنم والدینم به من وابسته اند، من یک زندگی مستقل ندارم.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("همیشه به دیگران اجازه داده ام برای من تصمیم بگیرند در نتیجه واقعاً نمی دانم خودم چه می خواهم.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("همیشه سنگ صبور مشکلات دیگران بوده ام.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("آنقدر خودم را کنترل می کنم که مردم فکر می کنند آدم بی احساسی هستم.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("احساس می کنم برای پیشرفت و انجام کارهای خود همواره تحت فشار هستم.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("احساس می کنم قانون ها و سنت های مرسومی را که دیگران تابع آن هستند نباید دنبال کنم.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("نمی توانم خود را مجبور کنم کارهایی را که برایم خوشایند نیستند انجام دهم، حتی وقتی که می دانم به نفع خودم است.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("اگر در یک جمع صحبت کنم یا در یک موقعیّت اجتماعی معرفی شوم، برایم مهم است که تأیید و تحسین شوم.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("هر چقدر سخت تلاش کنم باز هم نگرانم که ممکن است از لحاظ مالی ورشکست شوم و تقریباً همه چیز را از دست بدهم.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("فرقی ندارد که چرا اشتباه کردم ، در صورت اشتباه باید بهایش را بپردازم.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("وقتی در انجام کاری مردد بوده ام، شخص آگاه و توانمندی نبوده که به من توصیه و راهنمایی کند.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("بعضی اوقات آنقدر نگرانم دیگران مرا ترک کنند که باعث می شود آنها را از خودم برانم.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("معمولاً مراقب انگیزه های پنهان مردم هستم.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("همیشه احساس می کنم خارج از گروه ها هستم.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("در بسیاری جنبه ها آنقدر ناپذیرفتنی هستم که نمی توانم خودم را آن طوری که هستم نشان دهم، یا اجازه دهم دیگران مرا به خوبی بشناسند.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("در کار یا تحصیل به اندازه بقیه با هوش نیستم.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("در مورد توانایی خود برای حل مشکلات روزمره احساس کفایت ندارم.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("نگرانم دچار یک بیماری جدی باشم، حتی وقتی دلایل پزشکی کافی وجود ندارد.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("اغلب احساس می کنم هویت جداگانه ای از پدر و مادر یا همسرم ندارم.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("خیلی برایم مشکل است از دیگران بخواهم حقوقم را رعایت کنند و احساساتم را درک کنند.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("نظر دیگران این است که من خیلی برای بقیه کار می کنم امّا زمان کافی به خودم اختصاص نمی دهم.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("از نظر دیگران من فردی عصبی و ناراحت هستم.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("وقتی اشتباهی انجام می دهم نمی توانم به راحتی از آن بگذرم و خودم را ببخشم.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("احساس می کنم کاری که من مجبورم انجام دهم ارزشمند تر از کارهای دیگران است.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("به ندرت توانسته ام به تصمیمات خودم پایبند باشم.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("وقتی زیاد تعریف و تحسین می شوم، احساس می کنم فرد ارزشمندی هستم.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("نگرانم که یک تصمیم اشتباه به یک فاجعه منتهی شود.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
  new Question("من آدم بدی هستم و سزاوار مجازاتم.",["کاملا درست"," تقریبا درست","اندکی درست", "بیشتر درست است تا غلط","تقریبا غلط", "کاملا غلط"]),
   
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();