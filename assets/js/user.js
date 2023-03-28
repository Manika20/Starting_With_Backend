let checkbox  = document.getElementsByClassName('checkbox');
let deletetask = document.getElementById('delete');
for(let i=0;i<checkbox.length;i++)
{
checkbox[i].addEventListener('click',function(event)
{
    //event.preventDefault();
    //alert("done");
    //alert(checkbox[i].dataset.done);
    $.ajax({
        method: 'GET',
        url: "/donetask/?id="+checkbox[i].dataset.id+'&done='+checkbox[i].dataset.done , 
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });

})
}
deletetask.addEventListener('click',function()
{
    //alert('started');
    //alert(checkbox.length);
    //console.log(checkbox.length);
    for(let i=0;i<checkbox.length;i++)
    {
        if(checkbox[i].checked==true)
        {
            //alert(checkbox[i].dataset.id);
            //alert("to be delted!!")
            $.ajax({
                method: 'GET',
                url: "/deletetask/?id="+checkbox[i].dataset.id ,
                success: function(data){
                  //do something with the data via front-end framework
                  location.reload();
                }
              });
        }
    }
})
