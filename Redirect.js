var d=window.location.href;
var e=d.indexOf("go/");
if(e!=-1) {
    var key = window.location.href.split("go/")[1].replace("/", "") 
	var urls= {
// Mobile
  'facebook?m=1':'https://www.facebook.com/100004142193569',
  'group?m=1':'https://www.facebook.com/1147020215406515',
  'lien-he?m=1':'https://www.facebook.com/1147020215406515',
  'gioi-thieu?m=1':'https://www.phuong-my.com/p/gioi-thieu',
// Desktop
  'facebook':'https://www.facebook.com/100004142193569',
  'group':'https://www.facebook.com/1147020215406515',
  'lien-he':'https://www.facebook.com/1147020215406515',
  'gioi-thieu':'https://www.phuong-my.com/p/gioi-thieu',
    }
    if(key) {
        if(urls[key]) {
            window.location.href=urls[key]
        }
        else {
            window.location.assign("/404");
        }
    }
}

