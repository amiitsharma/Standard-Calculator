let x=document.getElementById("d1").children;
let i,j,s=0,a,b,c;
let num1=0,num2=0,op;
function fun(e)
{
    let v=e.target.innerHTML;
    if(v>="0"&&v<="9"&&x[0].innerHTML=="0")
    x[0].innerHTML=v;
    else
    {
        x[0].innerHTML=x[0].innerHTML+v;
    }
    if(v!="&lt;-"&&v!="=")
    {
    if(v==="C")
    {
       num1=0;
       num2=0; 
      x[0].innerHTML="0";
      document.querySelector("p span").innerHTML="None";
      s=0;
    }
    if(x[0].innerHTML.length>=1)
    {
        if(v=="-"||v=="+"||v=="X"||v=="/")
        {
            op=v;
            x[0].innerHTML="0";
            s=1;
        }
    }
    if(v==="0"||v==="1"||v==="2"||v==="3"||v==="4"||v==="5"||v==="6"||v==="7"
    ||v==="8"||v==="9"||v==="+"||v==="-")
    {
     if(s==0)
    {   
    num1=+x[0].innerHTML;
    a=num1;
    }
    else if(s==1)
    {
    num2=+x[0].innerHTML;
    b=num2;
    }
    }
   }
   else
   {
       if(v=="=")
       {
           if(op=="+")
           {
             num1=num1+num2;  
           x[0].innerHTML=num1;
           }
           else if(op=="-")
           {
             num1=num1-num2;  
           x[0].innerHTML=num1;
           }      
           else if(op=="X")
           {
             num1=num1*num2;  
           x[0].innerHTML=num1;
           }      
           else if(op=="/")
           {
             num1=num1/num2;  
           x[0].innerHTML=num1;
           }  
           c=num1;
           document.querySelector("p span").innerHTML=a+op+b+"="+c;    
           a=num1;      
           s=0;
        }
        else if(v=="&lt;-")
        {
            if(s==0)
            {
            if(Math.floor(num1)==Math.ceil(num1))    
            num1=Math.floor(num1/10);
            else
            num1=Math.floor(num1);    
            a=num1;
            x[0].innerHTML=num1;
            }
            else
            {
                if(Math.floor(num2)==Math.ceil(num2))    
                num2=Math.floor(num2/10);
                else
                num2=Math.floor(num2);  
                b=num2;  
                x[0].innerHTML=num2; 
            }
        }
   }
}
for(i=1;i<x.length;i++)
{
    let t=x[i].children;
    for(j=0;j<t.length;j++)
    {
        t[j].onclick=fun;
    }
}