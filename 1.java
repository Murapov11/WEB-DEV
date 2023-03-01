String s = "";
while(num){
    s = Integer.toString(num % 2) + s;
    num /= 2;
}
