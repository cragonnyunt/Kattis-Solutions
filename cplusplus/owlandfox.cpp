#include <iostream>
#include <string.h>
using namespace std;
int main()
{
	int n;
	cin >> n;
	while(n--)
	{
		char buffer[7];
		cin >> buffer;
		int index = strlen(buffer) - 1;
		while (index > 0 && buffer[index] == '0')
			index--;
		if (index == 0 && buffer[index] == '1')
			cout << "0" << endl;
		else
		{
			buffer[index] = (char)(buffer[index] - 1);
			cout << buffer << endl;
		}
	}
	return 0;
}
