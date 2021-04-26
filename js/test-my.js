console.log("test my here!");
$(function() {
$(".demo1").addClass("slider-nav");
});

$(".block_video").addClass("slider-for");


/* СТАРТ */
/* Управление */
var vebinar1_name = [
'Мотивационное влияние руководителя как инструмент повышения эффективности управления',
'Управление исполнением: инновации, практика и&nbsp;взаимный опыт',
'Клиентология: как управлять клиентами',
'Как быстро навести порядок в&nbsp;документах и&nbsp;сэкономить компании деньги',
'Руководитель как архитектор',
'Как работать с&nbsp;сотрудниками нового поколения',
'Самый главный показатель бизнеса',
'Самозанятый: выгодно или нет?',
'8 финансовых грехов предпринимателя ',
'Управление ответственностью за&nbsp;выполнение плана продаж',
'Чем коронавирус угрожает работодателю',
'Юридические последствия пандемии коронавируса для бизнеса. Пошаговые рекомендации что делать',
'Возвращение компаний к&nbsp;работе с&nbsp;практической точки зрения',
'Принципы управления компанией на&nbsp;основе цифр. Работа грамотного руководителя'
];

/* Выводим все превьюшки */
var vebinar1_count = vebinar1_name.length;

    var preview_vebinar = $();
    for(x = 1; x <= vebinar1_count; x++) {
    preview_vebinar = preview_vebinar.add("<div></div>", {"class" :"video_preview preview_vebinar1_"+x+" liteTooltip"});
    }
    $('.block_video_preview').prepend(preview_vebinar);


/* Выводим все превьюшки */

    for(x = 1; x <= vebinar1_count; x++) {
    $('.preview_vebinar1_'+x).attr('data-tooltip-mouseover', vebinar1_name[x-1]);
    }


/* Показываем кнопку Show all */
if(vebinar1_count>9){
  vebinar1_count = vebinar1_count + 1;
    $('.video_show_all').css({'display':'flex'});
    for(x = 11; x <= vebinar1_count; x++) {
    $('.preview_vebinar1_'+x).css({'display':'none'});
    }
  }

    $('.video_show_all').on('click', function (evt) {
    vebinar1_count = vebinar1_count + 1;
    for(x = 11; x <= vebinar1_count; x++) {
    $('.preview_vebinar1_'+x).css({'display':'block'});
    }
    $(this).css({'display':'none'});
  });

/* Вебинар 1-1 */
function vebinar1_1() {

  $('.video').css({'background-size':'cover','background-image':'url(images/covers/b_1_1.jpg?3'});
  $('.fancybox-media').attr( 'href','https://youtu.be/7rFG60u1T4g');
  $('.heading_video').html(vebinar1_name[0]);
  $('.txt_author').html('Бочарова Анна, консультант по развитию бизнеса, преподаватель программ MBA');
  $('.txt_video_desc').html('Умение управлять, корректировать и&nbsp;стимулировать работу сотрудников&nbsp;&mdash; одна их&nbsp;ключевых компетенций руководителя. Каждый сотрудник способен быть эффективным, но&nbsp;вот не&nbsp;всегда испытывает желание работать и&nbsp;тем более быть успешным и&nbsp;продуктивным. </p><p>Мотивационное воздействие невозможно без глубокого профессионального понимания феномена мотивации, ее&nbsp;источников, форм проявлений. Участие в&nbsp;вебинаре поможет сформировать системное виденье мотивационного влияния руководителя, познакомит с&nbsp;различными приемами диагностики мотивационных компонентов сотрудников, а&nbsp;также с&nbsp;приемами мотивации.');
    preview_opacity();
    $('.preview_vebinar1_1').css({'opacity':'50%'});

}


/* Вебинар 1-2 */
function vebinar1_2() {
  $('.video').css({'background-size':'cover','background-image':'url(images/covers/b_1_2.jpg?4'});
  $('.fancybox-media').attr( 'href','https://youtu.be/wsI08DSQAeY');

  $('.heading_video').html(vebinar1_name[1]);
  $('.txt_author').html('Дусенко Роман, топ-менеджер, банкир, эксперт по управлению бизнесом');
  $('.txt_video_desc').html('На&nbsp;вебинаре вы&nbsp;узнаете об&nbsp;Эффективных инструментах управления людьми, для повышения эффективности процесса &laquo;Управление постановкой задач и&nbsp;исполнения&raquo;.');
  
preview_opacity();
$('.preview_vebinar1_2').css({'opacity':'50%'});
}

/* Вебинар 1-3 */
function vebinar1_3() {
  $('.video').css({'background-size':'cover','background-image':'url(images/covers/b_1_3.jpg?4'});
  $('.fancybox-media').attr( 'href','https://youtu.be/EKV7OLWE1us');

  $('.heading_video').html(vebinar1_name[2]);
  $('.txt_author').html('Бочарова Анна, консультант по развитию бизнеса, преподаватель программ MBA');
  $('.txt_video_desc').html('Преимущество в&nbsp;бизнесе всегда получали те&nbsp;компании, которые первыми замечали изменения в&nbsp;мире, первыми применяли инновационные инструменты для управления. Вебинар познакомит Вас с&nbsp;методологией Customer journey map для работы с&nbsp;новыми типами потребителей.');
  
preview_opacity();
$('.preview_vebinar1_3').css({'opacity':'50%'});
}

/* Вебинар 1-4 */
function vebinar1_4() {
  $('.video').css({'background-size':'cover','background-image':'url(images/covers/b_1_4.jpg?4'});
  $('.fancybox-media').attr( 'href','https://youtu.be/amOVbJOEe8s');

  $('.heading_video').html(vebinar1_name[3]);
  $('.txt_author').html('Денисов Денис Владимирович, директор по&nbsp;развитию бизнеса в&nbsp;ГК&nbsp;&laquo;Ланит&raquo;');
  $('.txt_video_desc').html('Может ли Ваша компания действительно быстро собрать пакет документов для участия в тендере или сдачи в налоговую? Договоры наверняка хранятся у юристов или в бухгалтерии, часть может быть утеряна, не подписана или уже не действительна. Бухгалтерские проводки по документам выполняются в бухгалтерской системе. Учет договоров в лучшем случае ведется в электронной таблице. Счета и акты находятся в финансовом отделе. А текущая переписка по поводу договорных работ - в электронных почтовых ящиках сотрудников. Чтобы собрать все просто в кучу потребуются дни, порой недели. Если Вы хотите сэкономить драгоценное время, чтобы не упустить важный контракт или избежать штрафов со стороны налоговой, то нужно автоматизировать процессы.</p><p>Приглашаем Вас на бесплатный вебинар «Как быстро навести порядок в документах и сэкономить компании деньги».');
  
preview_opacity();
$('.preview_vebinar1_4').css({'opacity':'50%'});
}
/* Вебинар 1-5 */
function vebinar1_5() {
  $('.video').css({'background-size':'cover','background-image':'url(images/covers/b_1_5.jpg?4'});
  $('.fancybox-media').attr( 'href','https://youtu.be/kPoLLy334z8');

  $('.heading_video').html(vebinar1_name[4]);
  $('.txt_author').html('Витчак Елена, директор программ, эксперт в&nbsp;области управления персоналом. Executive-coach');
  $('.txt_video_desc').html('Роль руководителя и&nbsp;лидера перемен становится все более сложной и&nbsp;многофакторной. Операционную рутину никто не&nbsp;отменял, на&nbsp;стратегию времени не&nbsp;хватает, персонал не&nbsp;отвечает взаимностью. Но&nbsp;задачу строительства&nbsp;&mdash; компании, команд, стратегии, культуры никто не&nbsp;отменял.');
  
preview_opacity();
$('.preview_vebinar1_5').css({'opacity':'50%'});
}
/* Вебинар 1-6 */
function vebinar1_6() {
  $('.video').css({'background-size':'cover','background-image':'url(images/covers/b_1_6.jpg?4'});
  $('.fancybox-media').attr( 'href','https://youtu.be/OA9ANIy8BSA');

  $('.heading_video').html(vebinar1_name[5]);
  $('.txt_author').html('Бочарова Анна, консультант по&nbsp;развитию бизнеса, преподаватель программ MBA');
  $('.txt_video_desc').html('Рынок труда уже давно стал рынком соискателей, а&nbsp;не&nbsp;работодателей. Преимущество в&nbsp;бизнесе всегда получали те&nbsp;компании, которые первыми замечали изменения в&nbsp;мире, первыми применяли инновационные инструменты для управления. От&nbsp;того, какие люди и&nbsp;как именно они работают в&nbsp;команде зависит не&nbsp;менее&nbsp;90% успеха бизнеса. Современный руководитель работает с&nbsp;удивительными, интересными сотрудниками&nbsp;&mdash; представителями новых поколений. И&nbsp;если про &laquo;игреков&raquo; известно уже многое и&nbsp;принципы построения трудовых отношений с&nbsp;ними определены, то&nbsp;для сотрудников &laquo;зетов&raquo; еще нет.</p><p>По&nbsp;прогнозам различных авторитетных организаций к&nbsp;2030 году сотрудники &laquo;зеты&raquo; составят&nbsp;70% рынка труда. Вы&nbsp;готовы к&nbsp;этим изменениям?');
  
preview_opacity();
$('.preview_vebinar1_6').css({'opacity':'50%'});
}
/* Вебинар 1-7 */
function vebinar1_7() {
  $('.video').css({'background-size':'cover','background-image':'url(images/covers/b_1_7.jpg?4'});
  $('.fancybox-media').attr( 'href','https://youtu.be/1KFQCfVCgNQ');

  $('.heading_video').html(vebinar1_name[6]);
  $('.txt_author').html('Фукс Александр, директор учебных программ Business School for Owners, автор программы Revival Company');
  $('.txt_video_desc').html('Всегда стоит помнить о&nbsp;принципиальной опасности &laquo;игры в&nbsp;показатели&raquo;. Принципиальная недостаточность управления на&nbsp;основе финансовых показателей. Из&nbsp;практики: проблемы с&nbsp;т.н. &laquo;умными показателями&raquo;.');
  
preview_opacity();
$('.preview_vebinar1_7').css({'opacity':'50%'});
}
/* Вебинар 1-8 */
function vebinar1_8() {
  $('.video').css({'background-size':'cover','background-image':'url(images/covers/b_1_8.jpg?4'});
  $('.fancybox-media').attr( 'href','https://youtu.be/kyDEiny6YjA');

  $('.heading_video').html(vebinar1_name[7]);
  $('.txt_author').html('Фурсова Анастасия, юрист, работала с&nbsp;арбитражными и&nbsp;конкурсными управляющими, а&nbsp;также в&nbsp;коммерческих организациях');
  $('.txt_video_desc').html('Прошло уже пять лет с&nbsp;тех пор, как на&nbsp;федеральном уровне заговорили о&nbsp;массовом явлении&nbsp;&mdash; самозанятости граждан в&nbsp;России. Кто&nbsp;же такой самозанятый гражданин, чем он&nbsp;может заниматься, как с&nbsp;ним работать?');
  
preview_opacity();
$('.preview_vebinar1_8').css({'opacity':'50%'});
}
/* Вебинар 1-9 */
function vebinar1_9() {
  $('.video').css({'background-size':'cover','background-image':'url(images/covers/b_1_9.jpg?4'});
  $('.fancybox-media').attr( 'href','https://youtu.be/YP4xOocd1Ho');

  $('.heading_video').html(vebinar1_name[8]);
  $('.txt_author').html('Афанасьев Александр, основатель консалт-бюро &laquo;Нескучные финансы&raquo;');
  $('.txt_video_desc').html('На&nbsp;вебинаре финансовый эксперт Александр Афанасьев расскажет из-за каких ошибок, предприниматели вынуждены закрывать компании в&nbsp;первые 2—3 года существования и&nbsp;на&nbsp;примере собственной истории объяснит, как не&nbsp;допустить этих ошибок.');
  
preview_opacity();
$('.preview_vebinar1_9').css({'opacity':'50%'});
}
/* Вебинар 1-10 */
function vebinar1_10() {
  $('.video').css({'background-size':'cover','background-image':'url(images/covers/b_1_10.jpg?4'});
  $('.fancybox-media').attr( 'href','https://youtu.be/8w3dftF2vLc');

  $('.heading_video').html(vebinar1_name[9]);
  $('.txt_author').html('Гороховская Арина, специалист в&nbsp;области повышения ответственности команд');
  $('.txt_video_desc').html('Для тех, кто хочет понять, чувствуют&nbsp;ли ответственность за&nbsp;свою работу сотрудники, и&nbsp;тех, кто уже понял, что нет&nbsp;&mdash; мы&nbsp;подготовили вебинар, который проведет эксперт по&nbsp;повышению ответственности сотрудников&nbsp;&mdash; Арина Гороховская.');
  
preview_opacity();
$('.preview_vebinar1_10').css({'opacity':'50%'});
}
/* Вебинар 1-11 */
function vebinar1_11() {
  $('.video').css({'background-size':'cover','background-image':'url(images/covers/b_1_11.jpg?4'});
  $('.fancybox-media').attr( 'href','https://youtu.be/Ox4K66cTrYs');

  $('.heading_video').html(vebinar1_name[10]);
  $('.txt_author').html('Митрофанова Валентина, эксперт по&nbsp;трудовому праву и&nbsp;профессиональным стандартам');
  $('.txt_video_desc').html('На&nbsp;вебинаре вы&nbsp;узнаете все о&nbsp;последствиях для бизнеса в&nbsp;связи с&nbsp;коронавирусом');
  
preview_opacity();
$('.preview_vebinar1_11').css({'opacity':'50%'});
}
/* Вебинар 1-12 */
function vebinar1_12() {
  $('.video').css({'background-size':'cover','background-image':'url(images/covers/b_6_1_2020.jpg?4'});
  $('.fancybox-media').attr( 'href','https://youtu.be/6cB1P0DxgHY');

  $('.heading_video').html(vebinar1_name[11]);
  $('.txt_author').html('Рассохин Виктор');
  $('.txt_video_desc').html('В условиях экономического кризиса, наступившего в&nbsp;связи с&nbsp;пандемией коронавируса, российским предприятиям необходимо оперативно адаптироваться под текущие условия. Некоторые компании будут вынуждены закрыться, но&nbsp;многие продолжат свою работу, несмотря на&nbsp;возникшие трудности. Ключевые рекомендации для бизнеса на&nbsp;вебинаре Рассохина Виктора.');
  
preview_opacity();
$('.preview_vebinar1_12').css({'opacity':'50%'});
}
/* Вебинар 1-13 */
function vebinar1_13() {
  $('.video').css({'background-size':'cover','background-image':'url(images/covers/b_6_4_2020.jpg?4'});
  $('.fancybox-media').attr( 'href','https://youtu.be/xBZ5EfV_25E');

  $('.heading_video').html(vebinar1_name[12]);
  $('.txt_author').html('Рассохин Виктор');
  $('.txt_video_desc').html('Возвращение сотрудников в&nbsp;офис с&nbsp;юридической точки зрения. Требуется ли специальное оформление? На&nbsp;вебинаре вы узнаете: Возвращение сотрудников в&nbsp;офис с&nbsp;юридической точки зрения. Требуется ли специальное оформление. Особенности юридического оформления документации для тех, кто остался работать удаленно. Кто не&nbsp;дошел до&nbsp;финиша. Увольнение с&nbsp;наименьшими рисками. Если конфликта не&nbsp;удалось избежать. Проверка Инспекции по&nbsp;труду, судебный спор. Как подготовиться.');
  
preview_opacity();
$('.preview_vebinar1_13').css({'opacity':'50%'});
}
/* Вебинар 1-14 */
function vebinar1_14() {
  $('.video').css({'background-size':'cover','background-image':'url(images/covers/b_6_6_2020.jpg?4'});
  $('.fancybox-media').attr( 'href','https://youtu.be/B16tRB7IwzI');

  $('.heading_video').html(vebinar1_name[13]);
  $('.txt_author').html('');
  $('.txt_video_desc').html('Этот вебинар для руководителей, которым важен собственный рост и&nbsp;рост компании. Только актуальные и&nbsp;проверенные методы взвешенного управления. Вся информация подкреплена собственными примерами проб, ошибок и&nbsp;успешных результатов.');
  
preview_opacity();
$('.preview_vebinar1_14').css({'opacity':'50%'});
}




/*вызов видео по превьюшкам*/

    $('.preview_vebinar1_1').on('click', function (evt) {
    vebinar1_1();
    document.location.href = '#vebirars_view';
  });
    $('.preview_vebinar1_2').on('click', function (evt) {
    vebinar1_2();
    document.location.href = '#vebirars_view';
  });
    $('.preview_vebinar1_3').on('click', function (evt) {
    vebinar1_3();
    document.location.href = '#vebirars_view';
  });
    $('.preview_vebinar1_4').on('click', function (evt) {
    vebinar1_4();
    document.location.href = '#vebirars_view';
  });
    $('.preview_vebinar1_5').on('click', function (evt) {
    vebinar1_5();
    document.location.href = '#vebirars_view';
  });
    $('.preview_vebinar1_6').on('click', function (evt) {
    vebinar1_6();
    document.location.href = '#vebirars_view';
  });
    $('.preview_vebinar1_7').on('click', function (evt) {
    vebinar1_7();
    document.location.href = '#vebirars_view';
  });
    $('.preview_vebinar1_8').on('click', function (evt) {
    vebinar1_8();
    document.location.href = '#vebirars_view';
  });
    $('.preview_vebinar1_9').on('click', function (evt) {
    vebinar1_9();
    document.location.href = '#vebirars_view';
  });
    $('.preview_vebinar1_10').on('click', function (evt) {
    vebinar1_10();
    document.location.href = '#vebirars_view';
  });
    $('.preview_vebinar1_11').on('click', function (evt) {
    vebinar1_11();
    document.location.href = '#vebirars_view';
  });
    $('.preview_vebinar1_12').on('click', function (evt) {
    vebinar1_12();
    document.location.href = '#vebirars_view';
  });
    $('.preview_vebinar1_13').on('click', function (evt) {
    vebinar1_13();
    document.location.href = '#vebirars_view';
  });
    $('.preview_vebinar1_14').on('click', function (evt) {
    vebinar1_14();
    document.location.href = '#vebirars_view';
  });



/*обнуление прозрачности у превьюшек*/
function preview_opacity() {


for(i = 1; i <= vebinar1_name.length; i++) {
    $('.preview_vebinar1_'+i).css({'opacity':'80%'});
    $('.preview_vebinar1_'+i).on('click', function (evt) {
    $(this).css({'opacity':'50%'});
  });
}

}















/* Вебинары продажи */
var vebinar2_name = [
'Как подружиться с&nbsp;клиентом и&nbsp;обеспечить повторные продажи',
'Продвижение бренда и&nbsp;лидогенерация: почему лучше вместе, чем врозь',
'7 ключевых функций руководителя отдела продаж',
'Как продавать больше в&nbsp;«мертвый» сезон',
'Как внедрять новые методы продаж без сопротивления сотрудников',
'Парадоксы в&nbsp;бизнесе&nbsp;&mdash; инструменты, которые вы&nbsp;зря недооцениваете',
'Посткризисный онлайн-маркетинг'
];

/* Выводим все превьюшки */
var vebinar2_count = vebinar2_name.length;

    var preview_vebinar2 = $();
    for(x = 1; x <= vebinar2_count; x++) {
    preview_vebinar2 = preview_vebinar2.add("<div></div>", {"class" :"video_preview preview_vebinar2_"+x+" liteTooltip"});
    }
    $('.block_video_preview2').prepend(preview_vebinar2);


/* Выводим все превьюшки */

    for(x = 1; x <= vebinar2_count; x++) {
    $('.preview_vebinar2_'+x).attr('data-tooltip-mouseover', vebinar2_name[x-1]);
    }


/* Показываем кнопку Show all */
if(vebinar2_count>9){
  vebinar2_count = vebinar2_count + 1;
    $('.video_show_all2').css({'display':'flex'});
    for(x = 11; x <= vebinar2_count; x++) {
    $('.preview_vebinar2_'+x).css({'display':'none'});
    }
  }

    $('.video_show_all2').on('click', function (evt) {
    vebinar2_count = vebinar2_count + 1;
    for(x = 11; x <= vebinar2_count; x++) {
    $('.preview_vebinar2_'+x).css({'display':'block'});
    }
    $(this).css({'display':'none'});
  });

