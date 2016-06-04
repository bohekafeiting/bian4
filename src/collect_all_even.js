// JavaScript Document
function collect_same_elements(x,y)
{
  end=new Array();
  var flag=0,m;
  for(var i in x)
  {
     m=x[i].key;
     for(j=flag;j<y.value.length;j++)	
       {
		  if(m==y.value[j])
           {	end.push(y.value[j]);
		         flag=j;
				 break;
			}
       }
  }
  return end;
}
module.exports = collect_same_elements;
