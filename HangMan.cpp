#include <iostream>
#include <string>
#include <algorithm>
using namespace std;
bool Hang(string str,char ch){
    // string word=st.tolowercase;
    string strWithoutDuplicates;
    sort(str.begin(), str.end());
    strWithoutDuplicates = string(str.begin(), unique(str.begin(), str.end()));
    int n= strWithoutDuplicates.size();
     
    for(int i=0;i<n;i++){
        if( strWithoutDuplicates[i]==tolower(ch)){
            return true;
        }
    }
    return false;
}

int main(){
    string word="characteristics";
    string strWithoutDuplicates;
    sort(word.begin(), word.end());
    strWithoutDuplicates = string(word.begin(), unique(word.begin(), word.end()));
    int n=strWithoutDuplicates.size();
    cout<<"Word has "<<n<<" letters into it,Start your guess....."<<endl;
    cout<<"You have 6 lives,start entering the characters in lower case"<<endl;
    int c=0;
    int r=0;
    for(int i=0;i<6+n;i++){
        char ch;
        cin>>ch;
        if(!Hang(word,ch)){
            c++;
        }
        else{
            r++;
        }
        if(c==6){
            cout<<"You Lost";
            break;
        }
        if(r==n){
            cout<<"you won";
            break;
        }

    }

return 0;
}