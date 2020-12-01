var url = window.cdn_path;
if (url === undefined) {
  url = '';
} //// animated massange

const massange = [
  {
    m: 'Здравейте! Казвам се Светослав Цанев. Аз съм практикуващ лекар-уролог и доктор на медицинските науки. ',
  },
  {
    m:
      'Моята «Клиника за мъжкото здраве» с подкрепата на Българската урологична асоциация популяризира Националната програма за лечение на простатита и съпътстващите го заболявания. ',
  },
  {
    m:
      'Днес Вие участвате в тази кампания, в рамките на която аз провеждам БЕЗПЛАТНА консултация по въпроси, свързани с лечението на простатита. ',
  },
  {
    m: 'За да получите детайлни препоръки, моля да отговорите на няколко въпроса относно Вашето състояние.',
  },
  {
    m: 'Вашата дата на раждане',
  },
  {
    m: 'Какъв симптом е най-силно изявен при Вас?',
  },
  {
    m: 'Колко отдавна имате този проблем? ',
  },
  {
    m:
      'Не искам да Ви плаша, но във Вашия случай такава диагноза означава патология – наличието на такова заболяване говори за сериозни проблеми. ',
  },
  {
    m:
      'Понеже вече доста отдавна забелязвате този проблем, съм длъжен да Ви предупредя да не провеждате лечение по класическата схема, която обикновено назначават некомпетентните лекари.',
  },
  {
    m:
      'Грешно подбрани медикаменти, особено съчетани със закъсняло лечение, крият риск от растежа на злокачествените ракови клетки. Буквално в рамките на една година това ще доведе до импотентност и загуба на половата мощ.',
  },
  {
    m:
      'Трябва незабавно да вземете мерки, защото с всеки изминал ден заболяването уврежда все повече области от цялата полова система. ',
  },
  {
    m:
      'Доскоро този процес се смяташе за необратим. Но скорошните данни от проучванията на Института по урология и андрология сочат, че “Urotrin” има 98,5% ефективност в борба с простатита и аденома на простатата НА ВСЕКИ ЕТАП от заболяването! ',
  },
  {
    m: `<img style="width:335px" src="${url}images/main-pack.png">`,
  },
  {
    m:
      'Микробиолозите успяха да открият формула за възстановяване на простатата без загуба на половите функции. Освен това, прием на този препарат води до нормализиране на кръвообращението и възстановяване на ерекцията дори при остър и хроничен простатит!',
  },
  {
    m:
      'Особеността на препарата "Urotrin" е напълно естествения му състав. Активните съставки, съдържащи се в капсулите, започват да действат още на втория ден от приема. ',
  },
  {
    m:
      'Изпитванията на препарата показват, че болката и паренето при уриниране изчезват още на 2-ия - 4-ия ден, а излекуването настъпва след 4 седмици.',
  },
  {
    m: 'Във Вашия индивидуален случай бих препоръчал редовен прием на курс "Urotrin”, за да затвърдите резултата.',
  },
  {
    m:
      'Тъй като в Националната програма за лечение е предвидена помощ за хората, които се обръщат към нас за първи път, Вие можете да получите "Urotrin” в рамките на тази кампания още сега. ',
  },

  {
    m:
      'За целта трябва само да попълните Формуляра на участника. Специалистът от медицинския център ще се свърже с Вас, за да уточни датата на доставка на "Urotrin” на удобен за Вас адрес. ',
  },
];
console.log(massange);

var mass_id = 0;
var length_mass = 0; // tateatr avelacnelu hamar
var lengt_num_mas = 0; // depi ahort smsy
var text = '';
var process = true;
setTimeout(() => {
  const body_mas =
    '<div class="chat-content-item manager "><div class="chat-content-desc"><img class="chat-content-desc-image" src="img/avatar.png" alt=""><div class="chat-content-desc-item manager"><p id="mass' +
    mass_id +
    '"></p></div></div></div>';
  $('.chat-content-list').append(body_mas);
  const mas_inf = setInterval(function () {
    if (process == true) {
      if (lengt_num_mas != massange.length) {
        text += massange[lengt_num_mas].m[length_mass];
        length_mass++;
        $('#mass' + lengt_num_mas + '').html(text);
        // if (lengt_num_mas === 4 && length_mass === massange[lengt_num_mas].m.length-1) {
        //     appGender();
        //     process = false;
        //     genderNext();
        // }
        if (lengt_num_mas === 4 && length_mass === massange[lengt_num_mas].m.length - 1) {
          appAge();
          process = false;
          genderNext();
        }
        if (lengt_num_mas === 5 && length_mass === massange[lengt_num_mas].m.length - 1) {
          process = false;
          YsNo();
        }
        if (lengt_num_mas === 6 && length_mass === massange[lengt_num_mas].m.length - 1) {
          process = false;
          prevN();
        }
        if (lengt_num_mas === 16 && length_mass === massange[lengt_num_mas].m.length) {
          $('#mass17').append('<b class="new_price_val"></b> <b class="new_price_cur"></b>.');
        }
        //for closed Set Interval
        if (length_mass == massange[lengt_num_mas].m.length) {
          lengt_num_mas++;
          mass_id++;
          length_mass = 0;
          text = '';
          console.log(lengt_num_mas);
          app();
          let proc_scroling = lengt_num_mas - 1;
          let nev_div = $('#mass' + proc_scroling + '')[0].offsetParent.offsetTop;
          console.log(nev_div);
          scriplongBody(nev_div);
        }
      } else {
        console.log('verj');
        clearInterval(mas_inf);
        $('#mass' + lengt_num_mas + '')
          .parent()
          .parent()
          .css('display', 'none');
        $('#cont_form').css('display', 'block');
      }
    } else {
      //
    }
  }, 50);
}, 2000);

