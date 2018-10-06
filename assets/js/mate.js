function sidebar_toggle(){
  ele=document.getElementById('sidebar');
  ele2=document.getElementById('db');
  ele3=document.getElementById('nav');
  c_status=ele.className;
  if (c_status==='active') {
    ele.className='';
    ele2.className='';
    ele3.className='';
  }
  else {
    ele.className='active';
    ele2.className='active';
    ele3.className='active';
  }
}
