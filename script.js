let audioindex=0;
let audioElement=new Audio("MUsic/Song3.mp3")
let playb=document.getElementsByClassName("playb");
let songs=[{songName:"Asal Mein",filePath:"Music/Song1.mp3",coverPath:"song-1.jpg"},
{songName:"Ek Tarfa",filePath:"Music/Song2.mp3",coverPath:"song-2.jpg"},
{songName:"Hawa Banke",filePath:"Music/Song3.mp3",coverPath:"song-3.jpg"},
{songName:"Ye Baarish",filePath:"Music/Song4.mp3",coverPath:"song-4.jpg"},
{songName:"Excuses",filePath:"Music/Song5.mp3",coverPath:"song-5.jpg"}]
let j=0;
let aud=[]
let i=0



let master_play=$('#master-play');
let play_button=$('.subplay')
let l=play_button.length
master_play.on('click',function(){
    if(audioElement.paused||audioElement.currentTime<=0)
    {

master_play.removeClass('fa-circle-pause');
master_play.addClass('fa-circle-play');
audioElement.play();


    }
    else{
        
        master_play.removeClass('fa-circle-play');
        master_play.addClass('fa-circle-pause');
        audioElement.pause();   
    }
})
let pro=document.getElementById("myProgress");
audioElement.addEventListener('timeupdate',function(){
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    pro.value=progress;
})
pro.addEventListener('change',function(){
 audioElement.currentTime=(((pro.value)/100)*audioElement.duration);   
})
let leng=document.querySelectorAll('.playb').length
let k=0
for(k=0;k<leng;k++)
{
    document.querySelectorAll('.playb')[k].addEventListener('click',function()
    {   
        audioElement.currentTime=0;
        index=(document.querySelector('.playb')[k].getAttribute("id")).value
        let ind=parseInt(index)
        audioElement.src=`Music/Song${ind}.mp3`
        audioElement.play();
        console.log('hello')
    })
}


document.querySelectorAll('.playb')[i].addEventListener('click',function()
{
    
    /*if(audioElement.currentTime.paused||audioElement.currentTime<=0)
    {
        document.querySelectorAll('.playb')[i].classList.remove('fa-circle-pause');
        document.querySelectorAll('.playb')[i].classList.add('fa-circle-play')*/
        
     /*     
     }
    else 
    {
     audioElement.pause();   
        
      
        
    }*/
    

}
)           
                
                 
            

       