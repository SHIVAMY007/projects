#include <iostream>
using namespace std;
void bl(int x0,int x1,int y0,int y1){
       int dx = abs(x1 - x0);
       int dy = abs(y1 - y0);
       int dp=2*dy-dx;
       int x=x0;int y=y0;
       while(x0!=x1 || y0!=y1){
        cout << "(" << x1 << "," << y1 << ")" << endl;
        if (x0 == x1 && y0 == y1) break;
        if(dp<0){
            dp+=2*dy;
            x+=1;
            

        }
        else{
            dp+=2*dy-dx;
            dx+=1;
            dy+=1;
        }

       }
}



int main() {
    int x0,x1;
    cin >> x0 >> x1;
    int y0,y1;
    cin>>y0>>y1;
    bl(x0,x1,y0,y1);



    return 0;
}