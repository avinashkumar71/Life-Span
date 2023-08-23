let isopen = false;
        let config = document.getElementById('config');
        let content = document.getElementById('db');
        config.addEventListener('click',function(){
            if(isopen){
                content.classList.add('hide');
            }else{
                content.classList.remove('hide');
            }
            isopen = ! isopen;
        })

        let btn = document.getElementById('btn');
        let enter = document.getElementById('enter');
        let here = document.getElementById('here');
        let enter_date ,current_date;
        let arr;
        let enter_year,enter_month,enter_day;
        let y,m,d,h,min,s;

        btn.addEventListener('click',function(){
            
            content.classList.add('hide');
            enter_date  = document.getElementById('dob-data').value;

            current_date = new Date();

            arr = enter_date.split('-');
            enter_year = Number(arr[0]);
            enter_month = Number(arr[1]);
            enter_day = Number(arr[2]);

            y = current_date.getFullYear() - enter_year;
            m = (current_date.getMonth()+1) - enter_month; 
            d = current_date.getDate() - enter_day;
            h = current_date.getHours();
            min = current_date.getMinutes();
            s = current_date.getSeconds();
            document.getElementById('y').innerText = y;
            document.getElementById('m').innerText = m;
            document.getElementById('d').innerText = d;
            document.getElementById('h').innerText = h;
            document.getElementById('min').innerText = min;
            document.getElementById('s').innerText=s;


            setInterval(() => {
                s = s+1;
                if(s<10){
                    document.getElementById('s').innerText='0'+String(s);
                }else{
                    document.getElementById('s').innerText=s;
                }
                if(s==60){
                    document.getElementById('s').innerText = '00';
                    min=min +1;
                    document.getElementById('min').innerText = min;
                    s=0;
                    if(min<60){
                        document.getElementById('min').innerText = min;
                    }else{
                        min=0;
                        document.getElementById('min').innerText = min;
                        h = h+1;
                        if(h<24){
                            document.getElementById('h').innerText = h;
                        }else{
                            h=0;
                            document.getElementById('h').innerText = h;
                            d = d+1;
                            if(d<31){
                                document.getElementById('d').innerText = d;
                            }else{
                                d=0;
                                document.getElementById('d').innerText = d;
                                m = m+1;
                                if(m<12){
                                    document.getElementById('m').innerText = m;
                                }else{
                                    m=0;
                                    document.getElementById('m').innerText = m;
                                    y = y+1;
                                    document.getElementById('y').innerText = y;
                                }
                            }
                        }
                    }

                }
                
            }, 1000);
            
            enter.classList.add('hide');
            here.classList.remove('hide');
        })