function app() {
  const body_mas =
    '<div class="chat-content-item manager "><div class="chat-content-desc"><img class="chat-content-desc-image" src="img/avatar.png" alt=""><div class="chat-content-desc-item manager"><p id="mass' +
    mass_id +
    '"></p></div></div></div>';
  $('.chat-content-list').append(body_mas);
}
// my massange
function myMassange(userGend) {
  let mass =
    '<div class="chat-content-item user "><div class="chat-content-desc"><div class="chat-content-desc-item user"><p class="users_mass">' +
    userGend +
    '</p></div></div></div>';
  $('.chat-content-list').append(mass);
}

// gender append

function appGender() {
  $('.chat-content-list').append(
    '<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="chooseGenderM">Мужской</span></div><div class="chat-content-buttons-gender-block"><span class="chooseGenderW">Женский</span></div></div>'
  );
}

function genderNext() {
  $('.chooseGenderM').click(() => {
    document.querySelector('.chat-content-buttons-gender').style.display = 'none';
    myMassange('Мужчина');
    setTimeout(() => {
      process = true;
    }, 500);
  });
  $('.chooseGenderW').click(() => {
    document.querySelector('.chat-content-buttons-gender').style.display = 'none';
    myMassange('Женщина');
    setTimeout(() => {
      process = true;
    }, 500);
  });
}

// Age append
function appAge() {
  $('.chat-content-list').append(
    '<form name="questionForm" class="form" id="form_opr"><div class="form-group"><div class="form-group-inline"><select name="day" class="custom-select select-day empty_field"><option value="" selected="selected">Ден</option>undefined<option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option></select></div><div class="form-group-inline full-month"><select name="month" class="custom-select select-month empty_field"><option value="" selected="selected">Месец</option>undefined<option value="1">януари</option><option value="2">февраль</option><option value="3">март</option><option value="4">април</option><option value="5">май</option><option value="6">юни</option><option value="7">юли</option><option value="8">август</option><option value="9">септември</option><option value="10">октомври</option><option value="11">ноември</option><option value="12">декември</option></select></div><div class="form-group-inline year"><select name="year" class="custom-select select-year empty_field"><option value="" selected="selected">Година</option>undefined<option value="1940">1940</option><option value="1941">1941</option><option value="1942">1942</option><option value="1943">1943</option><option value="1944">1944</option><option value="1945">1945</option><option value="1946">1946</option><option value="1947">1947</option><option value="1948">1948</option><option value="1949">1949</option><option value="1950">1950</option><option value="1951">1951</option><option value="1952">1952</option><option value="1953">1953</option><option value="1954">1954</option><option value="1955">1955</option><option value="1956">1956</option><option value="1957">1957</option><option value="1958">1958</option><option value="1959">1959</option><option value="1960">1960</option><option value="1961">1961</option><option value="1962">1962</option><option value="1963">1963</option><option value="1964">1964</option><option value="1965">1965</option><option value="1966">1966</option><option value="1967">1967</option><option value="1968">1968</option><option value="1969">1969</option><option value="1970">1970</option><option value="1971">1971</option><option value="1972">1972</option><option value="1973">1973</option><option value="1974">1974</option><option value="1975">1975</option><option value="1976">1976</option><option value="1977">1977</option><option value="1978">1978</option><option value="1979">1979</option><option value="1980">1980</option><option value="1981">1981</option><option value="1982">1982</option><option value="1983">1983</option><option value="1984">1984</option><option value="1985">1985</option><option value="1986">1986</option><option value="1987">1987</option><option value="1988">1988</option><option value="1989">1989</option><option value="1990">1990</option><option value="1991">1991</option><option value="1992">1992</option><option value="1993">1993</option><option value="1994">1994</option><option value="1995">1995</option><option value="1996">1996</option><option value="1997">1997</option><option value="1998">1998</option><option value="1999">1999</option><option value="2000">2000</option><option value="2001">2001</option><option value="2002">2002</option><option value="2003">2003</option><option value="2004">2004</option><option value="2005">2005</option><option value="2006">2006</option><option value="2007">2007</option><option value="2008">2008</option><option value="2009">2009</option><option value="2010">2010</option><option value="2011">2011</option><option value="2012">2012</option><option value="2013">2013</option><option value="2014">2014</option><option value="2015">2015</option><option value="2016">2016</option><option value="2017">2017</option><option value="2018">2018</option><option value="2019">2019</option></select></div></div></form>'
  );

  let data = setInterval(() => {
    let empty_field = $('.select-day').val();
    let full_month = $('.select-month').val();
    let year = $('.select-year').val();
    if (empty_field != '' && full_month != '' && year != '') {
      let selectS = '' + empty_field + '.' + full_month + '.' + year + '';
      myMassange(selectS);
      $(this).css('display', 'none');
      process = true;
      clearInterval(data);
      $('#form_opr').css('display', 'none');
    }
    console.log(empty_field, full_month, year);
  }, 500);
}