/* Вебинар 2-1 */
function vebinar2_1() {

  $('.video').css({'background-size':'cover','background-image':'url(images/covers/b_2_1.jpg?1'});
  $('.fancybox-media').attr( 'href','https://youtu.be/e_oZDFQjL9I');
  $('.heading_video').html(vebinar2_name[0]);
  $('.txt_author').html('Пометун Андрей, маркетолог, руководитель консалтингового агентства Task &amp;&nbsp;Solution Marketing');
  $('.txt_video_desc').html('Нет никакой заслуги в&nbsp;том, чтобы что-то продать клиенту. Заслуга в&nbsp;том, чтобы продать ему ещё и&nbsp;ещё раз. Если клиент регулярно возвращается к&nbsp;тебе, значит ты&nbsp;всё делаешь правильно.</p><p>Но&nbsp;сложно понять, почему ты&nbsp;оказываешь услугу на&nbsp;отлично, а&nbsp;клиент не&nbsp;вернулся. Чего не&nbsp;хватает профессионалам своего дела? Почему к&nbsp;одним экспертам стоят очереди, а&nbsp;другие охотятся за&nbsp;каждым новым клиентом? Просто не&nbsp;все знают психологию повторных продаж.');
    preview_opacity2();
    $('.preview_vebinar2_1').css({'opacity':'50%'});

}



/* Вебинар 2-2 */
function vebinar2_2() {
  $('.video').css({'background-size':'cover','background-image':'url(images/covers/b_2_2.jpg?1'});
  $('.fancybox-media').attr( 'href','https://youtu.be/JIg_Lbiz70Y');

  $('.heading_video').html(vebinar2_name[1]);
  $('.txt_author').html('Орлов Дмитрий, эксперт в&nbsp;области digital-маркетинга');
  $('.txt_video_desc').html('На&nbsp;примере кейсов мы&nbsp;покажем, как такой подход позволяет не&nbsp;только повысить узнаваемость бренда, но&nbsp;и&nbsp;в&nbsp;несколько раз увеличить количество заявок с&nbsp;сайта.');
  
preview_opacity2();
$('.preview_vebinar2_2').css({'opacity':'50%'});
}

/* Вебинар 2-3 */
function vebinar2_3() {
  $('.video').css({'background-size':'cover','background-image':'url(images/covers/b_2_3.jpg?1'});
  $('.fancybox-media').attr( 'href','https://youtu.be/yGAviqKZOj8');

  $('.heading_video').html(vebinar2_name[2]);
  $('.txt_author').html('Горячев Валерий, директор по&nbsp;развитию &laquo;Evolution Managment&raquo;');
  $('.txt_video_desc').html('В&nbsp;рамках вебинара мы&nbsp;разберемся с&nbsp;основными проблемами компаний и&nbsp;выведем ключевые функции руководителя отдела продаж, которые изменят ситуацию в&nbsp;лучшую сторону.</p><p>Каждый участник получит пример регламента по&nbsp;ключевым функциям руководителя отдела продаж, который можно сразу взять в&nbsp;работу.');
  
preview_opacity2();
$('.preview_vebinar2_3').css({'opacity':'50%'});
}

/* Вебинар 2-4 */
function vebinar2_4() {
  $('.video').css({'background-size':'cover','background-image':'url(images/covers/b_2_4.jpg?1'});
  $('.fancybox-media').attr( 'href','https://youtu.be/MEPim-0ZuP4');

  $('.heading_video').html(vebinar2_name[3]);
  $('.txt_author').html('Хмелев Владимир, бизнес-тренер-практик, эксперт в&nbsp;области переговоров и&nbsp;продаж');
  $('.txt_video_desc').html('Кто получает выручку с&nbsp;ваших покупателей, не&nbsp;являясь вашим конкурентом? Куда утекают ваши деньги?');
  
preview_opacity2();
$('.preview_vebinar2_4').css({'opacity':'50%'});
}
/* Вебинар 2-5 */
function vebinar2_5() {
  $('.video').css({'background-size':'cover','background-image':'url(images/covers/b_2_5.jpg?1'});
  $('.fancybox-media').attr( 'href','https://youtu.be/qblFENdidpE');

  $('.heading_video').html(vebinar2_name[4]);
  $('.txt_author').html('Урванцев Алексей, эксперт в&nbsp;области организации умных продаж и&nbsp;ораторского искусства');
  $('.txt_video_desc').html('Внедряя новые методы продаж (CRM, воронку, сценарии и&nbsp;скрипты, зарплату), руководитель часто сталкивается с&nbsp;саботажем сотрудников. Тому, как использовать эту энергию в&nbsp;интересах компании и&nbsp;вовлечь сотрудников в&nbsp;процесс изменений, посвящён мастер-класс.');
  
preview_opacity2();
$('.preview_vebinar2_5').css({'opacity':'50%'});
}
/* Вебинар 2-6 */
function vebinar2_6() {
  $('.video').css({'background-size':'cover','background-image':'url(images/covers/b_2_6.jpg?1'});
  $('.fancybox-media').attr( 'href','https://youtu.be/HmfXVyzEEVo');

  $('.heading_video').html(vebinar2_name[5]);
  $('.txt_author').html('Хмелев Владимир, бизнес-тренер-практик, эксперт в&nbsp;области переговоров и&nbsp;продаж');
  $('.txt_video_desc').html('Как резко и&nbsp;малобюджетно увеличить клиентскую базу и&nbsp;одновременно&nbsp;&mdash; степень удовлетворенности ваших клиентов. И&nbsp;вообще без участия дорогостоящих маркетологов.');
  
preview_opacity2();
$('.preview_vebinar2_6').css({'opacity':'50%'});
}
/* Вебинар 2-7 */
function vebinar2_7() {
  $('.video').css({'background-size':'cover','background-image':'url(images/covers/b_6_5_2020.jpg?1'});
  $('.fancybox-media').attr( 'href','https://youtu.be/uFIhRkIVfRA');

  $('.heading_video').html(vebinar2_name[6]);
  $('.txt_author').html('');
  $('.txt_video_desc').html('Посткризисный онлайн-маркетинг: новое и&nbsp;хорошо забытое старое, которое мы вспомнили благодаря пандемии. Кому будет полезно?<br>- Собственникам малого и&nbsp;среднего бизнеса, топ-менеджерам, линейным руководителям и&nbsp;ИП.<br>- Всем, кто связан с&nbsp;продажами, маркетингом и&nbsp;пиаром.<br>- Всем, кто только выводит свой бизнес в&nbsp;онлайн.<br>- Всем, кто уже окунулся в&nbsp;digital, но&nbsp;не&nbsp;доволен получаемыми результатами.<br>- И,&nbsp;конечно, всем, кто видит,что&nbsp;проигрывает конкурентам именно в&nbsp;цифровом поле.');
  
preview_opacity2();
$('.preview_vebinar2_7').css({'opacity':'50%'});
}



/*вызов видео по превьюшкам*/

    $('.preview_vebinar2_1').on('click', function (evt) {
    vebinar2_1();
    document.location.href = '#vebirars2_view';
  });
    $('.preview_vebinar2_2').on('click', function (evt) {
    vebinar2_2();
    document.location.href = '#vebirars2_view';
  });
    $('.preview_vebinar2_3').on('click', function (evt) {
    vebinar2_3();
    document.location.href = '#vebirars2_view';
  });
    $('.preview_vebinar2_4').on('click', function (evt) {
    vebinar2_4();
    document.location.href = '#vebirars2_view';
  });
    $('.preview_vebinar2_5').on('click', function (evt) {
    vebinar2_5();
    document.location.href = '#vebirars2_view';
  });
    $('.preview_vebinar2_6').on('click', function (evt) {
    vebinar2_6();
    document.location.href = '#vebirars2_view';
  });
    $('.preview_vebinar2_7').on('click', function (evt) {
    vebinar2_7();
    document.location.href = '#vebirars2_view';
  });



/*обнуление прозрачности у превьюшек*/
function preview_opacity2() {


for(i = 1; i <= vebinar2_name.length; i++) {
    $('.preview_vebinar2_'+i).css({'opacity':'80%'});
    $('.preview_vebinar2_'+i).on('click', function (evt) {
    $(this).css({'opacity':'50%'});
  });
}
}















/* Вебинары финансы */
var vebinar3_name = [
'Альтернативные способы кредитования: где искать деньги для бизнеса ',
'Обналичивание денег: законные способы для руководителя',
'Откровения бухгалтера: почему предприниматели совершают одни и&nbsp;те&nbsp;же ошибки',
'Как найти ключевой показатель бизнеса и&nbsp;повысить прибыль в&nbsp;5&nbsp;раз',
'Как взять под контроль и&nbsp;управлять деньгами во&nbsp;время кризиса'
];

/* Выводим все превьюшки */
var vebinar3_count = vebinar3_name.length;

    var preview_vebinar3 = $();
    for(x = 1; x <= vebinar3_count; x++) {
    preview_vebinar3 = preview_vebinar3.add("<div></div>", {"class" :"video_preview preview_vebinar3_"+x+" liteTooltip"});
    }
    $('.block_video_preview3').prepend(preview_vebinar3);


/* Выводим все превьюшки */

    for(x = 1; x <= vebinar3_count; x++) {
    $('.preview_vebinar3_'+x).attr('data-tooltip-mouseover', vebinar3_name[x-1]);
    }


/* Показываем кнопку Show all */
if(vebinar3_count>9){
  vebinar3_count = vebinar3_count + 1;
    $('.video_show_all3').css({'display':'flex'});
    for(x = 11; x <= vebinar3_count; x++) {
    $('.preview_vebinar3_'+x).css({'display':'none'});
    }
  }

    $('.video_show_all3').on('click', function (evt) {
    vebinar3_count = vebinar3_count + 1;
    for(x = 11; x <= vebinar3_count; x++) {
    $('.preview_vebinar3_'+x).css({'display':'block'});
    }
    $(this).css({'display':'none'});
  });

/* Вебинар 3-1 */
function vebinar3_1() {

  $('.video').css({'background-size':'cover','background-image':'url(images/covers/b_3_1.jpg?1'});
  $('.fancybox-media').attr( 'href','https://youtu.be/LtiWLWdUetE');
  $('.heading_video').html(vebinar3_name[0]);
  $('.txt_author').html('Сурен Айрапетян, кредитор корпоративных и&nbsp;частных клиентов');
  $('.txt_video_desc').html('Вопрос о&nbsp;привлечении инвестиций и&nbsp;дополнительных средств на&nbsp;создание и&nbsp;развитие бизнеса актуален как никогда. Учитывая изменение политики в&nbsp;отношении малого и&nbsp;среднего бизнеса мы&nbsp;проведем полезный вебинар об&nbsp;альтернативных способах кредитования. В&nbsp;качестве спикера мы&nbsp;пригласили управляющего партнера Rebridge Capital Сурена Айрапетяна. После участия в&nbsp;вебинаре вы&nbsp;узнаете, почему банки отказывают в&nbsp;кредитах, научитесь выстраивать стратегию кредитования и&nbsp;рассчитывать свои кредитные возможности, а&nbsp;также разберетесь в&nbsp;преимуществах и&nbsp;недостатках альтернативных источников кредитования.');
    preview_opacity3();
    $('.preview_vebinar3_1').css({'opacity':'50%'});

}



/* Вебинар 3-2 */
function vebinar3_2() {
  $('.video').css({'background-size':'cover','background-image':'url(images/covers/b_3_2.jpg?1'});
  $('.fancybox-media').attr( 'href','https://youtu.be/qxWFQjH3HcM');

  $('.heading_video').html(vebinar3_name[1]);
  $('.txt_author').html('Туров Владимир, руководитель и&nbsp;владелец юридической компании. Практикующий и&nbsp;ведущий специалист по&nbsp;налоговому планированию и&nbsp;оптимизации финансовых потоков');
  $('.txt_video_desc').html('Законные способы обналичивания денежных средств, которые позволят вывести деньги из&nbsp;компании без налоговых переплат');
  
preview_opacity3();
$('.preview_vebinar3_2').css({'opacity':'50%'});
}

/* Вебинар 3-3 */
function vebinar3_3() {
  $('.video').css({'background-size':'cover','background-image':'url(images/covers/b_3_3.jpg?1'});
  $('.fancybox-media').attr( 'href','https://youtu.be/bFxmcuLUU-4');

  $('.heading_video').html(vebinar3_name[2]);
  $('.txt_author').html('Бердашкевич Вера, директор департамента бухгалтерского аутсорсинга &laquo;Главбух Ассистент&raquo;, член Палаты налоговых консультантов, DipIFR');
 $('.txt_video_desc').html('Для большинства руководителей бухгалтерия&nbsp;&mdash; тайное сообщество, которое живет по&nbsp;неизвестным правилам. Вникать и&nbsp;анализировать процессы времени нет, до&nbsp;тех пор пока не&nbsp;появятся люди в&nbsp;масках или сотрудники госорганов. Некоторым из&nbsp;Ваших коллег не&nbsp;повезло&nbsp;&mdash; они уже потеряли деньги и&nbsp;бизнес из-за бухгалтерских ошибок. Чтобы не&nbsp;оказаться на&nbsp;их&nbsp;месте, выделите всего один час для участия в&nbsp;нашем вебинаре. Оградите себя от&nbsp;фатальных ошибок и&nbsp;экономьте на&nbsp;учете и&nbsp;налогах уже сейчас.');
  
preview_opacity3();
$('.preview_vebinar3_3').css({'opacity':'50%'});
}

/* Вебинар 3-4 */
function vebinar3_4() {
  $('.video').css({'background-size':'cover','background-image':'url(images/covers/b_3_4.jpg?1'});
  $('.fancybox-media').attr( 'href','https://youtu.be/VpNF-9CAcSc');

  $('.heading_video').html(vebinar3_name[3]);
  $('.txt_author').html('Афанасьев Александр, специалист в&nbsp;вопросах: Прибыль компании/Личные деньги/Управление прибылью/Эффективность бизнеса');
  $('.txt_video_desc').html('Мастер-класс для предпринимателей, которые решили начать управлять бизнесом на&nbsp;основе цифр, а&nbsp;не&nbsp;интуиции.');
  
preview_opacity3();
$('.preview_vebinar3_4').css({'opacity':'50%'});
}

/* Вебинар 3-5 */
function vebinar3_5() {
  $('.video').css({'background-size':'cover','background-image':'url(images/covers/b_6_2_2020.jpg?1'});
  $('.fancybox-media').attr( 'href','https://youtu.be/8Z9f5PN5low');

  $('.heading_video').html(vebinar3_name[4]);
  $('.txt_author').html('Афанасьев Александр, специалист в&nbsp;вопросах: Прибыль компании/Личные деньги/Управление прибылью/Эффективность бизнеса');
  $('.txt_video_desc').html('Ситуация не&nbsp;из легких. Нефть, доллар, пандемия. Находить деньги на&nbsp;аренды, зарплаты, кредиты всё сложнее и&nbsp;сложнее. Но так ли всё ужасно? Нет. Есть способы сохранить деньги даже в&nbsp;таких условиях. Этим с&nbsp;вами поделится лектор вебинара Афанасьев Александр.');
  
preview_opacity3();
$('.preview_vebinar3_5').css({'opacity':'50%'});
}


/*вызов видео по превьюшкам*/

    $('.preview_vebinar3_1').on('click', function (evt) {
    vebinar3_1();
    document.location.href = '#vebirars3_view';
  });
    $('.preview_vebinar3_2').on('click', function (evt) {
    vebinar3_2();
    document.location.href = '#vebirars3_view';
  });
    $('.preview_vebinar3_3').on('click', function (evt) {
    vebinar3_3();
    document.location.href = '#vebirars3_view';
  });
    $('.preview_vebinar3_4').on('click', function (evt) {
    vebinar3_4();
    document.location.href = '#vebirars3_view';
  });
    $('.preview_vebinar3_5').on('click', function (evt) {
    vebinar3_5();
    document.location.href = '#vebirars3_view';
  });



/*обнуление прозрачности у превьюшек*/
function preview_opacity3() {


for(i = 1; i <= vebinar3_name.length; i++) {
    $('.preview_vebinar3_'+i).css({'opacity':'80%'});
    $('.preview_vebinar3_'+i).on('click', function (evt) {
    $(this).css({'opacity':'50%'});
  });
}
}















/* Вебинары личная эффективность */
var vebinar4_name = [
'Если завтра выступать: секреты подготовки к&nbsp;успешному выступлению',
'Эффективные межличностные коммуникации',
'Как найти своих людей: кейсы, практика, примеры',
'Человек как на&nbsp;ладони: как прочитать собеседника за&nbsp;5&nbsp;минут',
'Стресс на&nbsp;работе: как предотвратить и&nbsp;обезвредить',
'5&nbsp;антикризисных стратегий развития карьеры топ-менеджера в&nbsp;кризис'
];

/* Выводим все превьюшки */
var vebinar4_count = vebinar4_name.length;

    var preview_vebinar4 = $();
    for(x = 1; x <= vebinar4_count; x++) {
    preview_vebinar4 = preview_vebinar4.add("<div></div>", {"class" :"video_preview preview_vebinar4_"+x+" liteTooltip"});
    }
    $('.block_video_preview4').prepend(preview_vebinar4);


/* Выводим все подсказки */

    for(x = 1; x <= vebinar4_count; x++) {
    $('.preview_vebinar4_'+x).attr('data-tooltip-mouseover', vebinar4_name[x-1]);
    }


/* Показываем кнопку Show all */
if(vebinar4_count>9){
  vebinar4_count = vebinar4_count + 1;
    $('.video_show_all4').css({'display':'flex'});
    for(x = 11; x <= vebinar4_count; x++) {
    $('.preview_vebinar4_'+x).css({'display':'none'});
    }
  }

    $('.video_show_all4').on('click', function (evt) {
    vebinar4_count = vebinar4_count + 1;
    for(x = 11; x <= vebinar4_count; x++) {
    $('.preview_vebinar4_'+x).css({'display':'block'});
    }
    $(this).css({'display':'none'});
  });

/* Вебинар 4-1 */
function vebinar4_1() {

  $('.video').css({'background-size':'cover','background-image':'url(images/covers/b_4_1.jpg?1'});
  $('.fancybox-media').attr( 'href','https://youtu.be/coCUdzKXQuQ');
  $('.heading_video').html(vebinar4_name[0]);
  $('.txt_author').html('Чумак Димитрий, тренер по&nbsp;ораторскому мастерству, диктор, теле- и&nbsp;радиоведущий, преподаватель кафедры журналистики ТГУ, преподаватель Школы юного журналиста Московского дома журналистов');
  $('.txt_video_desc').html('Вы&nbsp;человек, в&nbsp;жизни которого коммуникации занимают важное место. Вам часто приходится разговаривать, выступать, вдохновлять, убеждать, вести за&nbsp;собой. Возможно, у&nbsp;вас есть страх переговоров или выступлений. Но&nbsp;так&nbsp;же есть и&nbsp;желание его победить.</p><p>На&nbsp;вебинаре&nbsp;Вы сможете освоить основы ораторского искусства, которые помогут Вам справиться со&nbsp;страхом публичного выстпуления. Вы&nbsp;научитесь убеждать, вдохновлять, влиять и&nbsp;достигать поставленных целей.');
    preview_opacity4();
    $('.preview_vebinar4_1').css({'opacity':'50%'});

}



/* Вебинар 4-2 */
function vebinar4_2() {
  $('.video').css({'background-size':'cover','background-image':'url(images/covers/b_4_2.jpg?1'});
  $('.fancybox-media').attr( 'href','https://youtu.be/hIwYfp1QSp8');

  $('.heading_video').html(vebinar4_name[1]);
  $('.txt_author').html('Степанов Илья, Эксперт в&nbsp;области чтения эмоций, влияния, проведения переговоров, сертифицированный профайлер, полиграфолог');
  $('.txt_video_desc').html('Человек&nbsp;&mdash; социальное существо. Его жизнь и&nbsp;деятельность тесно связаны с&nbsp;общением. &laquo;Коммуникация&raquo;&nbsp;&mdash; это не&nbsp;только споры за&nbsp;столом в&nbsp;конференц-зале офиса, это один из&nbsp;видов нашей постоянной деятельности. Большая часть социальной жизни&nbsp;&mdash; это переговоры. Семья, друзья, случайные бытовые коммуникации&nbsp;и, конечно, бизнес.</p><p>Каждый из&nbsp;нас хотя&nbsp;бы один раз в&nbsp;жизни сталкивался со&nbsp;&laquo;стеной&raquo; непонимания во&nbsp;время коммуникации.</p><p>А&nbsp;задумывались&nbsp;ли вы&nbsp;о&nbsp;том, почему именно возникает эта &laquo;стена&raquo;?</p><p>О&nbsp;том, как как найти ключик к&nbsp;собеседнику, умея распознавать его нынешнее состояние исходя из&nbsp;уровней спиральной динамики, пойдет речь на&nbsp;вебинаре &laquo;Эффективные межличностные коммуникации: как выстраивать общение с&nbsp;окружающими на&nbsp;разных уровнях спиральной динамики?&raquo;.');
  
preview_opacity4();
$('.preview_vebinar4_2').css({'opacity':'50%'});
}

