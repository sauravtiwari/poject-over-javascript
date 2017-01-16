 //function iseven(num)
 //{
   //  if(num%2==0)
     //{
     	//return true;
     //}
     //else
     	//return false;
  //}
// second method
function iseven(num)
{
	return num%2===0
}
// factorial problem
function factorial(num)
{
	if(num==0)
	return 1;
	else
	return num*factorial(num-1);
}
// replacing special characters in string 
function saurav(str)
{
  var newstr = str.replace(/-/g ,"_");
   return newstr;
}
