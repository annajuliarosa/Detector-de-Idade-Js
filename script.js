function verificar(){
      var data = new Date()
      var ano = data.getFullYear()
      var fAno = document.getElementById("txtAno")
      var res = document.getElementById("res")
         if (fAno.value.lenght == 0 || fAno.value > ano){
            window.alert("Verifique novamente!")

            }else{
               var fSex= document.getElementsByName("radioSex")
               var idade = ano - Number(fAno.value)
               var genero = ""

               var img = document.createElement('img')
               img.setAttribute('id', 'foto')
                  if (fSex[0].checked){
                     genero= "Homem"
                     if (idade>=0 && idade<10){
                        img.setAttribute('src', 'Menino.png')
                     }else if(idade< 21){
                        img.setAttribute('src', 'JovemHomem.png')
                     }else if (idade<50){
                        img.setAttribute('src', 'Homem.png')
                     }else{
                        img.setAttribute('src', 'HomemIdoso.png')
                     }
                  }else if (fSex[1].checked){
                        genero= "Mulher"

                     if (idade>=0 && idade<10){
                        img.setAttribute('src', 'Menina.png')    
                     }else if(idade< 21){
                        img.setAttribute('src', 'JovemMulher.png') 
                     }else if (idade<50){
                        img.setAttribute('src', 'Mulher.png') 
                     }else{
                        img.setAttribute('src', 'MulherIdosa.png') 
                     }
                  }

                        res.innerHTML=`Detectamos ${genero} com ${idade} anos`
                        res.appendChild(img)

                  }
    
   }
  