/* Вебинар 4-3 */
function vebinar4_3() {
  $('.video').css({'background-size':'cover','background-image':'url(images/covers/b_4_3.jpg?1'});
  $('.fancybox-media').attr( 'href','https://youtu.be/IT3QMO-8H4M');

  $('.heading_video').html(vebinar4_name[2]);
  $('.txt_author').html('Иванова Светлана, преподавательской и&nbsp;методической работой. занимается с&nbsp;1988&nbsp;года, HR&nbsp;и&nbsp;управленческой работой&nbsp;&mdash; с&nbsp;1995&nbsp;года. Автор 19&nbsp;книг по&nbsp;оценке, мотивации и&nbsp;управлению персоналом и&nbsp;продажам');
  $('.txt_video_desc').html('На&nbsp;собеседованиях кандидаты стараются показать себя с&nbsp;наилучшей стороны и&nbsp;зачастую идут на&nbsp;обман чтобы получить вакантную должность. Распознать компетентного специалиста, задавая вопросы в&nbsp;стиле &laquo;Кем вы&nbsp;видите себя через 5&nbsp;лет?&raquo;&nbsp;&mdash; невозможно. За&nbsp;час в&nbsp;эфире Светлана Иванова поделится с&nbsp;вами методиками, которые помогут вам научиться выводить кандидатов на&nbsp;чистую воду, объективно оценивать их&nbsp;сильные и&nbsp;слабые стороны и&nbsp;определять &laquo;подходящих&raquo; и&nbsp;&laquo;неподходящих&raquo; за&nbsp;15&nbsp;минут общения с&nbsp;ними.');
  
preview_opacity4();
$('.preview_vebinar4_3').css({'opacity':'50%'});
}

/* Вебинар 4-4 */
function vebinar4_4() {
  $('.video').css({'background-size':'cover','background-image':'url(images/covers/b_4_4.jpg?1'});
  $('.fancybox-media').attr( 'href','https://youtu.be/b60Un7rOBY0');

  $('.heading_video').html(vebinar4_name[3]);
  $('.txt_author').html('Петрухнова Кристина, эксперт по&nbsp;эффективным коммуникациям и&nbsp;переговорам. Основатель и&nbsp;генеральный директор Центра информационной поддержки бизнеса &laquo;Аспект&raquo;');
  $('.txt_video_desc').html('Как за&nbsp;3-5 минут общения с&nbsp;человеком, понимать его индивидуальные особенности, на&nbsp;основании этого определять систему мотивации и&nbsp;наиболее эффективные способы взаимодействия и&nbsp;коммуникации.');
  
preview_opacity4();
$('.preview_vebinar4_4').css({'opacity':'50%'});
}

/* Вебинар 4-5 */
function vebinar4_5() {
  $('.video').css({'background-size':'cover','background-image':'url(images/covers/b_4_5.jpg?1'});
  $('.fancybox-media').attr( 'href','https://youtu.be/Zr5pCHrNwqs');

  $('.heading_video').html(vebinar4_name[4]);
  $('.txt_author').html('Ершова Елена Сергеевна, практикующий психолог-консультант');
  $('.txt_video_desc').html('Сегодня, стресс&nbsp;&mdash; это неотъемлемое состояние любого руководителя, особенно на&nbsp;работе.&nbsp;20&nbsp;июня в&nbsp;прямом эфире мы&nbsp;поговорим о&nbsp;том, нормально&nbsp;ли испытывать стресс, полезен он&nbsp;или вреден, и, главное, стресс на&nbsp;работе и&nbsp;его последствия для Вас.');
  
preview_opacity4();
$('.preview_vebinar4_5').css({'opacity':'50%'});
}

/* Вебинар 4-6 */
function vebinar4_6() {
  $('.video').css({'background-size':'cover','background-image':'url(images/covers/b_6_3_2020.jpg?1'});
  $('.fancybox-media').attr( 'href','https://youtu.be/HOGq5csJVBQ');

  $('.heading_video').html(vebinar4_name[5]);
  $('.txt_author').html('');
  $('.txt_video_desc').html('Вебинар для руководителей, которые понимают, что кризис – прекрасная возможность для развития карьеры, и&nbsp;хотят не&nbsp;только сохранить работу, но и&nbsp;совершить профессиональный прорыв, пока коллеги пребывают в&nbsp;панике. На вебинаре вы составите персональный карьерный план на год вперед и&nbsp;получите пять экспертных рекомендаций, которые помогут повысить вашу ценность, укрепить авторитет и&nbsp;найти возможности для развития карьеры.');
  
preview_opacity4();
$('.preview_vebinar4_6').css({'opacity':'50%'});
}




/*вызов видео по превьюшкам*/

    $('.preview_vebinar4_1').on('click', function (evt) {
    vebinar4_1();
    document.location.href = '#vebirars4_view';
  });
    $('.preview_vebinar4_2').on('click', function (evt) {
    vebinar4_2();
    document.location.href = '#vebirars4_view';
  });
    $('.preview_vebinar4_3').on('click', function (evt) {
    vebinar4_3();
    document.location.href = '#vebirars4_view';
  });
    $('.preview_vebinar4_4').on('click', function (evt) {
    vebinar4_4();
    document.location.href = '#vebirars4_view';
  });
    $('.preview_vebinar4_5').on('click', function (evt) {
    vebinar4_5();
    document.location.href = '#vebirars4_view';
  });
    $('.preview_vebinar4_6').on('click', function (evt) {
    vebinar4_6();
    document.location.href = '#vebirars4_view';
  });




/*обнуление прозрачности у превьюшек*/
function preview_opacity4() {


for(i = 1; i <= vebinar4_name.length; i++) {
    $('.preview_vebinar4_'+i).css({'opacity':'80%'});
    $('.preview_vebinar4_'+i).on('click', function (evt) {
    $(this).css({'opacity':'50%'});
  });
}
}






































































/* ДГД */
var DGD_year = [
'2020',
'2019',
'2018',
'2017',
];

var current_DGD_year;



/* ----------------------- ДГД 2020 ----------------------------------*/


var vebinar5_name_2020 = [
'Заглянуть в будущее: какие тренды будут определять развитие бизнеса в ближайшие 2-3 года',
'Повышаем устойчивость бизнеса через осознанность сотрудников',
'Выход на европейские рынки: особенности, подводные камни',
'Готовимся к худшему, надеемся на лучшее: сценарии развития коронакризиса в 2021 году',
'Как прогнозировать развитие компании в условиях коронакризиса и неожиданных действий властей',
'В поисках баланса: как заставить бизнес работать без пристального контроля',
'Как и зачем частные инвесторы создают комфортные условия работы для людей',
'Вычисляем сотрудников без которых бизнес мог бы обойтись',
'Сколько стоит эффективность персонала',
'Формула успеха бизнеса: как привить мышление собственника всем сотрудникам компании',
'Как продавать в условиях падения экономики: тренды в продажах на 2021 год',
'Опыт директора, который смог спасти продажи, выйдя в новую для себя нишу',
'Консервативные против реактивных: должна ли компания постоянно меняться',
'Voice technology - роботизация продаж, исследований и работы с лояльностью клиентов',
'Как «Победа» продает в условиях кризиса и падения спрос',
'90% СЕО профнепригодны: почему в России исчезли эффективные генеральные директора?',
'5 принципов мотивации команды от главного русского в eBay',
'Эволюция живой организации. Секреты успешной адаптации к кризису',
'Как за три месяца перевести команду из состояния "расслабленной ладошки" в "крепко сжатого кулака"',
'Что делает директор, чтобы сохранять четкость мыслей, когда все вокруг паникуют',
];

var vebinar5_count_2020 = vebinar5_name_2020.length;

/* Вебинар 5-1_2020 */
function vebinar5_1_2020() {


                    current_DGD_year = DGD_year[0];

                    $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_1_2020.jpg?1'});
                    $('.fancybox-media2').attr( 'href','https://www.youtube.com/watch?v=Xcu6qs-YZK0');
                    $('.heading_video2').html(vebinar5_name_2020[0]);
                    $('.txt_author2').html('Дмитрий Алексеев');
                      $('.txt_video_desc2').html('');
                   

                  $('.preview_vebinar5_1_2020').css({'opacity':'50%'});


}



/* Выводим все превьюшки */
function preview_vebinars5_2020() {
                      var preview_vebinar5_2020 = $();
                      for(x = 1; x <= vebinar5_name_2020.length; x++) {
                      preview_vebinar5_2020 = preview_vebinar5_2020.add("<div></div>", {"class" :"video_preview preview_vebinar5_"+x+'_2020'+" liteTooltip"});
                      }
                      $('.block_video_preview5').prepend(preview_vebinar5_2020);


                  $(document).ready(function(){
                    $('.block_video_preview5 .video_preview').click(function(){
                        var clicked = this;
                         $('.block_video_preview5 .video_preview').each(function(i){
                          if (this == clicked && i <= vebinar5_name_2020.length){
                            i = i+1;
                            var vebinar_show = eval('vebinar5_'+i+'_2020');
                            $(vebinar_show);
                            preview_opacity5_2020();
                            document.location.href = '#vebirars5_view';
                            var vebinar_opacity = '.preview_vebinar5_'+i+'_2020';
                            $('vebinar_opacity').css({'opacity':'50%'});

                          }

                        });
                       });
                  });



}

function show_all5_2020() {
                  /* Показываем кнопку Show all */
                  if(vebinar5_name_2020.length>9){
                    vebinar5_count_2020 = vebinar5_count_2020 + 1;
                      $('.video_show_all5').css({'display':'flex'});
                      for(x = 11; x <= vebinar5_count_2020; x++) {
                      $('.preview_vebinar5_'+x+'_2020').css({'display':'none'});
                      }
                    }

                      $('.video_show_all5').on('click', function (evt) {
                      vebinar5_count_2020 = vebinar5_count_2020 + 1;
                      for(x = 11; x <= vebinar5_count_2020; x++) {
                      $('.preview_vebinar5_'+x+'_2020').css({'display':'block'});
                      }
                      $(this).css({'display':'none'});
                    });
}

/* меняем контент по клику по превьюшкам + меняем прозрачность*/
function show_content5_2020() {
                  $(document).ready(function(){
                    $('.block_video_preview5 .video_preview').click(function(){
                        var clicked = this;
                         $('.block_video_preview5 .video_preview').each(function(i){
                          if (this == clicked && i <= vebinar5_name_2020.length){
                            i = i+1;
                            var vebinar_show = eval('vebinar5_'+i+'_2020');
                            $(vebinar_show);
                            preview_opacity5_2020();
                            document.location.href = '#vebirars5_view';
                            var vebinar_opacity = '.preview_vebinar5_'+i+'_2020';
                            $('vebinar_opacity').css({'opacity':'50%'});

                          }

                        });
                       });
                  });



                       var years_pages = $();
                       $('.container-dgd h1.header_std').text('День Генерального Директора 2020');
                       years_pages = years_pages.add('<div class=year_pagination>Год конференции:</div>').addClass('name');
                      for(x = 0; x < DGD_year.length; x++) {
                      if(DGD_year[x]==current_DGD_year){
                      years_pages = years_pages.add('<div class=year_pagination_active>'+DGD_year[x]+'</div>', {"class" :"year_pagination_active"});
                      } 
                      else{
                      years_pages = years_pages.add('<div class="year_pagination year_DGD_'+DGD_year[x]+'">'+DGD_year[x]+'</div>');
                      }
                    }
                  $('.pagination').append(years_pages);
				  
				  $('.year_DGD_'+DGD_year[1]).on('click', function (evt) {
                            document.location.href = '#vebirars5_view';

                            for(m = 1; m <= vebinar5_name_2020.length; m++){
                               $('.block_video_preview5 .preview_vebinar5_'+m+'_2020').remove();
                            }
                            for(i = 1; i <= vebinar5_name_2019.length; i++){
                               $('.block_video_preview5 .preview_vebinar5_'+i+'_2019').remove();
                            }
							for(d = 1; d <= vebinar5_name_2018.length; d++){
                               $('.block_video_preview5 .preview_vebinar5_'+d+'_2018').remove();
                            }
                            for(k = 1; k <= vebinar5_name_2017.length; k++){
                               $('.block_video_preview5 .preview_vebinar5_'+k+'_2017').remove();
                            }


                            $('.pagination').empty();
                            vebinar5_1_2019();
                            preview_vebinars5_2019();
                            show_all5_2019();
                            preview_opacity5_2019();
                            show_content5_2019();

                  });

                  $('.year_DGD_'+DGD_year[2]).on('click', function (evt) {
                            document.location.href = '#vebirars5_view';

                            for(m = 1; m <= vebinar5_name_2020.length; m++){
                               $('.block_video_preview5 .preview_vebinar5_'+m+'_2020').remove();
                            }
                            for(i = 1; i <= vebinar5_name_2019.length; i++){
                               $('.block_video_preview5 .preview_vebinar5_'+i+'_2019').remove();
                            }
							for(d = 1; d <= vebinar5_name_2018.length; d++){
                               $('.block_video_preview5 .preview_vebinar5_'+d+'_2018').remove();
                            }
                            for(k = 1; k <= vebinar5_name_2017.length; k++){
                               $('.block_video_preview5 .preview_vebinar5_'+k+'_2017').remove();
                            }


                            $('.pagination').empty();
                            vebinar5_1_2018();
                            preview_vebinars5_2018();
                            show_all5_2018();
                            preview_opacity5_2018();
                            show_content5_2018();

                  });
                  $('.year_DGD_'+DGD_year[3]).on('click', function (evt) {
                            document.location.href = '#vebirars5_view';

                            for(m = 1; m <= vebinar5_name_2020.length; m++){
                               $('.block_video_preview5 .preview_vebinar5_'+m+'_2020').remove();
                            }
                            for(i = 1; i <= vebinar5_name_2019.length; i++){
                               $('.block_video_preview5 .preview_vebinar5_'+i+'_2019').remove();
                            }
                            for(d = 1; d <= vebinar5_name_2018.length; d++){
                               $('.block_video_preview5 .preview_vebinar5_'+d+'_2018').remove();
                            }
							for(k = 1; k <= vebinar5_name_2017.length; k++){
                               $('.block_video_preview5 .preview_vebinar5_'+k+'_2017').remove();
                            }

                            $('.pagination').empty();
                            vebinar5_1_2017();
                            preview_vebinars5_2017();
                            show_all5_2017();
                            preview_opacity5_2017();
                            show_content5_2017();

                  });



                  /* Выводим подсказки */

              $('.liteTooltip').liteTooltip();

    for(x = 1; x <= vebinar5_name_2020.length; x++) {
    $('.preview_vebinar5_'+x+'_2020').attr('data-tooltip-mouseover', vebinar5_name_2020[x-1]);
    }
}






/* Вебинар 5-2_2020 */
function vebinar5_2_2020() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_2_2020.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://www.youtube.com/watch?v=Gk6WGvIBK4g ');

  $('.heading_video2').html(vebinar5_name_2020[1]);
  $('.txt_author2').html('Владимир Перельман');
    $('.txt_video_desc2').html('');

}

/* Вебинар 5-3_2020 */
function vebinar5_3_2020() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_3_2020.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://www.youtube.com/watch?v=Z7n8J9OVX7g');

  $('.heading_video2').html(vebinar5_name_2020[2]);
  $('.txt_author2').html('Екатерина Карпушенкова');
    $('.txt_video_desc2').html('');

}

/* Вебинар 5-4_2020 */
function vebinar5_4_2020() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_4_2020.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://www.youtube.com/watch?v=Z3a8fOzmgvs');

  $('.heading_video2').html(vebinar5_name_2020[3]);
  $('.txt_author2').html('Денис Ракша');
    $('.txt_video_desc2').html('');

}

/* Вебинар 5-5_2020 */
function vebinar5_5_2020() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_5_2020.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://www.youtube.com/watch?v=n-xx0OafIwk');

  $('.heading_video2').html(vebinar5_name_2020[4]);
  $('.txt_author2').html('Илья Ярошенко');
    $('.txt_video_desc2').html('');

}

/* Вебинар 5-6_2020 */
function vebinar5_6_2020() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_6_2020.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://www.youtube.com/watch?v=6Hi4ARxvCmc');

  $('.heading_video2').html(vebinar5_name_2020[5]);
  $('.txt_author2').html('Барно Турсунова');
    $('.txt_video_desc2').html('');

}

/* Вебинар 5-7_2020 */
function vebinar5_7_2020() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_7_2020.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://www.youtube.com/watch?v=D7SxpyvyBDw');

  $('.heading_video2').html(vebinar5_name_2020[6]);
  $('.txt_author2').html('Екатерина Евдокимова');
    $('.txt_video_desc2').html('');

}

/* Вебинар 5-8_2020 */
function vebinar5_8_2020() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_8_2020.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://www.youtube.com/watch?v=BdQirnHwJFw');

  $('.heading_video2').html(vebinar5_name_2020[7]);
  $('.txt_author2').html('Андрей Левин');
    $('.txt_video_desc2').html('');

}

/* Вебинар 5-9_2020 */
function vebinar5_9_2020() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_9_2020.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://www.youtube.com/watch?v=-yuq76ojzEw');

  $('.heading_video2').html(vebinar5_name_2020[8]);
  $('.txt_author2').html('Дмитрий Самойленко');
    $('.txt_video_desc2').html('');

}

/* Вебинар 5-10_2020 */
function vebinar5_10_2020() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_10_2020.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://www.youtube.com/watch?v=ncHGqCbvo8A');

  $('.heading_video2').html(vebinar5_name_2020[9]);
  $('.txt_author2').html('Алексей Мартыненко');
    $('.txt_video_desc2').html('');

}

/* Вебинар 5-11_2020 */
function vebinar5_11_2020() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_11_2020.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://www.youtube.com/watch?v=lfAjTmelYY4');

  $('.heading_video2').html(vebinar5_name_2020[10]);
  $('.txt_author2').html('Роман Ершов');
    $('.txt_video_desc2').html('');

}

/* Вебинар 5-12_2020 */
function vebinar5_12_2020() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_12_2020.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://www.youtube.com/watch?v=oxnP2qjckOs');

  $('.heading_video2').html(vebinar5_name_2020[11]);
  $('.txt_author2').html('Никита Орлов');
    $('.txt_video_desc2').html('');

}

/* Вебинар 5-13_2020 */
function vebinar5_13_2020() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_13_2020.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://www.youtube.com/watch?v=QlzlZtGZy_k');

  $('.heading_video2').html(vebinar5_name_2020[12]);
  $('.txt_author2').html('Михаил Николаев – младший');
    $('.txt_video_desc2').html('');

}

/* Вебинар 5-14_2020 */
function vebinar5_14_2020() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_14_2020.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://www.youtube.com/watch?v=mm4IlAKoRio');

  $('.heading_video2').html(vebinar5_name_2020[13]);
  $('.txt_author2').html('Рамиль Биккужин');
    $('.txt_video_desc2').html('');

}

/* Вебинар 5-15_2020 */
function vebinar5_15_2020() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_15_2020.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://www.youtube.com/watch?v=X5s7XnseDt8');

  $('.heading_video2').html(vebinar5_name_2020[14]);
  $('.txt_author2').html('Ольга Муравьева');
    $('.txt_video_desc2').html('');

}

/* Вебинар 5-16_2020 */
function vebinar5_15_2020() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_16_2020.jpg?1'});
  $('.fancybox-media2').attr( 'href', 'https://www.youtube.com/watch?v=cJtQr19Xl10');

  $('.heading_video2').html(vebinar5_name_2020[15]);
  $('.txt_author2').html('Сергей Иванов');
    $('.txt_video_desc2').html('');

}

/* Вебинар 5-17_2020 */
function vebinar5_17_2020() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_17_2020.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://www.youtube.com/watch?v=-Tti62xMlUI');

  $('.heading_video2').html(vebinar5_name_2020[16]);
  $('.txt_author2').html('Илья Кретов');
    $('.txt_video_desc2').html('');

}

/* Вебинар 5-18_2020 */
function vebinar5_18_2020() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_18_2020.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://www.youtube.com/watch?v=NOpevEfx4lY');

  $('.heading_video2').html(vebinar5_name_2020[17]);
  $('.txt_author2').html('Эдуард Тиктинский');
    $('.txt_video_desc2').html('');

}

/* Вебинар 5-19_2020 */
function vebinar5_19_2020() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_19_2020.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://www.youtube.com/watch?v=uAM63TWT6LA');

  $('.heading_video2').html(vebinar5_name_2020[18]);
  $('.txt_author2').html('Александр Глушков');
    $('.txt_video_desc2').html('');

}

