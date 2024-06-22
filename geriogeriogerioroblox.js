var geriorobloxian = document.getElementById('geriogeriogerioroblox');
document.ajax({
                type:"get",  // fetch의 method 기능
                url: "https://thumbnails.roblox.com/v1/users/avatar?userIds=393347367&size=100x100&format=Png&isCircular=false", // json 넣어놨음
                dataType:"json" 
   			   // 메타데이터 타입을 명시해주면, ajax가 자동으로 js오브젝트로 파싱해준다 

                // 성공
            }).done((abc)=>{  
                geriorobloxian.src = abc.imageUrl;
            })
/*https://thumbnails.roblox.com/v1/users/avatar?userIds=393347367&size=100x100&format=Png&isCircular=false*/