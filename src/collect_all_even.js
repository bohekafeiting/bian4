// JavaScript Document
function collect_same_elements(x,y)
{
  end=new Array();
  var m;
  for(var i in x)
  {
     m=x[i].key;
     for(j=0;j<y.value.length;j++)	
       {
		  if(m==y.value[j])
           {	end.push(y.value[j]);
		       break;
			}
       }
  }
  return end;
}
module.exports = collect_same_elements;