/* Вебинар 5-20_2020 */
function vebinar5_20_2020() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_20_2020.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://www.youtube.com/watch?v=HHbUlLssVfU');

  $('.heading_video2').html(vebinar5_name_2020[19]);
  $('.txt_author2').html('Илья Криворот');
    $('.txt_video_desc2').html('');

}





/*обнуление прозрачности у превьюшек*/
function preview_opacity5_2020() {


for(i = 1; i <= vebinar5_name_2020.length; i++) {
    $('.preview_vebinar5_'+i+'_2020').css({'opacity':'80%'});
    $('.preview_vebinar5_'+i+'_2020').on('click', function (evt) {
    $(this).css({'opacity':'50%'});
  });
}
}



/*---------------------------- 2019 ---------------------------------*/


var vebinar5_name_2019 = [
'CEO как драйвер развития',
'Как побудить эффективно трудиться, если привычные схемы мотивации не&nbsp;работают',
'Как подготовить компанию к&nbsp;работе в&nbsp;режиме неопределенности',
'Ответственность топ-менеджеров компании: взыскание убытков и&nbsp;субсидиарная ответственность',
'Создание команды мечты: как работать на&nbsp;одной волне и&nbsp;завоевывать высококонкурентные рынки',
'Трансформация лидера: как совместить футболку основателя и&nbsp;пиджак генерального директора',
'Как все успевать: принципы work-life balance от&nbsp;директора с&nbsp;пятью детьми',
'Спорт в&nbsp;жизни директора',
'Выгодные ниши и&nbsp;направления для развития бизнеса в&nbsp;2020 года',
'Как меняется отношение государства к&nbsp;бизнесу: тренды',
'Как &laquo;КАРО&raquo; применяет современные тренды для привлечения новой аудитории',
'5&nbsp;главных правил, чтобы построить успешные продажи в&nbsp;онлайне',
'Как продавать нишевой или необычный продукт широкой аудитории',
'Как вдохновить сотрудников своим видением и побудить работать на цели компании ',
];

var vebinar5_count_2019 = vebinar5_name_2019.length;

/* Вебинар 5-1 */
function vebinar5_1_2019() {


                    current_DGD_year = DGD_year[1];

                    $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_1.jpg?1'});
                    $('.fancybox-media2').attr( 'href','https://youtu.be/b7nOLvrBzuM');
                    $('.heading_video2').html(vebinar5_name_2019[0]);
                    $('.txt_author2').html('Андрей Шаронов');
                      $('.txt_video_desc2').html('');
                   

                  $('.preview_vebinar5_1_2019').css({'opacity':'50%'});


}



/* Выводим все превьюшки */
function preview_vebinars5_2019() {
                      var preview_vebinar5_2019 = $();
                      for(x = 1; x <= vebinar5_name_2019.length; x++) {
                      preview_vebinar5_2019 = preview_vebinar5_2019.add("<div></div>", {"class" :"video_preview preview_vebinar5_"+x+'_2019'+" liteTooltip"});
                      }
                      $('.block_video_preview5').prepend(preview_vebinar5_2019);


                  $(document).ready(function(){
                    $('.block_video_preview5 .video_preview').click(function(){
                        var clicked = this;
                         $('.block_video_preview5 .video_preview').each(function(i){
                          if (this == clicked && i <= vebinar5_name_2019.length){
                            i = i+1;
                            var vebinar_show = eval('vebinar5_'+i+'_2019');
                            $(vebinar_show);
                            preview_opacity5_2019();
                            document.location.href = '#vebirars5_view';
                            var vebinar_opacity = '.preview_vebinar5_'+i+'_2019';
                            $('vebinar_opacity').css({'opacity':'50%'});

                          }

                        });
                       });
                  });



}

function show_all5_2019() {
                  /* Показываем кнопку Show all */
                  if(vebinar5_count_2019>9){
                    vebinar5_count_2019 = vebinar5_count_2019 + 1;
                      $('.video_show_all5').css({'display':'flex'});
                      for(x = 11; x <= vebinar5_count_2019; x++) {
                      $('.preview_vebinar5_'+x+'_2019').css({'display':'none'});
                      }
                    }

                      $('.video_show_all5').on('click', function (evt) {
                      vebinar5_count_2019 = vebinar5_count_2019 + 1;
                      for(x = 11; x <= vebinar5_count_2019; x++) {
                      $('.preview_vebinar5_'+x+'_2019').css({'display':'block'});
                      }
                      $(this).css({'display':'none'});
                    });
}

                  /* меняем контент по клику по превьюшкам + меняем прозрачность*/
function show_content5_2019() {
                  $(document).ready(function(){
                    $('.block_video_preview5 .video_preview').click(function(){
                        var clicked = this;
                         $('.block_video_preview5 .video_preview').each(function(i){
                          if (this == clicked && i <= vebinar5_name_2019.length){
                            i = i+1;
                            var vebinar_show = eval('vebinar5_'+i+'_2019');
                            $(vebinar_show);
                            preview_opacity5_2019();
                            document.location.href = '#vebirars5_view';
                            var vebinar_opacity = '.preview_vebinar5_'+i+'_2019';
                            $('vebinar_opacity').css({'opacity':'50%'});

                          }

                        });
                       });
                  });



                       var years_pages = $();
                       $('.container-dgd h1.header_std').text('День Генерального Директора 2019');
                       years_pages = years_pages.add('<div class=year_pagination>Год конференции:</div>').addClass('name');
                      for(x = 0; x < DGD_year.length; x++) {
                      if(DGD_year[x]==current_DGD_year){
                      years_pages = years_pages.add('<div class=year_pagination_active>'+DGD_year[x]+'</div>', {"class" :"year_pagination_active"});
                      } 
                      else{
                      years_pages = years_pages.add('<div class="year_pagination year_DGD_'+DGD_year[x]+'">'+DGD_year[x]+'</div>');
                      }
                    }
                  $('.pagination').append(years_pages);

                  $('.year_DGD_'+DGD_year[0]).on('click', function (evt) {
                            document.location.href = '#vebirars5_view';

                            for(m = 1; m <= vebinar5_name_2020.length; m++){
                               $('.block_video_preview5 .preview_vebinar5_'+m+'_2020').remove();
                            }
							for(i = 1; i <= vebinar5_name_2019.length; i++){
                               $('.block_video_preview5 .preview_vebinar5_'+i+'_2019').remove();
                            }
                            for(d = 1; d <= vebinar5_name_2018.length; d++){
                               $('.block_video_preview5 .preview_vebinar5_'+d+'_2018').remove();
                            }
							for(k = 1; k <= vebinar5_name_2017.length; k++){
                               $('.block_video_preview5 .preview_vebinar5_'+k+'_2017').remove();
                            }

                            $('.pagination:not(.pagination:first-child)').empty();
                            vebinar5_1_2020();
                            preview_vebinars5_2020();
                            show_all5_2020();
                            preview_opacity5_2020();
                            show_content5_2020();

                  });
				  $('.year_DGD_'+DGD_year[2]).on('click', function (evt) {
                            document.location.href = '#vebirars5_view';

                            for(m = 1; m <= vebinar5_name_2020.length; m++){
                               $('.block_video_preview5 .preview_vebinar5_'+m+'_2020').remove();
                            }
							for(i = 1; i <= vebinar5_name_2019.length; i++){
                               $('.block_video_preview5 .preview_vebinar5_'+i+'_2019').remove();
                            }
                            for(d = 1; d <= vebinar5_name_2018.length; d++){
                               $('.block_video_preview5 .preview_vebinar5_'+d+'_2018').remove();
                            }
							for(k = 1; k <= vebinar5_name_2017.length; k++){
                               $('.block_video_preview5 .preview_vebinar5_'+k+'_2017').remove();
                            }

                            $('.pagination:not(.pagination:first-child)').empty();
                            vebinar5_1_2018();
                            preview_vebinars5_2018();
                            show_all5_2018();
                            preview_opacity5_2018();
                            show_content5_2018();

                  });
                  $('.year_DGD_'+DGD_year[3]).on('click', function (evt) {
                            document.location.href = '#vebirars5_view';

                            for(m = 1; m <= vebinar5_name_2020.length; m++){
                               $('.block_video_preview5 .preview_vebinar5_'+m+'_2020').remove();
                            }
							for(i = 1; i <= vebinar5_name_2019.length; i++){
                               $('.block_video_preview5 .preview_vebinar5_'+i+'_2019').remove();
                            }
                            for(d = 1; d <= vebinar5_name_2018.length; d++){
                               $('.block_video_preview5 .preview_vebinar5_'+d+'_2018').remove();
                            }
                            for(k = 1; k <= vebinar5_name_2017.length; k++){
                               $('.block_video_preview5 .preview_vebinar5_'+k+'_2017').remove();
                            }

                            $('.pagination').empty();
                            vebinar5_1_2017();
                            preview_vebinars5_2017();
                            show_all5_2017();
                            preview_opacity5_2017();
                            show_content5_2017();

                  });


                  /* Выводим подсказки */

              $('.liteTooltip').liteTooltip();

    for(x = 1; x <= vebinar5_count_2019; x++) {
    $('.preview_vebinar5_'+x+'_2019').attr('data-tooltip-mouseover', vebinar5_name_2019[x-1]);
    }
}

/* Вебинар 5-2 */
function vebinar5_2_2019() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_2.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/6hrJPZ9ZCWc');

  $('.heading_video2').html(vebinar5_name_2019[1]);
  $('.txt_author2').html('Давид Ян');
    $('.txt_video_desc2').html('');

}

/* Вебинар 5-3 */
function vebinar5_3_2019() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_3.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/-43OG37ApbQ');

  $('.heading_video2').html(vebinar5_name_2019[2]);
  $('.txt_author2').html('Агнесса Осипова');
    $('.txt_video_desc2').html('');

}

/* Вебинар 5-4 */
function vebinar5_4_2019() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_4.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/VUJUU3KvEx0');

  $('.heading_video2').html(vebinar5_name_2019[3]);
  $('.txt_author2').html('Сергей Ковалев');
    $('.txt_video_desc2').html('');

}

/* Вебинар 5-5 */
function vebinar5_5_2019() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_5.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/TQTZzXtTvSY');

  $('.heading_video2').html(vebinar5_name_2019[4]);
  $('.txt_author2').html('Игорь Жижикин');
    $('.txt_video_desc2').html('');
}

/* Вебинар 5-6 */
function vebinar5_6_2019() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_6.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/4fjdQScfwH8');

  $('.heading_video2').html(vebinar5_name_2019[5]);
  $('.txt_author2').html('Павел Ковшаров');
    $('.txt_video_desc2').html('');
}

/* Вебинар 5-7 */
function vebinar5_7_2019() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_7.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/ILdVj8rS5HE');

  $('.heading_video2').html(vebinar5_name_2019[6]);
  $('.txt_author2').html('Денис Долматов');
    $('.txt_video_desc2').html('');
}

/* Вебинар 5-8 */
function vebinar5_8_2019() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_8.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/saAVzDaUlf0');

  $('.heading_video2').html(vebinar5_name_2019[7]);
  $('.txt_author2').html('Андрей Кавун');
    $('.txt_video_desc2').html('');
  
}

/* Вебинар 5-9 */
function vebinar5_9_2019() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_9.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/M2qnDcwORUs');

  $('.heading_video2').html(vebinar5_name_2019[8]);
  $('.txt_author2').html('Алексей Соловьев');
    $('.txt_video_desc2').html('');

}

/* Вебинар 5-10 */
function vebinar5_10_2019() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_10.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/UyBH7d3hx7E');

  $('.heading_video2').html(vebinar5_name_2019[9]);
  $('.txt_author2').html('Дмитрий Костыгин');
    $('.txt_video_desc2').html('');

}

/* Вебинар 5-11 */
function vebinar5_11_2019() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_11.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/UW9l_GBrI_Q');

  $('.heading_video2').html(vebinar5_name_2019[10]);
  $('.txt_author2').html('Ольга Проскурякова');
    $('.txt_video_desc2').html('');
 
}

/* Вебинар 5-12 */
function vebinar5_12_2019() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_12.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/tlkbgfJ5FEk');

  $('.heading_video2').html(vebinar5_name_2019[11]);
  $('.txt_author2').html('Ольга Зиновьева');
    $('.txt_video_desc2').html('');

}

/* Вебинар 5-13 */
function vebinar5_13_2019() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_13.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/1gssoHsE7l4');

  $('.heading_video2').html(vebinar5_name_2019[12]);
  $('.txt_author2').html('Артем Елмуратов');
    $('.txt_video_desc2').html('');

}
/* Вебинар 5-14 */
function vebinar5_14_2019() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_14.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/gdOxUr52i_Y');

  $('.heading_video2').html(vebinar5_name_2019[13]);
  $('.txt_author2').html('Виктор Семенов');
    $('.txt_video_desc2').html('');

}







/*обнуление прозрачности у превьюшек*/
function preview_opacity5_2019() {


for(i = 1; i <= vebinar5_name_2019.length; i++) {
    $('.preview_vebinar5_'+i+'_2019').css({'opacity':'80%'});
    $('.preview_vebinar5_'+i+'_2019').on('click', function (evt) {
    $(this).css({'opacity':'50%'});
  });
}
}



/* ------------------------------------ 2018 -----------------------*/




/* ДГД 2018 */


var vebinar5_name_2018 = [
'Почему экономисты ждут повторения кризиса 2008-2009 годов в&nbsp;ближайшее время',
'Как привлечь внимание клиентов к&nbsp;новому бренду: бизнесхаки от&nbsp;практика',
'Приемы ценообразования, которые взорвут ваши продажи и&nbsp;помогут догнать лидеров рынка',
'Public Talk: как создавать новые бренды и&nbsp;конкурировать с&nbsp;международными гигантами',
'Public Talk: спорт в жизни директора',
'Собственник VS&nbsp;управляющий&nbsp;&mdash; есть контакт!',
'Слабые места в&nbsp;стратегии российских компаний: почему маленькие так редко становятся большими',
'Цифровое будущее. Какие технологии изменят работу вашей компании в&nbsp;ближайшие пару лет',
'Public Talk: как работать с&nbsp;новым поколением потребителей и&nbsp;предпринимателей',
'Как мотивировать низкооплачиваемый персонал?',
'Обязанности генерального директора по&nbsp;отношению к&nbsp;ближайшим подчиненным',
'Как сократить расходы на&nbsp;&laquo;лишний&raquo; персонал и&nbsp;перевести его в&nbsp;доходы',
'Public Talk: как лидеру измениться сегодня, чтобы не&nbsp;потерять свой бизнес завтра',
'Что крупные компании осваивают сейчас, а&nbsp;Ваши конкуренты начнут использовать завтра',
];

var vebinar5_count_2018 = vebinar5_name_2018.length;

/* Вебинар 5-1_2018 */
function vebinar5_1_2018() {


                    current_DGD_year = DGD_year[2];

                    $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_1_2018.jpg?1'});
                    $('.fancybox-media2').attr( 'href','https://youtu.be/L2aHd0FhYrg');
                    $('.heading_video2').html(vebinar5_name_2018[0]);
                    $('.txt_author2').html('Андрей Мовчанов');
                      $('.txt_video_desc2').html('');
                   

                  $('.preview_vebinar5_1_2018').css({'opacity':'50%'});


}



/* Выводим все превьюшки */
function preview_vebinars5_2018() {
                      var preview_vebinar5_2018 = $();
                      for(x = 1; x <= vebinar5_name_2018.length; x++) {
                      preview_vebinar5_2018 = preview_vebinar5_2018.add("<div></div>", {"class" :"video_preview preview_vebinar5_"+x+'_2018'+" liteTooltip"});
                      }
                      $('.block_video_preview5').prepend(preview_vebinar5_2018);


                  $(document).ready(function(){
                    $('.block_video_preview5 .video_preview').click(function(){
                        var clicked = this;
                         $('.block_video_preview5 .video_preview').each(function(i){
                          if (this == clicked && i <= vebinar5_name_2018.length){
                            i = i+1;
                            var vebinar_show = eval('vebinar5_'+i+'_2018');
                            $(vebinar_show);
                            preview_opacity5_2018();
                            document.location.href = '#vebirars5_view';
                            var vebinar_opacity = '.preview_vebinar5_'+i+'_2018';
                            $('vebinar_opacity').css({'opacity':'50%'});

                          }

                        });
                       });
                  });



}

function show_all5_2018() {
                  /* Показываем кнопку Show all */
                  if(vebinar5_name_2018.length>9){
                    vebinar5_count_2018 = vebinar5_count_2018 + 1;
                      $('.video_show_all5').css({'display':'flex'});
                      for(x = 11; x <= vebinar5_count_2018; x++) {
                      $('.preview_vebinar5_'+x+'_2018').css({'display':'none'});
                      }
                    }

                      $('.video_show_all5').on('click', function (evt) {
                      vebinar5_count_2018 = vebinar5_count_2018 + 1;
                      for(x = 11; x <= vebinar5_count_2018; x++) {
                      $('.preview_vebinar5_'+x+'_2018').css({'display':'block'});
                      }
                      $(this).css({'display':'none'});
                    });
}

/* меняем контент по клику по превьюшкам + меняем прозрачность*/
function show_content5_2018() {
                  $(document).ready(function(){
                    $('.block_video_preview5 .video_preview').click(function(){
                        var clicked = this;
                         $('.block_video_preview5 .video_preview').each(function(i){
                          if (this == clicked && i <= vebinar5_name_2018.length){
                            i = i+1;
                            var vebinar_show = eval('vebinar5_'+i+'_2018');
                            $(vebinar_show);
                            preview_opacity5_2018();
                            document.location.href = '#vebirars5_view';
                            var vebinar_opacity = '.preview_vebinar5_'+i+'_2018';
                            $('vebinar_opacity').css({'opacity':'50%'});

                          }

                        });
                       });
                  });



                       var years_pages = $();
                       $('.container-dgd h1.header_std').text('День Генерального Директора 2018');
                       years_pages = years_pages.add('<div class=year_pagination>Год конференции:</div>').addClass('name');
                      for(x = 0; x < DGD_year.length; x++) {
                      if(DGD_year[x]==current_DGD_year){
                      years_pages = years_pages.add('<div class=year_pagination_active>'+DGD_year[x]+'</div>', {"class" :"year_pagination_active"});
                      } 
                      else{
                      years_pages = years_pages.add('<div class="year_pagination year_DGD_'+DGD_year[x]+'">'+DGD_year[x]+'</div>');
                      }
                    }
                  $('.pagination').append(years_pages);

                  
				  $('.year_DGD_'+DGD_year[0]).on('click', function (evt) {
                            document.location.href = '#vebirars5_view';

                            for(m = 1; m <= vebinar5_name_2020.length; m++){
                               $('.block_video_preview5 .preview_vebinar5_'+m+'_2020').remove();
                            }
                            for(i = 1; i <= vebinar5_name_2019.length; i++){
                               $('.block_video_preview5 .preview_vebinar5_'+i+'_2020').remove();
                            }
							for(d = 1; d <= vebinar5_name_2018.length; d++){
                               $('.block_video_preview5 .preview_vebinar5_'+d+'_2018').remove();
                            }
                            for(k = 1; k <= vebinar5_name_2017.length; k++){
                               $('.block_video_preview5 .preview_vebinar5_'+k+'_2017').remove();
                            }


                            $('.pagination').empty();
                            vebinar5_1_2020();
                            preview_vebinars5_2020();
                            show_all5_2020();
                            preview_opacity5_2020();
                            show_content5_2020();

                  });
				  $('.year_DGD_'+DGD_year[1]).on('click', function (evt) {
                            document.location.href = '#vebirars5_view';
							
							for(m = 1; m <= vebinar5_name_2020.length; m++){
                               $('.block_video_preview5 .preview_vebinar5_'+m+'_2020').remove();
                            }
                            for(i = 1; i <= vebinar5_name_2019.length; i++){
                               $('.block_video_preview5 .preview_vebinar5_'+i+'_2019').remove();
                            }
                            for(d = 1; d <= vebinar5_name_2018.length; d++){
                               $('.block_video_preview5 .preview_vebinar5_'+d+'_2018').remove();
                            }
                            for(k = 1; k <= vebinar5_name_2017.length; k++){
                               $('.block_video_preview5 .preview_vebinar5_'+k+'_2017').remove();
                            }


                            $('.pagination').empty();
                            vebinar5_1_2019();
                            preview_vebinars5_2019();
                            show_all5_2019();
                            preview_opacity5_2019();
                            show_content5_2019();

                  });
                  $('.year_DGD_'+DGD_year[3]).on('click', function (evt) {
                            document.location.href = '#vebirars5_view';

                            for(m = 1; m <= vebinar5_name_2020.length; m++){
                               $('.block_video_preview5 .preview_vebinar5_'+m+'_2020').remove();
                            }
							for(i = 1; i <= vebinar5_name_2019.length; i++){
                               $('.block_video_preview5 .preview_vebinar5_'+i+'_2019').remove();
                            }
                            for(d = 1; d <= vebinar5_name_2018.length; d++){
                               $('.block_video_preview5 .preview_vebinar5_'+d+'_2018').remove();
                            }
                            for(k = 1; k <= vebinar5_name_2017.length; k++){
                               $('.block_video_preview5 .preview_vebinar5_'+k+'_2017').remove();
                            }

                            $('.pagination').empty();
                            vebinar5_1_2017();
                            preview_vebinars5_2017();
                            show_all5_2017();
                            preview_opacity5_2017();
                            show_content5_2017();

                  });



                  /* Выводим подсказки */

              $('.liteTooltip').liteTooltip();

    for(x = 1; x <= vebinar5_name_2018.length; x++) {
    $('.preview_vebinar5_'+x+'_2018').attr('data-tooltip-mouseover', vebinar5_name_2018[x-1]);
    }
}


















