#include <iostream>
#include <string.h>
using namespace std;
int main()
{
	int n;
	cin >> n;
	while(n--)
	{
		char X[10];
		cin >> X;
		int index = strlen(X) - 1;
		while (index > 0 && X[index] == '0')
			index--;
		if (index == 0 && X[index] == '1')
			cout << "0" << endl;
		else
		{
			X[index] = (char)(X[index] - 1);
			cout << X << endl;
		}
	}
	return 0;
}