// append photos foot

function Photofoot() {
  $('.chat-content-list').append(
    '<div class="foot"><img src="img/1_стадия.jpg" id="foot1"><img src="img/2_стадия.jpg" id="foot2"><img src="img/3_стадия.jpg" id="foot3"></div>'
  );
  sendImg();
}
// append prevN

function prevN() {
  function seopN() {
    return `
        <div class="chat-content-buttons-gender">
            <div class="chat-content-buttons-gender-block">
                <span class="chooseGenderW" title="Година или по-малко">Година или по-малко</span>
            </div>
            <div class="chat-content-buttons-gender-block">
                <span class="chooseGenderW" title="1-3 години">1-3 години</span>
            </div>
            <div class="chat-content-buttons-gender-block">
                <span class="chooseGenderW" title="Над 3 години">Над 3 години</span>
            </div>
        </div>
        
        `;
  }
  $('.chat-content-list').append(seopN());
  let title = $('.chooseGenderW');
  title.map((e) => {
    title[e].onclick = function () {
      console.log(this.title);
      $('.chat-content-buttons-gender').css('display', 'none');
      myMassange('' + this.title + '');
      process = true;
    };
  });
}

// append yeas and no

function YsNo() {
  function seop() {
    return `
        <div class="chat-content-buttons-gender">
            <div class="chat-content-buttons-gender-block">
                <span class="chooseGenderM" title="Болка и усещане за опъване в слабините">Болка и усещане за опъване в слабините</span>
            </div>
            <div class="chat-content-buttons-gender-block">
                <span class="chooseGenderM" title="Затруднено уриниране">Затруднено уриниране</span>
            </div>
            <div class="chat-content-buttons-gender-block">
                <span class="chooseGenderM" title="Намалено либидо">Намалено либидо</span>
            </div>
            <div class="chat-content-buttons-gender-block">
                <span class="chooseGenderM" title="Слаба ерекция">Слаба ерекция</span>
            </div>
            <!--<div class="chat-content-buttons-gender-block">-->
                <!--<span class="chooseGenderM" title="Повреждения связок и суставов">Повреждения связок и суставов</span>-->
            <!--</div>-->
        </div>
        
        `;
  }
  $('.chat-content-list').append(seop());
  let title = $('.chooseGenderM');
  title.map((e) => {
    title[e].onclick = function () {
      console.log(this.title);
      $('.chat-content-buttons-gender').css('display', 'none');
      myMassange('' + this.title + '');
      process = true;
    };
  });
}

// for scroll on button
let top_scroling = 0;
function scriplongBody(x) {
  let ekac_x = x + 70;
  top_scroling += ekac_x;
  var set = setTimeout(() => {
    // let objDiv = document.getElementById('page_chat');
    // objDiv.scrollTop.animate =  5000;
    $('#page_chat').animate({ scrollTop: top_scroling }, 1000);
  }, 300);
}

setInterval(function () {
  let user_mass = $('.users_mass');
  var user_full_info = '';
  user_mass.map((e) => {
    let full_info = user_mass[e].innerText + '/';
    user_full_info += full_info;
  });
  $('input[name=comments]').val('' + user_full_info + '');
}, 500);

// for date
function fdateTwoDigits(d) {
  let now = new Date();
  now.setDate(now.getDate() + d);
  let mm = now.getMonth() + 1;
  let day = now.getDate();
  if (now.getDate() < 10) day = '0' + now.getDate();
  if (mm < 10) mm = '0' + mm;
  let date = '' + day + '.' + mm + '.' + now.getFullYear() + '';
  $('#daten').text(date);
}
setInterval(() => {
  fdateTwoDigits(0);
}, 500);

setInterval(() => {
  let val = $('#val').text();
  let cur = $('#cur').text();
  $('.new_price_val').text(val);
  $('.new_price_cur').text(cur);
  $('.new_price_sig').text('рублей');
}, 200);