/* Вебинар 5-2_2018 */
function vebinar5_2_2018() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_2_2018.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/sj5TBZ74ltc');

  $('.heading_video2').html(vebinar5_name_2018[1]);
  $('.txt_author2').html('Евгений Гапон');
    $('.txt_video_desc2').html('');

}

/* Вебинар 5-3_2018 */
function vebinar5_3_2018() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_3_2018.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/YtIorBDd9qQ');

  $('.heading_video2').html(vebinar5_name_2018[2]);
  $('.txt_author2').html('Игорь Жижикин');
    $('.txt_video_desc2').html('');

}

/* Вебинар 5-4_2018 */
function vebinar5_4_2018() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_4_2018.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/0KpZ8T7J8so');

  $('.heading_video2').html(vebinar5_name_2018[3]);
  $('.txt_author2').html('Андрей Трубников');
    $('.txt_video_desc2').html('');

}

/* Вебинар 5-5_2018 */
function vebinar5_5_2018() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_5_2018.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/9hqG71p6uHo');

  $('.heading_video2').html(vebinar5_name_2018[4]);
  $('.txt_author2').html('Юрий Белонощенко');
    $('.txt_video_desc2').html('');
}

/* Вебинар 5-6_2018 */
function vebinar5_6_2018() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_6_2018.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/oyjLSJpmrrw');

  $('.heading_video2').html(vebinar5_name_2018[5]);
  $('.txt_author2').html('Дмитрий Кибкало');
    $('.txt_video_desc2').html('');
}

/* Вебинар 5-7_2018 */
function vebinar5_7_2018() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_7_2018.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/POipu6nhLO8');

  $('.heading_video2').html(vebinar5_name_2018[6]);
  $('.txt_author2').html('Марат Атнашев');
    $('.txt_video_desc2').html('');
}

/* Вебинар 5-8_2018 */
function vebinar5_8_2018() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_8_2018.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/DoYVlFAc5qM');

  $('.heading_video2').html(vebinar5_name_2018[7]);
  $('.txt_author2').html('Сергей Негодяев');
    $('.txt_video_desc2').html('');
  
}

/* Вебинар 5-9_2018 */
function vebinar5_9_2018() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_9_2018.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/nyg6lERgRwA');

  $('.heading_video2').html(vebinar5_name_2018[8]);
  $('.txt_author2').html('Николай Матушевский');
    $('.txt_video_desc2').html('');

}

/* Вебинар 5-10_2018 */
function vebinar5_10_2018() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_10_2018.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/rFJ9ciLOKQY');

  $('.heading_video2').html(vebinar5_name_2018[9]);
  $('.txt_author2').html('Михаил Гончаров');
    $('.txt_video_desc2').html('');

}

/* Вебинар 5-11_2018 */
function vebinar5_11_2018() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_11_2018.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/veUwTzTtraA');

  $('.heading_video2').html(vebinar5_name_2018[10]);
  $('.txt_author2').html('Владимир Озеров');
    $('.txt_video_desc2').html('');
 
}

/* Вебинар 5-12_2018 */
function vebinar5_12_2018() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_12_2018.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/1WDkWDIq3nk');

  $('.heading_video2').html(vebinar5_name_2018[11]);
  $('.txt_author2').html('Антон Малов');
    $('.txt_video_desc2').html('');

}

/* Вебинар 5-13_2018 */
function vebinar5_13_2018() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_13_2018.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/prfkUuBJgCg');

  $('.heading_video2').html(vebinar5_name_2018[12]);
  $('.txt_author2').html('Макс Крайнов');
    $('.txt_video_desc2').html('');

}
/* Вебинар 5-14_2018 */
function vebinar5_14_2018() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_14_2018.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/Yds1mhlN-bE');

  $('.heading_video2').html(vebinar5_name_2018[13]);
  $('.txt_author2').html('Рубен Арутюнян');
    $('.txt_video_desc2').html('');

}







/*обнуление прозрачности у превьюшек*/
function preview_opacity5_2018() {


for(i = 1; i <= vebinar5_name_2018.length; i++) {
    $('.preview_vebinar5_'+i+'_2018').css({'opacity':'80%'});
    $('.preview_vebinar5_'+i+'_2018').on('click', function (evt) {
    $(this).css({'opacity':'50%'});
  });
}
}


























/* ДГД 2017 */


var vebinar5_name_2017 = [
'Какие возможности и&nbsp;угрозы ждут бизнес в&nbsp;год президентских выборов?',
'Меньше думай, больше делай. Так&nbsp;ли важна для бизнеса стоимость нефти и&nbsp;размер ВВП?',
'Почему сокращается число предпринимателей в&nbsp;России',
'Рост экономики России в&nbsp;2018&nbsp;году. Часть 1 ',
'Рост экономики России в&nbsp;2018&nbsp;году. Часть 2',
'Цифровая экономика в&nbsp;России: миф или реальность',
'Что ждет Россию в&nbsp;ближайшем будущем? Часть 1',
'Что ждет Россию в&nbsp;ближайшем будущем? Часть 2',
'Что ждет бизнес в&nbsp;2018 году',
'Как добиться &laquo;выживаемости&raquo; бизнеса',
'Начало PR-активности вашей компании. Часть 1',
'Начало PR-активности вашей компании. Часть 2',
'Начало PR-активности вашей компании. Часть 3',
'Работа со&nbsp;СМИ: тонкости и&nbsp;нюансы',
'Разница поколений сотрудников в&nbsp;бизнесе',
'Реклама в&nbsp;СМИ: реальные кейсы и&nbsp;примеры',
'Способы нематериальной мотивации персонала: работающие методики',
'Управление мотивацией персонала: &laquo;слово&nbsp;&mdash; это оружие&raquo;',
];

var vebinar5_count_2017 = vebinar5_name_2017.length;

/* Вебинар 5-1_2017 */
function vebinar5_1_2017() {


                    current_DGD_year = DGD_year[3];

                    $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_1_2017.jpg?1'});
                    $('.fancybox-media2').attr( 'href','https://youtu.be/xcS0lfo5dow');
                    $('.heading_video2').html(vebinar5_name_2017[0]);
                    $('.txt_author2').html('Дмитрий Грачёв');
                      $('.txt_video_desc2').html('');
                   

                  $('.preview_vebinar5_1_2017').css({'opacity':'50%'});


}



/* Выводим все превьюшки */
function preview_vebinars5_2017() {
                      var preview_vebinar5_2017 = $();
                      for(x = 1; x <= vebinar5_name_2017.length; x++) {
                      preview_vebinar5_2017 = preview_vebinar5_2017.add("<div></div>", {"class" :"video_preview preview_vebinar5_"+x+'_2017'+" liteTooltip"});
                      }
                      $('.block_video_preview5').prepend(preview_vebinar5_2017);


                  $(document).ready(function(){
                    $('.block_video_preview5 .video_preview').click(function(){
                        var clicked = this;
                         $('.block_video_preview5 .video_preview').each(function(i){
                          if (this == clicked && i <= vebinar5_name_2017.length){
                            i = i+1;
                            var vebinar_show = eval('vebinar5_'+i+'_2017');
                            $(vebinar_show);
                            preview_opacity5_2017();
                            document.location.href = '#vebirars5_view';
                            var vebinar_opacity = '.preview_vebinar5_'+i+'_2017';
                            $('vebinar_opacity').css({'opacity':'50%'});

                          }

                        });
                       });
                  });



}

function show_all5_2017() {
                  /* Показываем кнопку Show all */
                  if(vebinar5_name_2017.length>9){
                    vebinar5_count_2017 = vebinar5_count_2017 + 1;
                      $('.video_show_all5').css({'display':'flex'});
                      for(x = 11; x <= vebinar5_count_2017; x++) {
                      $('.preview_vebinar5_'+x+'_2017').css({'display':'none'});
                      }
                    }

                      $('.video_show_all5').on('click', function (evt) {
                      vebinar5_count_2017 = vebinar5_count_2017 + 1;
                      for(x = 11; x <= vebinar5_count_2017; x++) {
                      $('.preview_vebinar5_'+x+'_2017').css({'display':'block'});
                      }
                      $(this).css({'display':'none'});
                    });
}

/* меняем контент по клику по превьюшкам + меняем прозрачность*/
function show_content5_2017() {
                  $(document).ready(function(){
                    $('.block_video_preview5 .video_preview').click(function(){
                        var clicked = this;
                         $('.block_video_preview5 .video_preview').each(function(i){
                          if (this == clicked && i <= vebinar5_name_2017.length){
                            i = i+1;
                            var vebinar_show = eval('vebinar5_'+i+'_2017');
                            $(vebinar_show);
                            preview_opacity5_2017();
                            document.location.href = '#vebirars5_view';
                            var vebinar_opacity = '.preview_vebinar5_'+i+'_2017';
                            $('vebinar_opacity').css({'opacity':'50%'});

                          }

                        });
                       });
                  });



                       var years_pages = $();
                       $('.container-dgd h1.header_std').text('День Генерального Директора 2017');
                       years_pages = years_pages.add('<div class=year_pagination>Год конференции:</div>').addClass('name');
                      for(x = 0; x < DGD_year.length; x++) {
                      if(DGD_year[x]==current_DGD_year){
                      years_pages = years_pages.add('<div class=year_pagination_active>'+DGD_year[x]+'</div>', {"class" :"year_pagination_active"});
                      } 
                      else{
                      years_pages = years_pages.add('<div class="year_pagination year_DGD_'+DGD_year[x]+'">'+DGD_year[x]+'</div>');
                      }
                    }
                  $('.pagination').append(years_pages);

                  $('.year_DGD_'+DGD_year[0]).on('click', function (evt) {
                            document.location.href = '#vebirars5_view';

                            for(m = 1; m <= vebinar5_name_2020.length; m++){
                               $('.block_video_preview5 .preview_vebinar5_'+m+'_2020').remove();
                            }
                            for(i = 1; i <= vebinar5_name_2019.length; i++){
                               $('.block_video_preview5 .preview_vebinar5_'+i+'_2019').remove();
                            }
							for(d = 1; d <= vebinar5_name_2018.length; d++){
                               $('.block_video_preview5 .preview_vebinar5_'+d+'_2018').remove();
                            }
                            for(k = 1; k <= vebinar5_name_2017.length; k++){
                               $('.block_video_preview5 .preview_vebinar5_'+k+'_2017').remove();
                            }


                            $('.pagination').empty();
                            vebinar5_1_2020();
                            preview_vebinars5_2020();
                            show_all5_2020();
                            preview_opacity5_2020();
                            show_content5_2020();

                  });
				  
				  $('.year_DGD_'+DGD_year[1]).on('click', function (evt) {                    
                        document.location.href = '#vebirars5_view';
						
						for(m = 1; m <= vebinar5_name_2020.length; m++){
                            $('.block_video_preview5 .preview_vebinar5_'+m+'_2020').remove();
                            }
						for(i = 1; i <= vebinar5_name_2019.length; i++){
							$('.block_video_preview5 .preview_vebinar5_'+i+'_2019').remove();
						}	
                        for(d = 1; d <= vebinar5_name_2018.length; d++){
                            $('.block_video_preview5 .preview_vebinar5_'+d+'_2018').remove();
                        }
						for(k = 1; k <= vebinar5_name_2017.length; k++){
							$('.block_video_preview5 .preview_vebinar5_'+k+'_2017').remove();
						}

						$('.pagination').empty();
						vebinar5_1_2019();
						preview_vebinars5_2019();
						show_all5_2019();
						preview_opacity5_2019();
						show_content5_2019();
				    });

                  $('.year_DGD_'+DGD_year[2]).on('click', function (evt) {
                        document.location.href = '#vebirars5_view';
						
						for(m = 1; m <= vebinar5_name_2020.length; m++){
                            $('.block_video_preview5 .preview_vebinar5_'+m+'_2020').remove();
                            }
						for(i = 1; i <= vebinar5_name_2019.length; i++){
							$('.block_video_preview5 .preview_vebinar5_'+i+'_2019').remove();
						}
                        for(d = 1; d <= vebinar5_name_2018.length; d++){
                            $('.block_video_preview5 .preview_vebinar5_'+d+'_2018').remove();
                        }
						for(k = 1; k <= vebinar5_name_2017.length; k++){
							$('.block_video_preview5 .preview_vebinar5_'+k+'_2017').remove();
						}

						$('.pagination').empty();
						vebinar5_1_2018();
						preview_vebinars5_2018();
						show_all5_2018();
						preview_opacity5_2018();
						show_content5_2018();
				    });



                  /* Выводим подсказки */

              $('.liteTooltip').liteTooltip();

    for(x = 1; x <= vebinar5_name_2017.length; x++) {
    $('.preview_vebinar5_'+x+'_2017').attr('data-tooltip-mouseover', vebinar5_name_2017[x-1]);
    }
}


















/* Вебинар 5-2_2017 */
function vebinar5_2_2017() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_2_2017.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/aUE1BvXdJJc');

  $('.heading_video2').html(vebinar5_name_2017[1]);
  $('.txt_author2').html('Иван Пирожков');
    $('.txt_video_desc2').html('');

}

/* Вебинар 5-3_2017 */
function vebinar5_3_2017() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_3_2017.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/-0s9mfqhZPo');

  $('.heading_video2').html(vebinar5_name_2017[2]);
  $('.txt_author2').html('Дмитрий Грин');
    $('.txt_video_desc2').html('');

}

/* Вебинар 5-4_2017 */
function vebinar5_4_2017() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_4_2017.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/aCfYM9MZr8U');

  $('.heading_video2').html(vebinar5_name_2017[3]);
  $('.txt_author2').html('Евгений Гавриленко');
    $('.txt_video_desc2').html('');

}

/* Вебинар 5-5_2017 */
function vebinar5_5_2017() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_5_2017.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/5LmqcFLWFfg');

  $('.heading_video2').html(vebinar5_name_2017[4]);
  $('.txt_author2').html('Евгений Гавриленко');
    $('.txt_video_desc2').html('');
}

/* Вебинар 5-6_2017 */
function vebinar5_6_2017() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_6_2017.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/cJVoY3bl0RI');

  $('.heading_video2').html(vebinar5_name_2017[5]);
  $('.txt_author2').html('Дмитрий Потапенко');
    $('.txt_video_desc2').html('');
}

/* Вебинар 5-7_2017 */
function vebinar5_7_2017() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_7_2017.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/V1SpIB9dMI8');

  $('.heading_video2').html(vebinar5_name_2017[6]);
  $('.txt_author2').html('Владимир Левченко');
    $('.txt_video_desc2').html('');
}

/* Вебинар 5-8_2017 */
function vebinar5_8_2017() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_8_2017.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/SBIS5yPXOJs');

  $('.heading_video2').html(vebinar5_name_2017[7]);
  $('.txt_author2').html('Владимир Левченко');
    $('.txt_video_desc2').html('');
  
}

/* Вебинар 5-9_2017 */
function vebinar5_9_2017() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_9_2017.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/KLUveLqywFw');

  $('.heading_video2').html(vebinar5_name_2017[8]);
  $('.txt_author2').html('Антон Прохоров');
    $('.txt_video_desc2').html('');

}

/* Вебинар 5-10_2017 */
function vebinar5_10_2017() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_10_2017.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/6lF0JBwEGEA');

  $('.heading_video2').html(vebinar5_name_2017[9]);
  $('.txt_author2').html('Артем Агабеков');
    $('.txt_video_desc2').html('');

}

/* Вебинар 5-11_2017 */
function vebinar5_11_2017() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_11_2017.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/jtcEu9J67c8');

  $('.heading_video2').html(vebinar5_name_2017[10]);
  $('.txt_author2').html('Инна Алексеева');
    $('.txt_video_desc2').html('');
 
}

/* Вебинар 5-12_2017 */
function vebinar5_12_2017() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_12_2017.jpg?1'});
  $('.fancybox-media2').attr( 'https://youtu.be/lIGbzeql4Yo');

  $('.heading_video2').html(vebinar5_name_2017[11]);
  $('.txt_author2').html('Инна Алексеева');
    $('.txt_video_desc2').html('');

}

/* Вебинар 5-13_2017 */
function vebinar5_13_2017() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_13_2017.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/TR33ZQ1pTxI');

  $('.heading_video2').html(vebinar5_name_2017[12]);
  $('.txt_author2').html('Инна Алексеева');
    $('.txt_video_desc2').html('');

}
/* Вебинар 5-14_2017 */
function vebinar5_14_2017() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_14_2017.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/sX40GCPiZEs');

  $('.heading_video2').html(vebinar5_name_2017[13]);
  $('.txt_author2').html('Инна Алексеева');
    $('.txt_video_desc2').html('');

}
/* Вебинар 5-15_2017 */
function vebinar5_15_2017() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_15_2017.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/MfFsKJSf_AE');

  $('.heading_video2').html(vebinar5_name_2017[14]);
  $('.txt_author2').html('Артем Агабеков');
    $('.txt_video_desc2').html('');

}
/* Вебинар 5-16_2017 */
function vebinar5_16_2017() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_16_2017.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/15j8Jy03PUM');

  $('.heading_video2').html(vebinar5_name_2017[15]);
  $('.txt_author2').html('Инна Алексеева');
    $('.txt_video_desc2').html('');

}
/* Вебинар 5-17_2017 */
function vebinar5_17_2017() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_17_2017.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/4yFRsyF6Ccc');

  $('.heading_video2').html(vebinar5_name_2017[16]);
  $('.txt_author2').html('Владимир Моженков');
    $('.txt_video_desc2').html('');

}
/* Вебинар 5-18_2017 */
function vebinar5_18_2017() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_18_2017.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/xedlte7OnC8');

  $('.heading_video2').html(vebinar5_name_2017[17]);
  $('.txt_author2').html('Владимир Моженков');
    $('.txt_video_desc2').html('');

}







/*обнуление прозрачности у превьюшек*/
function preview_opacity5_2017() {


for(i = 1; i <= vebinar5_name_2017.length; i++) {
    $('.preview_vebinar5_'+i+'_2017').css({'opacity':'80%'});
    $('.preview_vebinar5_'+i+'_2017').on('click', function (evt) {
    $(this).css({'opacity':'50%'});
  });
}
}





















/* ВП */
var VP_year = [
'2020',
'2019',
'2017',
'2015',
];

var current_VP_year;










var vebinar6_name_2020 = [
'Юридические последствия пандемии коронавируса для бизнеса. Пошаговые рекомендации что делать',
'Как взять под контроль и управлять деньгами во время кризиса',
'5 антикризисных стратегий развития карьеры топ-менеджера в кризис ',
'Возвращение компаний к работе с практической точки зрения',
'Посткризисный онлайн-маркетинг',
'Принципы управления компанией на основе цифр. Работа грамотного руководителя',
'Закрытый online форум "Воронка продаж - 2020"'
];

/* Выводим все превьюшки */
var vebinar6_count_2020 = vebinar6_name_2020.length;


