 var name, email, phno, dpos={}, dtitle, spos, stitle, partners=[], items=[], area=[];

 $('#firstsub').click(function(event){
          event.preventDefault();   
            
           $.ajax({
        type: 'POST',
        url: 'http://172.17.28.151:1337/area',
        
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
          txt='<p><input name="area" type="radio" id="test'+ar.id+'" /><label for="test'+ar.id+'" style="font-size: 25px; color: black;">'+ar.title+'</label></p>';
        $("#gfrm").html($("#gfrm").html()+txt);
        area[i].pos.lat=parseFloat(area[i].pos.lat)
        area[i].pos.lng=parseFloat(area[i].pos.lng)   


        }

        map2(area)

        $(".btn").show();
        $(".submit-btn-loading").hide();
        $('#firstpage').hide('slow');
        $('#secondpage').show('slow');
        name=$('#name').val();
        email=$('#email').val();
        phno=$('#contnum').val();

    }).catch(function(err) {
        console.log(err);
        console.log("Sab galat hai");
        $("#submit-btn").show();
        $("#submit-btn-loading").hide();
        $('#username').val('');
        $('#song').val('');
        
    });




          

        })

        $('#secondsub').click(function(event){
          event.preventDefault();   
          console.log("sd");
          $('#secondpage').hide('slow');
          $('#thirdpage').show('slow');
          dpos.lat=marker1.getPosition().lat()
          dpos.lng=marker1.getPosition().lng()
          dtitle=ttl;
        })

        $('#thirdsub').click(function(event){
          event.preventDefault();   
          console.log("sd");
          $('#thirdpage').hide('slow');
          $('#fifthpage').show('slow');
          $.each($("input[name='item']:checked"), function () {
            items.push($(this).attr('id'));
            });
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