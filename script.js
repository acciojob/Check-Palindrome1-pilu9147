// complete the given function

function palindrome(str){
	 const len =s.length;

    
    for (let i = 0; i < len / 2; i++) {


        if (s[i] !== s[len - 1 - i]) {
            return false;
        }
    }
    return true;
// var i = 0
// 	var j = str.length - 1;
// 	while (i<j) {
// 		if(str.charAt(i)===str.charAt(j)) {
// 			i++;
// 			j--;
// 		}
// 		else {
// 			return false
// 		}
		
// 	}
// 	return true
}
module.exports = palindrome