/* Вебинар 6-1_2020 */
function vebinar6_1_2020() {


                    current_VP_year = VP_year[0];

  $('#video_conf2').css({'background-size':'cover','background-image':'url(images/covers/b_6_1_2020.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/6cB1P0DxgHY');
                    $('.heading_video2').html(vebinar6_name_2020[0]);
  $('#txt_author_conf2').html('Рассохин Виктор');
    $('#txt_video_desc_conf2').html('В условиях экономического кризиса, наступившего в связи с пандемией коронавируса, российским предприятиям необходимо оперативно адаптироваться под текущие условия. Некоторые компании будут вынуждены закрыться, но многие продолжат свою работу, несмотря на возникшие трудности. Ключевые рекомендации для бизнеса на вебинаре Рассохина Виктора.');
                   

                  $('.preview_vebinar6_1_2020').css({'opacity':'50%'});


}



/* Выводим все превьюшки */
function preview_vebinars6_2020() {
                      var preview_vebinar6_2020 = $();
                      for(x = 1; x <= vebinar6_name_2020.length; x++) {
                      preview_vebinar6_2020 = preview_vebinar6_2020.add("<div></div>", {"class" :"video_preview preview_vebinar6_"+x+'_2020'+" liteTooltip"});
                      }
                      $('.block_video_preview6').prepend(preview_vebinar6_2020);


                  $(document).ready(function(){
                    $('.block_video_preview6 .video_preview').click(function(){
                        var clicked = this;
                         $('.block_video_preview6 .video_preview').each(function(i){
                          if (this == clicked && i <= vebinar6_name_2020.length){
                            i = i+1;
                            var vebinar_show = eval('vebinar6_'+i+'_2020');
                            $(vebinar_show);
                            preview_opacity6_2020();
                            document.location.href = '#vebirars6_view';
                            var vebinar_opacity = '.preview_vebinar6_'+i+'_2020';
                            $('vebinar_opacity').css({'opacity':'50%'});

                          }

                        });
                       });
                  });



}

function show_all6_2020() {
                  /* Показываем кнопку Show all */
                  if(vebinar6_name_2020.length>9){
                    vebinar6_count_2020 = vebinar6_count_2020 + 1;
                      $('.video_show_all6').css({'display':'flex'});
                      for(x = 11; x <= vebinar6_count_2020; x++) {
                      $('.preview_vebinar6_'+x+'_2020').css({'display':'none'});
                      }
                    }

                      $('.video_show_all6').on('click', function (evt) {
                        $('.container-vp').css({'min-height':'800px'});
                      vebinar6_count_2020 = vebinar6_count_2020 + 1;
                      for(x = 11; x <= vebinar6_count_2020; x++) {
                      $('.preview_vebinar6_'+x+'_2020').css({'display':'block'});
                      }
                      $(this).css({'display':'none'});
                    });
}

/* меняем контент по клику по превьюшкам + меняем прозрачность*/
function show_content6_2020() {
                  $(document).ready(function(){
                    $('.block_video_preview6 .video_preview').click(function(){
                        var clicked = this;
                         $('.block_video_preview6 .video_preview').each(function(i){
                          if (this == clicked && i <= vebinar6_name_2020.length){
                            i = i+1;
                            var vebinar_show = eval('vebinar6_'+i+'_2020');
                            $(vebinar_show);
                            preview_opacity6_2020();
                            document.location.href = '#vebirars6_view';
                            var vebinar_opacity = '.preview_vebinar6_'+i+'_2020';
                            $('vebinar_opacity').css({'opacity':'50%'});

                          }

                        });
                       });
                  });



                       var years_pages = $();
                       $('.container-vp h1.header_std').text('Воронка продаж 2020');
                       years_pages = years_pages.add('<div class=year_pagination>Год конференции:</div>').addClass('name');
                      for(x = 0; x < VP_year.length; x++) {
                      if(VP_year[x]==current_VP_year){
                      years_pages = years_pages.add('<div class=year_pagination_active>'+VP_year[x]+'</div>', {"class" :"year_pagination_active"});
                      } 
                      else{
                      years_pages = years_pages.add('<div class="year_pagination year_VP_'+VP_year[x]+'">'+VP_year[x]+'</div>');
                      }
                    }
                  $('#pagination_VP').append(years_pages);

                  $('.year_VP_'+VP_year[1]).on('click', function (evt) {
                            document.location.href = '#vebirars6_view';

                            for(r = 1; r <= vebinar6_name_2020.length; r++){
                               $('.block_video_preview6 .preview_vebinar6_'+r+'_2020').remove();
                            }
							for(i = 1; i <= vebinar6_name_2019.length; i++){
                               $('.block_video_preview6 .preview_vebinar6_'+i+'_2019').remove();
                            }
                            for(d = 1; d <= vebinar6_name_2017.length; d++){
                               $('.block_video_preview6 .preview_vebinar6_'+d+'_2017').remove();
                            }
                            for(k = 1; k <= vebinar6_name_2015.length; k++){
                               $('.block_video_preview6 .preview_vebinar6_'+k+'_2015').remove();
                            }

                            $('#pagination_VP').empty();
                            vebinar6_1_2019();
                            preview_vebinars6_2019();
                            show_all6_2019();
                            preview_opacity6_2019();
                            show_content6_2019();

                  });
				  $('.year_VP_'+VP_year[2]).on('click', function (evt) {
                            document.location.href = '#vebirars6_view';

                            for(r = 1; r <= vebinar6_name_2020.length; r++){
                               $('.block_video_preview6 .preview_vebinar6_'+r+'_2020').remove();
                            }
							for(i = 1; i <= vebinar6_name_2019.length; i++){
                               $('.block_video_preview6 .preview_vebinar6_'+i+'_2019').remove();
                            }
                            for(d = 1; d <= vebinar6_name_2017.length; d++){
                               $('.block_video_preview6 .preview_vebinar6_'+d+'_2017').remove();
                            }
                            for(k = 1; k <= vebinar6_name_2015.length; k++){
                               $('.block_video_preview6 .preview_vebinar6_'+k+'_2015').remove();
                            }

                            $('#pagination_VP').empty();
                            vebinar6_1_2017();
                            preview_vebinars6_2017();
                            show_all6_2017();
                            preview_opacity6_2017();
                            show_content6_2017();

                  });
                  $('.year_VP_'+VP_year[3]).on('click', function (evt) {
                            document.location.href = '#vebirars6_view';


                            for(r = 1; r <= vebinar6_name_2020.length; r++){
                               $('.block_video_preview6 .preview_vebinar6_'+r+'_2020').remove();
                            }
							for(i = 1; i <= vebinar6_name_2019.length; i++){
                               $('.block_video_preview6 .preview_vebinar6_'+i+'_2019').remove();
                            }
                            for(d = 1; d <= vebinar6_name_2017.length; d++){
                               $('.block_video_preview6 .preview_vebinar6_'+d+'_2017').remove();
                            }
                            for(k = 1; k <= vebinar6_name_2015.length; k++){
                               $('.block_video_preview6 .preview_vebinar6_'+k+'_2015').remove();
                            }

                            $('#pagination_VP').empty();
                            vebinar6_1_2015();
                            preview_vebinars6_2015();
                            show_all6_2015();
                            preview_opacity6_2015();
                            show_content6_2015();

                  });



                  /* Выводим подсказки */

              $('.liteTooltip').liteTooltip();

    for(x = 1; x <= vebinar6_name_2020.length; x++) {
    $('.preview_vebinar6_'+x+'_2020').attr('data-tooltip-mouseover', vebinar6_name_2020[x-1]);
    }
}


















/* Вебинар 6-2_2020 */
function vebinar6_2_2020() {
  $('#video_conf2').css({'background-size':'cover','background-image':'url(images/covers/b_6_2_2020.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/8Z9f5PN5low');

  $('.heading_video2').html(vebinar6_name_2020[1]);
  $('#txt_author_conf2').html('Афанасьев Александр');
    $('#txt_video_desc_conf2').html('Ситуация не из легких. Нефть, доллар, пандемия. Находить деньги на аренды, зарплаты, кредиты всё сложнее и сложнее. Но так ли всё ужасно? Нет. Есть способы сохранить деньги даже в таких условиях.');

}

/* Вебинар 6-3_2020 */
function vebinar6_3_2020() {
  $('#video_conf2').css({'background-size':'cover','background-image':'url(images/covers/b_6_3_2020.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/HOGq5csJVBQ');

  $('.heading_video2').html(vebinar6_name_2020[2]);
  $('#txt_author_conf2').html('');
    $('#txt_video_desc_conf2').html('Вебинар для руководителей, которые понимают, что кризис – прекрасная возможность для развития карьеры, и хотят не только сохранить работу, но и совершить профессиональный прорыв, пока коллеги пребывают в панике. На вебинаре вы составите персональный карьерный план на год вперед и получите пять экспертных рекомендаций, которые помогут повысить вашу ценность, укрепить авторитет и найти возможности для развития карьеры.');

}

/* Вебинар 6-4_2020 */
function vebinar6_4_2020() {
  $('#video_conf2').css({'background-size':'cover','background-image':'url(images/covers/b_6_4_2020.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/xBZ5EfV_25E');


  $('.heading_video2').html(vebinar6_name_2020[3]);
  $('#txt_author_conf2').html('');
    $('#txt_video_desc_conf2').html('Возвращение сотрудников в офис с юридической точки зрения. Требуется ли специальное оформление? На вебинаре вы узнаете: Возвращение сотрудников в офис с юридической точки зрения. Требуется ли специальное оформление. Особенности юридического оформления документации для тех, кто остался работать удаленно. Кто не дошел до финиша. Увольнение с наименьшими рисками. Если конфликта не удалось избежать. Проверка Инспекции по труду, судебный спор. Как подготовиться.');

}

/* Вебинар 6-5_2020 */
function vebinar6_5_2020() {
  $('#video_conf2').css({'background-size':'cover','background-image':'url(images/covers/b_6_5_2020.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/uFIhRkIVfRA');

  $('.heading_video2').html(vebinar6_name_2020[4]);
  $('#txt_author_conf2').html('');
    $('#txt_video_desc_conf2').html('Посткризисный онлайн-маркетинг: новое и хорошо забытое старое, которое мы вспомнили благодаря пандемии. Кому будет полезно?<br/>- Собственникам малого и среднего бизнеса, топ-менеджерам, линейным руководителям и ИП.<br>- Всем, кто связан с продажами, маркетингом и пиаром.<br>- Всем, кто только выводит свой бизнес в онлайн.<br>- Всем, кто уже окунулся в digital, но не доволен получаемыми результатами.<br>- И, конечно, всем, кто видит, что проигрывает конкурентам именно в цифровом поле.');
}

/* Вебинар 6-6_2020 */
function vebinar6_6_2020() {
  $('#video_conf2').css({'background-size':'cover','background-image':'url(images/covers/b_6_6_2020.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/B16tRB7IwzI');

  $('.heading_video2').html(vebinar6_name_2020[5]);
  $('#txt_author_conf2').html('');
    $('#txt_video_desc_conf2').html('Этот вебинар для руководителей, которым важен собственный рост и рост компании. Только актуальные и проверенные методы взвешенного управления. Вся информация подкреплена собственными примерами проб, ошибок и успешных результатов.');
}

/* Вебинар 6-7_2020 */
function vebinar6_7_2020() {
  $('#video_conf2').css({'background-size':'cover','background-image':'url(images/covers/b_6_7_2020.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/M-D3AMjvaPU');


  $('.heading_video2').html(vebinar6_name_2020[6]);
  $('#txt_author_conf2').html('');
    $('#txt_video_desc_conf2').html('22 мая состоялось закрытое мероприятие в сфере маркетинга и продаж только для подписчиков журналов «Коммерческий директор», «Генеральный Директор» - форум "Воронка продаж - 2020". Впервые форум проводился в режиме online. Не выходя из дома участники форума узнали об уникальном опыте коллег-руководителей и получили новые идеи для роста продаж в такой непростой период.');
}






/*обнуление прозрачности у превьюшек*/
function preview_opacity6_2020() {


for(i = 1; i <= vebinar6_name_2020.length; i++) {
    $('.preview_vebinar6_'+i+'_2020').css({'opacity':'80%'});
    $('.preview_vebinar6_'+i+'_2020').on('click', function (evt) {
    $(this).css({'opacity':'50%'});
  });
}
}












var vebinar6_name_2019 = [
'Как обеспечить отдел продаж качественными лидами и&nbsp;сэкономить рекламный бюджет',
'Как вернуть ушедших клиентов, которые остались недовольны',
'Программы лояльности: как организовать и&nbsp;контролировать. Тенденции 2019 года',
'Как создать и&nbsp;повести за&nbsp;собой команду, которая добьется успеха',
'Как собрать и&nbsp;мотивировать команду, которая будет работать на&nbsp;результат без понуканий',
'Способы мотивации, которые воодушевят на&nbsp;подвиги и&nbsp;сэкономят бюджет ',
'Управляем командой: какие контрольные точки помогут оценить ситуацию и&nbsp;вовремя среагировать',
'Служба сервиса, которая угодит даже самым привередливым клиентам',
'Покупатели, которые не&nbsp;обращают внимание на&nbsp;акции и&nbsp;скидки: как с&nbsp;ними работать',
'Как продавать товары в&nbsp;высококонкурентной нише',
'Как продать даже самому сложному клиенту ',
'Малоизвестные, но&nbsp;эффективные инструменты продаж, которые позволят быть впереди конкурентов',
'Продающее УТП: как преподнести свой продукт, чтобы клиенты сами захотели его купить',
];

/* Выводим все превьюшки */
var vebinar6_count_2019 = vebinar6_name_2019.length;


/* Вебинар 6-1_2019 */
function vebinar6_1_2019() {


                    current_VP_year = VP_year[1];

  $('#video_conf2').css({'background-size':'cover','background-image':'url(images/covers/b_6_1.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/7L5F721KTPI');
                    $('.heading_video2').html(vebinar6_name_2019[0]);
  $('#txt_author_conf2').html('Екатерина Шабаршина');
    $('#txt_video_desc_conf2').html('');
                   

                  $('.preview_vebinar6_1_2019').css({'opacity':'50%'});


}



/* Выводим все превьюшки */
function preview_vebinars6_2019() {
                      var preview_vebinar6_2019 = $();
                      for(x = 1; x <= vebinar6_name_2019.length; x++) {
                      preview_vebinar6_2019 = preview_vebinar6_2019.add("<div></div>", {"class" :"video_preview preview_vebinar6_"+x+'_2019'+" liteTooltip"});
                      }
                      $('.block_video_preview6').prepend(preview_vebinar6_2019);


                  $(document).ready(function(){
                    $('.block_video_preview6 .video_preview').click(function(){
                        var clicked = this;
                         $('.block_video_preview6 .video_preview').each(function(i){
                          if (this == clicked && i <= vebinar6_name_2019.length){
                            i = i+1;
                            var vebinar_show = eval('vebinar6_'+i+'_2019');
                            $(vebinar_show);
                            preview_opacity6_2019();
                            document.location.href = '#vebirars6_view';
                            var vebinar_opacity = '.preview_vebinar6_'+i+'_2019';
                            $('vebinar_opacity').css({'opacity':'50%'});

                          }

                        });
                       });
                  });



}

function show_all6_2019() {
                  /* Показываем кнопку Show all */
                  if(vebinar6_name_2019.length>9){
                    vebinar6_count_2019 = vebinar6_count_2019 + 1;
                      $('.video_show_all6').css({'display':'flex'});
                      for(x = 11; x <= vebinar6_count_2019; x++) {
                      $('.preview_vebinar6_'+x+'_2019').css({'display':'none'});
                      }
                    }

                      $('.video_show_all6').on('click', function (evt) {
                        $('.container-vp').css({'min-height':'800px'});
                      vebinar6_count_2019 = vebinar6_count_2019 + 1;
                      for(x = 11; x <= vebinar6_count_2019; x++) {
                      $('.preview_vebinar6_'+x+'_2019').css({'display':'block'});
                      }
                      $(this).css({'display':'none'});
                    });
}

/* меняем контент по клику по превьюшкам + меняем прозрачность*/
function show_content6_2019() {
                  $(document).ready(function(){
                    $('.block_video_preview6 .video_preview').click(function(){
                        var clicked = this;
                         $('.block_video_preview6 .video_preview').each(function(i){
                          if (this == clicked && i <= vebinar6_name_2019.length){
                            i = i+1;
                            var vebinar_show = eval('vebinar6_'+i+'_2019');
                            $(vebinar_show);
                            preview_opacity6_2019();
                            document.location.href = '#vebirars6_view';
                            var vebinar_opacity = '.preview_vebinar6_'+i+'_2019';
                            $('vebinar_opacity').css({'opacity':'50%'});

                          }

                        });
                       });
                  });



                       var years_pages = $();
                       $('.container-vp h1.header_std').text('Воронка продаж 2019');
                       years_pages = years_pages.add('<div class=year_pagination>Год конференции:</div>').addClass('name');
                      for(x = 0; x < VP_year.length; x++) {
                      if(VP_year[x]==current_VP_year){
                      years_pages = years_pages.add('<div class=year_pagination_active>'+VP_year[x]+'</div>', {"class" :"year_pagination_active"});
                      } 
                      else{
                      years_pages = years_pages.add('<div class="year_pagination year_VP_'+VP_year[x]+'">'+VP_year[x]+'</div>');
                      }
                    }
                  $('#pagination_VP').append(years_pages);

                  $('.year_VP_'+VP_year[0]).on('click', function (evt) {
                            document.location.href = '#vebirars6_view';

                            for(r = 1; r <= vebinar6_name_2020.length; r++){
                               $('.block_video_preview6 .preview_vebinar6_'+r+'_2020').remove();
                            }
							for(i = 1; i <= vebinar6_name_2019.length; i++){
                               $('.block_video_preview6 .preview_vebinar6_'+i+'_2019').remove();
                            }
                            for(d = 1; d <= vebinar6_name_2017.length; d++){
                               $('.block_video_preview6 .preview_vebinar6_'+d+'_2017').remove();
                            }
                            for(k = 1; k <= vebinar6_name_2015.length; k++){
                               $('.block_video_preview6 .preview_vebinar6_'+k+'_2015').remove();
                            }

                            $('#pagination_VP').empty();
                            vebinar6_1_2020();
                            preview_vebinars6_2020();
                            show_all6_2020();
                            preview_opacity6_2020();
                            show_content6_2020();

                  });
				  $('.year_VP_'+VP_year[2]).on('click', function (evt) {
                            document.location.href = '#vebirars6_view';

                            for(r = 1; r <= vebinar6_name_2020.length; r++){
                               $('.block_video_preview6 .preview_vebinar6_'+r+'_2020').remove();
                            }
							for(i = 1; i <= vebinar6_name_2019.length; i++){
                               $('.block_video_preview6 .preview_vebinar6_'+i+'_2019').remove();
                            }
                            for(d = 1; d <= vebinar6_name_2017.length; d++){
                               $('.block_video_preview6 .preview_vebinar6_'+d+'_2017').remove();
                            }
                            for(k = 1; k <= vebinar6_name_2015.length; k++){
                               $('.block_video_preview6 .preview_vebinar6_'+k+'_2015').remove();
                            }

                            $('#pagination_VP').empty();
                            vebinar6_1_2017();
                            preview_vebinars6_2017();
                            show_all6_2017();
                            preview_opacity6_2017();
                            show_content6_2017();

                  });
                  $('.year_VP_'+VP_year[3]).on('click', function (evt) {
                            document.location.href = '#vebirars6_view';


                            for(r = 1; r <= vebinar6_name_2020.length; r++){
                               $('.block_video_preview6 .preview_vebinar6_'+r+'_2020').remove();
                            }
							for(i = 1; i <= vebinar6_name_2019.length; i++){
                               $('.block_video_preview6 .preview_vebinar6_'+i+'_2019').remove();
                            }
                            for(d = 1; d <= vebinar6_name_2017.length; d++){
                               $('.block_video_preview6 .preview_vebinar6_'+d+'_2017').remove();
                            }
                            for(k = 1; k <= vebinar6_name_2015.length; k++){
                               $('.block_video_preview6 .preview_vebinar6_'+k+'_2015').remove();
                            }

                            $('#pagination_VP').empty();
                            vebinar6_1_2015();
                            preview_vebinars6_2015();
                            show_all6_2015();
                            preview_opacity6_2015();
                            show_content6_2015();

                  });



                  /* Выводим подсказки */

              $('.liteTooltip').liteTooltip();

    for(x = 1; x <= vebinar6_name_2019.length; x++) {
    $('.preview_vebinar6_'+x+'_2019').attr('data-tooltip-mouseover', vebinar6_name_2019[x-1]);
    }
}


















/* Вебинар 6-2_2019 */
function vebinar6_2_2019() {
  $('#video_conf2').css({'background-size':'cover','background-image':'url(images/covers/b_6_2.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/irDsWK0s6hI');

  $('.heading_video2').html(vebinar6_name_2019[1]);
  $('#txt_author_conf2').html('Михаил и Оксана Смущенко');
    $('#txt_video_desc_conf2').html('');

}

/* Вебинар 6-3_2019 */
function vebinar6_3_2019() {
  $('#video_conf2').css({'background-size':'cover','background-image':'url(images/covers/b_6_3.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/60i_wt1EvyU');

  $('.heading_video2').html(vebinar6_name_2019[2]);
  $('#txt_author_conf2').html('Максим Генке');
    $('#txt_video_desc_conf2').html('');

}

/* Вебинар 6-4_2019 */
function vebinar6_4_2019() {
  $('#video_conf2').css({'background-size':'cover','background-image':'url(images/covers/b_6_4.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/n85DXfZ-n5A');


  $('.heading_video2').html(vebinar6_name_2019[3]);
  $('#txt_author_conf2').html('Дмитрий Левицкий');
    $('#txt_video_desc_conf2').html('');

}

/* Вебинар 6-5_2019 */
function vebinar6_5_2019() {
  $('#video_conf2').css({'background-size':'cover','background-image':'url(images/covers/b_6_5.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/9xwiLo2qJAQ');

  $('.heading_video2').html(vebinar6_name_2019[4]);
  $('#txt_author_conf2').html('Артем Яськов');
    $('#txt_video_desc_conf2').html('');
}

/* Вебинар 6-6_2019 */
function vebinar6_6_2019() {
  $('#video_conf2').css({'background-size':'cover','background-image':'url(images/covers/b_6_6.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/jtNeu_BVnQM');

  $('.heading_video2').html(vebinar6_name_2019[5]);
  $('#txt_author_conf2').html('Сергей Журихин');
    $('#txt_video_desc_conf2').html('');
}

/* Вебинар 6-7_2019 */
function vebinar6_7_2019() {
  $('#video_conf2').css({'background-size':'cover','background-image':'url(images/covers/b_6_7.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/9IDGpFGIaPs');


  $('.heading_video2').html(vebinar6_name_2019[6]);
  $('#txt_author_conf2').html('Александр Дубовенко');
    $('#txt_video_desc_conf2').html('');
}

/* Вебинар 6-8_2019 */
function vebinar6_8_2019() {
  $('#video_conf2').css({'background-size':'cover','background-image':'url(images/covers/b_6_8.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/TLBMQlZ6aNQ');

  $('.heading_video2').html(vebinar6_name_2019[7]);
  $('#txt_author_conf2').html('Умида Хамраева');
    $('#txt_video_desc_conf2').html('');
  
}

/* Вебинар 6-9_2019 */
function vebinar6_9_2019() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_9.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/nyg6lERgRwA');

  $('.heading_video2').html(vebinar6_name_2019[8]);
  $('.txt_author2').html('Николай Матушевский');
    $('.txt_video_desc2').html('');

}

/* Вебинар 6-10_2019 */
function vebinar6_10_2019() {
  $('#video_conf2').css({'background-size':'cover','background-image':'url(images/covers/b_6_10.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/DpV1bxkrmPQ');

  $('.heading_video2').html(vebinar6_name_2019[9]);
  $('#txt_author_conf2').html('Артем Кабаев');
    $('#txt_video_desc_conf2').html('');


}

/* Вебинар 6-11_2019 */
function vebinar6_11_2019() {
  $('#video_conf2').css({'background-size':'cover','background-image':'url(images/covers/b_6_11.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/Ik2tj1nwcrM');

  $('.heading_video2').html(vebinar6_name_2019[10]);
  $('#txt_author_conf2').html('Владислав Санников');
    $('#txt_video_desc_conf2').html('');
 
}

/* Вебинар 6-12_2019 */
function vebinar6_12_2019() {
  $('#video_conf2').css({'background-size':'cover','background-image':'url(images/covers/b_6_12.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/z5PsWryvqOk');

  $('#txt_author_conf2').html('Сергей Спивак');
    $('#txt_video_desc_conf2').html('');

  $('.heading_video2').html(vebinar6_name_2019[11]);

}

/* Вебинар 6-13_2019 */
function vebinar6_13_2019() {
  $('#video_conf2').css({'background-size':'cover','background-image':'url(images/covers/b_6_13.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/a0sxEJI72GU');

  $('.heading_video2').html(vebinar6_name_2019[12]);
  $('#txt_author_conf2').html('Андрей Трубников');
    $('#txt_video_desc_conf2').html('');


}






/*обнуление прозрачности у превьюшек*/
function preview_opacity6_2019() {


for(i = 1; i <= vebinar6_name_2019.length; i++) {
    $('.preview_vebinar6_'+i+'_2019').css({'opacity':'80%'});
    $('.preview_vebinar6_'+i+'_2019').on('click', function (evt) {
    $(this).css({'opacity':'50%'});
  });
}
}













var vebinar6_name_2017 = [
'Бирюзовое управление: как работает компания без начальников. Часть 1',
'Бирюзовое управление: как работает компания без начальников. Часть 2',
'Как обезопасить директора от&nbsp;рисков: типичные ошибки. Часть 1',
'Как обезопасить директора от&nbsp;рисков: типичные ошибки. Часть 2',
'Нюансы работы генерального директора от&nbsp;Ирины Хакамады. Часть 1',
'Нюансы работы генерального директора от&nbsp;Ирины Хакамады. Часть 2',
'Как преодолеть кризис: кейс компании 42Clouds. Часть 1',
'Как преодолеть кризис: кейс компании 42Clouds. Часть 2',
'Технологии в&nbsp;продажах B2B в&nbsp;ближайшие 5&nbsp;лет. Часть 1',
'Технологии в&nbsp;продажах B2B в&nbsp;ближайшие 5&nbsp;лет. Часть&nbsp;2',
];

/* Выводим все превьюшки */
var vebinar6_count_2017 = vebinar6_name_2017.length;


/* Вебинар 6-1_2017 */
function vebinar6_1_2017() {


                    current_VP_year = VP_year[2];

  $('#video_conf2').css({'background-size':'cover','background-image':'url(images/covers/b_6_1_2017.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/mAWaNxOaiP8');
                    $('.heading_video2').html(vebinar6_name_2017[0]);
  $('#txt_author_conf2').html('Илья Савинов');
    $('#txt_video_desc_conf2').html('');
                   

                  $('.preview_vebinar6_1_2017').css({'opacity':'50%'});


}



/* Выводим все превьюшки */
function preview_vebinars6_2017() {
                      var preview_vebinar6_2017 = $();
                      for(x = 1; x <= vebinar6_name_2017.length; x++) {
                      preview_vebinar6_2017 = preview_vebinar6_2017.add("<div></div>", {"class" :"video_preview preview_vebinar6_"+x+'_2017'+" liteTooltip"});
                      }
                      $('.block_video_preview6').prepend(preview_vebinar6_2017);


                  $(document).ready(function(){
                    $('.block_video_preview6 .video_preview').click(function(){
                        var clicked = this;
                         $('.block_video_preview6 .video_preview').each(function(i){
                          if (this == clicked && i <= vebinar6_name_2017.length){
                            i = i+1;
                            var vebinar_show = eval('vebinar6_'+i+'_2017');
                            $(vebinar_show);
                            preview_opacity6_2017();
                            document.location.href = '#vebirars6_view';
                            var vebinar_opacity = '.preview_vebinar6_'+i+'_2017';
                            $('vebinar_opacity').css({'opacity':'50%'});

                          }

                        });
                       });
                  });



}

function show_all6_2017() {
                  /* Показываем кнопку Show all */
                  if(vebinar6_name_2017.length>10){
                    vebinar6_count_2017 = vebinar6_count_2017 + 1;
                      $('.video_show_all6').css({'display':'flex'});
                      for(x = 11; x <= vebinar6_count_2017; x++) {
                      $('.preview_vebinar6_'+x+'_2017').css({'display':'none'});
                      }
                    }
                    else $('.video_show_all6').css({'display':'none'});

                      $('.video_show_all6').on('click', function (evt) {
                        $('.container-vp').css({'min-height':'800px'});
                      vebinar6_count_2017 = vebinar6_count_2017 + 1;
                      for(x = 11; x <= vebinar6_count_2017; x++) {
                      $('.preview_vebinar6_'+x+'_2017').css({'display':'block'});
                      }
                      $(this).css({'display':'none'});
                    });
}

/* меняем контент по клику по превьюшкам + меняем прозрачность*/
function show_content6_2017() {
                  $(document).ready(function(){
                    $('.block_video_preview6 .video_preview').click(function(){
                        var clicked = this;
                         $('.block_video_preview6 .video_preview').each(function(i){
                          if (this == clicked && i <= vebinar6_name_2017.length){
                            i = i+1;
                            var vebinar_show = eval('vebinar6_'+i+'_2017');
                            $(vebinar_show);
                            preview_opacity6_2017();
                            document.location.href = '#vebirars6_view';
                            var vebinar_opacity = '.preview_vebinar6_'+i+'_2017';
                            $('vebinar_opacity').css({'opacity':'50%'});

                          }

                        });
                       });
                  });



                       var years_pages = $();
                       $('.container-vp h1.header_std').text('Воронка продаж 2017');
                       years_pages = years_pages.add('<div class=year_pagination>Год конференции:</div>').addClass('name');
                      for(x = 0; x < VP_year.length; x++) {
                      if(VP_year[x]==current_VP_year){
                      years_pages = years_pages.add('<div class=year_pagination_active>'+VP_year[x]+'</div>', {"class" :"year_pagination_active"});
                      } 
                      else{
                      years_pages = years_pages.add('<div class="year_pagination year_VP_'+VP_year[x]+'">'+VP_year[x]+'</div>');
                      }
                    }
                  $('#pagination_VP').append(years_pages);

                  $('.year_VP_'+VP_year[0]).on('click', function (evt) {
                            document.location.href = '#vebirars6_view';

                            for(r = 1; r <= vebinar6_name_2020.length; r++){
                               $('.block_video_preview6 .preview_vebinar6_'+r+'_2020').remove();
                            }
							for(i = 1; i <= vebinar6_name_2019.length; i++){
                               $('.block_video_preview6 .preview_vebinar6_'+i+'_2019').remove();
                            }
                            for(d = 1; d <= vebinar6_name_2017.length; d++){
                               $('.block_video_preview6 .preview_vebinar6_'+d+'_2017').remove();
                            }
                            for(k = 1; k <= vebinar6_name_2015.length; k++){
                               $('.block_video_preview6 .preview_vebinar6_'+k+'_2015').remove();
                            }
                            $('#pagination_VP').empty();
                            vebinar6_1_2020();
                            preview_vebinars6_2020();
                            show_all6_2020();
                            preview_opacity6_2020();
                            show_content6_2020();

                  });
				  $('.year_VP_'+VP_year[1]).on('click', function (evt) {
                            document.location.href = '#vebirars6_view';

                            for(r = 1; r <= vebinar6_name_2020.length; r++){
                               $('.block_video_preview6 .preview_vebinar6_'+r+'_2020').remove();
                            }
							for(i = 1; i <= vebinar6_name_2019.length; i++){
                               $('.block_video_preview6 .preview_vebinar6_'+i+'_2019').remove();
                            }
                            for(d = 1; d <= vebinar6_name_2017.length; d++){
                               $('.block_video_preview6 .preview_vebinar6_'+d+'_2017').remove();
                            }
                            for(k = 1; k <= vebinar6_name_2015.length; k++){
                               $('.block_video_preview6 .preview_vebinar6_'+k+'_2015').remove();
                            }
                            $('#pagination_VP').empty();
                            vebinar6_1_2019();
                            preview_vebinars6_2019();
                            show_all6_2019();
                            preview_opacity6_2019();
                            show_content6_2019();

                  });
                  $('.year_VP_'+VP_year[3]).on('click', function (evt) {
                            document.location.href = '#vebirars6_view';


                            for(r = 1; r <= vebinar6_name_2020.length; r++){
                               $('.block_video_preview6 .preview_vebinar6_'+r+'_2020').remove();
                            }
							for(i = 1; i <= vebinar6_name_2019.length; i++){
                               $('.block_video_preview6 .preview_vebinar6_'+i+'_2019').remove();
                            }
                            for(d = 1; d <= vebinar6_name_2017.length; d++){
                               $('.block_video_preview6 .preview_vebinar6_'+d+'_2017').remove();
                            }
                            for(k = 1; k <= vebinar6_name_2015.length; k++){
                               $('.block_video_preview6 .preview_vebinar6_'+k+'_2015').remove();
                            }

                            $('#pagination_VP').empty();
                            vebinar6_1_2015();
                            preview_vebinars6_2015();
                            show_all6_2015();
                            preview_opacity6_2015();
                            show_content6_2015();

                  });



                  /* Выводим подсказки */

              $('.liteTooltip').liteTooltip();

    for(x = 1; x <= vebinar6_name_2017.length; x++) {
    $('.preview_vebinar6_'+x+'_2017').attr('data-tooltip-mouseover', vebinar6_name_2017[x-1]);
    }
}


















/* Вебинар 6-2_2017 */
function vebinar6_2_2017() {
  $('#video_conf2').css({'background-size':'cover','background-image':'url(images/covers/b_6_2_2017.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/176IW8D-ZJM');

  $('.heading_video2').html(vebinar6_name_2017[1]);
  $('#txt_author_conf2').html('Илья Савинов');
    $('#txt_video_desc_conf2').html('');

}

/* Вебинар 6-3_2017 */
function vebinar6_3_2017() {
  $('#video_conf2').css({'background-size':'cover','background-image':'url(images/covers/b_6_3_2017.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/PkCyB231RY4');

  $('.heading_video2').html(vebinar6_name_2017[2]);
  $('#txt_author_conf2').html('Валентина Митрофанова');
    $('#txt_video_desc_conf2').html('');

}

/* Вебинар 6-4_2017 */
function vebinar6_4_2017() {
  $('#video_conf2').css({'background-size':'cover','background-image':'url(images/covers/b_6_4_2017.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/5GXWT-OImpA');


  $('.heading_video2').html(vebinar6_name_2017[3]);
  $('#txt_author_conf2').html('Валентина Митрофанова');
    $('#txt_video_desc_conf2').html('');

}

/* Вебинар 6-5_2017 */
function vebinar6_5_2017() {
  $('#video_conf2').css({'background-size':'cover','background-image':'url(images/covers/b_6_5_2017.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/b_7jR-KYPvI');

  $('.heading_video2').html(vebinar6_name_2017[4]);
  $('#txt_author_conf2').html('Ирина Хакамада');
    $('#txt_video_desc_conf2').html('');
}

/* Вебинар 6-6_2017 */
function vebinar6_6_2017() {
  $('#video_conf2').css({'background-size':'cover','background-image':'url(images/covers/b_6_6_2017.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/itJC8HAc3-s');

  $('.heading_video2').html(vebinar6_name_2017[5]);
  $('#txt_author_conf2').html('Ирина Хакамада');
    $('#txt_video_desc_conf2').html('');
}

/* Вебинар 6-7_2017 */
function vebinar6_7_2017() {
  $('#video_conf2').css({'background-size':'cover','background-image':'url(images/covers/b_6_7_2017.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/Vd43Sb86z7s');


  $('.heading_video2').html(vebinar6_name_2017[6]);
  $('#txt_author_conf2').html('Ильяс Зингер');
    $('#txt_video_desc_conf2').html('');
}

/* Вебинар 6-8_2017 */
function vebinar6_8_2017() {
  $('#video_conf2').css({'background-size':'cover','background-image':'url(images/covers/b_6_8_2017.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/QUCpO7GiAcQ');

  $('.heading_video2').html(vebinar6_name_2017[7]);
  $('#txt_author_conf2').html('Ильяс Зингер');
    $('#txt_video_desc_conf2').html('');
  
}

/* Вебинар 6-9_2017 */
function vebinar6_9_2017() {
  $('.video2').css({'background-size':'cover','background-image':'url(images/covers/b_5_9_2017.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/CnktLZca_fE');

  $('.heading_video2').html(vebinar6_name_2017[8]);
  $('.txt_author2').html('Владимир Барзуков');
    $('.txt_video_desc2').html('');

}

/* Вебинар 6-10_2017 */
function vebinar6_10_2017() {
  $('#video_conf2').css({'background-size':'cover','background-image':'url(images/covers/b_6_10_2017.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/gnaDFyZ9tCs');

  $('.heading_video2').html(vebinar6_name_2017[9]);
  $('#txt_author_conf2').html('Владимир Барзуков');
    $('#txt_video_desc_conf2').html('');


}







/*обнуление прозрачности у превьюшек*/
function preview_opacity6_2017() {


for(i = 1; i <= vebinar6_name_2017.length; i++) {
    $('.preview_vebinar6_'+i+'_2017').css({'opacity':'80%'});
    $('.preview_vebinar6_'+i+'_2017').on('click', function (evt) {
    $(this).css({'opacity':'50%'});
  });
}
}














var vebinar6_name_2015 = [
'3&nbsp;причины ухода клиентов к&nbsp;конкурентам на&nbsp;примере компании ИНВИТРО',
'Методология продаж на&nbsp;рынке B2B',
'Стратегия низких цен: как работать с&nbsp;минимальной маржой',
'Стратегия низких цен: ключевые факторы успеха',
'Как бороться с&nbsp;демпингом: факторы восприятия цены на&nbsp;товар в&nbsp;B2С сегменте ',
'Как бороться с&nbsp;демпингом: факторы восприятия цены на&nbsp;товар в&nbsp;B2B сегменте',
'Концепция мультиканальности OMNI-channel. Часть 2',
'Онлайн-обучение сотрудников: разработка, команда и&nbsp;реализация',
'Преимущества онлайн-обучения для сотрудников компании',
'Примеры вирусной рекламы: плохой и&nbsp;хорошей',
'Нестандартные методы мотивации сотрудников, о&nbsp;которых интересно узнать',
'Управление возможными сделками: этапы продаж и&nbsp;примеры',
'Работа с&nbsp;поставщиками: собственный склад или удаленный? Плюсы и&nbsp;минусы',
'Создание клуба клиентов',
'Категорийный менеджмент: 5&nbsp;правил управления товарными категориями',
'Работа с&nbsp;возражением &laquo;дорого&raquo;: правильные уточняющие вопросы',
'Эффективный подбор персонала: кейс компании Билайн. Часть 1',
'Реалии российского бизнеса от&nbsp;Дмитрия Потапенко',
'Как заставить сотрудников работать с&nbsp;CRM на&nbsp;примере Microsoft',
'Программа лояльности клиентов: каналы и&nbsp;принципы коммуникации',
'Как увеличить продажи на&nbsp;40% с&nbsp;помощью правильной системы лояльности',
'Расширение категорий товаров на&nbsp;практике. Тонкости и&nbsp;нюансы работы категорийного менеджера',
'Выступление Майкла Бэнга',
];

/* Выводим все превьюшки */
var vebinar6_count_2015 = vebinar6_name_2015.length;


/* Вебинар 6-1_2015 */
function vebinar6_1_2015() {


                    current_VP_year = VP_year[3];

  $('#video_conf2').css({'background-size':'cover','background-image':'url(images/covers/b_6_1_2015.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://www.youtube.com/watch?v=v0E0wRq4i9A');
                    $('.heading_video2').html(vebinar6_name_2015[0]);
  $('#txt_author_conf2').html('Андрей Войнов');
    $('#txt_video_desc_conf2').html('');
                   

                  $('.preview_vebinar6_1_2015').css({'opacity':'50%'});

}



/* Выводим все превьюшки */
function preview_vebinars6_2015() {
                      var preview_vebinar6_2015 = $();
                      for(x = 1; x <= vebinar6_name_2015.length; x++) {
                      preview_vebinar6_2015 = preview_vebinar6_2015.add("<div></div>", {"class" :"video_preview preview_vebinar6_"+x+'_2015'+" liteTooltip"});
                      }
                      $('.block_video_preview6').prepend(preview_vebinar6_2015);


                  $(document).ready(function(){
                    $('.block_video_preview6 .video_preview').click(function(){
                        var clicked = this;
                         $('.block_video_preview6 .video_preview').each(function(i){
                          if (this == clicked && i <= vebinar6_name_2015.length){
                            i = i+1;
                            var vebinar_show = eval('vebinar6_'+i+'_2015');
                            $(vebinar_show);
                            preview_opacity6_2015();
                            document.location.href = '#vebirars6_view';
                            var vebinar_opacity = '.preview_vebinar6_'+i+'_2015';
                            $('vebinar_opacity').css({'opacity':'50%'});

                          }

                        });
                       });
                  });



}

function show_all6_2015() {
                  /* Показываем кнопку Show all */
                  if(vebinar6_name_2015.length>9){
                    vebinar6_count_2015 = vebinar6_count_2015 + 1;
                      $('.video_show_all6').css({'display':'flex'});
                      for(x = 11; x <= vebinar6_count_2015; x++) {
                      $('.preview_vebinar6_'+x+'_2015').css({'display':'none'});
                      }
                    }

                      $('.video_show_all6').on('click', function (evt) {
                        $('.container-vp').css({'min-height':'900px'});
                      vebinar6_count_2015 = vebinar6_count_2015 + 1;
                      for(x = 11; x <= vebinar6_count_2015; x++) {
                      $('.preview_vebinar6_'+x+'_2015').css({'display':'block'});
                      }
                      $(this).css({'display':'none'});
                    });
}

/* меняем контент по клику по превьюшкам + меняем прозрачность*/
function show_content6_2015() {
                  $(document).ready(function(){
                    $('.block_video_preview6 .video_preview').click(function(){
                        var clicked = this;
                         $('.block_video_preview6 .video_preview').each(function(i){
                          if (this == clicked && i <= vebinar6_name_2015.length){
                            i = i+1;
                            var vebinar_show = eval('vebinar6_'+i+'_2015');
                            $(vebinar_show);
                            preview_opacity6_2015();
                            document.location.href = '#vebirars6_view';
                            var vebinar_opacity = '.preview_vebinar6_'+i+'_2015';
                            $('vebinar_opacity').css({'opacity':'50%'});

                          }

                        });
                       });
                  });



                       var years_pages = $();
                       $('.container-vp h1.header_std').text('Воронка продаж 2015');
                       years_pages = years_pages.add('<div class=year_pagination>Год конференции:</div>').addClass('name');
                      for(x = 0; x < VP_year.length; x++) {
                      if(VP_year[x]==current_VP_year){
                      years_pages = years_pages.add('<div class=year_pagination_active>'+VP_year[x]+'</div>', {"class" :"year_pagination_active"});
                      } 
                      else{
                      years_pages = years_pages.add('<div class="year_pagination year_VP_'+VP_year[x]+'">'+VP_year[x]+'</div>');
                      }
                    }
                  $('#pagination_VP').append(years_pages);

                  $('.year_VP_'+VP_year[0]).on('click', function (evt) {
                            document.location.href = '#vebirars6_view';

                            for(r = 1; r <= vebinar6_name_2020.length; r++){
                               $('.block_video_preview6 .preview_vebinar6_'+r+'_2020').remove();
                            }
							for(i = 1; i <= vebinar6_name_2019.length; i++){
                               $('.block_video_preview6 .preview_vebinar6_'+i+'_2019').remove();
                            }
                            for(d = 1; d <= vebinar6_name_2017.length; d++){
                               $('.block_video_preview6 .preview_vebinar6_'+d+'_2017').remove();
                            }
                            for(k = 1; k <= vebinar6_name_2015.length; k++){
                               $('.block_video_preview6 .preview_vebinar6_'+k+'_2015').remove();
                            }
                            $('#pagination_VP').empty();
                            vebinar6_1_2020();
                            preview_vebinars6_2020();
                            show_all6_2020();
                            preview_opacity6_2020();
                            show_content6_2020();

                  });
				  
				  $('.year_VP_'+VP_year[1]).on('click', function (evt) {
                            document.location.href = '#vebirars6_view';

                            for(r = 1; r <= vebinar6_name_2020.length; r++){
                               $('.block_video_preview6 .preview_vebinar6_'+r+'_2020').remove();
                            }
							for(i = 1; i <= vebinar6_name_2019.length; i++){
                               $('.block_video_preview6 .preview_vebinar6_'+i+'_2019').remove();
                            }
                            for(d = 1; d <= vebinar6_name_2017.length; d++){
                               $('.block_video_preview6 .preview_vebinar6_'+d+'_2017').remove();
                            }
                            for(k = 1; k <= vebinar6_name_2015.length; k++){
                               $('.block_video_preview6 .preview_vebinar6_'+k+'_2015').remove();
                            }
                            $('#pagination_VP').empty();
                            vebinar6_1_2019();
                            preview_vebinars6_2019();
                            show_all6_2019();
                            preview_opacity6_2019();
                            show_content6_2019();

                  });
                  $('.year_VP_'+VP_year[2]).on('click', function (evt) {
                            document.location.href = '#vebirars6_view';


                            for(r = 1; r <= vebinar6_name_2020.length; r++){
                               $('.block_video_preview6 .preview_vebinar6_'+r+'_2020').remove();
                            }
							for(i = 1; i <= vebinar6_name_2019.length; i++){
                               $('.block_video_preview6 .preview_vebinar6_'+i+'_2019').remove();
                            }
                            for(d = 1; d <= vebinar6_name_2017.length; d++){
                               $('.block_video_preview6 .preview_vebinar6_'+d+'_2017').remove();
                            }
                            for(k = 1; k <= vebinar6_name_2015.length; k++){
                               $('.block_video_preview6 .preview_vebinar6_'+k+'_2015').remove();
                            }

                            $('#pagination_VP').empty();
                            vebinar6_1_2017();
                            preview_vebinars6_2017();
                            show_all6_2017();
                            preview_opacity6_2017();
                            show_content6_2017();

                  });



                  /* Выводим подсказки */

              $('.liteTooltip').liteTooltip();

    for(x = 1; x <= vebinar6_name_2015.length; x++) {
    $('.preview_vebinar6_'+x+'_2015').attr('data-tooltip-mouseover', vebinar6_name_2015[x-1]);
    }
}


















/* Вебинар 6-2_2015 */
function vebinar6_2_2015() {
  $('#video_conf2').css({'background-size':'cover','background-image':'url(images/covers/b_6_2_2015.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/hQEV3QHVidw');

  $('.heading_video2').html(vebinar6_name_2015[1]);
  $('#txt_author_conf2').html('Владимир Средников');
    $('#txt_video_desc_conf2').html('');

}

/* Вебинар 6-3_2015 */
function vebinar6_3_2015() {
  $('#video_conf2').css({'background-size':'cover','background-image':'url(images/covers/b_6_3_2015.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/DNnvVqsmo98');

  $('.heading_video2').html(vebinar6_name_2015[2]);
  $('#txt_author_conf2').html('Дмитрий Дмитриев');
    $('#txt_video_desc_conf2').html('');

}

/* Вебинар 6-4_2015 */
function vebinar6_4_2015() {
  $('#video_conf2').css({'background-size':'cover','background-image':'url(images/covers/b_6_4_2015.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/n85DXfZ-n5A');


  $('.heading_video2').html(vebinar6_name_2015[3]);
  $('#txt_author_conf2').html('Дмитрий Левицкий');
    $('#txt_video_desc_conf2').html('');

}

/* Вебинар 6-5_2015 */
function vebinar6_5_2015() {
  $('#video_conf2').css({'background-size':'cover','background-image':'url(images/covers/b_6_5_2015.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/gu6cZz-jnzo');

  $('.heading_video2').html(vebinar6_name_2015[4]);
  $('#txt_author_conf2').html('Дмитрий Дмитриев');
    $('#txt_video_desc_conf2').html('');
}

/* Вебинар 6-6_2015 */
function vebinar6_6_2015() {
  $('#video_conf2').css({'background-size':'cover','background-image':'url(images/covers/b_6_6_2015.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/7iZgYN9UPpM');

  $('.heading_video2').html(vebinar6_name_2015[5]);
  $('#txt_author_conf2').html('Иван Никитичев');
    $('#txt_video_desc_conf2').html('');
}

/* Вебинар 6-7_2015 */
function vebinar6_7_2015() {
  $('#video_conf2').css({'background-size':'cover','background-image':'url(images/covers/b_6_7_2015.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/mgeK5iycUpE');


  $('.heading_video2').html(vebinar6_name_2015[6]);
  $('#txt_author_conf2').html('Андрей Осокин');
    $('#txt_video_desc_conf2').html('');
}

/* Вебинар 6-8_2015 */
function vebinar6_8_2015() {
  $('#video_conf2').css({'background-size':'cover','background-image':'url(images/covers/b_6_8_2015.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/lbdkGnSBEcI');

  $('.heading_video2').html(vebinar6_name_2015[7]);
  $('#txt_author_conf2').html('Михаил Протасов');
    $('#txt_video_desc_conf2').html('');
  
}

/* Вебинар 6-9_2015 */
function vebinar6_9_2015() {
  $('#video_conf2').css({'background-size':'cover','background-image':'url(images/covers/b_6_9_2015.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/TTaHOQbg5CI');

  $('.heading_video2').html(vebinar6_name_2015[8]);
  $('.txt_author2').html('Михаил Протасов');
    $('.txt_video_desc2').html('');

}

/* Вебинар 6-10_2015 */
function vebinar6_10_2015() {
  $('#video_conf2').css({'background-size':'cover','background-image':'url(images/covers/b_6_10_2015.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/XgM1a5HBZbY');

  $('.heading_video2').html(vebinar6_name_2015[9]);
  $('#txt_author_conf2').html('Андрей Войнов');
    $('#txt_video_desc_conf2').html('');


}

/* Вебинар 6-11_2015 */
function vebinar6_11_2015() {
  $('#video_conf2').css({'background-size':'cover','background-image':'url(images/covers/b_6_11_2015.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/sLXWfRpKFJU');

  $('.heading_video2').html(vebinar6_name_2015[10]);
  $('#txt_author_conf2').html('Александр Саяпин');
    $('#txt_video_desc_conf2').html('');
 
}

/* Вебинар 6-12_2015 */
function vebinar6_12_2015() {
  $('#video_conf2').css({'background-size':'cover','background-image':'url(images/covers/b_6_12_2015.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/7LF4Jt7kXL8');

  $('#txt_author_conf2').html('Владимир Средников');
    $('#txt_video_desc_conf2').html('');

  $('.heading_video2').html(vebinar6_name_2015[11]);

}

/* Вебинар 6-13_2015 */
function vebinar6_13_2015() {
  $('#video_conf2').css({'background-size':'cover','background-image':'url(images/covers/b_6_13_2015.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/7mJ5k_DgdEQ');

  $('.heading_video2').html(vebinar6_name_2015[12]);
  $('#txt_author_conf2').html('Леонид Довладбегян');
    $('#txt_video_desc_conf2').html('');


}
/* Вебинар 6-14_2015 */
function vebinar6_14_2015() {
  $('#video_conf2').css({'background-size':'cover','background-image':'url(images/covers/b_6_14_2015.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/2yxyiOokeBU');

  $('.heading_video2').html(vebinar6_name_2015[13]);
  $('#txt_author_conf2').html('Дмитрий Перунов');
    $('#txt_video_desc_conf2').html('');


}
/* Вебинар 6-15_2015 */
function vebinar6_15_2015() {
  $('#video_conf2').css({'background-size':'cover','background-image':'url(images/covers/b_6_15_2015.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/Gq4i8E41D5Q');

  $('.heading_video2').html(vebinar6_name_2015[14]);
  $('#txt_author_conf2').html('Леонид Довладбегян');
    $('#txt_video_desc_conf2').html('');


}
/* Вебинар 6-16_2015 */
function vebinar6_16_2015() {
  $('#video_conf2').css({'background-size':'cover','background-image':'url(images/covers/b_6_16_2015.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/Cyt3f5dx7tc');

  $('.heading_video2').html(vebinar6_name_2015[15]);
  $('#txt_author_conf2').html('Иван Никитичев');
    $('#txt_video_desc_conf2').html('');


}
/* Вебинар 6-17_2015 */
function vebinar6_17_2015() {
  $('#video_conf2').css({'background-size':'cover','background-image':'url(images/covers/b_6_17_2015.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/kutKWTjU_UI');

  $('.heading_video2').html(vebinar6_name_2015[16]);
  $('#txt_author_conf2').html('Илья Федосов');
    $('#txt_video_desc_conf2').html('');


}
/* Вебинар 6-18_2015 */
function vebinar6_18_2015() {
  $('#video_conf2').css({'background-size':'cover','background-image':'url(images/covers/b_6_18_2015.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/pVtaQzwJqUM');

  $('.heading_video2').html(vebinar6_name_2015[17]);
  $('#txt_author_conf2').html('Дмитрий Потапенко');
    $('#txt_video_desc_conf2').html('');


}
/* Вебинар 6-19_2015 */
function vebinar6_19_2015() {
  $('#video_conf2').css({'background-size':'cover','background-image':'url(images/covers/b_6_19_2015.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/8ykBrfTmBWk');

  $('.heading_video2').html(vebinar6_name_2015[18]);
  $('#txt_author_conf2').html('Владимир Средников');
    $('#txt_video_desc_conf2').html('');


}
/* Вебинар 6-20_2015 */
function vebinar6_20_2015() {
  $('#video_conf2').css({'background-size':'cover','background-image':'url(images/covers/b_6_20_2015.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/rdkTEm7CQGs');

  $('.heading_video2').html(vebinar6_name_2015[19]);
  $('#txt_author_conf2').html('Дмитрий Перунов');
    $('#txt_video_desc_conf2').html('');


}
/* Вебинар 6-21_2015 */
function vebinar6_21_2015() {
  $('#video_conf2').css({'background-size':'cover','background-image':'url(images/covers/b_6_21_2015.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/5iFxIzGHc');

  $('.heading_video2').html(vebinar6_name_2015[20]);
  $('#txt_author_conf2').html('Дмитрий Перунов');
    $('#txt_video_desc_conf2').html('');


}
/* Вебинар 6-22_2015 */
function vebinar6_22_2015() {
  $('#video_conf2').css({'background-size':'cover','background-image':'url(images/covers/b_6_22_2015.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/38cewmjDlxo');

  $('.heading_video2').html(vebinar6_name_2015[21]);
  $('#txt_author_conf2').html('Леонид Довладбегян');
    $('#txt_video_desc_conf2').html('');


}
/* Вебинар 6-23_2015 */
function vebinar6_23_2015() {
  $('#video_conf2').css({'background-size':'cover','background-image':'url(images/covers/b_6_23_2015.jpg?1'});
  $('.fancybox-media2').attr( 'href','https://youtu.be/srUr5GWOxFo');

  $('.heading_video2').html(vebinar6_name_2015[22]);
  $('#txt_author_conf2').html('');
    $('#txt_video_desc_conf2').html('');


}






/*обнуление прозрачности у превьюшек*/
function preview_opacity6_2015() {


for(i = 1; i <= vebinar6_name_2015.length; i++) {
    $('.preview_vebinar6_'+i+'_2015').css({'opacity':'80%'});
    $('.preview_vebinar6_'+i+'_2015').on('click', function (evt) {
    $(this).css({'opacity':'50%'});
  });
}
}



















/*tooltip*/

!function($, b, c, d) {
    'use strict';
    $.fn.liteTooltip = function(c) {
        var g, e = $(this),
            f = $.extend({}, $.fn.liteTooltip.default, c);
    e.each(function() {
      
      var evnt = ( typeof $(this).attr('data-tooltip-mouseover') !== 'undefined' ) ? 'mouseover' : ( typeof $(this).attr('data-tooltip-focus') !== 'undefined' ) ? 'focus' : 'mouseover';
      'mouseover' === evnt ? g = 'mouseout' : 'focus' === evnt && (g = 'blur')
      
            $(this).on(evnt, function() {
        $.fn.liteTooltip.removeElem(f)
                function m($) {
                    'top' === $.position ? r($) : 'left' === $.position ? p($) : 'right' === $.position ? o($) : 'bottom' === $.position ? q($) : n($), t($, i)
                }

                function n(c) {
                    function t($, b) {
                        'top' === $ ? (b.position = 'top', r(b)) : 'bottom' === $ ? (b.position = 'bottom', q(b)) : 'left' === $ ? (b.position = 'left', p(b)) : 'right' === $ && (b.position = 'right', o(b))
                    }
                    var d = {
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0
                        },
                        e = null,
                        g = 0,
                        h = c.triggerLeft - c.tlWidth + f.space;
                    h > g && (d.left = h);
                    var i = $(b).width(),
                        j = i - (c.triggerLeft + c.triggerW);
                    j > c.tlWidth && (d.right = j);
                    var k = c.triggerTop,
                        l = k;
                    l > c.tlHeight + f.space && (d.top = l);
                    var m = $(b).height(),
                        n = m - (c.triggerTop + c.triggerH);
                    n > c.tlHeight + f.space && (d.bottom = n);
                    var s = Math.max(d.left, d.right, d.top, d.bottom);
                    $.each(d, function($, b) {
                        b === s && (e = $)
                    }), t(e, c)
                }

                function o(c) {
                    var d = $(b).width(),
                        e = d - (c.triggerLeft + c.triggerW);
                    if (e < c.tlWidth + f.space) n(c);
                    else {
                        var g = u(c, 'sideRight'),
                            h = v(c);
                        s(h, g)
                    }
                }

                function p($) {
                    if ($.triggerLeft < $.tlWidth + f.space) n($);
                    else {
                        var b = u($, 'sideLeft'),
                            c = v($);
                        s(c, b)
                    }
                }

                function q(c) {
                    var d = $(b).height(),
                        e = d - (c.triggerTop + c.triggerH);
                    if (e < c.tlHeight + f.space) n(c);
                    else {
                        var g = u(c),
                            h = c.triggerTop + c.triggerH + f.space;
                        s(h, g)
                    }
                }

                function r($) {
                    if ($.triggerTop < $.tlHeight + f.space) n($);
                    else {
                        var b = u($),
                            c = $.triggerTop - $.tlHeight - f.space;
                        s(c, b)
                    }
                }

                function s(b, c) {
                    $('#tooltip').css({
                        top: b,
                        left: c
                    })
                }

                function t(b, c) {
                    c.bool ? 'top' === b.position ? 'left' === c.side ? (x('left', b), $('#tooltip').find('.tooltip-arrow').css({
                        left: b.triggerW / 2 - 8
                    })) : 'right' === c.side && (x('right', b), $('#tooltip').find('.tooltip-arrow').css({
                        left: b.tlWidth - (b.triggerW - 8)
                    })) : 'bottom' === b.position && ('left' === c.side ? (x('left', b), $('#tooltip').find('.tooltip-arrow').css({
                        left: b.triggerW / 2 - 8
                    })) : 'right' === c.side && (x('right', b), $('#tooltip').find('.tooltip-arrow').css({
                        left: b.triggerW + 8
                    }))) : x('center', b)
                }

                function u(c, d) {
                    if (d && 'sideLeft' === d) var e = c.triggerLeft - (c.tlWidth + f.space);
                    else if (d && 'sideRight' === d) var e = c.triggerLeft + (c.triggerW + f.space);
                    else var g = .5 * c.tlWidth - .5 * c.triggerW,
                        e = c.triggerLeft - g;
                    return e < 0 ? (e = c.triggerLeft, i.bool = !0, i.side = 'left') : e > $(b).width() && (e = $(b).width() - (c.triggerLeft + c.triggerW) - c.tlWidth, i.bool = !0, i.side = 'right'), e
                }

                function v($) {
                    var b = .5 * $.tlHeight - .5 * $.triggerH,
                        c = $.triggerTop - b;
                    return c < 0 && (c = $.triggerTop), c
                }

                function w() {
                    var b = $('<div class="tooltip animation-' + f.animation + '" id="tooltip"></div>');
                    $('body').append(b)
                }

                function x(b, c) {
                    var d, e;
                    'left' === b ? 'top' === c.position ? e = 'toptobottom' : 'bottom' === c.position && (e = 'bottomtotop') : 'right' === b ? 'top' === c.position || 'bottom' === c.position : b && 'center' !== b || ('top' === c.position ? e = 'toptobottom center' : 'bottom' === c.position && (e = 'bottomtotop center')), 'left' === c.position ? e = 'lefttoright' : 'right' === c.position && (e = 'righttoleft'), d = $('<div class="tooltip-arrow ' + e + ' "></div>'), $('#tooltip').append(d)
                }
                var c = $(this),
                    e = c.data( 'tooltip' + evnt[0].toUpperCase() + evnt.substring(1) ),
                    g = c.data('tooltipPosition') === d || '' === c.data('tooltipPosition') ? f.position : c.data('tooltipPosition'),
                    h = !1,
                    i = {
                        bool: !1,
                        side: ''
                    },
                    j = c.offset();       
                if (h = e !== d && '' !== e && null !== e) {
                    w();
                    var k = $('#tooltip');
                    k.html(e);
                    var l = {
                        triggerW: parseInt(c.width()) + parseInt(c.css('padding-left')) + parseInt(c.css('padding-right')),
                        triggerH: parseInt(c.height()) + parseInt(c.css('padding-top')) + parseInt(c.css('padding-bottom')),
                        triggerTop: j.top,
                        triggerLeft: j.left,
                        tlWidth: k.width() + parseInt(k.css('padding-left')) + parseInt(k.css('padding-right')),
                        tlHeight: k.height() + parseInt(k.css('padding-top')) + parseInt(k.css('padding-bottom')),
                        position: g
                    };
                    m(l)
                }
            }).on(g, function() {
                $.fn.liteTooltip.removeElem(f)
            })
        })
    }, $.fn.liteTooltip.removeElem = function(b) {
        $('body').find('#tooltip').length > 0 && $('#tooltip').removeClass('animation-' + b.animation).fadeOut(50).remove()
    }, $.fn.liteTooltip.default = {
        space: 20,
        animation: 'slide',
        position: 'top',
    }
}(jQuery, window, document);

