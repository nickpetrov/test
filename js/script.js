$(function(){
     var loaded = parseInt(localStorage.getItem('loaded'), 10),
         loaded_numb = loaded?loaded+1:1;
     localStorage.setItem('loaded', loaded_numb);

     $('body').append('<p>This page was loaded by you '+loaded_numb+' times !');
     if (loaded_numb < 4)
     {
        alert("Александр Снитковский, г. Николаев, 3 курс ЧНУ.")
     }
});
