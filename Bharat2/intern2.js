function ctof()
{
    let a=parseInt(document.getElementById('i1').value);
    let p=((a*9)/5)+32;
    document.getElementById('i2').value=p;
}
function save()
{
    let x=parseInt(document.getElementById('s1').value);
    let y=parseInt(document.getElementById('s2').value);
    if(x==2&&y==1)
    {
        ctof();
    }
    else if(x==2&&y==3)
    {
        ctok();
    }
    else if(x==1&&y==2)
    {
        ftoc();
    }
    else if(x==1&&y==3)
    {
        ftok();
    }
    else if(x==3&&y==2)
    {
        ktoc();
    }
    else if(x==3&&y==1)
    {
        ktof();
    }
    else if(x==2&&y==2)
    {
        ctoc();
    }
    else if(x==1&&y==1)
    {
        ftof();
    }
    else if(x==3&&y==3)
    {
        ktok();
    }
}
function ctoc()
{
    let a=parseInt(document.getElementById('i1').value);
    document.getElementById('i2').value=a;
}
function ftof()
{
    let a=parseInt(document.getElementById('i1').value);
    document.getElementById('i2').value=a;
}
function ktok()
{
    let a=parseInt(document.getElementById('i1').value);
    document.getElementById('i2').value=a;
}
function ctok()
{
    let a=parseInt(document.getElementById('i1').value);
    let p=a+273.15;
    document.getElementById('i2').value=p;
}
function ftoc()
{
    let x=parseInt(document.getElementById('i1').value);
    let p=((x-32)*5)/9;
    document.getElementById('i2').value=p;
}
function ftok()
{
    let x=parseInt(document.getElementById('i1').value);
    let p=((x-32)*5)/9+273.15;
    document.getElementById('i2').value=p;
}
function ktoc()
{
    let z=parseInt(document.getElementById('i1').value);
    let p=(z-273.15);
    document.getElementById('i2').value=p;
}
function ktof()
{
    let z=parseInt(document.getElementById('i1').value);
    let p=((z-273.15)*9)/5+32;
    document.getElementById('i2').value=p;
}