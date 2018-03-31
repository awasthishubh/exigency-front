 var name, email, phno, dpos={}, dtitle, spos, sid, partners=[], items=[], area=[], mem=[], mmi=[];

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
            alert("Choose location")
            return
          }
          console.log("sded");

          $.ajax({
        type: 'POST',
        url: 'http://localhost:1337/mem',
        
        beforeSend: function() {
            $(".btn").hide();
            $(".loading").show();
        }
    }).done(function(data) {  
        console.log(data);
        
        for (var i = 0; i < data.length; i++) {
              if(data[i].sid==sid)
              mem.push(data[i]);
            } 
            console.log("mem");
        console.log(mem);
        for (var i = 0; i < mem.length; i++) {
              txt='<tr><td><input name="mem" type="radio" id="memm'+i+'"/><label for="memm'+i+'"></label></td><td>'+mem[i].name+'</td><td>'+mem[i].dtitle+'</td></tr';
              $("#mem").html($("#mem").html()+txt);
              mem[i].dpos.lat=parseFloat(mem[i].dpos.lat)
              mem[i].dpos.lng=parseFloat(mem[i].dpos.lng)
            }  

        map3(mem);  

    }).catch(function(err) {
        console.log(err);
        console.log("Sab galat hai");
      });



          i=parseInt($("input[name=area]:checked").attr("id").slice(4))
          spos=area[i].pos;
          sid=area[i].id;

          

          $('#secondpage').hide('slow');
          $('#secondpageb').show('slow');
          $(".btn").show();
        })

        $('#secondsubb').click(function(event){
          event.preventDefault();   
          i=parseInt($("input[name=mem]:checked").attr("id").slice(4))
          console.log(mem[i]);
          mmi=mem[i];
          $('#mememail').html(mem[i].email);
          $('#memname').html(mem[i].name);
          $('#memphno').html(mem[i].phno);
          
          if(mem[i].items!=null){
          for (var j = 0; j < mem[i].items.length; j++) {
            id="label"+mem[i].items[j ].slice(4)
            console.log(id);
            txt='<div class="col m6 s12">'+$('#'+id).html()+'</div>';
            $('#memitem').html($('#memitem').html()+txt);    
            }
          }
          else $('#memitem').html('No ResourseS Available')
          items=mmi.items;

          console.log("sd");
          $('#secondpageb').hide('slow');
          $('#secondpagec').show('slow');
          
        })

        $('#secondsubc').click(function(event){
          event.preventDefault();   
          console.log("sd");
          $('#secondpagec').hide('slow');
          $('#thirdpage').show('slow');
          
        })




        $('#thirdsub').click(function(event){
          event.preventDefault();   
          console.log("sd");

          if(mmi.team==null) mmi.team=[];
          if(items==null) items=[];
          
          $.each($("input[name='item']:checked"), function () {
            items.push($(this).attr('id'));
            });
          memb={'name':name, 'email':email, 'phno':phno};

          mmi.team.push(memb);

          $.ajax({
          type:'GET',
          url:'http://localhost:1337/mem/create',
          data: { 
          'team':mmi.tea,
          'items':items
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