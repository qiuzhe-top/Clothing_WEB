var mar_list = document.getElementsByTagName('marquee');
document.getElementsByClassName('show-img');


function over(color) {
  document.getElementById('mbody').style.backgroundColor = color;
  for(var i=0;i<mar_list.length;i++){
    var elem = mar_list[i];
    elem.innerText = getT(color);
    elem.style.color = 'white'
  }
}



function leave(x) {
  document.getElementById('mbody').style.backgroundColor = "black";
  for(var i=0;i<mar_list.length;i++){
    var elem = mar_list[i];
    // elem.innerText = '';
    elem.style.color = 'rgb(54, 54, 54,0)'
  }
}

function getT(color){
  var dict = {
    // 乳牙
    "A#51acb5":[
      '那些小标题是什么玩意儿？？？？？导演你有事吗',
      '#VIFF 同时轻盈和沉重，反讽和真诚。向死而生的（反）成长电影。（第一部看哭的片，但要是没哭应该会更好）',
      'PYIFF43，原来是《星运里的错》，这类青少年电影的俗套题材能拍成这样，这位新导演还是很可以的',
      '你只有一次初恋',
      '在电影《乳牙》中，少女米拉正值豆蔻年华就得了绝症',
      '是“爱情”把她引向了这个神风特工队般自毁的小滑头',
      '她身上既有气若游丝的脆弱，也有青少年飞蛾扑火般对当下的渴望',
      '其实，米拉并不傻。',
      '洋溢着青春荷尔蒙的人物造型',
      '她只是想为了一个人“犯傻”',
      '明亮活泼的影像风格',
      '又从家中盗窃药物的社会青年',
      '这段早恋让深陷中年感情危机的父母十分反对',
      '还让我以为是一部“澳洲丽人”（类似《美国丽人》',
      '这个家庭危机的所有参与者，其实要比他们愿意承认的更像彼此。',
      '有青少年飞蛾扑火般对当下的渴望'
    ],
    // 伤心画廊
    "A#ed569d":[
      '我最喜欢的一句台词是have you put your penis in his vagina？',
      '这真是一部再传统不过的言情片',
      '太可爱了吧',
      '都市面貌、爱情观、肤色、女权主义甚至分手展览的概念',
      '这不就是个两人筹建失恋博物馆的故事？',
      '寄托前段感情的特殊之物的确是丢了遗憾',
      '完全的小品类型，看着玩吧！',
      '看的时候就在想啊，像感情遗产这个问题，',
      '唉，一颗星都打得很勉强……就……行吧……为',
      '做个纪录片不比这强多了',
      '女主话痨 男主存在感太低 倒不如',
      '千百萬個失戀故事，同一樣破碎的心',
      '分数：45 一看片头就感觉是女导演，结果查一下果然',
      '蛮有意思的，再短一点就好了',
    ],
    // 敢梦有爱
    "A#cc7c37":[],
    // 如何培养一个女孩
    "A#0a1540":[],
    // 若能与你共乘海浪之上
    "A#21ace6":[]    
  }
  var text_dict = dict["A"+color]
  console.log(color,text_dict)
  var index = Math.round(Math.random()*text_dict.length-1)
  return text_dict[index]
};


