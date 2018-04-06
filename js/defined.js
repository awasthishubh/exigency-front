 var name, email, phno, dpos={}, dtitle, spos, sid, partners=[], items=[], area=[];

 $('#firstsub').click(function(event){
          event.preventDefault();   

        name=$('#name').val();
        email=$('#email').val();
        phno=$('#contnum').val();

        if(!name||!email||!phno){
          alert("Fill all info")
          return
        }
            
           $.ajax({
        type: 'POST',
        url: 'http://localhost:1337/area',
        
        beforeSend: function() {
            $(".btn").hide();
            $(".loading").show();
        }
    }).done(function(data) {  
        console.log(data);
        area=data;
        txt='<p><input name="area" type="radio" id="test1" /><label for="test1" style="font-size: 25px; color: black;">Green Circle</label></p>'
        for (var i = 0; i < area.length; i++) {
          ar=area[i];
          txt='<p><input name="area" type="radio" id="test'+i+'" /><label for="test'+i+'" style="font-size: 25px; color: black;">'+ar.title+'</label></p>';
        $("#gfrm").html($("#gfrm").html()+txt);
        area[i].pos.lat=parseFloat(area[i].pos.lat)
        area[i].pos.lng=parseFloat(area[i].pos.lng)   


        }

        map2(area)

        $(".btn").show();
        $(".submit-btn-loading").hide();
        $('#firstpage').hide('slow');
        $('#secondpage').show('slow');
        

    }).catch(function(err) {
        console.log(err);
        console.log("Sab galat hai");
        
        
    });




          

        })

        $('#secondsub').click(function(event){
          event.preventDefault();   
          if(!$("input[name=area]:checked").attr("id")){
            alert("Choose lcation")
            return
          }
          console.log("sd");

          i=parseInt($("input[name=area]:checked").attr("id").slice(4))
          spos=area[i].pos;
          sid=area[i].id;

          

          $('#secondpage').hide('slow');
          $('#secondpageb').show('slow');
        })

        $('#secondsubb').click(function(event){
          event.preventDefault();   
          console.log("sd");
          $('#secondpageb').hide('slow');
          $('#thirdpage').show('slow');
          dpos.lat=marker1.getPosition().lat()
          dpos.lng=marker1.getPosition().lng()
          dtitle=ttl;
        })




        $('#thirdsub').click(function(event){
          event.preventDefault();   
          console.log("sd");
          
          $.each($("input[name='item']:checked"), function () {
            items.push($(this).attr('id'));
            });

          $.ajax({
          type:'GET',
          url:'http://localhost:1337/mem/create',
          data: { 
          'name':name,
          'email':email,
          'dpos':dpos,
          'spos':spos,
          'sid':sid,
          'dtitle':dtitle,
          'phno':phno,
          'items':items,
          },
          beforeSend: function() {
              
              console.log("begoresend");
          }
          }).done(function(data){
            $('#thirdpage').hide('slow');
          $('#fifthpage').show('slow');
              console.log("sentdffd");
              console.log(data);
             
          })

        })

        $('#fourthsub').click(function(event){
          event.preventDefault();   
          console.log("sd");
          $('#firstpage').hide('slow');
          $('#secondpage').show('slow');
        })

        $('.btnn').click(function(event){
          event.preventDefault();   
          console.log("sd");
          $('.sub').hide('slow');
          $('#thirdpage').show('slow');
        })


          $('#os1').click(function(event){
          event.preventDefault();   
          console.log("sd");
          $('#thirdpage').hide('slow');
          $('#sub1').show('slow');
        })

          $('#os2').click(function(event){
          event.preventDefault();   
          console.log("sd");
          $('#thirdpage').hide('slow');
          $('#sub2').show('slow');
        })

          $('#os3').click(function(event){
          event.preventDefault();   
          console.log("sd");
          $('#thirdpage').hide('slow');
          $('#sub3').show('slow');
        })

          $('#os4').click(function(event){
          event.preventDefault();   
          console.log("sd");
          $('#thirdpage').hide('slow');
          $('#sub4').show('slow');
        })
          $('#os5').click(function(event){
          event.preventDefault();   
          console.log("sd");
          $('#thirdpage').hide('slow');
          $('#sub5').show('slow');
        })

          $('#os6').click(function(event){
          event.preventDefault();   
          console.log("sd");
          $('#thirdpage').hide('slow');
          $('#sub6').show('slow');
        })